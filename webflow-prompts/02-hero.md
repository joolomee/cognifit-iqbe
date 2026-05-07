# 02 — Hero

> Secção mais crítica. Replica o componente `Hero` (IntroSections.tsx) com 100svh, split 50/50, badge pill com dot a pulsar, H1 gigante com gradient na segunda linha, sub-headline editorial, CTA primário + microcopy de confiança, trust strip "37,505+ Datasets · Raven's Matrices Based", **3D Cube interactivo** à direita com 3 floating labels animadas, e indicador "Scroll to explore" centrado abaixo.

## Prompt completo

```
Cria a SECÇÃO HERO do IQbe — landing page de avaliação cognitiva premium da CogniFit.

LAYOUT
- 100svh mínimo, padding-top 112-128px (acomodar navbar fixo), padding-bottom 64px.
- max-width: 1300px centrado.
- Grid desktop (≥1024px): 2 colunas 1fr 1fr, gap 80px, vertical center.
- Mobile/tablet: 1 coluna empilhada, coluna esquerda primeiro, gap 64px.

GLOW DE FUNDO (decorativo)
- Camada absoluta atrás do conteúdo, centrada, 800x800px.
- background: radial-gradient(circle, rgba(0,102,255,0.10) 0%, transparent 70%)
- filter: blur(150px). pointer-events:none.

COLUNA ESQUERDA (texto + CTA + trust)

1) BADGE PILL EYEBROW
- inline-flex, gap 8px, padding 6px 12px, border-radius 999px.
- background: rgba(255,255,255,0.60), border 1px rgba(0,102,255,0.10).
- Cor #0066FF, font 12px weight 600, tracking 0.08em uppercase.
- Conteúdo: dot 8px #0066FF a pulsar (animate-ping equivalente: scale 1 → 2.5 + opacity 1 → 0, 1.4s ease-out infinite, sobreposto a um dot fixo).
- Texto: "CogniFit QI Assessment".

2) H1
- Plus Jakarta Sans 800, clamp(40px, 6vw, 90px), line-height 1.05, tracking -0.02em, cor #0A102E.
- Drop-shadow muito subtil para profundidade (filter: drop-shadow(0 1px 2px rgba(0,0,0,0.06))).
- Duas linhas:
  · "The Ultimate" (cor sólida #0A102E)
  · "Intelligence Test." (gradient text — linear-gradient(90deg, #00A3FF 0%, #0066FF 100%))

3) SUBHEADLINE
- 18-20px, weight 300 (light), cor #4A5578, line-height 1.6, max-width 480px.
- Texto humanizado:
  "Vai além de quizzes estáticos. O IQbe é uma avaliação de QI premium e brain test mental que mede a tua saúde cognitiva, raciocínio 3D e capacidade de resolução executiva — tudo numa só plataforma rápida e cientificamente validada."
  (EN existente: "Go beyond static quizzes. IQbe is a premium IQ test and brain test mental assessment that measures your cognitive health, 3D thinking, and executive problem-solving in one fast, scientifically validated platform.")

4) CTA + REASSURANCE INLINE (flex row, gap 16px)
- Botão primário pill — gradient #0066FF → #00A3FF, padding 20px 40px, fonte 18px weight 700, ícone arrow-right depois do texto.
- Texto: "Check My IQ Score" → "Saber o meu QI"
- Hover: gradient escurece (from-#0055DD to-#0088DD) + -translateY 2px + shadow reforçada.
- onClick: window.open("https://www.cognifit.com/aplicaciones/html5/public/assessment/ASSESSMENT~@~IQBE?testButtonUrl=https://www.cognifit.com%2Fbattery-of-tests%2Fiqbe-test%3Freg%3Dtrue", "_blank").
- Coluna ao lado: 2 linhas micro-text 13px weight 500 #4A5578:
  · ✓ (ícone CheckCircle 14px #00D4AA) "100% Online & Secure"
  · ✓ "Scientifically Validated"

5) TRUST STRIP (debaixo, com border-top 1px rgba(0,102,255,0.10), pt 32px mt 16px)
- flex wrap, gap-x 24px gap-y 12px.
- Item 1: Shield icon (16px #0066FF) + "37,505+ Datasets" (14px weight 600 #4A5578).
- Separador: dot 4px rgba(0,102,255,0.30).
- Item 2: Brain icon (16px #0066FF) + "Raven's Matrices Based".

COLUNA DIREITA (visual hero)
- Container quadrado 350-600px aspect-square, flex center, position relative.

ELEMENTO PRINCIPAL: 3D CUBE INTERACTIVO (custom code via Three.js OU CSS 3D)
- Cubo 3x3x3 (Rubik-like) com:
  · 26 sub-cubos visíveis (sem o central oculto e sem 1 peça frontal-esquerda — o "missing piece" do puzzle de Raven).
  · Sub-cubo size 90px, gap 8px (escala mobile 0.75-0.90).
  · Faces brancas com gradient `linear-gradient(135deg, #FFFFFF 0%, #F4F7FA 100%)`, border 1px branco, inset shadow 0 0 12px rgba(0,0,0,0.03).
  · Body do cubo (entre faces): #CBD5E1 com border-radius 12px e shadow 0 4px 6px rgba(0,0,0,0.05).
  · Padrões nas faces externas:
    - Face frontal/traseira (Z): 2 dots #0066FF (top-right + bottom-left) 14px diameter.
    - Face direita/esquerda (X): cruz vermelha #EF4444, dois traços 6px rotated ±45°.
    - Face topo/base (Y): triângulo verde #00D4AA apontando para cima, base 28px altura 24px.
  · Highlight do "missing piece" (-1, 0, 1): borda 3px #00A3FF/60 com shadow 0 0 30px rgba(0,163,255,0.40), animate-pulse opacity 0.6 → 1 → 0.6.

INTERACÇÃO DO CUBO
- Auto-rotação contínua quando idle: rotateX +0.005°/frame, rotateY +0.008°/frame (±10°/s e ±15°/s a 60fps).
- Drag/swipe: utilizador pode rodar manualmente (info.delta.x → rotateY +0.5x; info.delta.y → rotateX -0.5x). Suspende o auto-rotate enquanto isDragging.
- Antes de qualquer interacção: ícone "Hand" (Phosphor) 48px #00A3FF a oscilar diagonal (translateX -30px → +30px, translateY +30px → -10px) loop 2.5s, fade out a 90% do ciclo. Esconder quando user toca/arrasta.
- Cursor: grab → grabbing.
- TouchAction: none. Z-index 50 do overlay, 60 do hand hint.

3 FLOATING LABELS À VOLTA DO CUBO (independent, parallax suave)
Cada label: pill branco, padding 10px 20px, border 1px (cor varia), shadow 0 4px 15px (cor/8% opacity), texto 12-14px weight 700 + dot 8px da cor:

- Label 1 — top-left (top:5-20%, left:0% / -5%)
  · Cor: #00E5FF (cyan), shadow #00E5FF/8.
  · Dot com glow `box-shadow: 0 0 10px #00E5FF` + animate-pulse.
  · Texto: "3D Reasoning"
  · Float: translateY -4px → +4px → -4px, 5s ease-in-out, delay 0.2s.

- Label 2 — top-right (top:5-10%, right:0% / 5%)
  · Cor #7B61FF (violet).
  · Texto: "Executive Function"
  · Float: translateY -5px → +5px, 6s, delay 1s.

- Label 3 — bottom-left (bottom:5-10%, left:0% / -15%)
  · Cor #00D4AA (teal).
  · Texto: "Fluid Intelligence"
  · Float: translateY +4px → -4px, 4.5s, delay 1.5s.

INDICADOR SCROLL (abaixo do conteúdo, centrado, bottom 32px)
- Initial opacity 0, fade in 1s com 2s delay (após o conteúdo principal aparecer).
- Texto 12px weight 700 uppercase tracking-widest cor #4A5578: "Scroll to explore" (ou PT: "Desliza para explorar").
- Ícone ChevronDown 20px #0066FF a saltar verticalmente: y 0 → 8px → 0, 1.5s ease-in-out infinite.

ANIMAÇÕES DE ENTRADA (sequenciadas)
1) Badge: opacity 0 → 1 + y 40 → 0, delay 0s, 0.6s ease-out.
2) H1: stagger por linha — linha 1 delay 0.05s, linha 2 delay 0.15s. Pode ser word-by-word reveal com clip-path 0% → 100% (1s).
3) Subheadline: delay 0.25s, 0.6s.
4) CTA + reassurance: delay 0.35s.
5) Trust strip: delay 0.5s.
6) 3D Cube + labels: cube fade in 0.8s delay 0.4s; labels stagger delay 0.6/0.8/1.0s.
7) Scroll indicator: delay 2s.

