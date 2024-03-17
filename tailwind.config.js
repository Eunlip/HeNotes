/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1540px',
		},
		fontFamily: {
			Inter: ['"Inter", sans-serif'],
		},
	},
	plugins: [
		function({addBase}) {
			addBase({
				'::-webkit-scrollbar': {
					backgroundColor: '#50727B'
				},

				'::-webkit-scrollbar-thumb': {
          backgroundColor: '#d4d4d4',
          '&:hover': {
            backgroundColor: '#e5e5e5',
          },
        },
			})
		}
	],
};
