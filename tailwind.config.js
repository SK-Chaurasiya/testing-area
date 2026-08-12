/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tsumugi's signature palette
        magenta: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f8a9dd',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        cyan: {
          50: '#ecf9fc',
          100: '#cff9f9',
          200: '#a5f3f3',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        // Semantic color aliases for dark theme
        'theme-base': 'rgb(15, 23, 42)', // slate-950
        'theme-elevated': 'rgb(30, 41, 59)', // slate-900
        'theme-glass': 'rgb(51, 65, 85)', // slate-700
        'theme-text': 'rgb(226, 232, 240)', // slate-200
        'theme-text-muted': 'rgb(148, 163, 184)', // slate-400
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-bar': 'pulse-bar 0.6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'bioluminescence': 'bioluminescence 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-bar': {
          '0%, 100%': { height: '20%', opacity: '0.4' },
          '50%': { height: '80%', opacity: '1' },
        },
        fadeIn: {
          from: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        bioluminescence: {
          '0%, 100%': { 
            opacity: '0.4',
            filter: 'drop-shadow(0 0 20px rgba(236, 72, 153, 0.2))',
          },
          '50%': { 
            opacity: '0.8',
            filter: 'drop-shadow(0 0 40px rgba(236, 72, 153, 0.4))',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-magenta': '0 0 20px rgba(236, 72, 153, 0.3)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.3)',
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.3)',
      },
    },
  },
  plugins: [],
}
