'use client';

import { useEffect } from 'react';

export default function Translator() {
  useEffect(() => {
    (window as any).gtranslateSettings = {
      default_language: 'id',
      native_language_names: true,
      languages: ['id', 'en', 'ar'],
      wrapper_selector: '.gtranslate_wrapper',
    };

    if (!document.getElementById('gtranslate-script')) {
      const script = document.createElement('script');
      script.id = 'gtranslate-script';
      script.src = 'https://cdn.gtranslate.net/widgets/latest/element.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        const existingScript = document.getElementById('gtranslate-script');
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
      };
    }
  }, []);

  return <div className="gtranslate_wrapper" />;
}
