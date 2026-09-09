# Alimin Design System

Design system for **Alimin SpA** (aliminspa.cl) — a Chilean real-estate developer selling urbanized lots (200–390 m², rol propio individual) in **El Tabo, Litoral Central, V Región**. Live projects: **Lomas del Mar**, **Arena y Sol**, **Libertad y Alegría**. Their commercial differentiator is **legal certainty** (rol propio, loteo visado SAG, agua/luz certificadas) plus **direct financing** — sin banco, sin DICOM — aimed at Chilean families (35–65) from Santiago/Rancagua who fear "loteos brujos" scams.

## Single visual source of truth

Per the owner's instruction, **everything visual here is extracted exclusively from `aliminspa.cl/minipie`** — the MINI PIE campaign landing (source: `src/app/minipie/MiniPieClient.tsx` in the repo below). The rest of the site uses an older gold/teal theme (`src/styles/globals.css`); it was deliberately NOT used.

### Sources
- GitHub: **https://github.com/Nico-lab-cl/aliminspa** (branch `v2-web`) — Next.js site. Key file: `src/app/minipie/MiniPieClient.tsx` (the reference page, kept in this project at `src/app/minipie/` for consultation). Explore the repo further to build designs grounded in the real product.
- `uploads/alimin-design-skill_1.md` — the owner's own design/conversion skill doc (business context, buyer psychology, CTA architecture). Note: its Poppins/Helvetica palette is superseded by the minipie page (Montserrat/Roboto).
- `uploads/` — site plans (Planos Alimin.png), WhatsApp photos, flow diagram.

## CONTENT FUNDAMENTALS

**Language:** Chilean Spanish — clear, warm, direct. No legal jargon: "rol propio inscrito en el Conservador" becomes "la escritura queda a tu nombre, eres dueño de verdad".

**Voice:** a trusted advisor on your side, never pushy. Every section either kills a fear (¿es legal? ¿me estafan? ¿DICOM?) or feeds a desire (terreno propio cerca del mar, patrimonio familiar).

**Person:** brand speaks as **nosotros**, addresses the buyer as **tú** ("Asegura tu Cupo", "Tu terreno en el Litoral Central", "No te preocupes por tu DICOM").

**Casing:** CTAs in ALL CAPS Montserrat 700 ("ASEGURAR MI CUPO →"); kickers uppercase with wide tracking ("ELIGE TU TERRENO"); headlines sentence case except hero shout ("VUELVE MINI PIE").

**CTA copy pattern:** first person desire — "Quiero el terreno de 200 m² →", "Quiero mi terreno aquí →". Arrows (→, ↓) are part of button copy.

**Numbers:** Chilean formatting — $1.500.000, m² with superscript, "71 cuotas", "0% interés". Old price struck through in red next to new lime price. Prices in pesos, never UF ("Pesos, no en UF · precios fijos, sin sorpresas").

**Urgency (only if true):** "CUPOS LIMITADOS", "Última edición", "+50% de terrenos ya vendidos".

**Emoji:** used sparingly as functional icons in copy — 📍 distance pills, ✓/✅ confirmations, 🔒 privacy note, 🚗🏖🌲📈 map meta row, ⚠ urgency badge. Never decorative clusters.

**WhatsApp rule (non-negotiable):** every wa.me link carries a pre-filled contextual message: `https://wa.me/<NUM>?text=Hola%20<Asesor>%2C%20vengo%20de%20la%20web...` (project + origin + intent).

**Example headline stack (hero):**
> Badge: "PROMOCIÓN LIMITADA · ÚLTIMA EDICIÓN" → H1: "VUELVE **MINI PIE**" (shimmer green) → Sub: "La última edición. Tu terreno en el litoral central con el pie más accesible del mercado. Sin banco, sin interés."

## VISUAL FOUNDATIONS

