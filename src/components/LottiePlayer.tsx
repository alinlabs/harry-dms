import React, { useRef, useState, useEffect } from 'react';
import { Lottie, type LottieHandle } from 'lottie-react';
import homeLottieData from '../assets/home-lottie.json';
import { Play, Pause } from 'lucide-react';

interface LottiePlayerProps {
  src?: string | object;
  className?: string;
  loop?: boolean;
  title?: string;
}

export const LottiePlayer: React.FC<LottiePlayerProps> = ({
  src = homeLottieData,
  className = 'w-full h-full',
  loop = true,
  title = 'Animasi FTTH Home & Wi-Fi'
}) => {
  const lottieRef = useRef<LottieHandle>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Play immediately upon component mount without passing autoplay=true to Lottie props,
  // which satisfies WCAG 2.2.2 (Level A) and prevents the [lottie-react] autoplay console warning.
  useEffect(() => {
    if (lottieRef.current && isReady) {
      if (isPlaying) {
        lottieRef.current.play();
      } else {
        lottieRef.current.pause();
      }
    }
  }, [isPlaying, isReady]);

  const togglePlayback = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lottieRef.current) {
      if (isPlaying) {
        lottieRef.current.pause();
        setIsPlaying(false);
      } else {
        lottieRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  if (hasError) {
    // High fidelity outline SVG fallback jika browser atau perangkat mengalami kendala WebGL/SVG
    return (
      <div 
        className={`relative flex items-center justify-center ${className}`}
        role="img"
        aria-label={title}
      >
        <svg viewBox="0 0 480 480" className="w-full h-full text-blue-600 dark:text-cyan-400 stroke-current fill-none">
          {/* Ground */}
          <line x1="60" y1="410" x2="420" y2="410" strokeWidth="12" strokeLinecap="round" opacity="0.4" />
          {/* Fiber */}
          <path d="M 70 410 L 130 410 L 150 410 L 150 370" strokeWidth="10" strokeLinecap="round" stroke="#06b6d4" />
          {/* House */}
          <polyline points="140,260 240,170 340,260" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" stroke="#1e293b" />
          <polyline points="170,250 170,410 310,410 310,250" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" stroke="#1e293b" />
          <polyline points="220,410 220,340 260,340 260,410" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" stroke="#1e293b" />
          <rect x="185" y="290" width="23" height="25" strokeWidth="14" stroke="#1e293b" />
          <line x1="240" y1="170" x2="240" y2="138" strokeWidth="16" strokeLinecap="round" stroke="#1e293b" />
          {/* Waves */}
          <circle cx="240" cy="134" r="6" fill="#2563eb" stroke="none" />
          <path d="M 212 114 Q 240 96 268 114" strokeWidth="14" strokeLinecap="round" stroke="#2563eb" />
          <path d="M 184 86 Q 240 58 296 86" strokeWidth="14" strokeLinecap="round" stroke="#2563eb" opacity="0.8" />
          <path d="M 154 56 Q 240 20 326 56" strokeWidth="15" strokeLinecap="round" stroke="#06b6d4" opacity="0.6" />
        </svg>
      </div>
    );
  }

  return (
    <div 
      className={`relative group cursor-pointer select-none ${className}`}
      onClick={togglePlayback}
      title={isPlaying ? 'Klik untuk jeda animasi (WCAG 2.2.2)' : 'Klik untuk putar animasi'}
      role="region"
      aria-label={title}
    >
      <Lottie
        lottieRef={lottieRef}
        src={src}
        loop={loop}
        autoplay={false}
        className="w-full h-full drop-shadow-sm pointer-events-none"
        subscriptions={{
          ready: () => {
            setIsReady(true);
            lottieRef.current?.play();
            setIsPlaying(true);
          },
          error: (event) => {
            console.error('Lottie animation render notice:', event.error);
            setHasError(true);
          }
        }}
      />

      {/* WCAG 2.2.2 Level A Pause Affordance:
          Mikro-kontrol aksesibel yang muncul saat hover atau saat di-pause */}
      <button
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? 'Jeda animasi' : 'Putar animasi'}
        className={`absolute -bottom-1 -right-1 p-1 rounded-full bg-white/90 dark:bg-slate-800/90 shadow-md border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 transition-all duration-200 ${
          isPlaying 
            ? 'opacity-0 group-hover:opacity-100 hover:scale-110 hover:text-blue-600 dark:hover:text-cyan-400' 
            : 'opacity-100 scale-100 text-blue-600 dark:text-cyan-400 ring-2 ring-blue-500/30'
        }`}
      >
        {isPlaying ? (
          <Pause className="w-3 h-3" />
        ) : (
          <Play className="w-3 h-3 fill-current" />
        )}
      </button>
    </div>
  );
};

export default LottiePlayer;
