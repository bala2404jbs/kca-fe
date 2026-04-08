"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Programs", path: "/programs" },
  { name: "About", path: "/about" },
  { name: "Franchise", path: "/franchise" },
  { name: "Training", path: "/teacher-training" },
  { name: "Events", path: "/events" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm dark:shadow-none">
      <div className="flex justify-between items-center w-full px-4 md:px-8 py-4 max-w-screen-2xl mx-auto">
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold tracking-tight text-[#002366] dark:text-[#8ea6f0]"
        >
          Kids Career Academy
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`${
                isActive(link.path)
                  ? "text-[#002366] font-bold border-b-2 border-[#002366]"
                  : "text-slate-600 font-medium hover:text-[#002366]"
              } transition-all duration-300 pb-1`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push("/book-demo")}
            className="hidden sm:block btn-gradient text-on-primary font-semibold px-6 py-2.5 rounded-full hover:scale-95 duration-150 transition-all shadow-lg"
          >
            Book Free Demo
          </button>
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-surface shadow-xl py-6 px-8 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="block text-lg font-bold text-on-surface hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => {
              setIsMenuOpen(false);
              router.push("/book-demo");
            }}
            className="w-full btn-gradient text-on-primary font-bold py-4 rounded-full"
          >
            Book Free Demo
          </button>
        </div>
      )}
    </nav>
  );
}
