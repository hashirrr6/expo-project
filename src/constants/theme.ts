/**
 * KOJO Design System — Centralized theme tokens
 * All colors, typography, spacing, and shadow values used across the app.
 */

export const Colors = {
  // Brand
  primary: '#2563EB',
  primaryLight: '#3B82F6',
  primaryLighter: '#93C5FD',
  primaryLightest: '#EFF6FF',

  // Backgrounds
  background: '#EBF2FC',
  surface: '#FFFFFF',
  surfaceSecondary: '#F8FAFC',

  // Text
  textPrimary: '#0F172A',
  textSecondary: '#1E293B',
  textTertiary: '#334155',
  textMuted: '#475569',
  textSubtle: '#64748B',
  textPlaceholder: '#94A3B8',

  // Borders
  border: '#E2E8F0',
  borderLight: '#F1F5F9',

  // Semantic
  success: '#10B981',
  successLight: '#ECFDF5',
  warning: '#F59E0B',
  warningLight: '#FFF7ED',
  error: '#EF4444',
  errorLight: '#FEF2F2',

  // Accent
  purple: '#8B5CF6',
  purpleLight: '#F5F3FF',
  orange: '#F97316',
  orangeLight: '#FFF7ED',

  // Neutrals
  white: '#FFFFFF',
  black: '#000000',

  // Dark mode
  darkBg: '#0F172A',
  darkSurface: '#1E293B',
  darkBorder: '#334155',
} as const;

export const Typography = {
  h1: {
    fontSize: 32,
    fontWeight: '800' as const,
    letterSpacing: -0.5,
  },
  h2: {
    fontSize: 24,
    fontWeight: '900' as const,
    letterSpacing: -0.5,
  },
  h3: {
    fontSize: 22,
    fontWeight: '800' as const,
    letterSpacing: -0.5,
  },
  h4: {
    fontSize: 18,
    fontWeight: '900' as const,
    letterSpacing: -0.2,
  },
  body: {
    fontSize: 16,
    fontWeight: '600' as const,
    lineHeight: 24,
  },
  bodySmall: {
    fontSize: 14,
    fontWeight: '600' as const,
  },
  caption: {
    fontSize: 13,
    fontWeight: '700' as const,
  },
  label: {
    fontSize: 11,
    fontWeight: '800' as const,
    letterSpacing: 0.5,
  },
  overline: {
    fontSize: 14,
    fontWeight: '800' as const,
    textTransform: 'uppercase' as const,
    letterSpacing: 1,
  },
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 40,
} as const;

export const BorderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  '2xl': 34,
  full: 9999,
} as const;

export const Shadows = {
  sm: {
    shadowColor: '#101828',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#1E293B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 12,
    elevation: 3,
  },
  blue: {
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
  },
  blueStrong: {
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
} as const;
