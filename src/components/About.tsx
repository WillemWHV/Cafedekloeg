"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { FADE_UP, STAGGER_SLOW, STAGGER_CONTAINER, SPRING_GENTLE, EASE_OUT_EXPO } from "@/lib/motion";
import MotionReveal from "./MotionReveal";

export default function About() {
  const stats = [
    { num: "2\u00d7", label: "Weekhap\nper week", color: "#A8401E" },
    { num: "100%", label: "Vers\nbereide schotels", color: "#C4902E" },
    { num: "Rott.", label: "Lokale\nbieren", color: "#6B1A2A" },
  ];

  const poemRef = useRef(null);
  const poemInView = useInView(poemRef, { once: true, amount: 0.3 });

  const poemLines = [
    { text: "Kanen knagen,", color: "#F8F3E8" },
    { text: "hooien grazen,", color: "#F8F3E8" },
    { text: "schaften makken.", color: "#C9B48A" },
    { text: "Rotterdammers,", color: "#E8B84B", mt: true },
    { text: "doen het gaarne", color: "#F8F3E8" },
    { text: "zolang het maar,", color: "rgba(201,180,138,0.6)", italic: true, smaller: true },
    { text: "g\u00e9\u00e9n tafelen wordt.", color: "#D97148" },
  ];

  return (
    <section
      id="over-ons"
      className="relative py-28 md:py-36 section-about overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Decorative glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse at top right, rgba(196,144,46,0.07) 0%, transparent 65%)" }}
      />

      {/* Vertical accent line */}
      <div
        className="absolute left-0 top-16 bottom-16 w-px hidden lg:block"
        aria-hidden="true"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(181,98,42,0.3) 30%, rgba(196,144,46,0.4) 50%, rgba(181,98,42,0.3) 70%, transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Story */}
          <MotionReveal>
            <p className="label-caps mb-4" style={{ color: "#B5622A" }}>
              Over de Kloeg
            </p>

            <h2
              id="about-heading"
              className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6"
              style={{ color: "#2A1E12" }}
            >
              Vroeger De Wandeler,{" "}
              <em className="italic" style={{ color: "#A8401E" }}>
                nu De Kloeg.
              </em>
            </h2>

            {/* Animated decorative line */}
            <MotionReveal delay={0.2}>
              <div className="flex items-center gap-3 mb-8" aria-hidden="true">
                <div className="h-px w-12" style={{ background: "linear-gradient(90deg, #A8401E, #C4902E)" }} />
                <div className="h-1.5 w-1.5 rounded-full" style={{ background: "#C4902E" }} />
                <div className="h-px w-6" style={{ background: "rgba(196,144,46,0.4)" }} />
              </div>
            </MotionReveal>

            <div className="space-y-5 font-body leading-relaxed text-[1.05rem]" style={{ color: "#4A3320" }}>
              <p>
                In het hart van Rotterdam Kralingen, op de Libanonweg, vind je De Kloeg.
                Een kroeg waar eten en drinken draait om puur genieten zonder poespas —
                zoals het hier altijd al was.
              </p>
              <p>
                Waar vroeger cafe De Wandeler de buurt bediende, zet De Kloeg diezelfde
                traditie voort: ambachtelijk, eerlijk, en met de nuchtere Rotterdamse directheid
                die je nergens anders vindt.
              </p>
              <p>
                We laten ons inspireren door Jules Deelder. Want hier doe je het gewoon —{" "}
                <em className="italic font-semibold" style={{ color: "#6B1A2A" }}>
                  kanen, knagen, genieten.
                </em>
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {stats.map(({ num, label, color }) => (
                <div key={num} className="text-center group">
                  <motion.p
                    className="font-display text-3xl font-black leading-none mb-1.5"
                    style={{ color }}
                    whileHover={{ scale: 1.1 }}
                    transition={SPRING_GENTLE}
                  >
                    {num}
                  </motion.p>
                  <p
                    className="label-caps text-[10px] leading-snug whitespace-pre-line"
                    style={{ color: "#7A5C40" }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </MotionReveal>

          {/* Right: Quote card */}
          <MotionReveal delay={0.2}>
            <div className="relative rounded-sm overflow-hidden card-dark p-10 md:p-12">
              {/* Inner glow */}
              <div
                className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                aria-hidden="true"
                style={{ background: "radial-gradient(ellipse at 50% 120%, rgba(107,26,42,0.5) 0%, transparent 70%)" }}
              />

              {/* Corner decorations */}
              <div
                className="absolute top-5 left-5 w-7 h-7 border-t border-l"
                aria-hidden="true"
                style={{ borderColor: "rgba(196,144,46,0.35)" }}
              />
              <div
                className="absolute bottom-5 right-5 w-7 h-7 border-b border-r"
                aria-hidden="true"
                style={{ borderColor: "rgba(196,144,46,0.35)" }}
              />

              {/* Attribution */}
              <p className="label-caps text-[10px] mb-5" style={{ color: "rgba(196,144,46,0.5)" }}>
                — Jules Deelder
              </p>

              {/* Poem with staggered line reveal */}
              <blockquote
                ref={poemRef}
                className="font-display font-black uppercase leading-snug text-2xl md:text-3xl"
              >
                {poemLines.map((line, i) => (
                  <motion.p
                    key={i}
                    className={`${line.mt ? "mt-3" : ""} ${line.italic ? "font-normal italic" : ""} ${line.smaller ? "text-xl mt-1" : ""}`}
                    style={{ color: line.color }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={poemInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: EASE_OUT_EXPO }}
                  >
                    {line.text}
                  </motion.p>
                ))}
              </blockquote>

              {/* Shimmer bar */}
              <div className="shimmer-bar mt-8" aria-hidden="true" />

              <p className="label-caps text-[10px] mt-4" style={{ color: "rgba(201,180,138,0.3)" }}>
                Kralingen · Rotterdam · Est. 2024
              </p>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
