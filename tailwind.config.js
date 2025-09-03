module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Medical urgency with warmth
        primary: {
          DEFAULT: "#DC2626", // red-600
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
          700: "#B91C1C", // red-700
          800: "#991B1B", // red-800
          900: "#7F1D1D", // red-900
        },
        // Secondary Colors - Professional trust and reliability
        secondary: {
          DEFAULT: "#1E40AF", // blue-800
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
          800: "#1E40AF", // blue-800
          900: "#1E3A8A", // blue-900
        },
        // Accent Colors - Success and positive health outcomes
        accent: {
          DEFAULT: "#059669", // emerald-600
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
          700: "#047857", // emerald-700
          800: "#065F46", // emerald-800
          900: "#064E3B", // emerald-900
        },
        // Background Colors
        background: "#FAFAFA", // gray-50 - Clean medical environment
        surface: {
          DEFAULT: "#F3F4F6", // gray-100 - Subtle content separation
          200: "#E5E7EB", // gray-200
          300: "#D1D5DB", // gray-300
        },
        // Text Colors
        text: {
          primary: "#111827", // gray-900 - Clear readability
          secondary: "#6B7280", // gray-500 - Hierarchy without losing accessibility
          tertiary: "#9CA3AF", // gray-400
        },
        // Status Colors
        success: {
          DEFAULT: "#10B981", // emerald-500 - Celebration and achievement
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          600: "#059669", // emerald-600
        },
        warning: {
          DEFAULT: "#F59E0B", // amber-500 - Attention without panic
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          600: "#D97706", // amber-600
        },
        error: {
          DEFAULT: "#EF4444", // red-500 - Helpful concern
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          600: "#DC2626", // red-600
        },
        // Border Colors
        border: {
          DEFAULT: "#E5E7EB", // gray-200 - Minimal functional separation
          light: "#F3F4F6", // gray-100
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'medical': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'medical-floating': '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
        'medical-critical': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
      },
      animation: {
        'pulse-emergency': 'pulse-emergency 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gentle-bounce': 'gentle-bounce 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-emergency': {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.8',
          },
        },
        'gentle-bounce': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-4px)',
          },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
      lineHeight: {
        'tight': '1.3',
        'relaxed': '1.6',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.font-variant-tabular': {
          'font-variant-numeric': 'tabular-nums',
        },
        '.transition-medical': {
          'transition': '300ms ease-out',
        },
        '.transition-medical-fast': {
          'transition': '200ms ease-out',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}