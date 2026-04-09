"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { FADE_UP, STAGGER_SLOW, SPRING_SNAPPY, EASE_OUT_EXPO } from "@/lib/motion";

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.97]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Welkom bij Cafe De Kloeg"
    >
      {/* Landing image with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Image
          src="/landing-exterior.png"
          alt="Buitenkant van Cafe De Kloeg in Kralingen"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(42,30,18,0.82) 0%, rgba(74,51,32,0.58) 50%, rgba(42,30,18,0.82) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(20, 12, 6, 0.5)" }}
        aria-hidden="true"
      />

      {/* Warm color grading */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 10% 90%, rgba(107,26,42,0.55) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 90% 10%, rgba(168,64,30,0.3) 0%, transparent 55%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 30%, rgba(12,7,3,0.6) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Top accent stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{
          background: "linear-gradient(90deg, transparent 0%, #6B1A2A 15%, #C4902E 50%, #6B1A2A 85%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        style={{ opacity: contentOpacity, scale: contentScale }}
      >
        <motion.div
          variants={STAGGER_SLOW}
          initial="hidden"
          animate="visible"
        >
          {/* Logo text */}
          <motion.div variants={FADE_UP} className="flex justify-center mb-8">
            <div className="text-center">
              <p className="text-brand-gold text-sm tracking-[0.3em] uppercase mb-2">Eetcafe</p>
              <h2 className="font-display text-6xl md:text-8xl font-black text-brand-chalk">DE KLOEG</h2>
              <p className="text-brand-parchment/60 text-sm tracking-[0.2em] uppercase mt-2">Kralingen · Rotterdam</p>
            </div>
          </motion.div>

          {/* Shimmer bar */}
          <motion.div variants={FADE_UP}>
            <div className="shimmer-bar max-w-[200px] mx-auto mb-7" aria-hidden="true" />
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            variants={FADE_UP}
            className="label-caps text-brand-gold mb-5 vintage-badge"
          >
            Eetcafe · Kralingen · Rotterdam
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={FADE_UP}
            className="font-display font-black leading-[1.06] text-brand-chalk mb-5"
            style={{ fontSize: "clamp(2.2rem, 7vw, 4.8rem)" }}
          >
            Een kroeg{" "}
            <em
              className="not-italic"
              style={{
                background: "linear-gradient(135deg, #C55B38 0%, #E8B84B 45%, #C4902E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              zonder poespas.
            </em>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={FADE_UP}
            className="font-body text-lg md:text-xl text-brand-parchment/85 max-w-lg mx-auto leading-relaxed mb-10"
          >
            Verse dagschotels, lokale bieren en een goed glas wijn.
            Gewoon lekker zitten — zoals Rotterdammers dat graag doen.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={SPRING_SNAPPY}
              className="group relative inline-block overflow-hidden rounded-sm font-sans font-semibold text-sm tracking-widest uppercase px-9 py-4 text-brand-chalk shadow-warm-lg"
              style={{
                background: "linear-gradient(135deg, #6B1A2A 0%, #A8401E 100%)",
              }}
            >
              <span className="relative z-10">Reserveer een tafel</span>
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, #8B2535 0%, #C55B38 100%)",
                }}
                aria-hidden="true"
              />
            </motion.a>
            <motion.a
              href="#menu"
              whileHover={{ borderColor: "#C4902E", color: "#E8B84B" }}
              whileTap={{ scale: 0.97 }}
              transition={SPRING_SNAPPY}
              className="inline-block border border-brand-parchment/35 text-brand-parchment rounded-sm font-sans font-semibold text-sm tracking-widest uppercase px-9 py-4 backdrop-blur-sm"
            >
              Bekijk de kaart
            </motion.a>
          </motion.div>

          {/* Hours strip */}
          <motion.div variants={FADE_UP} className="mt-12 flex flex-wrap justify-center gap-x-7 gap-y-1.5">
            {[
              ["Wo\u2013Do", "16\u201323u"],
              ["Vr\u2013Za", "16\u201300u"],
              ["Zo", "15\u201321u"],
            ].map(([day, time]) => (
              <span key={day} className="label-caps text-brand-parchment/35 text-[10px]">
                {day} <span className="text-brand-gold/55">{time}</span>
              </span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <motion.div
          className="w-px h-10"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(196,144,46,0.5))",
          }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.svg
          className="w-3.5 h-3.5"
          fill="none"
          stroke="#C4902E"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          style={{ opacity: 0.5 }}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </motion.svg>
      </div>

      {/* Bottom rule */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(139,37,53,0.5), transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
