/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    margin: {
      auto: 'auto',
      px: '1px',
      0: '0',
      0.5: '2px',
      1: '4px',
      1.5: '6px',
      2: '8px',
      2.5: '10px',
      3: '12px',
      3.5: '14px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      14: '56px',
      16: '64px',
      20: '80px',
      24: '96px',
      28: '112px',
      32: '128px',
      36: '144px',
      40: '160px',
      44: '176px',
      48: '192px',
      52: '208px',
      56: '224px',
      60: '240px',
      64: '256px',
      72: '288px',
      80: '320px',
      96: '384px',
    },
    padding: ({ theme }) => ({
      ...theme('margin'),
    }),
    gap: ({ theme }) => ({
      ...theme('margin'),
    }),
    space: ({ theme }) => ({
      ...theme('margin'),
    }),
    scrollMargin: ({ theme }) => ({
      ...theme('margin'),
    }),
    scrollPadding: ({ theme }) => ({
      ...theme('margin'),
    }),
    screens: {
      tablet: '700px',
      laptop: '1100px',
      desktop: '1920px',
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        SUIH: [
          'SegoeUIHistoric',
          'SegoeUI',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        Helvetica: ['Helvetica', 'Arial', 'sans-serif'],
        SFProDisplay: ['SFProDisplay', 'Helvetica', 'Arial', 'sans-serif'],
        SFProText: ['SFProText', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {},
      keyframes: {},
      boxShadow: {},
      colors: {
        fb: {
          50: '#e7f3ff',
          100: '#BEDDFD',
          200: '#9AC5F9',
          300: '#6FA7F1',
          400: '#5995E8',
          500: '#538BDF',
          600: '#3A71CF',
          700: '#3764B9',
          800: '#385898',
          900: '#384D80',
        },
      },
    },
  },
};
