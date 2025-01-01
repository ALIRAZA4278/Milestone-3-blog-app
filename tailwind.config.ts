import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Toggle dark mode with class
  theme: {
    extend: {
      colors: {
        light: '#fafafa',  // Light background color for light mode (soft light gray)
        dark: '#121212',   // Dark background color for dark mode (almost black)
        primary: "#1e3a8a", // Primary color (deep blue)
        primaryDark: "#1e3a8a", // Primary color in dark mode (vibrant purple)
        accentDarkPrimary: "#3b82f6", // Dark accent color (bright blue)
        accentDarkSecondary: "#10b981", // Secondary accent color (cool green)
        lightModeText: "white", // Dark gray text color for light mode (better readability)
        darkModeText: "black", // Light gray text color for dark mode (good contrast)
      },
      screens: {
        xs: "479px",  // Custom breakpoint for extra small screens
        sm: "639px",  // Small screens
        md: "767px",  // Medium screens
        lg: "1023px", // Large screens
        xl: "1280px", // Extra-large screens
        "2xl": "1535px", // 2xl screens
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Ensure this plugin is added for rich text styling
  ],
};

export default config;
