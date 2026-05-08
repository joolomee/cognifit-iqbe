# 04 — What Is the IQbe Intelligence Test?

> Replica `WhatIs` (IntroSections.tsx). H2 left-aligned + parágrafo introdutório, grid 3 colunas com 6 feature cards (ícone com hover swap + microanimação) e citação editorial em card destacado.

## Prompt completo

```
Cria a SECÇÃO "What Is the IQbe Intelligence Test?" — explicação editorial do produto.

LAYOUT
- <section id="what-is-it" scroll-mt 96px>.
- max-width 1200px, padding 40-64px vertical, padding lateral 24px.

CABEÇALHO (left-aligned, max-width 800px, mb 48px)
- H2 (Plus Jakarta Sans 700, clamp 36px-52px, leading-tight, tracking-tight, #0A102E, mb 24px):
  "What Is the IQbe Intelligence Test?"
- Body (18px weight 400 line-height 1.6 #4A5578):
  "IQbe is a digital, non-verbal IQ test designed to estimate fluid intelligence through interactive 3D problem solving. Inspired by Raven's Progressive Matrices, it does more than ask you to spot a pattern — it measures how you analyze, manipulate, and solve visual problems efficiently."

GRID FEATURES (mt 24px, mb 48px, grid 1/2/3 colunas mobile/tablet/desktop, gap 24px)

6 feature blocks. SEM CARD/RECTÂNGULO:
- SEM rounded, SEM border, SEM bg, SEM shadow no bloco.
- Padding interno 16-24px (respiração), h-full, flex column items-start gap 20px.
- Hover: translateY -4px (spring 300/20). Sem alterar bg/border (já não existem).
- Hairlines 1px rgba(0,102,255,0.10) entre blocos da grid (linhas verticais entre cols + horizontais entre rows).

Ícone (sem container): 32-40px, cor #0066FF idle. SEM padding-box, SEM rounded, SEM bg, SEM shadow.
Group hover: ícone scale 1.08 + cor pode shiftar para #00A3FF.
Microanimação infinita do ícone (alterna entre cards):
- Cards 0/2/4 (par): rotate [0,10,-10,0] em 3s ease-in-out infinite.
- Cards 1/3/5 (ímpar): translateY [0,-3,0] em 3s ease-in-out infinite.

Title: H3 Plus Jakarta Sans 700, 20px, #0A102E, mb 12px.
Description: 15px weight 400 line-height 1.6 #4A5578.

Os 6 cards:

1) Ícone Brain — "Fluid intelligence"
   "Measures your ability to reason, detect patterns, and solve novel problems."

2) Ícone Globe — "Non-verbal by design"
   "No language knowledge needed to take the test."

3) Ícone Hand — "Low cultural bias"
   "Suitable for broad international audiences and varied educational backgrounds."

4) Ícone Box — "Interactive and manipulative"
   "Users rotate a 3D cube to locate missing pieces and infer the correct solution."

5) Ícone Smartphone — "Digitally native"
   "Works online across desktop, tablet, and smartphone."

6) Ícone Zap — "Beyond pattern recognition"
   "Adds visuospatial and executive demands that make the task more dynamic."

QUOTE BLOCK DESTACADO (full-width, padding 40-56px) — SEM RECTÂNGULO
- SEM rounded, SEM border, SEM bg.
- Apenas accent line 4px solid #0066FF à esquerda (border-left, é uma linha vertical).
- Decoração ambient (não conta como rectângulo): orb absolute -right -80px -top -80px, 256x256, bg rgba(0,102,255,0.05), rounded full, blur 50px, pointer-events none.
- SEM hover scale.

<blockquote> texto:
- Plus Jakarta Sans 500, italic, clamp 24-40px, line-height 1.2, #0A102E.
- "IQbe measures not just whether you can see a pattern, but whether you can mentally manage and solve it."

ANIMAÇÕES
- H2 + parágrafo: FadeIn delay 0s.
- Cada feature card: FadeIn com delay i*0.1s.
- Quote card: FadeIn delay 0.2s.
- Microanimações dos ícones: loop infinito (alternados ímpares/pares).
- Hover de cards: spring sem ease.

ACESSIBILIDADE
- <section id="what-is-it" aria-labelledby="what-is-title">.
- <h2 id="what-is-title">.
- Cards como <article> com <h3> próprio.
- Ícones decorativos: aria-hidden="true". Title é a fonte de informação.
- Quote como <blockquote cite="https://brain.cognifit.com/IQ-test">.

SEO
- H2 com keyword "IQbe Intelligence Test".
- JSON-LD ItemList ou Product/featureList referenciando os 6 features.
- Cada H3 é indexável; Google pode pegar como sitelinks.
- AI-snippet: "IQbe is a digital, non-verbal IQ test based on Raven-inspired reasoning tasks, enhanced with interactive 3D problem solving to assess fluid intelligence online." (colocar depois desta secção como `<p class="ai-snippet">` opcional ou directamente no body).
```

## Notas Webflow

- Microanimações dos ícones → Webflow Interactions, Element Trigger "While Page Loading" → Loop infinito.
- Para alternância par/ímpar nas microanimações, criar duas classes (`.icon-spin` e `.icon-bob`) e aplicar manualmente.
- Quote card border-left: usar Webflow box-shadow inset truque (`inset 4px 0 0 #0066FF`) ou `border-left: 4px solid #0066FF` directamente.
- Gradient text não usado nesta secção.
