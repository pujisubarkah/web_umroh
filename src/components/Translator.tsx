// components/Translator.tsx
'use client'; // karena kita bakal pakai useEffect (client-side only)

import { useEffect } from 'react';

export default function Translator() {
  useEffect(() => {
    // Script config-nya
    const settingScript = document.createElement('script');
    settingScript.innerHTML = `
      window.gtranslateSettings = {
        default_language: "id",
        native_language_names: true,
        languages: ["id", "en", "ar"],
        wrapper_selector: ".gtranslate_wrapper"
      };
    `;
    document.body.appendChild(settingScript);

    // Script float.js-nya
    const widgetScript = document.createElement('script');
    widgetScript.src = 'https://cdn.gtranslate.net/widgets/latest/float.js';
    widgetScript.defer = true;
    document.body.appendChild(widgetScript);

    return () => {
      document.body.removeChild(settingScript);
      document.body.removeChild(widgetScript);
    };
  }, []);

  return <div className="gtranslate_wrapper" />;
}
