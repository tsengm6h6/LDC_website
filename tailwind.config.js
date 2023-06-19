export const theme = {
  content: ['./src/**/*.{html,js}'],
  important: true,
  extend: {
    colors: {
      primary: '#34B1B1',
      secondary: '#DDAA97',
      'secondary-dark': '#8A6659',
      highlight: '#F8CD8F',
      danger: '#F56C6C',
      'danger-light': '#FEF0F0',
      'main-dark': '#3F3E3E',
      'main-gray': '#D9D9D9',
      'main-bg-dark': '#4A4D52',
      'main-bg-white': '#FDFDFD',
      'main-bg-gray': '#F3F3F3',
    },
    borderRadius: {
      20: '20px',
      30: '30px',
      60: '60px',
      80: '80px',
    },
    content: {
      abstractwaves: "url('@/assets/image/abstract-waves.svg')",
    },
  },
}
