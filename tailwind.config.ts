import type { Config } from "tailwindcss";

export default {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#3B82F6",
                secondary: "#9333EA",
                background: "#0F172A",
                foreground: "#E2E8F0",
                hover: "#1E40AF",
                card: "#1E293B",
                border: "#334155",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                serif: ["Merriweather", "serif"],
            },
            borderRadius: {
                xl: "1rem",
                "2xl": "1.5rem",
                "3xl": "2rem",
            },
        },
    },
    plugins: [],
} satisfies Config;
