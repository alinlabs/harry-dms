import { useLanguage } from '../../contexts/LanguageContext';
import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { 
  TargetEnterpriseHotspot, 
  PRODUCT_FILTERS, 
  ProductKey, 
  STATUS_FILTERS, 
  getStatusCategory 
} from './point-maps';
import { useTheme } from '../../contexts/ThemeContext';
import { RotateCcw, ZoomIn, ZoomOut, Layers, Filter, Check } from 'lucide-react';

interface LeafletIndonesiaMapProps {
  hotspots: TargetEnterpriseHotspot[];
  selectedHotspotId: string | null;
  hoveredHotspotId?: string | null;
  onSelectHotspot: (id: string) => void;
  onHoverHotspot: (id: string | null) => void;
  selectedIndustry: string;
  selectedProduct: string;
  selectedStatus: string;
  filterCategory: 'industry' | 'product' | 'status';
  onSelectFilterCategory: (category: 'industry' | 'product' | 'status') => void;
}

// Indonesia geographical limits with smooth dragging margin (Sabang to Merauke)
const INDONESIA_BOUNDS: L.LatLngBoundsLiteral = [
  [-15.0, 92.0], // South-West
  [9.0, 144.0]   // North-East
];

export type MapStyleKey = 'satelit' | 'minimalis' | 'typografi';

interface StyleConfig {
  key: MapStyleKey;
  label: string;
  getUrl: (isDark: boolean) => string;
  maxZoom: number;
}

const MAP_STYLES: StyleConfig[] = [
  {
    key: 'satelit',
    label: 'Satelit',
    getUrl: () => 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    maxZoom: 18
  },
  {
    key: 'minimalis',
    label: 'Minimalis',
    getUrl: (isDark) => isDark
      ? 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
      : 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
    maxZoom: 16
  },
  {
    key: 'typografi',
    label: 'Typografi',
    getUrl: () => 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}',
    maxZoom: 13
  }
];

// High-performance tile configuration: HiDPI/Retina crispness, zero flicker cache buffer
const TILE_OPTIONS: L.TileLayerOptions = {
  keepBuffer: 8,              // Retain 8 tiles outside viewport for instant pan without white/gray gaps
  updateWhenZooming: false,   // Do not flash tile requests while zoom animation is interpolating
  updateWhenIdle: false,      // Fetch tiles as soon as panning starts
  detectRetina: true,         // HiDPI crisp imagery on 2K/4K/Retina displays
  crossOrigin: 'anonymous'
};

