import type React from 'react';

// Add type declaration for Calendly on the window object
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

// Calendly URL with customizations
export const calendlyUrl = 'https://calendly.com/architexcreative/30min?background_color=1a1a1a&text_color=ffffff&primary_color=35bf1c';

// Function to open Calendly popup
export const openCalendlyPopup = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
  e.preventDefault(); // Prevent default button/link behavior
  // Check if Calendly script has loaded
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: calendlyUrl });
  }
  return false;
};
