// src/theme/design-tokens.ts

export const colors = {
  brand: {
    primary: '#AA2078',
    secondary: '#7A1556',
    dark: 'dark',
    link: '#3B82F6',
  },

  text: {
    primary: '#111827',
    secondary: '#374151',
    muted: '#6B7280',
    inverse: '#FFFFFF',
  },

  surface: {
    background: '#FFFFFF',
    card: '#FFFFFF',
    subtle: '#F9FAFB',
    soft: '#F3F4F6',
    light: '#D9E1F2'
  },

  border: {
    subtle: '#E5E7EB',
    strong: '#D1D5DB',
  },

  state: {
    success: '#15803D',
    warning: '#D97706',
    warningSubtle: '#FFF4E5',
    error: '#B91C1C',
    info: '#2563EB',
    text: '#111827',
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 34,
};

export const typography = {
  size: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 22,
    xxl: 26,
  },

  weight: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },

  lineHeight: {
    tight: 18,
    normal: 22,
    relaxed: 24,
  },

  style: {
    normal: 'normal',
    italic: 'italic',
  },
};

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
};

export const elevation = {
  card: {
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
};

export const alignment = {
  text: {
    center: 'center' as const,
    left: 'left' as const,
    right: 'right' as const,
  },
};

export const tokens = {
  colors,
  spacing,
  typography,
  radius,
  elevation,
  alignment,
};
