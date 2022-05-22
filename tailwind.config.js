const colors = require('tailwindcss/colors');

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,jsx}'],
	theme: {
		extend: {
			boxShadow: {
				block: '0 16px 30px -10px rgba(70, 96, 187, 0.1986)',
			},
		},
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			azure: '#0079FF',
			lynch: '#697C9A',
			kashmir: '#4B6A9B',
			ebony: '#2B3442',
			zircon: '#F6F8FF',
			darkwhite: '#FEFEFE',
			white: '#FFFFFF',
			bigstone: '#141D2F',
			cloudburst: '#1E2A47',
			black: '#222731',
			sunset: '#F74646',
			marino: '#4660BB',
		},
		fontFamily: {
			sans: ['Space Mono', 'sans-serif'],
		},
	},
	plugins: [],
};
