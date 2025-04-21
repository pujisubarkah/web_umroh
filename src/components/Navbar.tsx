'use client';

import { useState } from 'react';
import { ChevronDown, Search, Menu, X, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  { label: 'Beranda', href: '/' },
  {
    label: 'Paket Haji',
    hasDropdown: true,
    submenus: [
      { label: 'Haji Plus', href: '/hajiplus' },
      { label: 'Haji Furoda', href: '/hajifuroda' },
    ],
  },
  {
    label: 'Paket Umroh',
    hasDropdown: true,
    submenus: [
      { label: 'Umroh Hemat', href: '/umroh/hemat' },
      { label: 'Umroh Reguler', href: '/umroh/reguler' },
      { label: 'Umroh Plus', href: '/umroh/plus' },
    ],
  },
  {
    label: 'Pembiayaan',
    hasDropdown: true,
    submenus: [
      { label: 'Pembiayaan Umroh', href: '/pembiayaan/umroh' },
      { label: 'Pembiayaan Haji', href: '/pembiayaan/haji' },
    ],
  },
  { label: 'Kalkulator Umroh', href: '/kalkulator' },
  {
    label: 'Promo',
    hasDropdown: true,
    submenus: [
      { label: 'Diskon Musim Haji', href: '/promo/haji' },
      { label: 'Early Bird Umroh', href: '/promo/umroh' },
    ],
  },
  {
    label: 'Galeri & Artikel',
    hasDropdown: true,
    submenus: [
      { label: 'Foto Perjalanan', href: '/foto' },
      { label: 'Testimoni Jamaah', href: '/testimoni' },
      { label: 'Artikel Islami', href: '/artikel' },
    ],
  },
  {
    label: 'Tentang Kami',
    hasDropdown: true,
    submenus: [
      { label: 'Profil Perusahaan', href: '/about' },
      { label: 'Kontak', href: '/kontak' },
    ],
  },
];

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

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const handleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const changeLanguage = (lang: string) => {
    if (window.gtranslateSettings?.translatePage) {
      window.gtranslateSettings.translatePage(lang);
    } else {
      console.warn('GTranslate not initialized');
    }
    setLanguageDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const LanguageSelector = () => (
    <div className="relative">
      <button onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}>
        <Globe size={24} />
      </button>
      {languageDropdownOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg p-2 z-50">
          <button
            className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
            onClick={() => changeLanguage('id')}
          >
            <Image src="/indonesia_flag.png" alt="Indonesia" width={20} height={14} />
            Indonesia
          </button>
          <button
            className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
            onClick={() => changeLanguage('en')}
          >
            <Image src="/uk_flag.png" alt="English" width={20} height={14} />
            English
          </button>
        </div>
      )}
    </div>
  );

  return (
    <nav className="bg-white shadow-md px-6 py-4 relative z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo KhalifahAsia"
            width={120}
            height={120}
            className="cursor-pointer transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.label} className="relative group">
              {item.hasDropdown ? (
                <button
                  className="flex items-center gap-1 hover:text-pink-500 transition-colors"
                  onClick={() => handleDropdown(item.label)}
                >
                  {item.label}
                  <ChevronDown size={16} />
                </button>
              ) : (
                <Link
                  href={item.href || '#'}
                  className="flex items-center gap-1 hover:text-pink-500 transition-colors"
                >
                  {item.label}
                </Link>
              )}
              {item.hasDropdown && openDropdown === item.label && (
                <div className="absolute top-full left-0 bg-white shadow-md mt-2 w-56 rounded-lg p-2 z-40">
                  {item.submenus?.map((sub) => (
                    <Link key={sub.label} href={sub.href} className="block px-4 py-2 hover:bg-gray-100">
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right section: Translator, Search, Mobile Toggle */}
        <div className="flex items-center gap-4">
          <LanguageSelector />
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <Search size={20} />
          </button>
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden mt-4 space-y-2 text-sm font-medium">
          <li className="border-b pb-2">
            <LanguageSelector />
          </li>
          {navItems.map((item) => (
            <li key={item.label} className="border-b pb-2">
              <button
                className="flex justify-between w-full text-left"
                onClick={() => item.hasDropdown && handleDropdown(item.label)}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown size={16} />}
              </button>
              {item.hasDropdown && openDropdown === item.label && (
                <div className="pl-4 mt-2 space-y-1">
                  {item.submenus?.map((sub) => (
                    <Link key={sub.label} href={sub.href} className="block hover:text-yellow-600">
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