export const LeafletIndonesiaMap: React.FC<LeafletIndonesiaMapProps> = ({
  hotspots,
  selectedHotspotId,
  hoveredHotspotId,
  onSelectHotspot,
  onHoverHotspot,
  selectedIndustry,
  selectedProduct,
  selectedStatus,
  filterCategory,
  onSelectFilterCategory
}) => {
  const { language } = useLanguage();
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);
  const menuContainerRef = useRef<HTMLDivElement | null>(null);
  const filterMenuContainerRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();

  // Reactive state tracking dark mode from context + DOM class observer
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => 
    theme === 'dark' || (typeof document !== 'undefined' && document.documentElement.classList.contains('dark'))
  );

  // Default mode is Real Satellite as requested
  const [currentStyle, setCurrentStyle] = useState<MapStyleKey>('satelit');
  const [showStyleMenu, setShowStyleMenu] = useState<boolean>(false);
  const [showFilterMenu, setShowFilterMenu] = useState<boolean>(false);

  // Monitor theme changes from both ThemeContext and DOM mutations on html tag
  useEffect(() => {
    const updateThemeState = () => {
      const isDark = theme === 'dark' || document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    updateThemeState();

    const observer = new MutationObserver(() => {
      updateThemeState();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, [theme]);

  // Close popup menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuContainerRef.current && !menuContainerRef.current.contains(e.target as Node)) {
        setShowStyleMenu(false);
      }
      if (filterMenuContainerRef.current && !filterMenuContainerRef.current.contains(e.target as Node)) {
        setShowFilterMenu(false);
      }
    };
    if (showStyleMenu || showFilterMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showStyleMenu, showFilterMenu]);

  // 1. Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: [-2.2, 118.0],
      zoom: 5,
      minZoom: 4,              // Strict minimum zoom: stays focused on Indonesia
      maxZoom: 9.5,            // Maximum zoom: clean executive overview without street clutter
      maxBounds: INDONESIA_BOUNDS,
      maxBoundsViscosity: 0.65,// Smooth boundary retention with flexible panning
      zoomSnap: 0.25,          // Fractional zoom snaps for silky smooth stepping
      zoomDelta: 0.5,          // Button clicks step by 0.5 zoom scale
      wheelPxPerZoomLevel: 120,
      fadeAnimation: true,
      markerZoomAnimation: true,
      transform3DLimit: 2 ** 24,
      dragging: true,          // Bisa digeser kanan kiri atas bawah dengan kursor / touch drag
      scrollWheelZoom: false,  // Tidak bisa diperbesar/diperkecil dengan scroll mouse
      touchZoom: false,        // Tidak bisa diciutkan/diperbesar dengan gesture pinch sentuhan
      doubleClickZoom: false,  // Tidak bisa diperbesar dengan klik ganda
      boxZoom: false,          // Box zoom dinonaktifkan
      keyboard: false,         // Keyboard zoom dinonaktifkan
      zoomControl: false,      // Zoom strictly controlled via explicit UI buttons (+ / -)
      attributionControl: false,
      bounceAtZoomLimits: true
    });

    // Default tile layer: Real Satellite with HiDPI + keepBuffer optimization
    const initialConfig = MAP_STYLES.find(s => s.key === currentStyle) || MAP_STYLES[0];
    const initialTiles = L.tileLayer(initialConfig.getUrl(isDarkMode), {
      maxZoom: initialConfig.maxZoom,
      ...TILE_OPTIONS
    }).addTo(map);

    tileLayerRef.current = initialTiles;

    const markersGroup = L.layerGroup().addTo(map);
    markersLayerRef.current = markersGroup;

    mapInstanceRef.current = map;

    // Observe size changes for strict 4:3 rendering
    const resizeObserver = new ResizeObserver(() => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
      }
    });
    if (mapContainerRef.current) {
      resizeObserver.observe(mapContainerRef.current);
    }

    const timer = setTimeout(() => {
      map.invalidateSize();
      map.fitBounds([[-11.5, 95.0], [6.0, 141.0]], { padding: [15, 15] });
    }, 200);

    return () => {
      clearTimeout(timer);
      resizeObserver.disconnect();
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // 2. Handle Style & Theme Change: Crossfade swap without blank tile flicker
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    const map = mapInstanceRef.current;
    const activeConfig = MAP_STYLES.find(s => s.key === currentStyle) || MAP_STYLES[0];
    const targetUrl = activeConfig.getUrl(isDarkMode);

    const oldTileLayer = tileLayerRef.current;
    const newTileLayer = L.tileLayer(targetUrl, {
      maxZoom: activeConfig.maxZoom,
      ...TILE_OPTIONS
    });

    newTileLayer.addTo(map);
    newTileLayer.bringToBack();
    tileLayerRef.current = newTileLayer;

    // Gracefully remove old layer after new layer starts rendering to prevent blank flashes
    if (oldTileLayer) {
      const cleanupTimer = window.setTimeout(() => {
        if (mapInstanceRef.current && mapInstanceRef.current.hasLayer(oldTileLayer)) {
          mapInstanceRef.current.removeLayer(oldTileLayer);
        }
      }, 350);
      return () => window.clearTimeout(cleanupTimer);
    }
  }, [currentStyle, isDarkMode]);

  // 3. Render Classic Teardrop Map Pin Markers with Colors per Industry, Product, or Status
  useEffect(() => {
    if (!mapInstanceRef.current || !markersLayerRef.current) return;
    const group = markersLayerRef.current;
    group.clearLayers();

    // Filter spots depending on active category: industry, product, or status
    const filteredSpots = filterCategory === 'industry'
      ? (selectedIndustry === 'ALL' ? hotspots : hotspots.filter(h => h.industry === selectedIndustry))
      : filterCategory === 'product'
      ? (selectedProduct === 'ALL' ? hotspots : hotspots.filter(h => h.targetProducts.includes(selectedProduct as ProductKey)))
      : (selectedStatus === 'ALL' ? hotspots : hotspots.filter(h => getStatusCategory(h.pipelineStage) === selectedStatus));

    // Active product configuration for coloring
    const activeProductConfig = PRODUCT_FILTERS.find(p => p.id === selectedProduct);

    filteredSpots.forEach((spot) => {
      const isSelected = spot.id === selectedHotspotId;
      const isHovered = spot.id === hoveredHotspotId;

      // Color selection per category
      let pinColor = spot.color;
      if (filterCategory === 'product' && activeProductConfig && selectedProduct !== 'ALL') {
        pinColor = activeProductConfig.color;
      } else if (filterCategory === 'status') {
        const spotStatusCat = getStatusCategory(spot.pipelineStage);
        const statusConfig = STATUS_FILTERS.find(s => s.id === spotStatusCat);
        pinColor = statusConfig?.color || '#0ea5e9';
      }

      // Classic Standard Map Pin (Zero jitter, clean visual styling)
      const markerHtml = `
        <div class="relative flex flex-col items-center group cursor-pointer" style="width: 28px; height: 36px;">
          <!-- Static shadow -->
          <div class="absolute bottom-0 w-4 h-2 -mb-0.5 rounded-full ${
            isSelected ? 'bg-black/60 blur-[1px] scale-110' : 'bg-black/35 blur-[1px]'
          }"></div>
          
          <!-- Classic Teardrop Pin SVG -->
          <div class="relative marker-pin-inner origin-bottom ${
            isSelected
              ? 'scale-125 z-30 drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]'
              : isHovered
              ? 'scale-115 -translate-y-0.5 z-20 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]'
              : 'z-10 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]'
          }">
            <svg viewBox="0 0 24 32" class="w-7 h-9">
              <!-- Pin Outer Teardrop Body -->
              <path
                d="M12 0.5 C5.649 0.5 0.5 5.649 0.5 12 C0.5 20.25 12 31.5 12 31.5 C12 31.5 23.5 20.25 23.5 12 C23.5 5.649 18.351 0.5 12 0.5 Z"
                fill="${pinColor}"
                stroke="#ffffff"
                stroke-width="${isSelected ? '2.4' : '1.6'}"
                stroke-linejoin="round"
              />
              <!-- Inner White Circle -->
              <circle cx="12" cy="11.5" r="4.6" fill="#ffffff" />
              <!-- Inner Colored Core -->
              <circle cx="12" cy="11.5" r="2.4" fill="${pinColor}" />
            </svg>
          </div>
        </div>
      `;

      // Anchor at bottom center [14, 34] so the needle tip points precisely at GPS coordinate
      const customIcon = L.divIcon({
        className: 'leaflet-custom-marker',
        html: markerHtml,
        iconSize: [28, 36],
        iconAnchor: [14, 34]
      });

      const marker = L.marker([spot.lat, spot.lng], { icon: customIcon });

      // Click: Only on click does the map move to center the point and zoom in automatically
      marker.on('click', () => {
        onSelectHotspot(spot.id);
        if (mapInstanceRef.current) {
          const map = mapInstanceRef.current;
          const currentCenter = map.getCenter();
          const targetLatLng: L.LatLngExpression = [spot.lat, spot.lng];
          const distMeters = currentCenter.distanceTo(targetLatLng);
          const currentZoom = map.getZoom();
          // Zoom in otomatis saat titik diklik
          const targetZoom = Math.min(Math.max(currentZoom + 1.25, 7.5), 8.5);

          const dynamicDuration = distMeters > 500000 
            ? Math.min(1.15, 0.65 + (distMeters / 3000000)) 
            : 0.6;

          map.flyTo(targetLatLng, targetZoom, {
            animate: true,
            duration: dynamicDuration,
            easeLinearity: 0.22
          });
        }
      });

      // Hover: Map does NOT move, NO floating tooltip card on map. Only updates parent preview state
      marker.on('mouseover', () => {
        onHoverHotspot(spot.id);
      });

      marker.on('mouseout', () => {
        onHoverHotspot(null);
      });

      group.addLayer(marker);
    });
  }, [hotspots, selectedHotspotId, hoveredHotspotId, selectedIndustry, selectedProduct, selectedStatus, filterCategory, onSelectHotspot, onHoverHotspot]);

  // 4. Dynamic Camera Framing when Filter Category/Tab Changes
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    const map = mapInstanceRef.current;

    const filteredSpots = filterCategory === 'industry'
      ? (selectedIndustry === 'ALL' ? hotspots : hotspots.filter(h => h.industry === selectedIndustry))
      : filterCategory === 'product'
      ? (selectedProduct === 'ALL' ? hotspots : hotspots.filter(h => h.targetProducts.includes(selectedProduct as ProductKey)))
      : (selectedStatus === 'ALL' ? hotspots : hotspots.filter(h => getStatusCategory(h.pipelineStage) === selectedStatus));

    if (filteredSpots.length === 0) return;

    const isAll = (filterCategory === 'industry' && selectedIndustry === 'ALL') ||
                  (filterCategory === 'product' && selectedProduct === 'ALL') ||
                  (filterCategory === 'status' && selectedStatus === 'ALL');

    if (isAll) {
      map.flyToBounds([[-11.5, 95.0], [6.0, 141.0]], {
        padding: [15, 15],
        duration: 1.15,
        easeLinearity: 0.22
      });
    } else {
      const latitudes = filteredSpots.map(s => s.lat);
      const longitudes = filteredSpots.map(s => s.lng);
      const minLat = Math.min(...latitudes) - 0.8;
      const maxLat = Math.max(...latitudes) + 0.8;
      const minLng = Math.min(...longitudes) - 1.2;
      const maxLng = Math.max(...longitudes) + 1.2;

      map.flyToBounds([[minLat, minLng], [maxLat, maxLng]], {
        padding: [30, 30],
        maxZoom: 7.5,
        duration: 0.95,
        easeLinearity: 0.22
      });
    }
  }, [filterCategory, selectedIndustry, selectedProduct, selectedStatus, hotspots]);

  // Controls Handlers with smooth 0.5-step fractional zoom and easing
  const handleZoomIn = () => {
    if (mapInstanceRef.current) {
      const map = mapInstanceRef.current;
      const current = map.getZoom();
      const nextZoom = Math.min(map.getMaxZoom(), current + 0.5);
      map.setZoom(nextZoom, { animate: true });
    }
  };

  const handleZoomOut = () => {
    if (mapInstanceRef.current) {
      const map = mapInstanceRef.current;
      const current = map.getZoom();
      const nextZoom = Math.max(map.getMinZoom(), current - 0.5);
      map.setZoom(nextZoom, { animate: true });
    }
  };

  const handleReset = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyToBounds([[-11.5, 95.0], [6.0, 141.0]], {
        padding: [15, 15],
        duration: 1.1,
        easeLinearity: 0.22
      });
    }
  };

  const activeStyleConfig = MAP_STYLES.find(s => s.key === currentStyle) || MAP_STYLES[0];

  return (
    <div className={`relative w-full h-full min-h-[450px] rounded-2xl overflow-hidden border shadow-sm transition-colors duration-300 ${
      isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-100 border-slate-200'
    }`}>
      {/* Leaflet Map DOM Element - Draggable in all 4 directions */}
      <div ref={mapContainerRef} className="w-full h-full z-0 outline-none cursor-grab active:cursor-grabbing" />

      {/* Floating Modern Map Controls Top-Right (White Cards) */}
      <div className="absolute top-2.5 right-2.5 z-[400] flex flex-col gap-1 shadow-md">
        {/* Filter Category Switcher (Filter Icon) */}
        <div ref={filterMenuContainerRef} className="relative">
          <button
            onClick={() => {
              setShowFilterMenu(prev => !prev);
              setShowStyleMenu(false);
            }}
            title={language === "en" ? "Map Category Filter" : "Filter Kategori Pemetaan"}
            aria-label={language === "en" ? "Map Category Filter" : "Filter kategori pemetaan"}
            className={`w-7 h-7 rounded-lg bg-white hover:bg-slate-50 ${
              showFilterMenu ? 'text-blue-600 border-blue-400' : 'text-slate-700 hover:text-blue-600'
            } border border-slate-200 flex items-center justify-center transition-all cursor-pointer shadow-xs`}
          >
            <Filter size={14} />
          </button>

          {/* 3 Card List Menu: Industri, Produk, Status */}
          {showFilterMenu && (
            <div className="absolute top-8 right-0 w-36 p-1.5 rounded-2xl bg-white border border-slate-200 text-slate-800 shadow-xl z-50 flex flex-col gap-1">
              {[
                { id: 'industry', label: language === 'en' ? 'Industry' : 'Industri' },
                { id: 'product', label: language === 'en' ? 'Product' : 'Produk' },
                { id: 'status', label: language === 'en' ? 'Stage' : 'Status' }
              ].map((opt) => {
                const isSelected = filterCategory === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => {
                      onSelectFilterCategory(opt.id as 'industry' | 'product' | 'status');
                      setShowFilterMenu(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <span>{opt.label}</span>
                    {isSelected && <Check size={13} className="text-white shrink-0" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Layer / Map Style Switcher (Icon-only on white card, directly above zoom in) */}
        <div ref={menuContainerRef} className="relative">
          <button
            onClick={() => {
              setShowStyleMenu(prev => !prev);
              setShowFilterMenu(false);
            }}
            title={language === 'en' ? `Map Style: ${activeStyleConfig.label}` : `Jenis Peta: ${activeStyleConfig.label}`}
            aria-label={language === 'en' ? 'Select map style' : 'Pilih jenis peta'}
            className={`w-7 h-7 rounded-lg bg-white hover:bg-slate-50 ${
              showStyleMenu ? 'text-blue-600 border-blue-400' : 'text-slate-700 hover:text-blue-600'
            } border border-slate-200 flex items-center justify-center transition-all cursor-pointer shadow-xs`}
          >
            <Layers size={14} />
          </button>

          {/* White Custom Menu Popup */}
          {showStyleMenu && (
            <div className="absolute top-8 right-0 w-32 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-2xl z-50">
              <div className="px-3 py-1 text-[10px] font-black text-slate-900 border-b border-slate-100 uppercase tracking-wider">
                {language === "en" ? "Map Style" : "Jenis Peta"}
              </div>
              {MAP_STYLES.map((style) => {
                const isCurrent = currentStyle === style.key;
                return (
                  <button
                    key={style.key}
                    onClick={() => {
                      setCurrentStyle(style.key);
                      setShowStyleMenu(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                      isCurrent
                        ? 'bg-blue-50 text-blue-700 font-bold'
                        : 'hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span>{language === "en" ? (style.key === "satelit" ? "Satellite" : style.key === "minimalis" ? "Minimalist" : "Typography") : style.label}</span>
                    {isCurrent && <span className="text-blue-600 font-black text-xs">✓</span>}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Zoom In */}
        <button
          onClick={handleZoomIn}
          title="Zoom In"
          aria-label="Zoom in map"
          className="w-7 h-7 rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 flex items-center justify-center transition-all cursor-pointer shadow-xs"
        >
          <ZoomIn size={14} />
        </button>

        {/* Zoom Out */}
        <button
          onClick={handleZoomOut}
          title="Zoom Out"
          aria-label="Zoom out map"
          className="w-7 h-7 rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 flex items-center justify-center transition-all cursor-pointer shadow-xs"
        >
          <ZoomOut size={14} />
        </button>

        {/* Reset View */}
        <button
          onClick={handleReset}
          title={language === 'en' ? 'Reset National View' : 'Reset View Se-Indonesia'}
          aria-label="Reset Indonesia view"
          className="w-7 h-7 rounded-lg bg-white hover:bg-slate-50 text-slate-700 hover:text-blue-600 border border-slate-200 flex items-center justify-center transition-all cursor-pointer shadow-xs"
        >
          <RotateCcw size={13} />
        </button>
      </div>
    </div>
  );
};

export default LeafletIndonesiaMap;
