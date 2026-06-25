// Non-text metadata. All user-facing copy lives in src/locales/*.json
// and is read via i18n keys that mirror the slugs/indices below.

export const COMPANY = {
  name: 'Veroluxa',
  legalName: 'Veroluxa Digital Solutions – FZCO',
  email: 'contact@veroluxa.com',
}

// slug → i18n key under services.items.<slug>; icon → ServiceIcons key
export const SERVICES = [
  { slug: 'software', icon: 'code' },
  { slug: 'web', icon: 'web' },
  { slug: 'mobile', icon: 'mobile' },
  { slug: 'mvp', icon: 'mvp' },
  { slug: 'design', icon: 'design' },
  { slug: 'ai', icon: 'ai' },
  { slug: 'support', icon: 'support' },
]

// indices map to steps[] / careers.perks[] in the translation files
export const STEP_ICONS = ['discover', 'design', 'deliver', 'sustain']
export const PERK_ICONS = ['ownership', 'growth', 'flexible']

// numeric/symbolic stat values (not translated); labels come from home.stats[]
export const STATS = [
  { n: '7', sup: '' },
  { n: '100', sup: '%' },
  { n: '1:1', sup: '' },
  { n: '24/7', sup: '' },
]
