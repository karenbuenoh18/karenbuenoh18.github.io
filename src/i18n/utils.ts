/* ============================================================
   i18n helpers.

   URL contract:
     en (default) → /            /labs   /beyond   /work/<slug>
     es           → /es/         /es/labs         /es/work/<slug>
   ============================================================ */

import { defaultLocale, locales, ui, type Locale, type UIKey } from './ui';

export { defaultLocale, locales, localeNames, localeShort } from './ui';
export type { Locale, UIKey } from './ui';

/** Read the active locale out of a URL pathname. */
export function getLocale(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  return locales.includes(first as Locale) ? (first as Locale) : defaultLocale;
}

/**
 * Translator bound to one locale. Falls back to the default locale so a
 * missing key degrades to English copy rather than a blank element.
 */
export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    return ui[locale][key] ?? ui[defaultLocale][key];
  };
}

/**
 * Turn a locale-neutral path into a real href.
 *   path('/labs', 'en') → '/labs'
 *   path('/labs', 'es') → '/es/labs'
 */
export function path(p: string, locale: Locale): string {
  const clean = `/${p.replace(/^\/+/, '')}`.replace(/\/+$/, '') || '/';
  if (locale === defaultLocale) return clean;
  return clean === '/' ? '/es/' : `/es${clean}`;
}

/** Strip the locale prefix, giving back the locale-neutral path. */
export function neutralPath(pathname: string): string {
  const stripped = pathname.replace(/^\/(en|es)(?=\/|$)/, '');
  const clean = stripped.replace(/\/+$/, '');
  return clean === '' ? '/' : clean;
}

/** The same page in the other locale — powers the language switch. */
export function alternatePath(pathname: string, target: Locale): string {
  return path(neutralPath(pathname), target);
}

/** hreflang map for <head>, including x-default. */
export function alternateLinks(pathname: string, site: URL | undefined) {
  const base = site?.origin ?? 'https://karenbuenoh18.github.io';
  const neutral = neutralPath(pathname);
  // Widened past Locale on purpose: the last entry is 'x-default'.
  const links: { hreflang: string; href: string }[] = locales.map((l) => ({
    hreflang: l as string,
    href: new URL(path(neutral, l), base).href,
  }));
  links.push({ hreflang: 'x-default', href: new URL(path(neutral, defaultLocale), base).href });
  return links;
}

/** BCP 47 tag for <html lang>. */
export const htmlLang: Record<Locale, string> = {
  en: 'en',
  es: 'es',
};
