// src/i18n/ui.ts
export const languages = {
  fa: { label: 'فارسی', dir: 'rtl' },
  tr: { label: 'Türkçe', dir: 'ltr' },
};

export const defaultLang = 'tr';

export const ui = {
  fa: {
    'nav.home': 'صفحه اصلی',
    'nav.services': 'خدمات',
    'nav.projects': 'پروژه‌ها',
    'nav.contact': 'تماس با ما',
    'btn.consultation': 'درخواست مشاوره',
    'hero.badge': 'تجارت بین‌المللی و صادرات',
    'hero.tagline': 'از تأمین تا تحویل، در کنار تجارت شما.',
  },
  tr: {
    'nav.home': 'Ana Sayfa',
    'nav.services': 'Hizmetler',
    'nav.projects': 'Projeler',
    'nav.contact': 'İletişim',
    'btn.consultation': 'Danışmanlık Alın',
    'hero.badge': 'Uluslararası Ticaret ve İhracat',
    'hero.tagline': 'Tedarikten Teslimata, Ticaretinizin Yanında.',
  },
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}