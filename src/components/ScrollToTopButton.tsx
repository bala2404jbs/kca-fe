"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button 
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 btn-gradient text-on-primary w-14 h-14 rounded-full shadow-2xl shadow-primary/40 focus:outline-none transition-all duration-500 ease-in-out flex items-center justify-center cursor-pointer hover:scale-110 hover:shadow-primary/60 hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <span className="material-symbols-outlined text-3xl font-medium">arrow_upward</span>
    </button>
  );
}
