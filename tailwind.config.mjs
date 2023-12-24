/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'deep-purple':'rgba(15, 15, 31, 1)',
				'bright-purple': 'rgba(92, 22, 247, 1)',
				'electric-blue': 'rgba(15, 22, 255, 1)',
				'black': 'rgba(51, 51, 51, 1)',
			},
			fontFamily: {
				'sans': ['opensource', 'sans-serif']
			},
			fontSize: {
				'h2': ['26px', {
					lineHeight: '1.25em',
					fontWeight: '800',
				}],
				'h2Med': ['42px', {
					fontWeight: '800',
				}],
				'h3': ['22px', {
					lineHeight: '1.25em',
					fontWeight: '800',
				}],
				'h3Med': ['26px', {
					fontWeight: '800',
				}],
				'h3Lg': ['32px', {
					fontWeight: '800',
				}],
				'tiny': '10px',
			}
		},
	},
	plugins: [],
}
