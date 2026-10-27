import { useLanguage } from "@/contexts/LanguageContext";

export const slideDataId = {
  imageUrlDark: "/gambar/mockup-silver.webp",
  imageUrlLight: "/gambar/mockup-black.webp",
  imageUrl: "/gambar/mockup-silver.webp",
  altText: "Visual Mockup Produk Ekspansi IT & White Label Solution - PT Digital Multi Sinergy"
};

export const slideDataEn = {
  imageUrlDark: "/gambar/mockup-silver.webp",
  imageUrlLight: "/gambar/mockup-black.webp",
  imageUrl: "/gambar/mockup-silver.webp",
  altText: "Visual Mockup of Expansion IT & White Label Products - PT Digital Multi Sinergy"
};

export const getSlideData = (lang: "id" | "en" = "id") => (lang === "en" ? slideDataEn : slideDataId);

export function useSlideData() {
  const { language } = useLanguage();
  return language === "en" ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 18,
  folder: "18",
  sectionId: 2,
  navTitle: {
    in: "Mockup Produk Ekspansi",
    en: "Expansion Products Mockup"
  },
  headerTitle: {
    in: "Mockup Produk Ekspansi",
    en: "Expansion Products Mockup"
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
