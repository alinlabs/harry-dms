export const TOTAL_SLIDES = 32;
export const DEFAULT_THEME = 'light';
export const DEFAULT_LANG = 'in';

export const CACHE_KEY_THEME = 'dms_theme';
export const CACHE_KEY_LANG = 'dms_language';

export type Theme = 'light' | 'dark';
export type Language = 'in' | 'en';

export interface ParseResult {
  is404: boolean;
  theme: Theme;
  lang: Language;
  page?: number; // 1-indexed (1 to TOTAL_SLIDES)
  hasValidPage: boolean;
  validParamsCount: number;
  totalParamsCount: number;
  invalidParams: string[];
}

/**
 * Validates theme parameter.
 * Strictly 'light' or 'dark'.
 */
export function validateTheme(val: string | null): Theme | null {
  if (val === 'light' || val === 'dark') {
    return val;
  }
  return null;
}

/**
 * Validates lang parameter.
 * Strictly 'in' or 'en'. Any other value (e.g. 'id') is strictly invalid.
 */
export function validateLang(val: string | null): Language | null {
  if (val === 'in' || val === 'en') {
    return val;
  }
  return null;
}

/**
 * Validates page parameter.
 * Must be a clean positive integer without leading zeros (/^[1-9]\d*$/)
 * and within range 1 to TOTAL_SLIDES (31).
 */
export function validatePage(val: string | null): number | null {
  if (!val) return null;
  if (!/^[1-9]\d*$/.test(val)) return null;
  const num = parseInt(val, 10);
  if (num >= 1 && num <= TOTAL_SLIDES) {
    return num;
  }
  return null;
}

/**
 * Read cached theme from localStorage.
 */
export function getCachedTheme(): Theme | null {
  try {
    if (typeof localStorage === 'undefined') return null;
    const val = localStorage.getItem(CACHE_KEY_THEME);
    if (val === 'light' || val === 'dark') {
      return val;
    }
  } catch {
    // Ignore storage errors in restricted contexts
  }
  return null;
}

/**
 * Read cached language from localStorage.
 */
export function getCachedLang(): Language | null {
  try {
    if (typeof localStorage === 'undefined') return null;
    const val = localStorage.getItem(CACHE_KEY_LANG);
    if (val === 'in' || val === 'en') {
      return val;
    }
  } catch {
    // Ignore storage errors in restricted contexts
  }
  return null;
}

/**
 * Save theme preference to cache.
 */
export function setCachedTheme(theme: Theme): void {
  try {
    if (typeof localStorage === 'undefined') return;
    localStorage.setItem(CACHE_KEY_THEME, theme);
  } catch {
    // Ignore
  }
}

/**
 * Save language preference to cache.
 */
export function setCachedLang(lang: Language): void {
  try {
    if (typeof localStorage === 'undefined') return;
    localStorage.setItem(CACHE_KEY_LANG, lang);
  } catch {
    // Ignore
  }
}

/**
 * Parse and validate URL query string based on requirements:
 * 1. Read URL query parameters regardless of order.
 * 2. Validate 'theme', 'lang', 'page'. Any unknown parameter or invalid value is marked invalid.
 * 3. If the URL has parameters, but NOT A SINGLE ONE is valid -> 404!
 * 4. If URL has valid parameters: retain valid ones, discard invalid ones.
 * 5. Fill missing theme/lang from cache, then fallback to defaults (theme=light, lang=in).
 * 6. If URL has no parameters at all: read cache (or defaults) and prepare standard URL.
 */
export function parseUrl(search: string): ParseResult {
  const searchParams = new URLSearchParams(search);
  const totalParamsCount = Array.from(searchParams.keys()).length;

  let validTheme: Theme | null = null;
  let validLang: Language | null = null;
  let validPage: number | null = null;
  let validParamsCount = 0;
  const invalidParams: string[] = [];

  for (const [key, value] of searchParams.entries()) {
    if (key === 'theme') {
      const parsedTheme = validateTheme(value);
      if (parsedTheme) {
        validTheme = parsedTheme;
        validParamsCount++;
      } else {
        invalidParams.push(`theme=${value}`);
      }
    } else if (key === 'lang') {
      const parsedLang = validateLang(value);
      if (parsedLang) {
        validLang = parsedLang;
        validParamsCount++;
      } else {
        invalidParams.push(`lang=${value}`);
      }
    } else if (key === 'page') {
      const parsedPage = validatePage(value);
      if (parsedPage !== null) {
        validPage = parsedPage;
        validParamsCount++;
      } else {
        invalidParams.push(`page=${value}`);
      }
    } else {
      // Unsupported / unknown parameter
      invalidParams.push(`${key}=${value}`);
    }
  }

  // If URL has parameters, but zero are valid -> 404
  if (totalParamsCount > 0 && validParamsCount === 0) {
    return {
      is404: true,
      theme: DEFAULT_THEME,
      lang: DEFAULT_LANG,
      hasValidPage: false,
      validParamsCount: 0,
      totalParamsCount,
      invalidParams,
    };
  }

  // Resolve theme: URL valid value > Cache > Default
  const cachedTheme = getCachedTheme();
  const theme: Theme = validTheme ?? cachedTheme ?? DEFAULT_THEME;

  // Resolve lang: URL valid value > Cache > Default
  const cachedLang = getCachedLang();
  const lang: Language = validLang ?? cachedLang ?? DEFAULT_LANG;

  return {
    is404: false,
    theme,
    lang,
    page: validPage ?? undefined,
    hasValidPage: validPage !== null,
    validParamsCount,
    totalParamsCount,
    invalidParams,
  };
}

/**
 * Builds standard, consistent URL query string:
 * Order: ?theme=...&lang=...&page=...
 */
export function buildCanonicalQuery(theme: Theme, lang: Language, page?: number | null): string {
  const parts: string[] = [];
  parts.push(`theme=${theme}`);
  parts.push(`lang=${lang}`);
  if (typeof page === 'number' && page >= 1 && page <= TOTAL_SLIDES) {
    parts.push(`page=${page}`);
  }
  return `?${parts.join('&')}`;
}

/**
 * Updates the browser URL without full page reload.
 */
export function syncBrowserUrl(theme: Theme, lang: Language, page?: number | null): void {
  if (typeof window === 'undefined') return;
  const query = buildCanonicalQuery(theme, lang, page);
  const currentPathWithSearch = window.location.pathname + window.location.search;
  const targetPathWithSearch = window.location.pathname + query;

  if (currentPathWithSearch !== targetPathWithSearch) {
    window.history.replaceState(null, '', targetPathWithSearch);
  }
}
