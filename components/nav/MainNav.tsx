"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, type NavChildLink, type NavItem } from "@/data/navigation";

const linkClasses =
  "relative inline-flex min-h-11 items-center gap-1 whitespace-nowrap rounded-input px-3 text-body font-medium text-text-primary transition-colors duration-150 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-center after:rounded-full after:bg-primary after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100";

function isActive(pathname: string, item: NavItem) {
  if (item.href === "/") return pathname === "/";
  if (pathname === item.href) return true;
  if (item.children) return pathname.startsWith(`${item.href}/`);
  return false;
}

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="hidden xl:block">
      <ul className="flex items-center justify-center gap-1">
        {navItems.map((item) => {
          const active = isActive(pathname, item);

          if (item.children) {
            return (
              <li key={item.label}>
                <ServicesDropdown item={item} active={active} />
              </li>
            );
          }

          return (
            <li key={item.label}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`${linkClasses} ${active ? "text-primary after:scale-x-100" : "after:scale-x-0"}`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function ServicesDropdown({ item, active }: { item: NavItem; active: boolean }) {
  const children = item.children as NavChildLink[];
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  function openNow() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }

  function closeSoon() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  }

  function closeNow() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(false);
  }

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeNow();
        triggerRef.current?.focus();
      }
    }

    function onFocusOut(event: FocusEvent) {
      if (containerRef.current && !containerRef.current.contains(event.relatedTarget as Node)) {
        closeNow();
      }
    }

    const node = containerRef.current;
    document.addEventListener("keydown", onKeyDown);
    node?.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      node?.removeEventListener("focusout", onFocusOut);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative" onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls="services-submenu"
        onClick={() => (open ? closeNow() : openNow())}
        className={`${linkClasses} ${active ? "text-primary after:scale-x-100" : "after:scale-x-0"}`}
      >
        {item.label}
        <ChevronIcon className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <div
        id="services-submenu"
        inert={!open}
        className={`absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 transition-all duration-200 ease-out ${
          open ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
        }`}
      >
        <ul className="overflow-hidden rounded-card border border-border bg-surface p-2 shadow-lg">
          {children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                className="block min-h-11 rounded-input px-3 py-2.5 text-small text-text-primary transition-colors duration-150 hover:bg-surface-alt hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
