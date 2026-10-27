import { useLanguage } from '@/contexts/LanguageContext';
import {
  TARGET_ENTERPRISE_POINTS,
  TargetEnterpriseHotspot,
  INDUSTRY_FILTERS,
  IndustryFilter,
  PRODUCT_FILTERS,
  ProductFilter,
  ProductKey,
  STATUS_FILTERS,
  StatusFilter,
  getStatusCategory,
  getIndustryFilters,
  getProductFilters,
  getStatusFilters
} from './point-maps';

export type { TargetEnterpriseHotspot, IndustryFilter, ProductFilter, ProductKey, StatusFilter };
export { 
  INDUSTRY_FILTERS, 
  PRODUCT_FILTERS, 
  STATUS_FILTERS, 
  TARGET_ENTERPRISE_POINTS, 
  getStatusCategory, 
  getIndustryFilters, 
  getProductFilters, 
  getStatusFilters 
};

export const slideDataId = {
  sectionBadge: "Bagian 3 • Penetrasi Pasar & Pemetaan Industri",
  title: "Peta Sebaran Titik Penetrasi Target Market & Industri",
  subtitle: "Pemetaan geospasial titik koordinat riil perusahaan prospek enterprise, kluster industri, dan kawasan komersial bernilai kontrak tertinggi se-Indonesia.",
  nationalSummary: [
    { label: "Cakupan Wilayah", value: "38 Provinsi", desc: "Sabang hingga Merauke" },
    { label: "Target Akun Terpetakan", value: "480+ Korporasi", desc: "Perusahaan prospek di 6 vertikal" },
    { label: "Est. Total Kontrak / Thn", value: "Rp 34.6 Miliar", desc: "Pipeline berbobot 2026-2027" },
    { label: "Kesiapan Layanan DMS", value: "Direct On-Net", desc: "Terkoneksi fiber optik & hybrid" }
  ],
  hotspots: TARGET_ENTERPRISE_POINTS
};

export const slideDataEn = {
  sectionBadge: "Part 3 • Market Penetration & Industry Mapping",
  title: "National Market Footprint & Penetration Map",
  subtitle: "Geospatial mapping of high-value enterprise prospect targets, industrial estates, and commercial corridors across Indonesia.",
  nationalSummary: [
    { label: "Geographic Reach", value: "38 Provinces", desc: "From Sabang to Merauke" },
    { label: "Mapped Target Accounts", value: "480+ Corporations", desc: "Enterprise accounts across 6 verticals" },
    { label: "Est. Total Annual Pipeline", value: "IDR 34.6 Billion", desc: "Weighted pipeline 2026-2027" },
    { label: "DMS Service Readiness", value: "Direct On-Net", desc: "Connected via fiber optics & hybrid backhaul" }
  ],
  hotspots: TARGET_ENTERPRISE_POINTS
};

export const getSlideData = (lang: 'id' | 'en' = 'id') => (lang === 'en' ? slideDataEn : slideDataId);

export function useSlideData() {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 23,
  folder: "23",
  sectionId: 2,
  navTitle: {
    in: "Peta Sebaran Nasional",
    en: "National Footprint Map"
  },
  headerTitle: {
    in: "Peta Sebaran Titik Penetrasi Target Market & Industri",
    en: "National Market Footprint & Penetration Map"
  },
  category: {
    in: "Product",
    en: "Product"
  },
  section: {
    in: "Product",
    en: "Product"
  }
};
