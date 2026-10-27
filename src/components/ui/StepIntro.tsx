import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StepIntroProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  onComplete: () => void;
  // Standardized duration: 1500ms animation + 1000ms pause = 2500ms total
  duration?: number;
}

const StepIntro: React.FC<StepIntroProps> = ({ 
  title, 
  subtitle, 
  icon: Icon, 
  onComplete,
  duration = 2500 
}) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, duration);
    return () => clearTimeout(timer);
  }, [onComplete, duration]);

  return (
    <motion.div
      key="step-intro"
      initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="absolute inset-0 z-50 flex flex-col items-center justify-center pointer-events-none"
    >
        {Icon && (
            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="p-6 bg-brand-50/80 dark:bg-brand-900/50 rounded-full mb-6 backdrop-blur-sm shadow-xl"
            >
                <Icon size={64} className="text-brand-600 dark:text-brand-400" />
            </motion.div>
        )}
        
        <motion.h1 
            layoutId="step-title"
            className="text-4xl md:text-7xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-brand-700 to-brand-500 dark:from-white dark:to-brand-200 drop-shadow-sm px-4 leading-tight"
        >
            {title}
        </motion.h1>
        
        {subtitle && (
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-300 font-bold uppercase tracking-widest bg-white/50 dark:bg-slate-900/50 px-4 py-1 rounded-lg backdrop-blur-sm"
            >
                {subtitle}
            </motion.p>
        )}
    </motion.div>
  );
};

export default StepIntro;
