module.exports = {
    theme: {
      extend: {
        animation: {
          bounce: 'bounce 3s infinite',
        },
        keyframes: {
          bounce: {
            '0%, 100%': { 
              transform: 'translateY(0)',
              animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
            },
            '50%': { 
              transform: 'translateY(-25px)',
              animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
            },
          },
        },
      },
    },
  }