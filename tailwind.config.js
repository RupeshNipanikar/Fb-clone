/** @type {import('tailwindcss').config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		
		
		//or is using 'src' directory:
		"./src/**/*.{js,ts,jsx,tsx}",
		],
		theme: {
			extend:{
        colors: {
          primary: "#F2AA4CFF",
        },
      },
			},
			plugins:[
				require('tailwind-scrollbar-hide')],
			};