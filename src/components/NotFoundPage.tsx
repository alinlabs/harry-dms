import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ArrowRight, Compass, ShieldAlert, Home } from 'lucide-react';
import DmsLogo from './DmsLogo';
import { Theme, Language, DEFAULT_THEME, DEFAULT_LANG, getCachedTheme, getCachedLang, buildCanonicalQuery } from '../utils/urlManager';

interface NotFoundPageProps {
  invalidParams?: string[];
  onReset: (theme: Theme, lang: Language) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ invalidParams = [], onReset }) => {
  const cachedTheme = getCachedTheme() || DEFAULT_THEME;
  const cachedLang = getCachedLang() || DEFAULT_LANG;
  const isEnglish = cachedLang === 'en';

  const handleReturnHome = () => {
    const targetTheme = cachedTheme;
    const targetLang = cachedLang;
    const query = buildCanonicalQuery(targetTheme, targetLang);
    window.history.replaceState(null, '', window.location.pathname + query);
    onReset(targetTheme, targetLang);
  };

  return (
    <div className={`min-h-screen w-full flex items-center justify-center p-4 sm:p-6 transition-colors duration-300 ${
      cachedTheme === 'dark' ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`relative z-10 w-full max-w-xl rounded-3xl p-6 sm:p-8 border shadow-2xl backdrop-blur-xl ${
          cachedTheme === 'dark'
            ? 'bg-slate-900/90 border-slate-800 shadow-black/40'
            : 'bg-white/95 border-slate-200 shadow-slate-200/60'
        }`}
      >
        {/* Brand Header */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-200/60 dark:border-slate-800/80 mb-6">
          <DmsLogo size="sm" showText={true} subtitle="URL VALIDATION ERROR" />
          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-red-500/10 text-red-500 border border-red-500/20">
            HTTP 404
          </span>
        </div>

        {/* Hero Alert */}
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3.5 rounded-2xl bg-red-500/10 text-red-500 border border-red-500/20 shrink-0">
            <ShieldAlert size={28} />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black tracking-tight mb-1">
              {isEnglish ? '404 - Invalid URL Parameters' : '404 - Parameter URL Tidak Valid'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              {isEnglish
                ? 'All parameters supplied in the request are invalid or unrecognized by the DMS Presentation Engine.'
                : 'Seluruh parameter yang diberikan pada URL tidak valid atau tidak dikenali oleh sistem presentasi DMS.'}
            </p>
          </div>
        </div>

        {/* Invalid Parameters Detected (if any) */}
        {invalidParams.length > 0 && (
          <div className="mb-6 p-3.5 rounded-2xl bg-red-50 dark:bg-red-950/30 border border-red-200/80 dark:border-red-900/50">
            <div className="flex items-center gap-2 text-xs font-bold text-red-600 dark:text-red-400 mb-2">
              <AlertTriangle size={14} />
              <span>{isEnglish ? 'Detected Invalid Parameter(s):' : 'Parameter Tidak Valid Terdeteksi:'}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {invalidParams.map((param, idx) => (
                <code
                  key={idx}
                  className="text-xs font-mono px-2 py-0.5 rounded bg-red-100 dark:bg-red-900/60 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800"
                >
                  {param}
                </code>
              ))}
            </div>
          </div>
        )}

        {/* Valid URL Specifications Reference */}
        <div className="mb-6 p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800 text-xs space-y-2">
          <div className="flex items-center gap-1.5 font-bold text-slate-700 dark:text-slate-300">
            <Compass size={14} className="text-blue-500" />
            <span>{isEnglish ? 'Supported URL Parameter Rules:' : 'Ketentuan Parameter URL yang Didukung:'}</span>
          </div>
          <ul className="space-y-1.5 text-slate-600 dark:text-slate-400">
            <li className="flex items-center justify-between">
              <span className="font-mono text-blue-600 dark:text-cyan-400">theme</span>
              <span className="font-mono text-[11px] bg-slate-200/80 dark:bg-slate-700/60 px-2 py-0.5 rounded">light | dark</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-mono text-blue-600 dark:text-cyan-400">lang</span>
              <span className="font-mono text-[11px] bg-slate-200/80 dark:bg-slate-700/60 px-2 py-0.5 rounded">in | en</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-mono text-blue-600 dark:text-cyan-400">page</span>
              <span className="font-mono text-[11px] bg-slate-200/80 dark:bg-slate-700/60 px-2 py-0.5 rounded">1 s/d 31 (tanpa awalan 0)</span>
            </li>
          </ul>
        </div>

        {/* Action Button */}
        <button
          onClick={handleReturnHome}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-bold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 transition-all active:scale-[0.98] cursor-pointer"
        >
          <Home size={16} />
          <span>{isEnglish ? 'Return to Default Presentation' : 'Kembali ke Beranda Default'}</span>
          <ArrowRight size={16} />
        </button>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
