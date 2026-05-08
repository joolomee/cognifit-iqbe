# 06 — What Cognitive Skills Does It Measure?

> Replica `WhatItMeasures` (DataSections.tsx). Section header centrado + grid 2 colunas com 4 cards de competências (border-left 4px que aparece em hover).

## Prompt completo

```
Cria a SECÇÃO "What Cognitive Skills Does It Measure?" — detalhe das capacidades avaliadas.

LAYOUT
- <section id="skills-measured" scroll-mt 96px>.
- max-width 1200px, padding 40-64px vertical, padding lateral 24px.

SECTION HEADER
- H2: "What Cognitive Skills Does It Measure?"
- Subtitle (centered max 750px):
  "IQbe is more than a standard IQ test. It is a comprehensive cognitive health and mental fitness evaluation that demands active manipulation, measuring processes that matter in real life."

GRID (mt 64px, max-width 1000px centered, grid 1 col mobile / 2 col desktop, gap 24px)

4 skill blocks. SEM CARD/RECTÂNGULO:
- SEM rounded, SEM border, SEM bg, SEM shadow no bloco.
- Padding interno 16-24px (respiração), h-full, flex column items-start text-left.
- Accent line 4px à esquerda (border-left, linha vertical): idle transparent → hover #0066FF (300ms). É linha, não caixa.
- Hover: translateY -4px, scale 1.02 (spring 300). Sem mudar bg.
- Hairlines 1px rgba(0,102,255,0.10) entre rows da grid (separar visualmente sem encerrar cada bloco).

ÍCONE (sem container): 32-40px (w-10 h-10), cor #0066FF idle. SEM padding-box, SEM rounded, SEM bg, SEM shadow.

H3 título: Plus Jakarta Sans 700, 20px, #0A102E, mt 24px mb 12px.
Description: 16px weight 400 line-height 1.6 #4A5578.

Os 4 cards:

1) Ícone Box (3D cube wireframe) — "Spatial Perception"
   Desc: "The core of our brain test mental assessment, measuring how you understand shapes, spatial structure, and visual rotation."

2) Ícone RotateCw (circular arrow) — "Working Memory"
   Desc: "A critical part of your IQ intelligence: the ability to temporarily hold, manipulate, and use visual information."

3) Ícone CheckSquare — "Planning & Execution"
   Desc: "Beyond typical intelligence tests, IQbe measures executive functions and the mental flexibility required to solve novel problems."

4) Ícone BrainCircuit — "Abstract Reasoning"
   Desc: "Identify patterns and logical relationships to evaluate your overarching fluid intelligence."

ANIMAÇÕES
- SectionHeader: FadeIn standard.
- Cards: stagger 100ms (delay i*0.1s).
- Hover: spring lift + border-left aparece (transition 300ms).
- Ícone subtle pulse no hover do card (scale 1 → 1.05 → 1, 600ms).

ACESSIBILIDADE
- <section id="skills-measured" aria-labelledby="skills-title">.
- <ul role="list"> com <li> contendo <article>.
- Cada card é <article> com <h3> próprio.
- Ícones aria-hidden="true".
- Border-left animation respeitando prefers-reduced-motion (mostrar sempre se reduzido).

SEO
- H2 com keyword "cognitive skills" / "cognitive health".
- Cada card mapeável a um termo cognitivo indexável:
  · Spatial Perception
  · Working Memory  
  · Planning & Execution / Executive Function
  · Abstract Reasoning / Fluid Intelligence
- JSON-LD adicional (DefinedTerm) por capacidade, opcional para SEO médico:
  {
    "@type": "DefinedTerm",
    "name": "Working Memory",
    "description": "...",
    "inDefinedTermSet": "https://schema.org/MedicalCondition"
  }
```

## Notas Webflow

- Border-left transparente → cor: criar combo class `.skill-card` + `.skill-card.is-hover` (Webflow Interactions Element Trigger Hover).
- Para ícones Phosphor, importar SVG inline e dar tamanho via `width/height: 32px`.
