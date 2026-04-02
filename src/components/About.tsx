export default function About() {
  const stats = [
    { num: "2×", label: "Weekhap\nper week", color: "#A8401E" },
    { num: "100%", label: "Vers\nbereide schotels", color: "#C4902E" },
    { num: "Rott.", label: "Lokale\nbieren", color: "#6B1A2A" },
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
          <div className="reveal">
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

            {/* Decorative line */}
            <div className="flex items-center gap-3 mb-8" aria-hidden="true">
              <div className="h-px w-12" style={{ background: "linear-gradient(90deg, #A8401E, #C4902E)" }} />
              <div className="h-1.5 w-1.5 rounded-full" style={{ background: "#C4902E" }} />
              <div className="h-px w-6" style={{ background: "rgba(196,144,46,0.4)" }} />
            </div>

            <div className="space-y-5 font-body leading-relaxed text-[1.05rem]" style={{ color: "#4A3320" }}>
              <p>
                In het hart van Rotterdam Kralingen, op de Libanonweg, vind je De Kloeg.
                Een kroeg waar eten en drinken draait om puur genieten zonder poespas —
                zoals het hier altijd al was.
              </p>
              <p>
                Waar vroeger café De Wandeler de buurt bediende, zet De Kloeg diezelfde
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
                  <p
                    className="font-display text-3xl font-black leading-none mb-1.5 transition-transform duration-300 group-hover:scale-110"
                    style={{ color }}
                  >
                    {num}
                  </p>
                  <p
                    className="label-caps text-[10px] leading-snug whitespace-pre-line"
                    style={{ color: "#7A5C40" }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Quote card */}
          <div className="reveal reveal-delay-2">
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

              {/* Poem - Bebas Neue for Deelder text */}
              <blockquote className="font-bebas uppercase leading-snug text-3xl md:text-4xl space-y-0.5 tracking-wide">
                <p style={{ color: "#F8F3E8" }}>Kanen knagen,</p>
                <p style={{ color: "#F8F3E8" }}>hooien grazen,</p>
                <p style={{ color: "#C9B48A" }}>schaften makken.</p>
                <p className="mt-3" style={{ color: "#E8B84B" }}>Rotterdammers,</p>
                <p style={{ color: "#F8F3E8" }}>doen het gaarne</p>
                <p className="font-display italic text-xl mt-1" style={{ color: "rgba(201,180,138,0.6)" }}>
                  zolang het maar,
                </p>
                <p style={{ color: "#D97148" }}>géén tafelen wordt.</p>
              </blockquote>

              {/* Shimmer bar */}
              <div className="shimmer-bar mt-8" aria-hidden="true" />

              <p className="label-caps text-[10px] mt-4" style={{ color: "rgba(201,180,138,0.3)" }}>
                Kralingen · Rotterdam · Est. 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
