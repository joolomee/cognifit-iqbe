# IQbe Webflow Prompts

> Pacote modular de **16 prompts** para recriar a landing IQbe (CogniFit) no Webflow. Design fiel ao Figma Make actual. **Master language: EN** (alinhado com o produto vivo em `brain.cognifit.com/IQ-test`). Fonte Plus Jakarta Sans alinhada com `cognifit.com/longevity`. Animações motion/react traduzidas para Webflow Interactions/GSAP. **SEO avançado** com JSON-LD (Organization, WebApplication, FAQPage, HowTo, MedicalWebPage, BreadcrumbList).

## Como usar

1. **Cola o prompt `00-design-system.md`** primeiro num Webflow novo (configura Variables, fonts, classes-base e SEO global).
2. **Recria cada secção pela ordem** abaixo, colando os prompts individuais num agente AI de design (ou usando como guia humano no Designer).
3. Cada prompt é **autocontido** — pode ser executado isoladamente. Para reduzir repetição, todos referenciam o `00-design-system.md`.
4. **Ordem de implementação recomendada** (Phase 1 conversão → Phase 2 trust → Phase 3 ciência):
   - **Phase 1 (conversão crítica):** `00`, `01`, `02`, `03`, `05`, `13`, `14`, `15`.
   - **Phase 2 (trust + dados):** `04`, `06`, `07`, `08`, `12`.
   - **Phase 3 (ciência + audiences):** `09`, `10`, `11`.

## Índice

| # | Ficheiro | Secção | Componente Figma Make |
|---|----------|--------|------------------------|
| 00 | [00-design-system.md](./00-design-system.md) | Design System (tokens, animações, partículas, scroll progress, SEO base) | App.tsx + ui.tsx + FloatingParticles.tsx |
| 01 | [01-header-navbar.md](./01-header-navbar.md) | Header / Navbar fixa | Layout.tsx → Navbar |
| 02 | [02-hero.md](./02-hero.md) | Hero com 3D Cube interactivo + 3 floating labels | IntroSections.tsx → Hero + InteractiveCube.tsx |
| 03 | [03-why-different.md](./03-why-different.md) | Why IQbe Is Different — comparison table | IntroSections.tsx → WhyDifferent |
| 04 | [04-what-is-iqbe.md](./04-what-is-iqbe.md) | What Is the IQbe Intelligence Test? — 6 features + quote | IntroSections.tsx → WhatIs |
| 05 | [05-how-it-works.md](./05-how-it-works.md) | How the IQ Test Works — 3 steps timeline | IntroSections.tsx → HowItWorks |
| 06 | [06-cognitive-skills.md](./06-cognitive-skills.md) | What Cognitive Skills Does It Measure? — 4 cards | DataSections.tsx → WhatItMeasures |
| 07 | [07-real-world-data.md](./07-real-world-data.md) | Backed by Large-Scale Real-World Use — 5 stats + bar chart | DataSections.tsx → RealWorldData |
| 08 | [08-score-meaning.md](./08-score-meaning.md) | What Your IQ Score Means — 5 score bands | DataSections.tsx → ScoreMeans |
| 09 | [09-validity-reliability.md](./09-validity-reliability.md) | Validity + Reliability — 6 stat cards + 3 accordions | ScienceSections.tsx → ValidityReliability |
| 10 | [10-why-it-matters.md](./10-why-it-matters.md) | Why IQbe Matters Beyond Traditional IQ Tests — 3 benefits | ScienceSections.tsx → WhyItMatters |
| 11 | [11-who-is-it-for.md](./11-who-is-it-for.md) | Who Is the IQbe Intelligence Test Aimed At? — 5 audiences | ScienceSections.tsx → WhoIsFor |
| 12 | [12-faq.md](./12-faq.md) | Frequently Asked Questions — 7 accordion items + FAQPage schema | ScienceSections.tsx → FAQ |
| 13 | [13-final-cta.md](./13-final-cta.md) | Final CTA — atmospheric background | FinalCTA.tsx |
| 14 | [14-footer.md](./14-footer.md) | Footer CogniFit (mega footer) | Layout.tsx → Footer |
| 15 | [15-seo-head.md](./15-seo-head.md) | SEO `<head>` global + JSON-LD (Organization · WebSite · WebApplication · MedicalWebPage · HowTo · FAQPage · BreadcrumbList) | SEO.tsx |

## Estrutura visual da landing (ordem das secções na página)

