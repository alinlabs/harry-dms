import { useLanguage } from '@/contexts/LanguageContext';

export const slideDataId = {
  company: "PT. DIGITAL MULTI SINERGY",
  headline: "TERIMA KASIH",
  subHeadline: "SIAP MENGEKSEKUSI & TUMBUH BERSAMA",
  quote: "Komitmen penuh untuk menghadirkan eksekusi penjualan berdisiplin tinggi, memenangkan pasar, dan mewujudkan pertumbuhan bisnis yang berkelanjutan.",
  author: "Harry Gultom"
};

export const slideDataEn = {
  "company": "PT. DIGITAL MULTI SINERGY",
  "headline": "THANK YOU",
  "subHeadline": "READY TO EXECUTE & GROW TOGETHER",
  "quote": "Fully committed to delivering high-discipline sales execution, winning the market, and driving sustainable business growth.",
  "author": "Harry Gultom — Candidate Sales Manager IT & FTTH"
};

export const getSlideData = (lang: 'id' | 'en' = 'id') => (lang === 'en' ? slideDataEn : slideDataId);

export function useSlideData() {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  "slideNumber": 33,
  "folder": "33",
  "sectionId": 4,
  "navTitle": {
    "in": "Komitmen Eksekusi",
    "en": "Execution Commitment"
  },
  "headerTitle": {
    "in": "Komitmen Eksekusi",
    "en": "Closing & Commitment"
  },
  "category": {
    in: "Penutup & Komitmen",
    en: "Closing & Commitment"
  },
  "section": {
    in: "Penutup & Komitmen",
    en: "Closing & Commitment"
  }
};
