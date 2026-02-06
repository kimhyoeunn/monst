/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                magic: {
                    blue: '#1fd5f9',
                    green: '#1ff968',
                },
                card: {
                    white: '#ffffff',
                },
                text: {
                    primary: '#1a1a1a',
                    secondary: '#666666',
                }
            },
            fontFamily: {
                sans: ['"Spline Sans"', 'sans-serif'],
            },
            borderRadius: {
                'xl': '12px',
                '2xl': '16px',
                '3xl': '24px',
                'pill': '9999px',
            },
        },
    },
    plugins: [],
}
