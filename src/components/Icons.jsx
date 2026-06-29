import {
  MonitorCog, AppWindow, Smartphone, Compass, PenTool, Sparkles, Wrench,
  Search, PencilRuler, Blocks, RefreshCw,
  BadgeCheck, TrendingUp, Laptop,
  Mail, MapPin, Building2, Link2,
} from 'lucide-react'

const SW = 1.75 // stroke width tuned to the geometric type

// Custom arrow (kept: the .arr class drives the hover slide + RTL flip)
export function Arrow({ size = 14 }) {
  return (
    <svg className="arr" width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M11 2v7M11 2H4M11 2 3 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Custom chevron (the logo motif, used in the marquee strip)
export function Chevron({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 3l5 6 5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Service icons — recognizable metaphors, one per offering
export const ServiceIcons = {
  code: <MonitorCog size={22} strokeWidth={SW} />,      // Custom Software
  web: <AppWindow size={22} strokeWidth={SW} />,         // Web Solutions & Platforms
  mobile: <Smartphone size={22} strokeWidth={SW} />,     // Mobile Apps
  mvp: <Compass size={22} strokeWidth={SW} />,           // Product Strategy & MVP
  design: <PenTool size={22} strokeWidth={SW} />,        // UI/UX Design
  ai: <Sparkles size={22} strokeWidth={SW} />,           // AI & Automation
  support: <Wrench size={22} strokeWidth={SW} />,        // Maintenance & Support
}

// Process steps — distinct from the service set
const STEP = 120 // prominent step icons, matching the original large render on Home
export const StepIcons = {
  discover: <Search size={STEP} strokeWidth={1.5} />,
  design: <PencilRuler size={STEP} strokeWidth={1.5} />,  // blueprint/planning (≠ UI/UX PenTool)
  deliver: <Blocks size={STEP} strokeWidth={1.5} />,      // build
  sustain: <RefreshCw size={STEP} strokeWidth={1.5} />,
}

export const PerkIcons = {
  ownership: <BadgeCheck size={18} strokeWidth={SW} />,
  growth: <TrendingUp size={18} strokeWidth={SW} />,
  flexible: <Laptop size={18} strokeWidth={SW} />,
}

export const ContactIcons = {
  mail: <Mail size={16} strokeWidth={SW} />,
  pin: <MapPin size={16} strokeWidth={SW} />,
  user: <Building2 size={16} strokeWidth={SW} />,        // legal entity
  link: <Link2 size={16} strokeWidth={SW} />,
}
