"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { name: "HOME", path: "/" },
  {
    name: "PROGRAMS",
    path: "/programs",
    isDropdown: true,
    subItems: [
      { name: "CBDP", path: "/program/cbdp" },
      { name: "FEEP", path: "/program/feep" },
      { name: "SEEP", path: "/program/seep" },
      { name: "AIP", path: "/program/aip" },
      { name: "VEDIC MATHS", path: "/program/vedic-maths" },
      { name: "HANDWRITING", path: "/program/handwriting" },
      { name: "ABACUS", path: "/program/abacus" },
      { name: "COMMUNICATIVE ENGLISH", path: "/program/communicative-english" },
    ],
  },
  { name: "INSTITUTIONS", path: "/institutions" },
  { name: "FRANCHISE", path: "/franchise" },
  { name: "TEACHER TRAINING", path: "/teacher-training" },
  { name: "EVENTS", path: "/events" },
  { name: "CONTACT US", path: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const checkAdmin = () => setIsAdmin(!!localStorage.getItem('admin_token'));
    checkAdmin();
    window.addEventListener('auth-change', checkAdmin);
    return () => window.removeEventListener('auth-change', checkAdmin);
  }, []);

  const isActive = (path: string) => pathname === path || (pathname.includes("/program/") && path === "/programs");

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl shadow-sm dark:shadow-none border-b border-outline-variant/20">
      <div className="flex justify-between items-center w-full px-4 md:px-8 py-4 max-w-screen-2xl mx-auto">
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold tracking-tight text-[#002366] dark:text-[#8ea6f0] shrink-0 mr-8"
        >
          KCA
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex flex-grow justify-center items-center gap-6 text-[13px] font-semibold tracking-wide">
          {navItems.map((item) => (
            <div key={item.name} className="relative group flex items-center h-full">
              {item.isDropdown ? (
                <div className={`flex items-center cursor-pointer group h-full pb-1 border-b-2 transition-all duration-300 ${
                  isActive(item.path) ? "border-[#046bd2]" : "border-transparent"
                }`}>
                  <Link
                    href={item.path}
                    className={`${
                      isActive(item.path)
                        ? "text-[#046bd2]"
                        : "text-slate-600 group-hover:text-[#046bd2]"
                    } transition-colors duration-300 uppercase whitespace-nowrap`}
                  >
                    {item.name}
                  </Link>
                  <span className={`material-symbols-outlined ml-1 text-[16px] transition-all duration-300 group-hover:rotate-180 ${
                    isActive(item.path) ? "text-[#046bd2]" : "text-slate-500 group-hover:text-[#046bd2]"
                  }`}>
                    expand_more
                  </span>

                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-[2px] w-48 bg-white border-t-2 border-[#046bd2] shadow-xl rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left flex flex-col z-50">
                    {item.subItems?.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.path}
                        className={`px-4 py-4 text-sm font-medium hover:bg-slate-50 transition-colors ${pathname === sub.path ? "text-[#046bd2] bg-slate-50" : "text-slate-700"}`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.path}
                  className={`${
                    pathname === item.path
                      ? "text-[#046bd2] border-b-2 border-[#046bd2]"
                      : "text-slate-600 hover:text-[#046bd2] border-b-2 border-transparent"
                  } transition-all duration-300 pb-1 uppercase whitespace-nowrap h-full flex items-center`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Admin Entry Point */}
          <Link
            href={isAdmin ? '/admin/leads' : '/admin/login'}
            className="hidden xl:flex items-center gap-2 px-4 py-2 rounded-full border-2 border-primary text-primary text-xs font-bold hover:bg-primary hover:text-white transition-all duration-200"
            title={isAdmin ? 'Go to Admin Dashboard' : 'Admin Login'}
          >
            <span className="material-symbols-outlined text-[16px]">{isAdmin ? 'admin_panel_settings' : 'lock'}</span>
            {isAdmin ? 'Dashboard' : 'Admin'}
          </Link>          <button
            className="xl:hidden p-2 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full max-h-[80vh] overflow-y-auto bg-white shadow-xl py-6 px-8 border-t border-outline-variant/10">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <div key={item.name} className="flex flex-col">
                {item.isDropdown ? (
                  <>
                    <div 
                      className="flex justify-between items-center cursor-pointer py-2 text-lg font-bold text-slate-800"
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                    >
                      <span>{item.name}</span>
                      <span className={`material-symbols-outlined transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`}>
                        expand_more
                      </span>
                    </div>
                    {openDropdown === item.name && (
                      <div className="flex flex-col pl-4 mt-2 space-y-3 border-l-2 border-primary/20">
                        {item.subItems?.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-base text-slate-600 hover:text-primary py-1"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-bold text-slate-800 hover:text-primary py-2"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href={isAdmin ? '/admin/leads' : '/admin/login'}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 mt-2 px-4 py-3 rounded-xl bg-primary/10 text-primary font-bold text-base"
            >
              <span className="material-symbols-outlined">{isAdmin ? 'admin_panel_settings' : 'lock'}</span>
              {isAdmin ? 'Admin Dashboard' : 'Admin Login'}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
