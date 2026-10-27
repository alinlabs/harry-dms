import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { useSlideData } from "./data";

export const Container: React.FC = () => {
  const { theme } = useTheme();
  const slideData = useSlideData();

  // Dark mode -> mockup-silver.webp | Light mode -> mockup-black.webp
  const mockupImage = theme === "dark" 
    ? "/gambar/mockup-silver.webp" 
    : "/gambar/mockup-black.webp";

  return (
    <div className="w-full flex flex-col items-center justify-start bg-transparent select-none py-1">
      <motion.div
        key={theme}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="w-full flex items-center justify-center bg-transparent"
      >
        {/* Lebar penuh selebar header (w-full) dan tinggi proporsional otomatis (h-auto) menyesuaikan gambar */}
        <img
          src={mockupImage}
          alt={slideData.altText}
          className="w-full h-auto block select-none"
          loading="eager"
        />
      </motion.div>
    </div>
  );
};

export default Container;
