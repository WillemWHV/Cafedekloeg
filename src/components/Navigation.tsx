"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { href: "#over-ons", label: "Over ons" },
  { href: "#menu", label: "De kaart" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActiveHash("#" + e.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    links.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-brand-oak/95 backdrop-blur-sm shadow-xl shadow-black/30 border-b border-brand-gold/10"
          : "bg-gradient-to-b from-brand-oak/60 to-transparent"
      }`}
    >
      {scrolled && (
        <div
          className="h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(196,144,46,0.5), transparent)" }}
          aria-hidden="true"
        />
      )}

      <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between" aria-label="Hoofdnavigatie">
        <a
          href="#"
          onClick={scrollToTop}
          aria-label="Café De Kloeg — naar boven"
          className="hover:opacity-80 transition-opacity flex-shrink-0 flex items-center gap-2.5"
        >
          <Image
            src="/logo-kloeg.png"
            alt="Logo van Cafe De Kloeg"
            width={36}
            height={36}
            className="w-9 h-9 rounded-sm object-cover"
            priority
          />
          <span className="font-display text-xl font-bold text-brand-chalk">DE KLOEG</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {links.map(({ href, label }) => (
            <li key={href}>
              <button
                onClick={() => handleNav(href)}
                className="label-caps text-[11px] transition-colors duration-200 relative group pb-0.5"
                style={{ color: activeHash === href ? "#E8B84B" : "rgba(201,180,138,0.8)" }}
                aria-current={activeHash === href ? "page" : undefined}
              >
                {label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px transition-all duration-300"
                  style={{
                    background: "#C4902E",
                    width: activeHash === href ? "100%" : "0%",
                  }}
                  aria-hidden="true"
                />
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNav("#contact")}
              className="label-caps text-[11px] text-brand-chalk px-5 py-2.5 rounded-sm transition-all duration-200 hover:-translate-y-px"
              style={{ background: "linear-gradient(135deg, #6B1A2A, #A8401E)" }}
            >
              Reserveer
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-brand-chalk p-2 rounded-sm hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden section-dark transition-all duration-300 overflow-hidden border-t border-brand-gold/10 ${
          menuOpen ? "max-h-96" : "max-h-0 border-transparent"
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="px-6 py-6 flex flex-col gap-5" role="list">
          {links.map(({ href, label }) => (
            <li key={href}>
              <button
                onClick={() => handleNav(href)}
                className="label-caps text-brand-parchment hover:text-brand-gold transition-colors w-full text-left py-1"
              >
                {label}
              </button>
            </li>
          ))}
          <li className="pt-4 border-t border-brand-gold/10">
            <button
              onClick={() => handleNav("#contact")}
              className="label-caps text-[11px] text-brand-chalk px-5 py-3 rounded-sm w-full transition-colors"
              style={{ background: "linear-gradient(135deg, #6B1A2A, #A8401E)" }}
            >
              Reserveer een tafel
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
