'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtranslateSettings?: {
      default_language: string;
      native_language_names: boolean;
      languages: string[];
      wrapper_selector: string;
    };
  }
}

export default function Translator() {
  useEffect(() => {
    // Settings untuk gtranslate element
    window.gtranslateSettings = {
      default_language: "id",
      native_language_names: true,
      languages: ["id", "en", "ar"],
      wrapper_selector: ".gtranslate_wrapper"
    };

    const script = document.createElement('script');
    script.src = 'https://cdn.gtranslate.net/widgets/latest/element.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="gtranslate_wrapper" />;
}
