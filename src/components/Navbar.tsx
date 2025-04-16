'use client';
import { useState } from 'react';
import { ChevronDown, Search, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
    {
      label: 'Beranda',
      href: '/',
    },
    {
      label: 'Paket Haji & Umroh',
      hasDropdown: true,
      submenus: [
        { label: 'Paket Reguler', href: '/paket/reguler' },
        { label: 'Paket VIP', href: '/paket/vip' },
        { label: 'Paket Ramadhan', href: '/paket/ramadhan' },
      ],
    },
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
        { label: 'Foto Perjalanan', href: '/galeri/foto' },
        { label: 'Testimoni Jamaah', href: '/galeri/testimoni' },
        { label: 'Artikel Islami', href: '/artikel' },
      ],
    },
    {
      label: 'Tentang Kami',
      hasDropdown: true,
      submenus: [
        { label: 'Profil Perusahaan', href: '/tentang/profil' },
        { label: 'Kontak', href: '/tentang/kontak' },
      ],
    },
  ];
  

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo Indosat" width={120} height={120} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.label} className="relative group">
              <button
                className="flex items-center gap-1 hover:text-yellow-500 transition-colors"
                onClick={() => item.hasDropdown && handleDropdown(item.label)}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown size={16} />}
              </button>

              {/* Dropdown - Desktop */}
                {item.hasDropdown && openDropdown === item.label && item.submenus && (
                  <div className="absolute top-full left-0 bg-white shadow-md mt-2 w-56 rounded-lg z-10 p-2">
                    {item.submenus.map((sub) => (
                      <Link key={sub.label} href={sub.href} className="block px-4 py-2 hover:bg-gray-100">
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}

            </li>
          ))}
        </ul>

        {/* Search & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <Search size={20} />
          </button>
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden mt-4 space-y-2 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.label} className="border-b pb-2">
              <button
                className="flex justify-between w-full text-left"
                onClick={() => item.hasDropdown && handleDropdown(item.label)}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown size={16} />}
              </button>

              {/* Dropdown - Mobile */}
                {item.hasDropdown && openDropdown === item.label && item.submenus && (
                  <div className="pl-4 mt-2 space-y-1">
                    {item.submenus.map((sub) => (
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
