/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}" // Ajusta según la estructura de tu proyecto
  ],
  theme: {
    extend: {
      colors: {
        'metallic-red': '#D84B4B', // A metallic red shade
        'metallic-blue': '#1D4ED8', // A metallic blue shade
      },
      keyframes: {
        // Animación para el relleno del gradiente de izquierda a derecha
        gradientFill: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        // Animación para deshacer el relleno del gradiente de derecha a izquierda
        gradientUnfill: {
          '0%': { transform: 'scaleX(1)', transformOrigin: 'right' },
          '100%': { transform: 'scaleX(0)', transformOrigin: 'right' },
        },
        // Animación de aumento de escala del texto
        scaleUp: {
          '0%': { transform: 'scale(1)', fontSize: '1rem' },
          '100%': { transform: 'scale(1.1)', fontSize: '1.1rem' },
        },
        // Animación de parpadeo lento y aumento de tamaño (más suave y lenta)
        blinkAndGrow: {
          '0%': {
            opacity: '1',  // Siempre visible
            transform: 'scale(1)',  // Tamaño normal
            color: '#d1d5db',  // Color gris base
            background: 'inherit',
            '-webkit-background-clip': 'text',
          },
          '50%': {
            opacity: '1',  // Siempre visible
            transform: 'scale(1.05)',  // Aumento de tamaño suave
            color: 'transparent',  // El texto sigue siendo transparente para aplicar el gradiente
            background: 'linear-gradient(to right, #d1d5db, #9ca3af, #d1d5db)',  // Gradiente plateado
            '-webkit-background-clip': 'text',  // El gradiente se aplica solo al texto
          },
          '100%': {
            opacity: '1',  // Siempre visible
            transform: 'scale(1)',  // Vuelve al tamaño original
            color: '#d1d5db',  // Color gris base
            background: 'inherit',
            '-webkit-background-clip': 'text',
          },
        },
        // Animación de órbita para los círculos alrededor del logo
        orbit: {
          '0%': {
            transform: 'rotate(360deg) translateX(350px) rotate(-360deg)',  // La posición inicial de los elementos
          },
          '100%': {
            transform: 'rotate(0deg) translateX(350px) rotate(0deg)',  // La posición final, completa una órbita
          },
        },
      },
      animation: {
        // Animaciones personalizadas
        gradientFill: 'gradientFill 0.3s ease-in-out forwards',
        gradientUnfill: 'gradientUnfill 0.3s ease-in-out forwards',
        scaleUp: 'scaleUp 0.3s ease-in-out forwards',
        // Animación personalizada para parpadeo lento y aumento de tamaño
        blinkAndGrow: 'blinkAndGrow 7s ease-in-out infinite',  // Parpadeo lento y aumento de tamaño más suave y lento
        // Nueva animación para la órbita
        orbit: 'orbit 10s infinite linear', // Animación de órbita
      },
      delay: {
        0: '0s',
        1: '2s', // Para el segundo círculo
        2: '4s', // Para el tercer círculo
        3: '6s', // Para el cuarto círculo
        4: '8s', // Para el quinto círculo
      },
      backgroundImage: {
        'silver-gradient': 'linear-gradient(to right, #d1d5db, #9ca3af, #d1d5db)', // Gradiente plateado
      },
    },
  },
  plugins: [],
};
