// Type augmentation for GA4
interface Window {
  dataLayer: Record<string, unknown>[];
  gtag: (...args: unknown[]) => void;
}
