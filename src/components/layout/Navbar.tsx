"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User } from "lucide-react";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/event", label: "Lomba" },
  { href: "/buku", label: "Toko" },
  { href: "/nominasi", label: "Informasi" },
  { href: "/tentang-kami", label: "Tentang Kami" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-center relative">
        <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold text-gray-600">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? "text-brand-maroon font-bold"
                  : "hover:text-brand-maroon transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="absolute right-4 sm:right-6 lg:right-8 flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:text-gray-900" aria-label="Cari">
            <Search className="w-4 h-4" />
          </button>
          <Link
            href="/login"
            className="flex items-center space-x-2 text-xs font-bold border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors"
          >
            <User className="w-4 h-4 text-gray-600" />
            <span>MASUK</span>
          </Link>
        </div>
      </div>
    </header>
  );
}