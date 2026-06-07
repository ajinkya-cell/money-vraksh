"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
    { name: "Disclosure", href: "/disclosure" },
  ];

  return (
    <nav className="bg-surface-glass backdrop-blur-2xl fixed top-0 w-full shadow-sm z-50 transition-all duration-300 before:absolute before:bottom-0 before:left-1/4 before:right-1/4 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-primary/20 before:to-transparent before:content-['']">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto w-full">
        {/* Brand */}
        <Link
          href="/"
          className="font-headline-md text-headline-md font-bold text-primary flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
            account_balance
          </span>
          MoneyVraksh
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-all duration-200 font-body-md text-body-md ${
                  isActive
                    ? "text-primary font-bold border-b-2 border-primary pb-1"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Actions (Theme toggle & Get Started) */}
        <div className="flex items-center gap-4 relative">
          {/* Theme Dropdown Toggle */}
          <div className="relative">
            <button
              onClick={() => setThemeMenuOpen(!themeMenuOpen)}
              className="flex items-center justify-center p-2 rounded-full hover:bg-surface-container-high/50 text-on-surface-variant hover:text-primary transition-all duration-200 cursor-pointer"
              title="Switch Theme"
            >
              <span className="material-symbols-outlined">
                {theme === "midnight" ? "dark_mode" : theme === "truedark" ? "brightness_3" : "light_mode"}
              </span>
            </button>

            {themeMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setThemeMenuOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-40 glass-panel rounded-xl py-2 z-50 shadow-2xl animate-fade-in">
                  <button
                    onClick={() => {
                      setTheme("midnight");
                      setThemeMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer ${
                      theme === "midnight" ? "text-primary font-bold" : "text-on-surface-variant"
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm">dark_mode</span>
                    Midnight
                  </button>
                  <button
                    onClick={() => {
                      setTheme("truedark");
                      setThemeMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer ${
                      theme === "truedark" ? "text-primary font-bold" : "text-on-surface-variant"
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm">brightness_3</span>
                    True Dark
                  </button>
                  <button
                    onClick={() => {
                      setTheme("light");
                      setThemeMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer ${
                      theme === "light" ? "text-primary font-bold" : "text-on-surface-variant"
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm">light_mode</span>
                    Light
                  </button>
                </div>
              </>
            )}
          </div>

          <Link
            href="/contact"
            className="hidden md:block gradient-bg-primary text-background font-label-md text-label-md px-6 py-2.5 rounded-full hover:shadow-[0_0_15px_rgba(78,222,163,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Get Started
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-on-surface p-2 hover:bg-surface-container-high/50 rounded-full transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-[60px] bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
           <div className="absolute top-[60px] left-0 w-full glass-panel shadow-2xl py-6 px-6 z-50 flex flex-col gap-4 animate-slide-down md:hidden">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-body-md py-2 transition-all ${
                    isActive ? "text-primary font-bold border-l-4 border-primary pl-3" : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center gradient-bg-primary text-background font-label-md text-label-md py-3 rounded-xl mt-2 font-bold shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </>
      )}
    </nav>
  );
}
