// Vite-style envs; replace with your build tool's equivalent if needed
export const EMAILJS_SERVICE_ID = import.meta.env
  .VITE_EMAILJS_SERVICE_ID as string;
export const EMAILJS_TEMPLATE_ID = import.meta.env
  .VITE_EMAILJS_TEMPLATE_ID as string;
export const EMAILJS_PUBLIC_KEY = import.meta.env
  .VITE_EMAILJS_PUBLIC_KEY as string;

// Optional: quick guard to help you notice missing config in dev
export const emailJsConfigured =
  Boolean(EMAILJS_SERVICE_ID) &&
  Boolean(EMAILJS_TEMPLATE_ID) &&
  Boolean(EMAILJS_PUBLIC_KEY);
