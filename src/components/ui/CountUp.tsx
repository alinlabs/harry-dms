
import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface CountUpProps {
  value: string | number;
  className?: string;
  duration?: number;
  play?: boolean;
}

const CountUp: React.FC<CountUpProps> = ({ value, className, duration = 2.5, play = true }) => {
  // Helper to parse value from string (handling ID format: 1.000,00)
  const parseValue = (val: string | number) => {
    if (typeof val === 'number') return val;
    // Remove "Rp", whitespace. Remove dots (thousands). Replace comma with dot (decimal).
    const cleaned = val.toString().replace(/[^0-9,-]/g, '').replace(/\./g, '').replace(',', '.');
    return parseFloat(cleaned) || 0;
  };

  const targetValue = parseValue(value);
  const isPercentage = value.toString().includes('%');
  const isCurrency = value.toString().includes('Rp');

  // Use MotionValue for mutable number state
  const count = useMotionValue(0);
  
  // Format for display (Re-apply ID locale formatting)
  const displayValue = useTransform(count, (latest) => {
    return latest.toLocaleString('id-ID', {
      minimumFractionDigits: isPercentage ? 2 : 0,
      maximumFractionDigits: isPercentage ? 2 : 0,
    });
  });

  useEffect(() => {
    if (play) {
      // Animate from current value (starts at 0) to targetValue over 'duration' seconds
      const controls = animate(count, targetValue, { duration: duration, ease: "easeOut" });
      return () => controls.stop();
    } else {
      // Reset if not playing
      count.set(0);
    }
  }, [play, targetValue, duration, count]);

  // If value is NaN (e.g. "-"), render as static text
  if (isNaN(targetValue) && targetValue !== 0) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span className={className}>
      {isCurrency ? 'Rp ' : ''}
      <motion.span style={{ fontVariantNumeric: 'tabular-nums' }}>
        {displayValue}
      </motion.span>
      {isPercentage ? '%' : ''}
    </span>
  );
};

export default CountUp;