```
┌─────────────────────────────────────────┐
│  01 — Header (fixo)                     │
├─────────────────────────────────────────┤
│  02 — Hero (100svh)                     │
├─────────────────────────────────────────┤
│  03 — Why Different (comparison)         │
├─────────────────────────────────────────┤
│  04 — What Is IQbe (features + quote)    │
├─────────────────────────────────────────┤
│  05 — How It Works (3 steps)            │
├─────────── divider ─────────────────────┤
│  06 — Cognitive Skills (4 cards)        │
├─────────────────────────────────────────┤
│  07 — Real-World Data (stats + chart)   │
├─────────────────────────────────────────┤
│  08 — Score Meaning (5 bands)           │
├─────────── divider ─────────────────────┤
│  09 — Validity + Reliability             │
├─────────────────────────────────────────┤
│  10 — Why It Matters (3 benefits)       │
├─────────────────────────────────────────┤
│  11 — Who Is It For (5 audiences)       │
├─────────── divider ─────────────────────┤
│  12 — FAQ (7 questions)                 │
├─────────────────────────────────────────┤
│  13 — Final CTA                         │
├─────────────────────────────────────────┤
│  14 — Footer (mega)                     │
└─────────────────────────────────────────┘

Camadas globais (overlay):
  · 00 → FloatingParticles (z=0, fixed)
  · 00 → ScrollProgress (z=50, right side)
  · 00 → ScrollToTop (z=50, bottom-right)
  · 15 → SEO + JSON-LD (head)
```

## Tokens-chave (resumo)

```
Background     : #F4F7FB  (corpo)  ·  #FFFFFF (cards)  ·  #0A102E (footer)
Text primary   : #0A102E
Text body      : #4A5578
Text muted     : #8B95B5
Accent blue    : #0066FF → gradient → #00A3FF / #00E5FF
Accent teal    : #00D4AA  (validation, success)
Accent violet  : #7B61FF  (focus, highlights)
Accent gold    : #FFB800  (high range, statistic)
Border subtle  : rgba(0,102,255,0.10)
Shadow card    : 0 4px 20px rgba(0,102,255,0.03)
Shadow CTA     : 0 8px 20px rgba(0,102,255,0.25)
Radius card    : 24px
Radius pill    : 999px
Font           : 'Plus Jakarta Sans', 200-800
```

## Testes obrigatórios pós-launch

- [ ] **Lighthouse** (Mobile + Desktop) ≥ 90 em Performance / Accessibility / Best Practices / SEO.
- [ ] **Google Rich Results Test** — validar todos os JSON-LD (Organization, WebApplication, FAQPage, HowTo, BreadcrumbList, MedicalWebPage).
- [ ] **Schema.org Validator** — fallback validation.
- [ ] **WebPageTest** — LCP < 2.5s, CLS < 0.1, INP < 200ms.
- [ ] **WAVE / axe DevTools** — 0 errors, max 5 alerts.
- [ ] **3D Cube** — testar drag em iOS Safari, Android Chrome, desktop Chrome/Firefox/Safari/Edge.
- [ ] **prefers-reduced-motion** — confirmar fallbacks em todas as animações.
- [ ] **Hreflang** — verificar com Search Console se EN/PT/ES estão a alternar correctamente.
- [ ] **CTA tracking** — disparo de evento `cta_primary_click` no GA4 do hero, header e final CTA.

## Convenções de copy

- **Master language: EN.** Toda a copy nos prompts está em EN, alinhada com o site vivo. Versões PT-PT e ES podem ser derivadas em páginas separadas (com hreflang); não estão incluídas nestes prompts para manter foco no master.
- **Keywords obrigatórias** (manter sempre):
  - CogniFit QI Assessment
  - IQ test / intelligence test
  - brain test mental
  - mental health test
  - IQ intelligence
  - fluid intelligence
  - non-verbal IQ test
  - Raven's Standard Progressive Matrices
- **Hyphenation:** "non-verbal" (sempre com hífen).
- **Test duration:** "in minutes" (neutro, alinhar com produto antes de claim de "10 minutos").
- **Score range:** 40–160 (real-world dataset). 55–145 só em contexto técnico/whitepaper.

## Recursos referenciados

- Figma Make: https://www.figma.com/make/9KNKOyniUgd3OjrjYGnFFU/IQbe
- Figma Make publicado: https://denim-stain-86737240.figma.site
- Reference style: https://www.cognifit.com/longevity
- Target URL final: https://brain.cognifit.com/IQ-test
- Repo: https://github.com/joolomee/cognifit-iqbe
