"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import Link from "next/link";

const links = [
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Offset for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else {
      window.location.href = `/${href}`;
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] animate-fade-in-up transition-all duration-300 ${
          isScrolled
            ? "bg-primary/95 border-b border-accent/10 py-2 shadow-sm"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col z-[1001]">
            <span className="font-space-grotesk font-bold text-2xl tracking-tight bg-accent-gradient bg-clip-text text-transparent">
              INFERNEX
            </span>
            <span className="text-[10px] tracking-[0.2em] text-text-secondary uppercase">
              AI Agency
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="text-sm font-medium text-text-primary hover:text-accent transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Actions (Desktop + Mobile) */}
          <div className="flex items-center gap-4 z-[1001]">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-card-border bg-card text-text-primary hover:border-accent transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, "#contact")}
              className="hidden md:flex h-10 items-center justify-center px-6 rounded-full bg-accent-gradient text-white text-sm font-semibold shadow-[0_0_15px_rgba(196,30,58,0.3)] hover:shadow-[0_0_25px_rgba(196,30,58,0.5)] hover:scale-105 transition-[transform,box-shadow] duration-300"
            >
              Book Demo
            </a>

            <button
              className="md:hidden w-10 h-10 flex items-center justify-center text-black dark:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[999] bg-primary flex flex-col justify-center items-center gap-8 transition-all duration-400 ease-in-out transform ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        {links.map((link, i) => (
          <div
            key={link.name}
            style={{ transitionDelay: mobileMenuOpen ? `${150 + i * 50}ms` : "0ms" }}
            className={`transition-all duration-500 transform ${
              mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="text-3xl font-space-grotesk font-bold text-text-primary hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          </div>
        ))}
        <div
          style={{ transitionDelay: mobileMenuOpen ? `${150 + links.length * 50}ms` : "0ms" }}
          className={`transition-all duration-500 transform ${
            mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#contact"
            onClick={(e) => handleAnchorClick(e, "#contact")}
            className="mt-4 flex h-14 items-center justify-center px-8 rounded-full bg-accent-gradient text-white text-lg font-semibold shadow-[0_0_15px_rgba(196,30,58,0.3)]"
          >
            Book Demo
          </a>
        </div>
      </div>
    </>
  );
}

