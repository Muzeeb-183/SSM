import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette for student e-commerce
        primary: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          500: '#4F46E5',
          600: '#4F46E5', // Primary color - trusted, educational
          700: '#4338CA',
          900: '#312E81',
        },
        accent: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          500: '#10B981', // Accent color - energetic, success
          600: '#059669',
          700: '#047857',
        },
        background: '#F9FAFB', // Light, clean background
        text: {
          dark: '#111827', // High readability, serious but modern
          muted: '#6B7280', // Helper text, product details
        },
        success: '#34D399', // Positive feedback
        error: '#F87171', // Warning, validation
        navbar: '#1E293B', // Serious, contrasty structure
        highlight: '#FBBF24', // Deals, "Hot", "New" badges
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config; 