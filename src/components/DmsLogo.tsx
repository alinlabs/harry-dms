import React from 'react';

interface DmsLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showBadge?: boolean;
  subtitle?: string;
}

export const DmsLogo: React.FC<DmsLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  showBadge = false,
  subtitle,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7 sm:w-8 sm:h-8',
    md: 'w-9 h-9 sm:w-10 sm:h-10',
    lg: 'w-16 h-16 sm:w-20 sm:h-20',
    xl: 'w-24 h-24 sm:w-28 sm:h-28',
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-xl',
    xl: 'text-2xl',
  };

  const subTextSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs',
    xl: 'text-sm',
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Official PT Digital Multi Sinergy Logo */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <img 
          src="/logo.webp" 
          alt="PT Digital Multi Sinergy" 
          className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-200"
          loading="eager"
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className={`font-black tracking-tight text-slate-900 dark:text-white ${textSizes[size]}`}>
              PT. DIGITAL MULTI SINERGY
            </span>
            {showBadge && (
              <span className="px-1.5 py-0.2 bg-blue-500/10 dark:bg-blue-400/20 text-blue-600 dark:text-blue-400 text-[9px] font-extrabold rounded-md uppercase tracking-wider">
                DMS
              </span>
            )}
          </div>
          <span className={`text-slate-500 dark:text-slate-400 font-semibold tracking-wider uppercase ${subTextSizes[size]}`}>
            {subtitle ?? 'ICT & Digital Business Solutions'}
          </span>
        </div>
      )}
    </div>
  );
};

export default DmsLogo;
