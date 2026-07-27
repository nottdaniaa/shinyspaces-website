"use client";

import { useEffect, useState, type ReactNode } from "react";

export function StickyHeaderChrome({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    function updateScrolled() {
      setScrolled(window.scrollY > 4);
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateScrolled);
        ticking = true;
      }
    }

    updateScrolled();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-background transition-[box-shadow,border-color] duration-200 ease-out ${
        scrolled ? "border-border shadow-md" : "border-divider shadow-none"
      }`}
    >
      {children}
    </header>
  );
}
