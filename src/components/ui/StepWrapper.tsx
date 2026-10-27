
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StepWrapperProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  titleDelay?: number;
  rightElement?: React.ReactNode;
  className?: string;
}

const StepWrapper: React.FC<StepWrapperProps> = ({ 
  children, 
  title, 
  subtitle, 
  icon: Icon, 
  titleDelay = 0, 
  rightElement,
  className = ""
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full flex flex-col gap-4 relative z-20 ${className}`}
    >
      <div className="flex flex-col items-center justify-center mb-2 border-b border-slate-200 dark:border-slate-800 pb-4 gap-2 shrink-0 text-center relative">
        <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: titleDelay, duration: 0.8, ease: "easeOut" }} 
            className="flex flex-col items-center gap-2"
        >
          {Icon && (
            <div className="p-2 bg-brand-50 dark:bg-brand-900/50 rounded-lg text-brand-600 dark:text-brand-400 border border-brand-100 dark:border-brand-800 mb-1">
              <Icon size={24} />
            </div>
          )}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-brand-600 dark:text-brand-400 leading-tight">
               {title}
            </h3>
            {subtitle && <p className="text-sm text-slate-500 mt-1 font-medium">{subtitle}</p>}
          </div>
        </motion.div>
        
        {rightElement && (
            <div className="mt-2 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2">
                {rightElement}
            </div>
        )}
      </div>
      <div className="relative w-full">
          {children}
      </div>
    </motion.div>
  );
};

export default StepWrapper;
