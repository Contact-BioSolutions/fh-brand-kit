/**
 * FireHawk Brand Tailwind Preset - 2025 Official Guidelines
 * Source: Chase Design Group (July 2025)
 *
 * This preset imports all tokens from the source files.
 * Do NOT hardcode color/typography/spacing values here.
 */

const { colors } = require('../tokens/colors');
const { typography } = require('../tokens/typography');
const { spacing, borderRadius, boxShadow } = require('../tokens/spacing');

module.exports = {
  content: [],
  theme: {
    extend: {
      // Typography - from tokens
      fontFamily: typography.fontFamily,
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeight,
      letterSpacing: typography.letterSpacing,
      lineHeight: typography.lineHeight,

      // Spacing & layout - from tokens
      spacing,
      borderRadius,
      boxShadow,

      // Colors - from tokens (single source of truth)
      colors: {
        // FireHawk official brand colors
        'brand-deep-green': colors.brand.deepGreen,
        'brand-orange': colors.brand.orange,
        'brand-pale-green': colors.brand.paleGreen,
        'brand-off-white': colors.brand.offWhite,
        'brand-yellow': colors.brand.yellow,

        // Color scales for Tailwind utilities
        primary: colors.brand.primary,
        secondary: colors.brand.secondary,
        accent: colors.brand.accent,
        neutral: colors.neutral,

        // Semantic colors
        success: colors.semantic.success,
        warning: colors.semantic.warning,
        error: colors.semantic.error,
        info: colors.semantic.info,
      },

      // Animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
};
