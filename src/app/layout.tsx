import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Khalifah Asia',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <div id="google_translate_element" style={{ display: "none" }}></div>

        {/* Script Google Translate */}
        <Script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="afterInteractive" />
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'id',
                includedLanguages: 'id,en',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
              }, 'google_translate_element');

              window.gtranslateSettings = {
                translatePage: function (lang) {
                  const frame = document.querySelector('iframe.goog-te-menu-frame');
                  if (!frame) return;

                  const frameDoc = frame.contentDocument || frame.contentWindow.document;
                  const langLinks = frameDoc.querySelectorAll('a');

                  for (const a of langLinks) {
                    if (a.innerText.toLowerCase().includes(lang.toLowerCase())) {
                      a.click();
                      break;
                    }
                  }
                }
              };
            }
          `}
        </Script>
      </body>
    </html>
  );
}
