// Google Tag Manager & GA4 DataLayer Types

interface DataLayerEvent {
  event: string;
  [key: string]: any;
}

interface Window {
  dataLayer: DataLayerEvent[];
  gtag?: (...args: any[]) => void;
}

// Extend the global window object
declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
    gtag?: (...args: any[]) => void;
  }
}

export {};
