const weekHappen = [
  {
    title: "Fish & Chips",
    description: "Knapperig gebakken kabeljauw, huisgemaakte tartaarsaus, friet van het mes.",
    price: "€14,50",
    accent: "linear-gradient(135deg, #6B1A2A 0%, #A8401E 100%)",
    tagColor: "rgba(232,184,75,0.7)",
  },
  {
    title: "Rendang",
    description: "Smeuïge rundvleesstoofpot met kokos en Indonesische kruiden, rijst en atjar.",
    price: "€15,50",
    accent: "linear-gradient(135deg, #4A3320 0%, #7A5C40 100%)",
    tagColor: "rgba(213,113,72,0.75)",
  },
];

const borrelhappen = [
  { title: "Bitterballen",        price: "€6,50" },
  { title: "Kaas- en vleeswaar",  price: "€8,50" },
  { title: "Kroket van de dag",   price: "€5,00" },
  { title: "Zuurvlees met friet", price: "€13,50" },
];

const dranken = [
  { title: "ROTT.DROOM",       sub: "ROTT. Brouwers — lokaal bier",     dot: "#C4902E" },
  { title: "Pilsje van de tap",sub: "Vers getapt, altijd lekker",        dot: "#E8B84B" },
  { title: "Huiswijn",         sub: "Rood of wit, per glas of fles",     dot: "#8B2535" },
  { title: "Jenever",          sub: "Jong & oud, zoals het hoort",       dot: "#B5622A" },
];

export default function Menu() {
  return (
    <section id="menu" className="relative py-28 md:py-36 section-dark overflow-hidden" aria-labelledby="menu-heading">

      {/* Warm glow top-center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 pointer-events-none" aria-hidden="true"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(168,64,30,0.18) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="label-caps mb-4 vintage-badge" style={{ color: "#C4902E" }}>Eten &amp; drinken</p>
          <h2 id="menu-heading" className="font-display text-4xl md:text-5xl font-bold text-brand-chalk leading-tight">
            De kaart
          </h2>
          <div className="ornament-divider mt-6 max-w-xs mx-auto" style={{ color: "rgba(196,144,46,0.3)" }}>
            <span className="label-caps text-[10px] px-4" style={{ color: "rgba(196,144,46,0.45)" }}>
              wekelijks wisselend
            </span>
          </div>
        </div>

        {/* Featured weekhappen */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {weekHappen.map((item, i) => (
            <article
              key={item.title}
              className={`reveal reveal-delay-${i + 1} group relative rounded-sm overflow-hidden cursor-default transition-transform duration-400 hover:-translate-y-1`}
              style={{ background: item.accent }}
            >
              {/* Grain overlay */}
              <div className="absolute inset-0 dark-grain pointer-events-none" aria-hidden="true" />

              {/* Warm glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true"
                style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(232,184,75,0.15) 0%, transparent 70%)" }} />

              {/* Content */}
              <div className="relative p-8 md:p-10">
                {/* Corner ornament */}
                <div className="absolute top-4 right-4 w-6 h-6 border-t border-r" aria-hidden="true"
                  style={{ borderColor: "rgba(232,184,75,0.3)" }} />

                <span className="label-caps text-[10px] block mb-4" style={{ color: item.tagColor }}>
                  ✦ Weekhap
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-chalk mb-3">{item.title}</h3>
                <p className="font-body text-sm leading-relaxed mb-6" style={{ color: "rgba(201,180,138,0.82)" }}>
                  {item.description}
                </p>
                <p className="font-display text-xl font-bold" style={{ color: "#E8B84B" }}>{item.price}</p>

                {/* Bottom shimmer on hover */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-600"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(232,184,75,0.6), transparent)" }}
                  aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>

        {/* Two-column: borrelhappen + dranken */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Borrelhappen */}
          <div className="reveal reveal-delay-1">
            <h3 className="font-display text-2xl font-bold text-brand-chalk mb-1">Borrelhappen</h3>
            <div className="shimmer-bar mb-6" aria-hidden="true" />
            <ul className="space-y-4" role="list">
              {borrelhappen.map((item) => (
                <li key={item.title}
                  className="flex items-baseline justify-between gap-4 font-body text-sm group">
                  <span className="transition-colors duration-200 group-hover:text-brand-chalk" style={{ color: "rgba(201,180,138,0.78)" }}>
                    {item.title}
                  </span>
                  <span className="flex-1 border-b border-dotted" style={{ borderColor: "rgba(196,144,46,0.15)", marginBottom: "2px" }} aria-hidden="true" />
                  <span className="font-sans font-semibold tabular-nums whitespace-nowrap transition-colors duration-200 group-hover:text-brand-gold-bright"
                    style={{ color: "rgba(196,144,46,0.85)" }}>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dranken */}
          <div className="reveal reveal-delay-2">
            <h3 className="font-display text-2xl font-bold text-brand-chalk mb-1">Aan de tap &amp; glas</h3>
            <div className="shimmer-bar mb-6" aria-hidden="true" />
            <ul className="space-y-5" role="list">
              {dranken.map((item) => (
                <li key={item.title} className="flex items-start gap-3 group">
                  <div className="mt-2 w-2 h-2 rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-125"
                    style={{ background: item.dot }} aria-hidden="true" />
                  <div>
                    <p className="font-body font-medium text-sm text-brand-chalk">{item.title}</p>
                    <p className="label-caps text-[10px] mt-0.5" style={{ color: "rgba(201,180,138,0.4)" }}>{item.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-16 text-center reveal">
          <p className="font-body italic text-sm" style={{ color: "rgba(201,180,138,0.38)" }}>
            De weekhappen wisselen — volg ons op Instagram voor de laatste updates.
          </p>
        </div>
      </div>
    </section>
  );
}
