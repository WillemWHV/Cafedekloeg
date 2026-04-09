"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FADE_UP, STAGGER_CONTAINER, SPRING_SNAPPY, SPRING_GENTLE, EASE_OUT_EXPO } from "@/lib/motion";
import MotionReveal from "./MotionReveal";

type FormState = "idle" | "sending" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const contactInfo = [
  {
    icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
    label: "Adres",
    value: "Libanonweg 18\n3061 KJ Rotterdam, Kralingen",
    href: "https://maps.google.com/?q=Libanonweg+18+Rotterdam",
    linkLabel: "Open in Google Maps",
  },
  {
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
    label: "Openingstijden",
    value: "Wo & Do  16:00 \u2013 23:00\nVr & Za   16:00 \u2013 00:00\nZo           15:00 \u2013 21:00\nMa & Di   Gesloten",
    href: null,
    linkLabel: null,
  },
  {
    icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
    label: "E-mail",
    value: "info@cafedekloeg.nl",
    href: "mailto:info@cafedekloeg.nl",
    linkLabel: "Stuur een e-mail",
  },
];

function Field({
  label,
  id,
  type = "text",
  multiline = false,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  multiline?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  const baseStyles = {
    background: "rgba(74,51,32,0.6)",
    border: "1px solid rgba(196,144,46,0.15)",
    color: "#F8F3E8",
    caretColor: "#C4902E",
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "rgba(196,144,46,0.45)";
    e.target.style.boxShadow = "0 0 0 3px rgba(196,144,46,0.08)";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "rgba(196,144,46,0.15)";
    e.target.style.boxShadow = "none";
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="label-caps text-[11px] block mb-2"
        style={{ color: "rgba(201,180,138,0.6)" }}
      >
        {label} <span style={{ color: "#8B2535" }} aria-hidden="true">*</span>
      </label>
      {multiline ? (
        <textarea
          id={id}
          rows={5}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
          placeholder={placeholder}
          className="w-full rounded-sm px-4 py-3 font-body text-sm resize-none focus:outline-none transition-all duration-200"
          style={baseStyles}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
          placeholder={placeholder}
          className="w-full rounded-sm px-4 py-3 font-body text-sm focus:outline-none transition-all duration-200"
          style={baseStyles}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      )}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [state, setState] = useState<FormState>("idle");
  const [serverMsg, setServerMsg] = useState("");

  const update = (field: keyof FormData) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        setState("success");
        setServerMsg(data.message);
        setForm({ name: "", email: "", message: "" });
      } else {
        setState("error");
        setServerMsg(data.message);
      }
    } catch {
      setState("error");
      setServerMsg("Er ging iets mis. Probeer het opnieuw.");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 section-contact overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        aria-hidden="true"
        style={{ background: "linear-gradient(90deg, transparent, rgba(196,144,46,0.3), transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <MotionReveal className="text-center mb-16">
          <p className="label-caps mb-4 vintage-badge" style={{ color: "#C4902E" }}>
            Reserveren of vragen?
          </p>
          <h2
            id="contact-heading"
            className="font-display font-bold leading-tight text-brand-chalk"
            style={{ fontSize: "clamp(2rem,6vw,3.5rem)" }}
          >
            Kom gewoon langs.
            <br />
            <span className="font-normal italic" style={{ fontSize: "0.72em", color: "rgba(201,180,138,0.55)" }}>
              Of stuur een berichtje.
            </span>
          </h2>
        </MotionReveal>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Contact info */}
          <MotionReveal className="md:col-span-2">
            <motion.div
              className="space-y-9"
              variants={STAGGER_CONTAINER}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {contactInfo.map(({ icon, label, value, href, linkLabel }) => (
                <motion.div key={label} className="flex gap-4" variants={FADE_UP}>
                  <motion.div
                    className="flex-shrink-0 w-9 h-9 rounded-sm flex items-center justify-center"
                    style={{ background: "rgba(107,26,42,0.45)", border: "1px solid rgba(196,144,46,0.15)" }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(196,144,46,0.35)" }}
                    transition={SPRING_GENTLE}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="#C4902E"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                    </svg>
                  </motion.div>
                  <div>
                    <p className="label-caps text-[11px] mb-1.5" style={{ color: "rgba(196,144,46,0.55)" }}>
                      {label}
                    </p>
                    <p
                      className="font-body text-sm leading-relaxed whitespace-pre-line"
                      style={{ color: "rgba(201,180,138,0.78)" }}
                    >
                      {value}
                    </p>
                    {href && linkLabel && (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="label-caps text-[11px] mt-1.5 inline-block hover:underline transition-colors"
                        style={{ color: "#D97148" }}
                        aria-label={`${linkLabel} (opent in nieuw tabblad)`}
                      >
                        {linkLabel} {"→"}
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Tagline */}
            <div className="pt-4 mt-9 border-t" style={{ borderColor: "rgba(196,144,46,0.1)" }}>
              <p
                className="font-body italic text-xs leading-relaxed"
                style={{ color: "rgba(201,180,138,0.35)" }}
              >
                Reserveren mag, maar spontaan binnenlopen is nog beter.
                Want bij De Kloeg draait het om het moment.
              </p>
            </div>
          </MotionReveal>

          {/* Form */}
          <MotionReveal delay={0.2} className="md:col-span-3">
            <div className="rounded-sm p-8 md:p-10 card-dark">
              <AnimatePresence mode="wait">
                {state === "success" ? (
                  <motion.div
                    key="success"
                    className="text-center py-8"
                    role="status"
                    aria-live="polite"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ background: "linear-gradient(135deg, #6B1A2A, #A8401E)" }}
                    >
                      <motion.svg
                        className="w-7 h-7 text-brand-chalk"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <motion.path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        />
                      </motion.svg>
                    </div>
                    <h3 className="font-display text-xl font-bold text-brand-chalk mb-2">Verstuurd!</h3>
                    <p className="font-body text-sm" style={{ color: "rgba(201,180,138,0.7)" }}>
                      {serverMsg}
                    </p>
                    <motion.button
                      onClick={() => {
                        setState("idle");
                        setServerMsg("");
                      }}
                      className="mt-6 label-caps text-[11px] hover:underline"
                      style={{ color: "#D97148" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      Nog een bericht sturen
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    noValidate
                    aria-label="Contactformulier"
                    className="space-y-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field
                        label="Naam"
                        id="contact-name"
                        value={form.name}
                        onChange={update("name")}
                        placeholder="Jouw naam"
                      />
                      <Field
                        label="E-mailadres"
                        id="contact-email"
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        placeholder="jij@voorbeeld.nl"
                      />
                    </div>
                    <Field
                      label="Bericht"
                      id="contact-message"
                      multiline
                      value={form.message}
                      onChange={update("message")}
                      placeholder="Reservering, vraag, of gewoon dag zeggen."
                    />

                    <AnimatePresence>
                      {state === "error" && serverMsg && (
                        <motion.p
                          className="font-body text-sm"
                          style={{ color: "#D97148" }}
                          role="alert"
                          initial={{ opacity: 0, x: 0 }}
                          animate={{ opacity: 1, x: [-4, 4, -4, 4, 0] }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          {serverMsg}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    <motion.button
                      type="submit"
                      disabled={state === "sending"}
                      aria-busy={state === "sending"}
                      className="w-full font-sans font-semibold text-sm tracking-widest uppercase py-4 rounded-sm text-brand-chalk disabled:opacity-60"
                      style={{
                        background: state === "sending" ? "#4A3320" : "linear-gradient(135deg, #6B1A2A 0%, #A8401E 100%)",
                      }}
                      whileHover={state !== "sending" ? { scale: 1.02, y: -1 } : {}}
                      whileTap={state !== "sending" ? { scale: 0.98 } : {}}
                      transition={SPRING_SNAPPY}
                    >
                      {state === "sending" ? (
                        <motion.span
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          Versturen\u2026
                        </motion.span>
                      ) : (
                        "Stuur bericht"
                      )}
                    </motion.button>

                    <p className="label-caps text-[10px] text-center" style={{ color: "rgba(201,180,138,0.3)" }}>
                      We antwoorden binnen een werkdag.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
