// KloegLogo — faithful SVG recreation of Café De Kloeg's branding:
// a circular vintage badge with "DE KLOEG" as the centrepiece,
// "EETCAFÉ" arcing above, "KRALINGEN · ROTTERDAM" arcing below,
// all enclosed in a double-ring border with hop/barley ornaments.

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizes = {
  sm: 52,
  md: 80,
  lg: 120,
  xl: 180,
};

export default function KloegLogo({
  variant = "light",
  size = "md",
  className = "",
}: LogoProps) {
  const px = sizes[size];
  const ink   = variant === "light" ? "#F8F3E8" : "#2A1E12"; // main text / line colour
  const gold  = "#C4902E";                                    // accent – same both variants
  const bgFill = "none";                                      // transparent background

  // Radius constants (within a 100×100 viewBox centred at 50,50)
  const R_OUTER   = 47;   // outer ring
  const R_INNER   = 43;   // inner ring
  const R_TEXT_T  = 37;   // top arc text radius (EETCAFÉ)
  const R_TEXT_B  = 37;   // bottom arc text radius (KRALINGEN · ROTTERDAM)
  const R_ORNA    = 40;   // ornament dots radius

  // Helper: point on a circle
  const pt = (r: number, angleDeg: number) => {
    const a = (angleDeg - 90) * (Math.PI / 180);
    return { x: 50 + r * Math.cos(a), y: 50 + r * Math.sin(a) };
  };

  // Arc path helper (SVG arc)
  const arc = (r: number, startDeg: number, endDeg: number, sweep = 1) => {
    const s = pt(r, startDeg);
    const e = pt(r, endDeg);
    const large = Math.abs(endDeg - startDeg) > 180 ? 1 : 0;
    return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} ${sweep} ${e.x} ${e.y}`;
  };

  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 100 100"
      fill={bgFill}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Café De Kloeg — Eetcafé Kralingen Rotterdam"
      className={className}
    >
      {/* ── Outer ring ─────────────────────────────────────── */}
      <circle cx="50" cy="50" r={R_OUTER} stroke={ink}  strokeWidth="0.6" strokeOpacity="0.5" />
      {/* ── Gold inner ring ─────────────────────────────────── */}
      <circle cx="50" cy="50" r={R_INNER} stroke={gold} strokeWidth="0.5" strokeOpacity="0.65" />

      {/* ── Ornament dots at 90° and 270° (sides) ──────────── */}
      {[90, 270].map((deg) => {
        const p = pt(R_ORNA, deg);
        return <circle key={deg} cx={p.x} cy={p.y} r="1.2" fill={gold} fillOpacity="0.7" />;
      })}

      {/* ── Small tick marks between rings at top & bottom ─── */}
      {[0, 180].map((deg) => {
        const outer = pt(R_OUTER, deg);
        const inner = pt(R_INNER + 1, deg);
        return (
          <line key={deg}
            x1={outer.x} y1={outer.y}
            x2={inner.x} y2={inner.y}
            stroke={gold} strokeWidth="0.5" strokeOpacity="0.5"
          />
        );
      })}

      {/* ── EETCAFÉ arced along top ─────────────────────────── */}
      <defs>
        <path id="arcTop" d={arc(R_TEXT_T, -145, -35)} />
        <path id="arcBot" d={arc(R_TEXT_B, 35, 145)} />
      </defs>
      <text
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="6.2"
        fontWeight="400"
        letterSpacing="3.5"
        fill={ink}
        fillOpacity="0.7"
      >
        <textPath href="#arcTop" startOffset="50%" textAnchor="middle">
          EETCAFÉ
        </textPath>
      </text>

      {/* ── KRALINGEN · ROTTERDAM arced along bottom ─────────── */}
      <text
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="4.2"
        fontWeight="400"
        letterSpacing="1.5"
        fill={ink}
        fillOpacity="0.5"
      >
        <textPath href="#arcBot" startOffset="50%" textAnchor="middle">
          KRALINGEN · ROTTERDAM
        </textPath>
      </text>

      {/* ── Thin horizontal rules flanking "DE" ─────────────── */}
      <line x1="19" y1="44" x2="31" y2="44" stroke={gold} strokeWidth="0.4" strokeOpacity="0.5" />
      <line x1="69" y1="44" x2="81" y2="44" stroke={gold} strokeWidth="0.4" strokeOpacity="0.5" />

      {/* ── DE (smaller, above) ─────────────────────────────── */}
      <text
        x="50" y="46"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="8"
        fontWeight="700"
        letterSpacing="4"
        fill={ink}
        fillOpacity="0.8"
      >
        DE
      </text>

      {/* ── KLOEG (dominant wordmark) ────────────────────────── */}
      <text
        x="50" y="61"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="19"
        fontWeight="900"
        letterSpacing="1"
        fill={ink}
      >
        KLOEG
      </text>

      {/* ── Thin rule below KLOEG ───────────────────────────── */}
      <line x1="20" y1="69" x2="80" y2="69" stroke={gold} strokeWidth="0.4" strokeOpacity="0.5" />
    </svg>
  );
}
