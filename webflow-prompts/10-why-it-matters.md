# 10 — Why IQbe Matters Beyond Traditional IQ Tests

> Replica `WhyItMatters` (ScienceSections.tsx). Section header centrado + 3 benefit cards centered (icon-first, animação rotativa/scale/bob por card).

## Prompt completo

```
Cria a SECÇÃO "Why IQbe Matters Beyond Traditional IQ Tests" — argumentação editorial sobre o valor real do produto.

LAYOUT
- max-width 1200px, padding 40-64px vertical, padding lateral 24px.

SECTION HEADER
- H2: "Why IQbe Matters Beyond Traditional IQ Tests"
- Subtitle (max 750px centered):
  "Real-world cognition is not only about spotting a rule on a flat page. It also involves holding information in mind, manipulating it, planning the next step, and responding efficiently. IQbe was designed to bring those demands closer to the testing experience through interactive 3D problem solving."

GRID (mt 48px, max-width 1000px centered, grid 1/3 cols mobile/desktop, gap 24px)

3 cards centered (text-center). Cada um:
- SEM rounded, SEM border, SEM bg, SEM shadow no bloco. Padding interno 32px h-full, flex column items-center.
- Hover: translateY -4px (spring 300). Sem mudar bg.
- Hairlines 1px verticais rgba(0,102,255,0.10) entre os 3 blocks (em desktop, opcional).

ÍCONE (sem container/box)
- 40-48px (w-10 h-10 / w-12 h-12), cor #0066FF idle. SEM padding-box, SEM rounded, SEM bg.
- Group hover: cor pode shiftar para #00A3FF + scale 1.08.
- Microanimação infinita do ícone (varia por card):
  · Card 0: rotate [0,15,-15,0], 2.5s ease-in-out infinite.
  · Card 1: scale [1, 1.1, 1], 2.5s.
  · Card 2: translateY [0, -4, 0], 2.5s.

H3 título Plus Jakarta Sans 700, 20px, #0A102E, mb 8px.
Description 16px weight 500 line-height 1.6 #4A5578.

OS 3 CARDS:

1) Ícone Zap — "More dynamic"
   Desc: "than static paper tests"

2) Ícone Hand — "More engaging"
   Desc: "for digital users"

3) Ícone Globe2 — "Closer to real-world"
   Desc: "cognitive demands"

ANIMAÇÕES
- Section header: FadeIn standard.
- Cards: stagger delay i*0.1s.
- Hover: spring lift + ícone background swap.
- Microanimação do ícone: loop infinito.

ACESSIBILIDADE
- <section aria-labelledby="why-matters-title">.
- Cards como <article> com <h3>.
- Ícones aria-hidden="true".

SEO
- H2 com keyword "Traditional IQ Tests" (long-tail).
- JSON-LD ItemList com 3 ListItems.
- Cada card pode marcar entidade WebApplication.featureList.
```

## Notas Webflow

- Microanimações dos ícones com Webflow Interactions Element Trigger Page Loaded → Loop.
- Background swap do ícone: combo class no hover.
