/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#0066cc",
                    dark: "#0a1628",
                    light: "#3399ff",
                },
                accent: "#00d4ff",
                secondary: "#ff6b35",
            },
            fontFamily: {
                heading: ["Outfit", "sans-serif"],
                sans: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
}
