/**
 * 🎨 Mbongwa Creatives — Color Palette
 * Lighter, professional creative agency branding
 * 
 * Based on client's brand identity with emphasis on:
 * - Modern & Professional
 * - Creative & Vibrant (but sophisticated)
 * - Motion & Energy
 */

export const colors = {
  // Primary Brand Colors (lighter, sophisticated)
  primary: {
    dark: '#2D1B69',      // Deep purple (main brand color - darker for text/accents)
    main: '#5B3BA3',      // Rich purple (primary)
    light: '#9B7FBE',     // Light purple (hover states)
    lighter: '#D5C9E8',   // Very light purple (backgrounds)
  },

  // Secondary/Accent Colors (vibrant but professional)
  accent: {
    blue: '#1E88E5',      // Vibrant blue (energy, tech)
    teal: '#00BCD4',      // Teal (modern, growth)
    orange: '#FF9800',    // Warm orange (creativity, warmth)
    gold: '#FFB700',      // Gold (premium, sophistication)
  },

  // Tertiary Colors (creative energy)
  tertiary: {
    pink: '#E91E63',      // Creative pink (bold)
    lime: '#CDDC39',      // Vibrant lime (energy)
    cyan: '#00E5FF',      // Cyan (innovation)
  },

  // Neutral Colors (clean, professional)
  neutral: {
    bg: '#FAFAF9',        // Off-white background (warm)
    surface: '#FFFFFF',   // Pure white (cards, surfaces)
    border: '#E8E4E0',    // Light border (very subtle)
    text: '#4A4A4A',      // Dark gray (readable text)
    textDark: '#1A1A1A',  // Almost black (headings)
    textLight: '#8A8A8A', // Light gray (secondary text)
    muted: '#D0D0D0',     // Muted gray (disabled states)
  },

  // Status Colors
  status: {
    success: '#4CAF50',   // Green (positive)
    warning: '#FFC107',   // Amber (caution)
    error: '#F44336',     // Red (error)
    info: '#2196F3',      // Blue (information)
  },

  // Semantic/Interactive Colors
  semantic: {
    hover: 'rgba(91, 59, 163, 0.08)',       // Purple hover (light)
    hoverBorder: 'rgba(91, 59, 163, 0.3)',  // Purple border hover
    focus: 'rgba(91, 59, 163, 0.15)',       // Purple focus state
    shadow: 'rgba(0, 0, 0, 0.1)',           // Default shadow
    shadowHeavy: 'rgba(0, 0, 0, 0.15)',     // Heavier shadow
  },

  // Gradients (for modern look)
  gradients: {
    brandGradient: 'linear-gradient(135deg, #5B3BA3 0%, #00BCD4 100%)', // Purple to teal
    hoverGradient: 'linear-gradient(135deg, #9B7FBE 0%, #4DD0E1 100%)',  // Light gradient
    darkGradient: 'linear-gradient(135deg, #2D1B69 0%, #1E88E5 100%)',   // Deep gradient
  },
}

/**
 * CSS Variables Object
 * Maps to CSS custom properties for easy use in stylesheets
 * Import and apply to document root
 */
export const cssVariables = {
  // Primary
  '--primary-dark': colors.primary.dark,
  '--primary-main': colors.primary.main,
  '--primary-light': colors.primary.light,
  '--primary-lighter': colors.primary.lighter,
  
  // Accent
  '--accent-blue': colors.accent.blue,
  '--accent-teal': colors.accent.teal,
  '--accent-orange': colors.accent.orange,
  '--accent-gold': colors.accent.gold,
  
  // Tertiary
  '--tertiary-pink': colors.tertiary.pink,
  '--tertiary-lime': colors.tertiary.lime,
  '--tertiary-cyan': colors.tertiary.cyan,
  
  // Neutral
  '--bg': colors.neutral.bg,
  '--surface': colors.neutral.surface,
  '--border': colors.neutral.border,
  '--text': colors.neutral.text,
  '--text-dark': colors.neutral.textDark,
  '--text-light': colors.neutral.textLight,
  '--text-muted': colors.neutral.muted,
  
  // Status
  '--status-success': colors.status.success,
  '--status-warning': colors.status.warning,
  '--status-error': colors.status.error,
  '--status-info': colors.status.info,
  
  // Gradients
  '--gradient-brand': colors.gradients.brandGradient,
  '--gradient-hover': colors.gradients.hoverGradient,
  '--gradient-dark': colors.gradients.darkGradient,
}

export default colors