**Color world:** dark-first. Sections live on deep navy (`#0e1a24`, `#0a1520`, `#12253a`) over full-bleed photography with heavy scrims; two light "breather" bands (`#f5f9f0` testimonials, `#eaf7d8→#e4f5d4` FAQ/marquee). Brand colors: azul profundo `#325366`, verde sólido `#4ba646`, verde suave `#6ac28f`, verde lima `#76d845` (the energy color — CTAs, live dots, frames, never large fills).

**Backgrounds:** full-bleed photo + dark gradient scrim (`rgba(10,21,32,.6–.87)`) + 1–2 soft radial green/blue glows (440px circles at corners, `rgba(118,216,69,.08)`). Video backgrounds in hero with crossfade scrollytelling.

**Type:** Montserrat 700–900 for headlines (tight tracking −.02 to −.035em, clamp() sizes), 600 for kickers (uppercase, +.12em), Roboto 300–400 for body (line-height 1.7, muted white opacities on dark). The signature hero trick: a shimmer gradient headline (`linear-gradient(90deg,#76d845,#4ba646,#76d845)` background-clip:text, `shimmerGold 3s linear infinite`).

**The green frame motif:** virtually every card, media block and pill carries a 1.5–2px border in translucent lime (`rgba(118,216,69,.25–.45)`), brightening on hover (.7–.8). This is THE identifying Alimin card treatment.

**Cards:** dark glass — `rgba(14,26,36,.75)` + `backdrop-filter: blur(16px)`, radius 20–24px, lime frame, deep shadow. On light bands: white cards, radius 18px, `#eef3ec` border, soft slate shadow `0 4px 20px rgba(50,83,102,.07)`.

**Section anatomy (repeat everywhere):** centered kicker (2px gradient rule — uppercase lime label — rule) → H2 clamp(1.8–2.6rem) → one muted sub-paragraph max-width ~520px → content grid → optional centered CTA.

**Corner radii:** pills 100px; form card 24px; cards 22px; media 20px; reviews 18px; icon tiles 16px; buttons 12–14px; inputs 10px; chips 8px.

**Shadows:** colored glows over neutral drops — CTAs glow lime (`0 6px 28px rgba(118,216,69,.38)`), WhatsApp glows green, dark media sits on `0 20px 60px rgba(0,0,0,.5)`.

**Gradients:** 135deg two-stop brand blends: CTA `#76d845→#4ba646`; deep submit `#325366→#4ba646`; WhatsApp `#25D366→#1aad54`; persistent nav `#3a9e48→#4ba646→#62c247`; quote card 155deg `#325366→#1a2b3d`.

**Motion:** one easing rules all — `cubic-bezier(.16,1,.3,1)`. Scroll-reveal: fade + translateY(28px), .65s, staggered .13s per child. Hero elements enter with `fadeInUp .55s` at +.1s increments. Live dots `pulseGreen` 2s. Client marquee `marqueeScroll 38s linear` with edge mask, pauses on hover. Video crossfades 1s ease. Nothing bouncy or abrupt.

**Hover states:** cards lift `translateY(-5px)` + stronger shadow + brighter lime border; images `scale(1.03)`; buttons `opacity .93` (global) or lift −2px. Press: no dedicated state (mobile-first).

**Transparency & blur:** glass everywhere on dark — badges over media use `rgba(10,18,28,.82)` + `blur(8px)`; form card `blur(24px)`; nav `blur(12px)`.

**Imagery:** real drone footage and real client photos, warm sunlit coastal tones. Protection = gradient scrims (up-fade `rgba(10,18,28,.92)→transparent`), not capsules. Photos never unscrimmed under text.

**Layout:** max-width 1160–1280px; section padding 72–80px 20px; grids `repeat(auto-fit,minmax(260–300px,1fr))` gap 16–24px; sticky mobile CTA patterns; fixed WhatsApp float bottom-right (58px circle, pulseGreen).

## ICONOGRAPHY

