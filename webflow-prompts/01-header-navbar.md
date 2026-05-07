# 01 — Header / Navbar

> Replica o `Navbar` do Figma Make (Layout.tsx). Logo CogniFit + wordmark IQbe gradient · 5 links âncora · Log In ghost · CTA pill primário. Sticky fixa com glass-morph ao scroll.

## Prompt completo

```
Cria, em Webflow, um HEADER fixo full-width que troca de estilo no scroll.

LAYOUT (alinhado a 100%, sem max-width, padding lateral 16-48px)
- Altura: 96px no estado idle, 64-72px com scroll>20px (transição 300ms ease).
- z-index 100. Fundo idle: transparente. Fundo scroll: rgba(255,255,255,0.90) + backdrop-filter blur(14px) + border-bottom 1px rgba(0,102,255,0.10) + box-shadow 0 4px 20px rgba(0,102,255,0.05).

ESTRUTURA (3 colunas: esquerda, centro, direita)

ESQUERDA (logo + wordmark)
- Logótipo CogniFit (svg azul `Cognifit_-_Logo_Azul.svg`), 28-36px altura.
- Pipe vertical "|" 16px, light, cor #CBD5E1 (idle: rgba(10,16,46,0.20)).
- Wordmark "IQbe" — Plus Jakarta Sans 800, 16-20px, gradient text linear-gradient(90deg, #0066FF 0%, #00A3FF 100%) com -webkit-background-clip:text.

CENTRO (links âncora — só desktop ≥1024px)
- 5 links com 32px gap. Plus Jakarta Sans 600, 14px. Cor idle: rgba(10,16,46,0.70). Cor scroll: #4A5578.
- Hover: cor #0066FF + underline animado (pseudo-elemento ::after height 2px, scaleX 0→1 transform-origin left, 250ms cubic-bezier(0.2,0.8,0.2,1)).
- Links (texto + scroll-into-view smooth 80ms offset):
  · "What is it?" → #what-is-it
  · "Who is it for?" → #who-is-it-for
  · "Skills measured" → #skills-measured
  · "How does it work?" → #how-it-works
  · "Reliability" → #reliability

DIREITA (Log In + CTA)
- "Log In" — text link 14px bold #0A102E (oculto em <640px), abre https://www.cognifit.com/login em new tab.
- Botão CTA pill primário: 
  · Mobile (<640px): "Start Test", padding 8px 16px, fonte 12px.
  · Desktop: "Check My IQ Score", padding 10px 24px, fonte 14px.
  · Background: linear-gradient(90deg, #0066FF 0%, #00A3FF 100%).
  · Border-radius: 999px. Shadow: 0 8px 20px rgba(0,102,255,0.25).
  · Hover: -translate-y 2px + shadow 0 12px 28px rgba(0,229,255,0.35) + brightness 105%.
  · onClick → window.open("https://www.cognifit.com/aplicaciones/html5/public/assessment/ASSESSMENT~@~IQBE?testButtonUrl=https://www.cognifit.com%2Fbattery-of-tests%2Fiqbe-test%3Freg%3Dtrue", "_blank")

MOBILE (<1024px)
- Esconder os 5 links centrais.
- Hamburger ícone Phosphor "list" (24px, cor adapta-se ao estado de scroll).
- Drawer 100vh slide-from-right, ease "expo.out" 400ms.
- Itens em escada (stagger 60ms entrada).
- Fundo drawer: #FFFFFF, border-left 1px rgba(0,102,255,0.10).

ANIMAÇÕES
- Entrada (page load): translateY(-12px) + opacity 0 → 1, 400ms ease-out.
- Pulso suave no dot do logo: scale 1 → 1.15 → 1, 2.4s ease-in-out infinite (decorativo, opcional).

ACESSIBILIDADE
- <header role="banner">.
- <nav aria-label="Main navigation">.
- Cada link com aria-label próprio.
- Logo é <a href="/" aria-label="IQbe — página inicial">.
- Skip link "Skip to main content" antes do header, oculto até receber foco.
- Focus visible: outline 3px #7B61FF outline-offset 3px nos links e no CTA.
- Hamburger button com aria-expanded e aria-controls="mobile-drawer".

SEO
- JSON-LD Organization no <head> (ver prompt 15) com logo e sameAs.
- Logo SVG inline para evitar request extra (mais rápido = melhor LCP).
- Cada link âncora deve apontar para um <section id="..."> com a mesma id (deep linking + crawler).

COPY (master language: EN)
- Nav links (textos visíveis): "What is it?", "Who is it for?", "Skills measured", "How does it work?", "Reliability".
- Log In: "Log In".
- CTA: "Check My IQ Score" (desktop) / "Start Test" (mobile).
```

## Notas Webflow

- **Sticky scroll detection**: usa Webflow Interactions → "While Page is Scrolling" → mudar styles ao passar 20px.
- **Custom code embed** para o pulso do dot (CSS keyframe `@keyframes pulse-dot { 0%,100% {transform:scale(1)} 50% {transform:scale(1.15)} }`).
- Os links âncora precisam dos `id`s exactamente iguais nos `<section>` correspondentes.
- Para o gradient text "IQbe", criar uma classe combo `.wordmark-iqbe` com `background-image`, `-webkit-background-clip: text`, `-webkit-text-fill-color: transparent`, `background-clip: text`, `color: transparent` (cobrir Safari e Firefox).
