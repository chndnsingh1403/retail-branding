// This file generates CSS custom properties from the configuration
// Import this in your layout.tsx to apply theme configuration

import { config } from "@/config";

export const generateThemeCSS = () => {
  return {
    ':root': {
      '--primary-color': config.theme.primaryColor,
      '--secondary-color': config.theme.secondaryColor,
      '--accent-color': config.theme.accentColor,
      '--background-color': config.theme.backgroundColor,
      '--text-color': config.theme.textColor,
    }
  };
};

// For Tailwind CSS configuration
export const tailwindTheme = {
  extend: {
    colors: {
      'brand-primary': config.theme.primaryColor,
      'brand-secondary': config.theme.secondaryColor,
      'brand-accent': config.theme.accentColor,
    },
    backgroundImage: {
      'gradient-primary': `linear-gradient(to right, var(--tw-gradient-stops))`,
      'gradient-secondary': `linear-gradient(to right, var(--tw-gradient-stops))`,
    }
  }
};