"use client";

import { useState } from "react";

interface Review {
  author: string;
  rating: number;
  text: string;
  timeAgo: string;
}

const fallbackReviews: Review[] = [
  {
    author: "Tripadvisor-recensent",
    rating: 5,
    text: "Meer dan een buurtcafé in Kralingen! Vroeger bekend als café De Wandeler, nu De Kloeg — met de sfeer van een ouderwetse gezellige buurtkroeg maar met de standaarden van nu qua ontwerp, menu en drankenkaart.",
    timeAgo: "recent",
  },
  {
    author: "Vaste buurtbewoner",
    rating: 5,
    text: "Elke dag een keuze uit verse dagschotels voor prijzen waar menig restaurant niet tegenop kan. Vanavond varkenskarbonade en Noordzeetong — heerlijk! En de friet ook.",
    timeAgo: "recent",
  },
  {
    author: "Kralingen-bezoeker",
    rating: 5,
    text: "Erg uitnodigend als buurtkroeg. Geen nee te zeggen aan de spijs- en drankenkaart. De Kloeg loopt altijd vol met buurtbewoners en nieuwe gasten — terecht!",
    timeAgo: "recent",
  },
];

function Stars({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
  const sz = size === "lg" ? "w-5 h-5" : "w-4 h-4";
  return (
    <div className="flex gap-0.5" aria-label={`${rating} van 5 sterren`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`${sz} flex-shrink-0`}
          viewBox="0 0 20 20"
          aria-hidden="true"
          style={{ fill: i <= rating ? "#E8B84B" : "rgba(201,180,138,0.2)" }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review, delay }: { review: Review; delay: number }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > 220;
  const displayText = isLong && !expanded ? review.text.slice(0, 220).trimEnd() + "…" : review.text;

  return (
    <article
      className="reveal group relative rounded-sm overflow-hidden hover:-translate-y-1 transition-all duration-300"
      style={{
        transitionDelay: `${delay}s`,
        background: "linear-gradient(155deg, #F2E8D5 0%, #EAD9BC 100%)",
        border: "1px solid rgba(196,144,46,0.12)",
      }}
    >
      {/* Hover effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 120%, rgba(107,26,42,0.07) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Quote mark */}
      <span
        className="absolute top-3 right-5 font-display text-7xl leading-none select-none pointer-events-none"
        style={{ color: "rgba(181,98,42,0.1)" }}
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <div className="relative p-7">
        <Stars rating={review.rating} />

        <blockquote className="font-body text-sm leading-relaxed mt-4 mb-5" style={{ color: "#4A3320" }}>
          &ldquo;{displayText}&rdquo;
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="ml-2 label-caps text-[10px] underline"
              style={{ color: "#A8401E" }}
              aria-expanded={expanded}
            >
              {expanded ? "minder" : "lees meer"}
            </button>
          )}
        </blockquote>

        <footer className="flex items-center gap-3">
          {/* Avatar */}
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-sans font-bold text-sm text-brand-chalk"
            style={{ background: "linear-gradient(135deg, #6B1A2A, #A8401E)" }}
            aria-hidden="true"
          >
            {review.author.charAt(0)}
          </div>
          <div>
            <p className="font-sans font-semibold text-sm" style={{ color: "#2A1E12" }}>
              {review.author}
            </p>
            <p className="label-caps text-[10px]" style={{ color: "#7A5C40" }}>
              {review.timeAgo} · Google
            </p>
          </div>
          {/* Google icon */}
          <svg className="ml-auto w-5 h-5 flex-shrink-0 opacity-25" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
        </footer>

        {/* Bottom accent line on hover */}
        <div
          className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
          style={{ background: "linear-gradient(90deg, #6B1A2A, #C4902E, transparent)" }}
          aria-hidden="true"
        />
      </div>
    </article>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative py-28 md:py-36 section-testimonials overflow-hidden"
      aria-labelledby="reviews-heading"
    >
      {/* Top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(181,98,42,0.3), transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="label-caps mb-4 vintage-badge" style={{ color: "#A8401E" }}>
            Wat ze zeggen
          </p>
          <h2
            id="reviews-heading"
            className="font-display text-4xl md:text-5xl font-bold leading-tight"
            style={{ color: "#2A1E12" }}
          >
            Praten doet de buurt.
          </h2>

          {/* Average rating */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <Stars rating={5} size="lg" />
            <span className="font-display text-2xl font-bold" style={{ color: "#2A1E12" }}>
              5.0
            </span>
            <span className="font-body text-sm" style={{ color: "#7A5C40" }}>
              op basis van Google reviews
            </span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {fallbackReviews.map((review, i) => (
            <ReviewCard key={review.author} review={review} delay={i * 0.08} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 reveal">
          <a
            href="https://g.page/cafedekloeg/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 label-caps text-[11px] hover:underline"
            style={{ color: "#A8401E" }}
          >
            Bekijk alle reviews op Google →
          </a>
        </div>
      </div>
    </section>
  );
}
