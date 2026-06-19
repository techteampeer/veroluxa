// Lightweight inline SVG icons, stroked with currentColor.

export function Arrow({ size = 14 }) {
  return (
    <svg className="arr" width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M11 2v7M11 2H4M11 2 3 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Chevron({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 3l5 6 5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const ServiceIcons = {
  strategy: (
    <svg width="20" height="20" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8.5" stroke="currentColor" strokeWidth="1.5" /><path d="M14.5 7.5 9.5 9.5 7.5 14.5 12.5 12.5 14.5 7.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>
  ),
  transform: (
    <svg width="20" height="20" viewBox="0 0 22 22" fill="none"><path d="M4 8a7 7 0 0 1 12-3M18 14a7 7 0 0 1-12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M16 2v3h-3M6 20v-3h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  data: (
    <svg width="20" height="20" viewBox="0 0 22 22" fill="none"><path d="M4 18V9M9 18V4M14 18v-6M19 18V7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
  ),
  ai: (
    <svg width="20" height="20" viewBox="0 0 22 22" fill="none"><rect x="6" y="6" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M9 1.5v3M13 1.5v3M9 17.5v3M13 17.5v3M1.5 9h3M1.5 13h3M17.5 9h3M17.5 13h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
  ),
  ops: (
    <svg width="20" height="20" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" /><path d="M11 1.5v3M11 17.5v3M1.5 11h3M17.5 11h3M4.5 4.5l2 2M15.5 15.5l2 2M17.5 4.5l-2 2M6.5 15.5l-2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
  ),
  people: (
    <svg width="20" height="20" viewBox="0 0 22 22" fill="none"><circle cx="7" cy="7" r="2.6" stroke="currentColor" strokeWidth="1.4" /><circle cx="15" cy="7" r="2.6" stroke="currentColor" strokeWidth="1.4" /><path d="M2.5 18c0-2.8 2-4.4 4.5-4.4S11.5 15.2 11.5 18M10.5 18c0-2.8 2-4.4 4.5-4.4s4.5 1.6 4.5 4.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
  ),
}

export const StepIcons = {
  discover: (
    <svg viewBox="0 0 30 30" fill="none"><circle cx="13" cy="13" r="8" stroke="currentColor" strokeWidth="1.8" /><path d="m19 19 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
  ),
  design: (
    <svg viewBox="0 0 30 30" fill="none"><path d="M6 21 18 9l3 3L9 24H6v-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="m18 6 3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
  ),
  deliver: (
    <svg viewBox="0 0 30 30" fill="none"><path d="M15 4c5 2 9 6 9 12 0 2-1 5-2 6l-7 3-7-3c-1-1-2-4-2-6 0-6 4-10 9-12Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><circle cx="15" cy="13" r="2.4" stroke="currentColor" strokeWidth="1.8" /></svg>
  ),
  sustain: (
    <svg viewBox="0 0 30 30" fill="none"><path d="M5 15a10 10 0 0 1 17-7M25 15a10 10 0 0 1-17 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><path d="M22 3v5h-5M8 27v-5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
}

export const PerkIcons = {
  ownership: (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M10 2l6 2.3V9c0 4-2.5 7-6 8.5C6.5 16 4 13 4 9V4.3L10 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>
  ),
  growth: (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M3 16l4-4 3 3 7-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /><path d="M13 5h4v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  flexible: (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.4" /><path d="M10 5.5V10l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
}

export const ContactIcons = {
  mail: (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><rect x="2" y="3.5" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.3" /><path d="m2.5 5 6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /></svg>
  ),
  user: (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="6" r="2.8" stroke="currentColor" strokeWidth="1.3" /><path d="M3.5 15.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
  ),
  pin: (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M9 1.5C5.7 1.5 3 4.2 3 7.5c0 4 6 9 6 9s6-5 6-9c0-3.3-2.7-6-6-6Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /><circle cx="9" cy="7.3" r="2" stroke="currentColor" strokeWidth="1.3" /></svg>
  ),
  link: (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><rect x="2.5" y="2.5" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.3" /><path d="M6 7.5v5M6 5.4v.1M9 12.5v-3c0-1 .8-1.7 1.8-1.7s1.7.7 1.7 1.7v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
  ),
}
