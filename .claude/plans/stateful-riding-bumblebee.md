# Cafe de Kloeg - Full Visual Upgrade with Motion

## Context
The website is already well-designed with a warm vintage aesthetic. This upgrade replaces all CSS-only animations with the `motion` library for smoother, more sophisticated interactions, and adds micro-interactions across all sections. The existing color palette, fonts, and cafe identity stay intact.

## New Files

### `src/lib/motion.ts` — Shared animation constants
- Easing curves, spring configs, reusable variants (FADE_UP, FADE_IN, STAGGER_CONTAINER)
- All components import from here for consistency

### `src/components/MotionReveal.tsx` — Replaces ScrollReveal
- Uses `useInView` from motion/react for per-element scroll-triggered animations
- Props: direction (up/down/left/right), delay, duration, once
- Respects `prefers-reduced-motion`

## Files to Modify

### `src/app/page.tsx` — Remove ScrollReveal wrapper
### `src/app/globals.css` — Remove `.reveal` CSS utilities
### `tailwind.config.ts` — Remove CSS animation keyframes (motion handles it now)

### `src/components/Hero.tsx` — Highest visual impact
- Parallax background via `useScroll` + `useTransform`
- Staggered text entrance (logo, headline, subtitle, CTAs appear sequentially)
- Animated CTA buttons (hover scale, tap feedback)
- Smooth scroll indicator (motion loops replace CSS bounce/pulse)
- Cinematic fade-out on scroll-away

### `src/components/Navigation.tsx`
- Smooth navbar background transition on scroll
- Animated active-section underline
- `AnimatePresence` mobile menu (smooth expand/collapse with staggered items)
- Button hover/tap animations

### `src/components/About.tsx` — Add "use client"
- MotionReveal on columns, staggered stat numbers
- Line-by-line poem reveal in quote card
- Animated decorative line

### `src/components/Menu.tsx` — Add "use client"
- Card hover: lift + shadow + shimmer line
- Staggered card entrance
- Subtle hover indent on list items

### `src/components/Reviews.tsx`
- Staggered review card entrance
- Card hover lift + shadow
- Star rating pop-in animation
- `AnimatePresence` for "lees meer" text expand

### `src/components/Contact.tsx`
- `AnimatePresence` for form/success state swap (with checkmark draw-on)
- Error state shake animation
- Submit button hover/tap + loading pulse
- Staggered contact info entrance

### `src/components/Footer.tsx` — Add "use client"
- Staggered column entrance
- Link hover slide effects
- Top shimmer bar scaleX reveal

## File to Delete
- `src/components/ScrollReveal.tsx` — Replaced by MotionReveal

## Verification
- Run `npm run dev` and check all sections animate on scroll
- Test mobile menu open/close animation
- Test contact form submit success/error states
- Check `prefers-reduced-motion` behavior
- Verify no hydration errors (all motion components have "use client")
- Test responsive layout at mobile/tablet/desktop breakpoints
