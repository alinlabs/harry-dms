import { useLanguage } from '@/contexts/LanguageContext';

export const slideDataId = {
  title: "Driving The Growth: Winning The Market",
  titleLine1: "Driving The Growth",
  titleLine2: "Winning The Market",
  subtitle: "Penetrasi strategi pasar terarah, monetisasi 3 pilar produk (Existing, Development, Expansion), dan eksekusi solid formasi tim",
  presenter: {
    name: "Harry Gultom",
    role: "Candidate Sales Manager IT & FTTH",
    company: "Digital Multi Sinergy"
  },
  pillars: [
    { 
      label: "Strategy", 
      desc: "Penetrasi agresif B2B/B2G, kemitraan strategis, dan tata kelola pipeline terukur untuk memenangkan pasar." 
    },
    { 
      label: "Product", 
      desc: "Monetisasi 8 lini existing hardware, eskalasi 3 lini pengembangan, dan ekspansi margin tinggi solusi IP." 
    },
    { 
      label: "Team", 
      desc: "Formasi 6 personel solid: 1 Manager, 3 Sales Existing, 1 Sales Hunter, dan 1 Digital Marketing berorientasi target." 
    }
  ]
};

export const slideDataEn = {
  title: "Driving The Growth: Winning The Market",
  titleLine1: "Driving The Growth",
  titleLine2: "Winning The Market",
  subtitle: "Targeted market strategy penetration, monetization across 3 product pillars (Existing, Development, Expansion), and disciplined team formation execution",
  presenter: {
    name: "Harry Gultom",
    role: "Candidate Sales Manager IT & FTTH",
    company: "Digital Multi Sinergy"
  },
  pillars: [
    { 
      label: "Strategy", 
      desc: "Targeted B2B/B2G penetration, strategic partnerships, and disciplined pipeline governance to win the market." 
    },
    { 
      label: "Product", 
      desc: "Monetizing 8 existing hardware lines, scaling 3 development lines, and expanding high-margin digital IP solutions." 
    },
    { 
      label: "Team", 
      desc: "Solid 6-personnel formation: 1 Manager, 3 Existing Sales, 1 Sales Hunter, and 1 Digital Marketing driving revenue targets." 
    }
  ]
};

export const getSlideData = (lang: 'id' | 'en' = 'id') => (lang === 'en' ? slideDataEn : slideDataId);

export function useSlideData() {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  "slideNumber": 1,
  "folder": "01",
  "sectionId": 0,
  "navTitle": {
    "in": "Driving The Growth, Winning The Market",
    "en": "Driving The Growth, Winning The Market"
  },
  "headerTitle": {
    "in": "Driving The Growth, Winning The Market",
    "en": "Driving The Growth, Winning The Market"
  },
  "category": {
    in: "Cover",
    en: "Cover"
  },
  "section": {
    in: "Cover",
    en: "Cover"
  }
};