- **Icon system: inline Feather-style stroke SVGs** — 24px viewBox, `stroke="currentColor"` or `#76d845`, `stroke-width="2"`–`2.5`, round linecaps, no fill. Common glyphs: map-pin, clock, trending-up, check, layers, dollar, building, grid, phone, mail, volume. Use **Feather icons** (CDN or copied inline) as the matching set.
- **Icon containers:** 38–52px tiles, radius 10–16px, either `rgba(118,216,69,.15)` + lime border (list items) or `--grad-cta` gradient fill + lime glow (benefit bar).
- **Brand SVGs copied verbatim:** Google "G" (reviews), WhatsApp glyph (buttons/float) — see `components/` sources.
- **Emoji as icons:** 📍 (distance), ✓ ✅ (trust), 🔒, ⚠, 🚗 🏖 🌲 📈 — small functional accents only.
- **Logo:** `assets/logo-alimin-icon.png` (leaf triad icon, used in navs/footer at 44–54px) + wordmark "ALIMIN" set in Montserrat 900, tracking −.02em, white. Full color logo: `assets/logo-alimin-color.webp`. Never redraw the leaf mark.

## INDEX

- `styles.css` → imports `tokens/` (fonts, colors, typography, effects, motion, base)
- `guidelines/` — 17 specimen cards shown in the Design System tab (Colors ×6, Type ×3, Effects ×4, Spacing ×1, Brand ×3)
- `assets/` — logo (`logo-alimin-icon.png`, `logo-alimin-color.webp`), `plano-loteo.jpeg`, `advisors/` (Marcela, Orlando), `places/` (Playa El Tabo, Quebrada de Córdova, Isla Negra, Algarrobo), `clients/` (6 testimonial photos)
- `components/` — React primitives (inventory = what the minipie page defines), each with `.jsx` + `.d.ts` + `.prompt.md` + a `.card.html` specimen:
  - `actions/` — Button, WhatsAppButton, WhatsAppFloat
  - `display/` — SectionHeader, Badge, TrustCheck, BenefitItem, PriceChip, StatBlock
  - `cards/` — ReviewCard, QuoteCard, AdvisorCard, PlaceCard, FinancialTable
  - `forms/` — TextField, SelectField, TerrenoPicker, FaqItem
  - `navigation/` — Navbar, Footer
- `ui_kits/minipie/` — full interactive recreation of the MINI PIE landing (`index.html` + 7 section files: Hero, Benefits, Terrenos, Testimonials, Advisors, Faq, Form). Sections load as plain global-scope Babel scripts (no ES modules) and consume the compiled component bundle via `window.AliminDesignSystem_3498ac`.
- `reference/` — reference-only copies of the production source (`.txt` so they stay out of the bundle): full `MiniPieClient.tsx`, `page.tsx`, both `globals.css` variants, `constants.ts`, `layout.tsx`.
- `SKILL.md` — Claude Code skill entry point

**Intentional additions:** none. Component inventory maps 1:1 to patterns on the minipie page.

**Known gaps:** the page's hero/drone/testimonial **videos are not in the repo** (only referenced paths) — kits use photos + scrims as posters instead. Fonts load from Google Fonts CDN (production does the same); no font binaries ship here.

## CAVEATS & ASK

- I could not fetch the actual video assets (hero drone footage, testimonial clip) — they're referenced by path in the source but not committed to the repo I could read. The UI kit substitutes coastal photos + scrims where video would play. **If you can export those .mp4/.webm files, attach them and I'll wire them in exactly as the production scrollytelling does.**
- I deliberately used ONLY `aliminspa.cl/minipie` as the visual source per your instruction — the rest of the site (older gold/teal theme, `quienes-somos` micro-site, blog) was intentionally left out. If you want those brought in as a second visual system or reconciled into one, tell me which direction wins.
- Numbers (prices, cuotas, % financiado) are copied verbatim from the current Mini Pie promo — flag if this campaign has since changed and I'll refresh the tokens/specimens.
- **Please review the component cards and the Minipie UI kit and tell me what's off** — spacing, missing states (menu open, form error, FAQ open), or anything that doesn't match production close enough. I can iterate quickly with real feedback.
