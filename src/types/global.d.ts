export {};

declare global {
  interface Window {
    gtranslateSettings?: {
      default_language?: string;
      native_language_names?: boolean;
      languages?: string[];
      wrapper_selector?: string;
      translatePage?: (lang: string) => void;
    };
  }
}
