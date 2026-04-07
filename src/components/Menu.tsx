"use client";

import { motion } from "motion/react";
import { FADE_UP, STAGGER_CONTAINER, SPRING_GENTLE, EASE_OUT_EXPO } from "@/lib/motion";
import MotionReveal from "./MotionReveal";

const weekHappen = [
  {
    title: "Fish & Chips",
    description: "Knapperig gebakken kabeljauw, huisgemaakte tartaarsaus, friet van het mes.",
    price: "\u20ac14,50",
    accent: "linear-gradient(135deg, #6B1A2A 0%, #A8401E 100%)",
    tagColor: "rgba(232,184,75,0.7)",
  },
  {
    title: "Rendang",
    description: "Smeu\u00efge rundvleesstoofpot met kokos en Indonesische kruiden, rijst en atjar.",
    price: "\u20ac15,50",
    accent: "linear-gradient(135deg, #4A3320 0%, #7A5C40 100%)",
    tagColor: "rgba(213,113,72,0.75)",
  },
];

const borrelhappen = [
  { title: "Bitterballen", price: "\u20ac6,50" },
  { title: "Kaas- en vleeswaar", price: "\u20ac8,50" },
  { title: "Kroket van de dag", price: "\u20ac5,00" },
  { title: "Zuurvlees met friet", price: "\u20ac13,50" },
];

const dranken = [
  { title: "ROTT.DROOM", sub: "ROTT. Brouwers \u2014 lokaal bier", dot: "#C4902E" },
  { title: "Pilsje van de tap", sub: "Vers getapt, altijd lekker", dot: "#E8B84B" },
  { title: "Huiswijn", sub: "Rood of wit, per glas of fles", dot: "#8B2535" },
  { title: "Jenever", sub: "Jong & oud, zoals het hoort", dot: "#B5622A" },
];

export default function Menu() {
  return (
    <section
      id="menu"
      className="relative py-28 md:py-36 section-dark overflow-hidden"
      aria-labelledby="menu-heading"
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(168,64,30,0.18) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <MotionReveal className="text-center mb-16">
          <p className="label-caps mb-4 vintage-badge" style={{ color: "#C4902E" }}>
            Eten &amp; drinken
          </p>
          <h2
            id="menu-heading"
            className="font-display text-4xl md:text-5xl font-bold text-brand-chalk leading-tight"
          >
            De kaart
          </h2>
          <div className="ornament-divider mt-6 max-w-xs mx-auto" style={{ color: "rgba(196,144,46,0.3)" }}>
            <span className="label-caps text-[10px] px-4" style={{ color: "rgba(196,144,46,0.45)" }}>
              wekelijks wisselend
            </span>
          </div>
        </MotionReveal>

        {/* Featured weekhappen */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {weekHappen.map((item, i) => (
            <MotionReveal key={item.title} delay={i * 0.1}>
              <motion.article
                className="group relative rounded-sm overflow-hidden cursor-default"
                style={{ background: item.accent }}
                whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(0,0,0,0.3)" }}
                transition={SPRING_GENTLE}
              >
                {/* Grain overlay */}
                <div className="absolute inset-0 dark-grain pointer-events-none" aria-hidden="true" />

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  aria-hidden="true"
                  style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(232,184,75,0.15) 0%, transparent 70%)" }}
                />

                {/* Content */}
                <div className="relative p-8 md:p-10">
                  {/* Corner ornament */}
                  <div
                    className="absolute top-4 right-4 w-6 h-6 border-t border-r"
                    aria-hidden="true"
                    style={{ borderColor: "rgba(232,184,75,0.3)" }}
                  />

                  <span className="label-caps text-[10px] block mb-4" style={{ color: item.tagColor }}>
                    {"✦"} Weekhap
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-chalk mb-3">
                    {item.title}
                  </h3>
                  <p
                    className="font-body text-sm leading-relaxed mb-6"
                    style={{ color: "rgba(201,180,138,0.82)" }}
                  >
                    {item.description}
                  </p>
                  <p className="font-display text-xl font-bold" style={{ color: "#E8B84B" }}>
                    {item.price}
                  </p>

                  {/* Bottom shimmer on hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(232,184,75,0.6), transparent)" }}
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                    aria-hidden="true"
                  />
                </div>
              </motion.article>
            </MotionReveal>
          ))}
        </div>

        {/* Two columns: borrelhappen + dranken */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Borrelhappen */}
          <MotionReveal delay={0.1}>
            <h3 className="font-display text-2xl font-bold text-brand-chalk mb-1">Borrelhappen</h3>
            <div className="shimmer-bar mb-6" aria-hidden="true" />
            <motion.ul
              className="space-y-4"
              role="list"
              variants={STAGGER_CONTAINER}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {borrelhappen.map((item) => (
                <motion.li
                  key={item.title}
                  variants={FADE_UP}
                  className="flex items-baseline justify-between gap-4 font-body text-sm group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <span
                    className="transition-colors duration-200 group-hover:text-brand-chalk"
                    style={{ color: "rgba(201,180,138,0.78)" }}
                  >
                    {item.title}
                  </span>
                  <span
                    className="flex-1 border-b border-dotted"
                    style={{ borderColor: "rgba(196,144,46,0.15)", marginBottom: "2px" }}
                    aria-hidden="true"
                  />
                  <span
                    className="font-sans font-semibold tabular-nums whitespace-nowrap transition-colors duration-200 group-hover:text-brand-gold-bright"
                    style={{ color: "rgba(196,144,46,0.85)" }}
                  >
                    {item.price}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </MotionReveal>

          {/* Dranken */}
          <MotionReveal delay={0.2}>
            <h3 className="font-display text-2xl font-bold text-brand-chalk mb-1">Aan de tap &amp; glas</h3>
            <div className="shimmer-bar mb-6" aria-hidden="true" />
            <motion.ul
              className="space-y-5"
              role="list"
              variants={STAGGER_CONTAINER}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {dranken.map((item) => (
                <motion.li key={item.title} variants={FADE_UP} className="flex items-start gap-3 group">
                  <motion.div
                    className="mt-2 w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: item.dot }}
                    whileHover={{ scale: 1.3 }}
                    transition={SPRING_GENTLE}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-body font-medium text-sm text-brand-chalk">{item.title}</p>
                    <p className="label-caps text-[10px] mt-0.5" style={{ color: "rgba(201,180,138,0.4)" }}>
                      {item.sub}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </MotionReveal>
        </div>

        {/* Footer note */}
        <MotionReveal className="mt-16 text-center">
          <p className="font-body italic text-sm" style={{ color: "rgba(201,180,138,0.38)" }}>
            De weekhappen wisselen — volg ons op Instagram voor de laatste updates.
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