ACESSIBILIDADE
- <section aria-labelledby="hero-title" id="hero">.
- <h1 id="hero-title">.
- 3D Cube em <figure aria-label="Interactive 3D cube — IQbe puzzle preview"> com fallback estático para prefers-reduced-motion.
- Para reduced-motion: cube imobilizado, labels sem float, fade-ins instantâneos.
- Botão CTA com aria-label completo: "Check My IQ Score — start the IQbe assessment in a new tab".

SEO
- H1 único na página, com keyword principal "Intelligence Test".
- LCP candidate: o <h1> ou a primeira linha do hero. Garante font-display: swap e preconnect às fontes.
- AI-snippet sentence (logo abaixo do hero): "IQbe is a digital, non-verbal IQ test based on Raven-inspired reasoning tasks, enhanced with interactive 3D problem solving to assess fluid intelligence online."
- JSON-LD WebApplication a referenciar este hero como `mainEntity` (ver prompt 15).
- alt do logo: "CogniFit Logo".
- Meta og:image: capturar este hero (1200x630).
```

## Notas Webflow

- **3D Cube** → custom code embed. Recomendo `<canvas>` com Three.js (cubo 3x3x3 instanciado em loop) + `dat.gui` para tuning. Fallback CSS-3D se o utilizador escolher leveza (ver código original em `src/app/components/InteractiveCube.tsx`).
- **Floating labels**: 3 divs absolutos com Webflow Interactions "While in viewport — loop" oscillating Y.
- **Pulse dot** (badge): CSS keyframes via embed.
- **Drag**: Three.js OrbitControls (`enableDamping: true, autoRotate: true`).
- **Reduced motion**: media query global `@media (prefers-reduced-motion: reduce) { * { animation-duration: 0s !important; transition-duration: 0s !important; } }` numa class utilitária aplicada ao body.
