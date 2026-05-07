# 03 — Why IQbe Is Different (Comparison Table)

> Replica `WhyDifferent` (IntroSections.tsx). Section header centrado + tabela glass-card de comparação 2 colunas (Traditional vs IQbe Experience) com 5 linhas + CTA texto ghost.

## Prompt completo

```
Cria a SECÇÃO "Why This IQ Intelligence Test Is Different" — argumento de diferenciação editorial.

LAYOUT
- max-width 1200px centrado, padding 40-64px vertical, padding lateral 24px.

SECTION HEADER (componente partilhado, ver design system)
- H2 (Plus Jakarta Sans 700, clamp 36px-52px, line-height 1.1, tracking -0.02em, cor #0A102E):
  "Why This IQ Intelligence Test Is Different"
- Subtitle (18px weight 300 #4A5578, max-width 750px, centered):
  "Most online IQ tests only check whether you can recognize a static pattern. IQbe goes further — it is a dynamic brain test mental assessment measuring how well you manipulate information, plan your response, and solve visual problems under time pressure."

COMPARISON CARD (max-width 900px, mt 24px, centered)
- Container: rounded 24px, border 1px rgba(0,102,255,0.10), overflow hidden.
- Hover (no container inteiro): translateY -5px + box-shadow 0 20px 40px -10px rgba(0,102,255,0.15) (300ms).

CABEÇALHO DA TABELA (grid 2 colunas, bg rgba(255,255,255,0.40), border-bottom 1px rgba(0,102,255,0.10))
- Coluna 1: padding 24px, uppercase tracking-wider 12px weight 700 #0A102E:
  "TRADITIONAL TESTS"
- Coluna 2: padding 24px, border-left 1px rgba(0,102,255,0.10), bg rgba(255,255,255,0.60), uppercase 12px #0066FF:
  Ícone Zap (16px #0066FF, animate-pulse) + texto "IQbe EXPERIENCE"

LINHAS (5 linhas, divididas por border-top 1px rgba(0,102,255,0.05))
Cada linha: grid 2 colunas, group hover background rgba(255,255,255,0.50).

Linha 1
- Esquerda: padding 24px, text 15px #4A5578 vertical-center: "Static 2D patterns"
- Direita: padding 24px, border-left 1px rgba(0,102,255,0.05), bg rgba(0,102,255,0.02), flex gap 12px:
  · CheckCircle 20px #0066FF, group-hover scale(1.10) rotate(12deg) 300ms.
  · Texto 15px weight 500 #0A102E line-height 1.6: "Interactive 3D cube challenges"

Linha 2
- Esquerda: "Passive recognition"
- Direita: ✓ "Active manipulation and decision-making"

Linha 3
- Esquerda: "Limited real-world resemblance"
- Direita: ✓ "Closer to real-world cognitive demands"

Linha 4
- Esquerda: "Often text-heavy"
- Direita: ✓ "Non-verbal and low cultural bias"

Linha 5
- Esquerda: "Basic pattern matching"
- Direita: ✓ "Reasoning + visuospatial + executive demands"

CTA TEXT LINK (centered, mt 40px)
- Botão sem fundo, fonte 18px weight 700 #0066FF, hover #0A102E (color transition 300ms).
- Texto + ícone ArrowRight (20px) com hover translateX +8px.
- Texto: "Experience the difference" + ícone arrow.

ANIMAÇÕES
- SectionHeader: FadeIn (y 40, opacity 0→1, 0.6s ease-out, viewport once).
- Card container: FadeIn delay 0.2s.
- Linhas internas: stagger 80ms entre cada (opcional, em viewport).
- Check icons: ao entrarem na viewport, stroke-dashoffset 0 (desenho do tick) durante 0.4s.
- Hover row: ease 200ms, mudança de fundo + escala do ícone.

ACESSIBILIDADE
- <section aria-labelledby="why-different-title">.
- Comparison card como <table> semântico:
  <table>
    <caption>Comparison: Traditional IQ tests vs IQbe</caption>
    <thead>
      <tr><th scope="col">Traditional Tests</th><th scope="col">IQbe Experience</th></tr>
    </thead>
    <tbody>
      <tr><td>Static 2D patterns</td><td>Interactive 3D cube challenges</td></tr>
      ...
    </tbody>
  </table>
- Em Webflow: usar elementos table reais OU divs com role="table"/role="row"/role="cell" + aria-labels.

SEO
- H2 com keyword "IQ Intelligence Test".
- Marcação Schema "ItemList" (com 5 listItems descrevendo as differenças) OU marcação de comparação Product (mais avançada, exige preparação): JSON-LD ComparisonTable não é nativo, mas pode-se usar schema.org/Action com object.
- Cada cell IQbe é uma feature que aparece também no schema WebApplication (featureList em SEO global).
```

## Notas Webflow

- Tabela como CSS Grid (2 colunas) é mais flexível que `<table>` para mobile, mas perde semântica. Compromisso: usar `role="table"` em `<div>` com `role="row"` e `role="cell"` filhos.
- Animação do check icon: criar SVG inline com `stroke-dasharray` e `stroke-dashoffset` controlados via Webflow Interactions (Page Trigger Scroll Into View → Animate stroke-dashoffset 100→0).
- Hover do container: Element Trigger Hover → 5s ease lift -5px + shadow.
