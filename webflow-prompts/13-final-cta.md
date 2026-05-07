# 13 — Final CTA

> Replica `FinalCTA` (FinalCTA.tsx). Background atmosférico (imagem abstracta com baixa opacidade + gradient overlay + radial blue glow), conteúdo centrado com H2 dramatic + sub + CTA primário + 3 trust pills.

## Prompt completo

```
Cria a SECÇÃO FINAL CTA — fechamento conversacional com fundo atmosférico.

LAYOUT
- <section> full-width, padding 48-96px vertical, overflow hidden, position relative.
- Border-top 1px rgba(0,102,255,0.10).

ABSTRACT BACKGROUND (z 0)

Layer 1 — imagem abstracta (opcional):
- Imagem geometric pattern (Unsplash ou ilustração própria) absolute inset 0.
- opacity: 0.03; mix-blend-mode: multiply; bg #FFFFFF.
- object-fit cover, grayscale, opacity 0.60.

Layer 2 — gradient masks que mascaram bordas para o fundo branco da página:
- absolute inset 0, gradient top: linear-gradient(0deg, #F4F7FB 0%, rgba(244,247,251,0.80) 50%, transparent 100%).
- absolute inset 0, gradient bottom: linear-gradient(180deg, #F4F7FB 0%, transparent 50%, transparent 100%).

Layer 3 — radial blue glow:
- Centered absolute, 800x800px.
- background: radial-gradient(circle, rgba(0,102,255,0.10), transparent 70%).
- filter blur 150px. pointer-events none.

CONTENT (z 10, max-width 800px centered, padding 24px, text-center)

H2 (FadeIn standard):
- Plus Jakarta Sans 800, clamp(36px, 5vw, 60px), tracking-tight, leading-tight #0A102E, mb 24px.
- "Ready to Discover Your IQ?"
  (PT: "Pronto/a para descobrir o teu QI?")

SUBHEADLINE (mb 40px):
- 18-20px weight 300 (light), line-height 1.6, max-width 600px centered, #4A5578.
- "Take CogniFit's interactive IQbe test and see how your reasoning compares to the reference population."
  (PT: "Faz o teste interactivo IQbe da CogniFit e descobre como o teu raciocínio se compara à população de referência.")

CTA BUTTON (centered, flex column sm:row gap 24px)
- Pill primário grande: padding 20px 40px, fonte 18px weight 700.
- Background: linear-gradient(90deg, #0066FF, #00A3FF).
- Hover: from #0055DD to #0088DD + translateY -2px + shadow xl.
- Texto: "Check My IQ Score" + ícone ArrowRight 20px ml 8px.
  (PT: "Saber o meu QI" / "Começar avaliação grátis")
- onClick: window.open("https://www.cognifit.com/aplicaciones/html5/public/assessment/ASSESSMENT~@~IQBE?testButtonUrl=https://www.cognifit.com%2Fbattery-of-tests%2Fiqbe-test%3Freg%3Dtrue", "_blank")

TRUST PILLS (mt 40px, flex wrap justify-center gap-x 24px gap-y 12px, 14px weight 700 #4A5578)

3 itens com separadores dot 6px rgba(0,102,255,0.20):

1) Zap icon 16px #FFB800 + "Fast online assessment"
   (PT: "Avaliação online rápida")

2) (separador dot)

3) CheckCircle 16px #00D4AA + "Non-verbal"
   (PT: "Não-verbal")

4) (separador dot)

5) Mini badge custom 16px (w-4 h-4 gradient bg #0066FF→#00E5FF, rounded full, shadow 0 2px 5px rgba(0,102,255,0.30), centered ✓ branco 10px) + "Scientifically grounded"
   (PT: "Cientificamente fundamentado")

ANIMAÇÕES
- H2: FadeIn standard (entrada y 40 → 0).
- Sub: FadeIn delay 0.1s.
- CTA: FadeIn delay 0.2s. Hover lift + shimmer diagonal opcional (gradient sweep across button each 4s).
- Trust pills: FadeIn delay 0.3s, stagger interno 50ms.
- Background blue glow: lentamente respira (scale 1 → 1.05 → 1, 12s ease-in-out infinite) — opcional.

ACESSIBILIDADE
- <section aria-labelledby="final-cta-title">.
- <h2 id="final-cta-title">.
- CTA com aria-label completo: "Check My IQ Score — start the IQbe assessment in a new tab".
- Imagem abstrata aria-hidden="true" (decorativa).
- Trust pills: ícones aria-hidden, texto define semântica.

SEO
- H2 com keyword "Discover Your IQ".
- CTA é a conversão principal — track no Google Analytics como event "cta_final_click".
- Seguir guidelines de Schema.org/PotentialAction:
  {
    "@type": "ReserveAction",
    "name": "Start IQbe IQ Test",
    "target": "https://www.cognifit.com/aplicaciones/html5/public/assessment/ASSESSMENT~@~IQBE..."
  }
- Marcar Page-level CTA com `data-action="primary-cta"`.

PERFORMANCE
- Imagem de fundo: lazy-load (loading="lazy"), formato webp, max 200KB.
- Preload do gradient/blur layers via CSS only (sem requests extra).
```

## Notas Webflow

- Imagem abstrata: usar Unsplash ou asset custom; aplicar `mix-blend-mode: multiply` em CSS via embed.
- Os 2 gradient masks: divs `position: absolute` com background gradient.
- CTA shimmer: pseudo-elemento `::before` com `background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.30) 50%, transparent 70%)` e `transform: translateX(-100% → 100%)` infinite 4s.
- Background blue glow respiration: keyframes embed.
