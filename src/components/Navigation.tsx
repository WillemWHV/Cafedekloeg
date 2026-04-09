"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { FADE_UP, STAGGER_CONTAINER, SPRING_SNAPPY, EASE_OUT_EXPO } from "@/lib/motion";

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
    <motion.header
      role="banner"
      className="fixed top-0 left-0 right-0 z-50"
      animate={{
        backgroundColor: scrolled ? "rgba(42,30,18,0.95)" : "rgba(42,30,18,0)",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "0 0px 0px rgba(0,0,0,0)",
        borderBottomColor: scrolled ? "rgba(196,144,46,0.1)" : "rgba(196,144,46,0)",
      }}
      transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
      style={{
        backdropFilter: scrolled ? "blur(4px)" : "none",
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
      }}
    >
      {scrolled && (
        <motion.div
          className="h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(196,144,46,0.5), transparent)" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          aria-hidden="true"
        />
      )}

      <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between" aria-label="Hoofdnavigatie">
        <a
          href="#"
          onClick={scrollToTop}
          aria-label="Cafe De Kloeg \u2014 naar boven"
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
                <motion.span
                  className="absolute -bottom-0.5 left-0 h-px"
                  style={{ background: "#C4902E" }}
                  animate={{ width: activeHash === href ? "100%" : "0%" }}
                  transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
                  aria-hidden="true"
                />
              </button>
            </li>
          ))}
          <li>
            <motion.button
              onClick={() => handleNav("#contact")}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={SPRING_SNAPPY}
              className="label-caps text-[11px] text-brand-chalk px-5 py-2.5 rounded-sm"
              style={{ background: "linear-gradient(135deg, #6B1A2A, #A8401E)" }}
            >
              Reserveer
            </motion.button>
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
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden section-dark border-t border-brand-gold/10 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
          >
            <motion.ul
              className="px-6 py-6 flex flex-col gap-5"
              role="list"
              variants={STAGGER_CONTAINER}
              initial="hidden"
              animate="visible"
            >
              {links.map(({ href, label }) => (
                <motion.li key={href} variants={FADE_UP}>
                  <button
                    onClick={() => handleNav(href)}
                    className="label-caps text-brand-parchment hover:text-brand-gold transition-colors w-full text-left py-1"
                  >
                    {label}
                  </button>
                </motion.li>
              ))}
              <motion.li variants={FADE_UP} className="pt-4 border-t border-brand-gold/10">
                <button
                  onClick={() => handleNav("#contact")}
                  className="label-caps text-[11px] text-brand-chalk px-5 py-3 rounded-sm w-full transition-colors"
                  style={{ background: "linear-gradient(135deg, #6B1A2A, #A8401E)" }}
                >
                  Reserveer een tafel
                </button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
