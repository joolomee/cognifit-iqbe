# 00 — Design System Global (cola no início de qualquer prompt)

> Sistema partilhado por todas as secções do IQbe. Define tokens, animações base, partículas, scroll progress e regras de acessibilidade. Replica o ficheiro Figma Make em fundo branco com identidade CogniFit (azul eléctrico) inspirada na cognifit.com/longevity.

## Tokens (tailwind / Webflow custom CSS)

```css
:root {
  /* Background */
  --bg-base: #F4F7FB;        /* corpo da página */
  --bg-card: #FFFFFF;        /* cards (com 80% opacity por default) */
  --bg-card-hover: #FFFFFF;  /* card no hover */
  --bg-footer: #0A102E;      /* footer dark navy */

  /* Texto */
  --text-primary: #0A102E;   /* títulos e headings */
  --text-body: #4A5578;      /* corpo, sub-headlines */
  --text-muted: #8B95B5;     /* microcopy, legendas */

  /* Marca / acentos */
  --accent-blue-500: #0066FF;     /* azul principal */
  --accent-blue-400: #00A3FF;     /* azul secundário */
  --accent-cyan: #00E5FF;         /* gradient end */
  --accent-teal: #00D4AA;         /* validação/sucesso */
  --accent-violet: #7B61FF;       /* destaques cognitivos */
  --accent-gold: #FFB800;         /* "high range" e estatística */

  /* Border / glass */
  --border-subtle: rgba(0,102,255,0.10);
  --border-hover: rgba(0,102,255,0.30);

  /* Shadows */
  --shadow-card: 0 4px 20px rgba(0,102,255,0.03);
  --shadow-card-hover: 0 10px 30px rgba(0,102,255,0.08);
  --shadow-cta: 0 8px 20px rgba(0,102,255,0.25);
  --shadow-cta-hover: 0 10px 25px rgba(0,229,255,0.35);

  /* Radii */
  --radius-card: 24px;       /* rounded-3xl */
  --radius-pill: 999px;
  --radius-input: 14px;

  /* Typo */
  --font-sans: 'Outfit', system-ui, -apple-system, sans-serif;
  --fs-h1: clamp(40px, 6vw, 90px);    /* hero */
  --fs-h2: clamp(36px, 4.5vw, 52px);  /* section title */
  --fs-h3: 20px;                       /* card title */
  --fs-body: 17px;
  --fs-small: 14px;
  --fs-micro: 12px;
}
```

**Selecção:** `::selection { background: rgba(0,102,255,0.20); color: #0066FF; }`

**Fontes:** carrega `Outfit` via Google Fonts (300, 400, 500, 600, 700, 800, 900). Pré-conecta `fonts.googleapis.com` e `fonts.gstatic.com`.

## Componentes-base

### Card (`.iqbe-card`)
- `background: rgba(255,255,255,0.80); border: 1px solid var(--border-subtle); border-radius: 24px; box-shadow: var(--shadow-card); overflow: hidden; position: relative;`
- Glare top: pseudo-elemento `::before` com `1px` altura, gradient horizontal `transparent → white → transparent`.
- Hover: `transform: translateY(-6px); background: #FFFFFF; box-shadow: var(--shadow-card-hover); border-color: var(--border-hover);` — transição `300ms ease`.

### Button primário (`.iqbe-btn`)
- Pill: `border-radius: 999px; padding: 16px 32px; font-weight: 700; color: white;`
- Background: `linear-gradient(135deg, #0066FF 0%, #00E5FF 100%)`
- Shadow: `0 8px 20px rgba(0,102,255,0.25)`
- Hover: `scale(1.03); box-shadow: 0 10px 25px rgba(0,229,255,0.35);`
- Inner highlight on hover: pseudo-elemento branco a 10% opacity.

### Section header (`.iqbe-section-header`)
- Centro, max-width 750px.
- H2 em `--fs-h2`, weight 700, `tracking-tight (-0.02em)`, line-height 1.1, cor `--text-primary`.
- Subtítulo: `--fs-body`, weight 300 (light), cor `--text-body`, line-height 1.6.
- Margem inferior 64px.

### Section divider (`.iqbe-divider`)
- Linha 1px, gradient horizontal `transparent → rgba(0,102,255,0.15) → transparent`. Margem `64-96px`.

## Animações globais (Webflow Interactions ou GSAP)

### `FadeIn` (entrada universal de blocos)
- Initial: `opacity: 0; transform: translateY(40px)` (variantes: down/left/right invertem o eixo)
- On enter (uma vez): `opacity: 1; transform: translate(0,0)`
- Duration `0.6s`, ease `easeOut`, viewport margin `-10%`
- Aplicar a TODOS os títulos, cards e blocos editoriais. Stagger entre filhos: `0.1s`.

### Scroll progress (lado direito, desktop)
- Barra fixa direita: `right: 24px; top: 50%; translateY(-50%); width: 3px; height: 200px; border-radius: 999px;`
- Track: `rgba(0,102,255,0.10)`
- Fill: `linear-gradient(180deg, #0066FF, #00E5FF)`, `transform-origin: top; scaleY(scrollYProgress)`
- Spring: stiffness 100, damping 30.
- Esconder em mobile (`<768px`).

### Scroll-to-top
- Botão flutuante 48×48px, `bottom: 32px; right: 32px;` `bg: #0066FF; color: white; border-radius: 999px;` shadow `0 0 20px rgba(0,102,255,0.40)`.
- Mostrar quando `scrollY > 10%` da página com `opacity 0 → 1` e `translateY 20 → 0` (300ms).
- Hover: `scale(1.10)`.

### FloatingParticles (camada decorativa global)
- Layer fixed `inset-0`, `pointer-events: none`, `z-index: 0`.
- 30 mini-cubos 3D com tamanhos 8-20px, `opacity 0.20-0.60`.
- Cada cubo: 6 faces (gradient azul `#0066FF → #0033AA` por face com leves variações), `border 1px rgba(0,163,255,0.40)`, `backdrop-filter: blur(2px)`.
- Animação: `y: 0vh → -100vh` (40-70s linear infinite), `rotateX/rotateY: +720°`, ligeiro deslocamento horizontal aleatório.
- 2 orbes ambient extra: top-left 400×400px radial blue 6%, bottom-right 500×500px radial teal 4%, blur 80-120px.

### Hover universal nos cards
- `transform: translateY(-8px) scale(1.02)`; spring stiffness 300, damping 20.
- Ícones internos: animação infinita subtil (rotação ±10° ou translate Y ±3px, 3s ease infinite).

## Acessibilidade base

- `prefers-reduced-motion: reduce` → desliga `FadeIn`, parallax, partículas e auto-rotações; mantém scroll-progress e core interactions.
- Foco visível: `outline: 3px solid #7B61FF; outline-offset: 3px;` em todos os elementos interactivos.
- Skip-link "Saltar para conteúdo principal" no topo, oculto até receber foco.
- Todos os ícones decorativos: `aria-hidden="true"`. Ícones com significado: `aria-label` descritivo.
- Contraste mínimo AA. `#4A5578` sobre `#FFFFFF` = 7.0:1 ✓; `#0066FF` sobre `#FFFFFF` = 6.0:1 ✓.

## SEO global (cabeça do `<head>`, partilhado)

```html
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />

  <title>CogniFit QI Assessment: Premium IQ Test & Cognitive Evaluation</title>
  <meta name="description" content="Take the most accurate online IQ test. The CogniFit QI Assessment evaluates your intelligence, mental fitness, and cognitive health with advanced 3D fluid reasoning." />
  <meta name="keywords" content="CogniFit QI Assessment, IQ test, intelligence test, brain test mental, mental health test, IQ intelligence, premium IQ test, online cognitive assessment, fluid intelligence test, accurate brain test, professional intelligence test, valid IQ score" />
  <meta name="author" content="CogniFit" />
  <link rel="canonical" href="https://brain.cognifit.com/IQ-test" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://brain.cognifit.com/IQ-test" />
  <meta property="og:title" content="CogniFit QI Assessment: Premium IQ Test & Cognitive Evaluation" />
  <meta property="og:description" content="Take the most accurate online IQ test. The CogniFit QI Assessment evaluates your intelligence, mental fitness, and cognitive health." />
  <meta property="og:image" content="https://brain.cognifit.com/og-iqbe.jpg" />
  <meta property="og:site_name" content="CogniFit" />
  <meta property="og:locale" content="en_US" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://brain.cognifit.com/IQ-test" />
  <meta property="twitter:title" content="CogniFit QI Assessment: Premium IQ Test & Cognitive Evaluation" />
  <meta property="twitter:description" content="Take the most accurate online IQ test. The CogniFit QI Assessment evaluates your intelligence, mental fitness, and cognitive health." />
  <meta property="twitter:image" content="https://brain.cognifit.com/og-iqbe.jpg" />

  <!-- Robots / search -->
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

  <!-- Apple / iOS -->
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="apple-mobile-web-app-title" content="CogniFit IQbe" />
  <meta name="format-detection" content="telephone=no" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

  <!-- Performance preconnects -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="dns-prefetch" href="https://www.cognifit.com" />

  <!-- Theme -->
  <meta name="theme-color" content="#F4F7FB" />

  <!-- hreflang (caso multilíngue) -->
  <link rel="alternate" hreflang="en" href="https://brain.cognifit.com/IQ-test" />
  <link rel="alternate" hreflang="es" href="https://brain.cognifit.com/es/IQ-test" />
  <link rel="alternate" hreflang="x-default" href="https://brain.cognifit.com/IQ-test" />
</head>
```

JSON-LD `WebApplication` e `FAQPage` ficam descritos nos prompts 14 (Final CTA / WebApplication schema) e 13 (FAQ).

## Webflow specifics

- Cria **Style Variables** com os tokens acima em Designer → Variables.
- Para animações motion/react, traduz para:
  - **Page Trigger "Scroll into view"** (one-shot) → equivalente a `whileInView` com `once: true`.
  - **GSAP + ScrollTrigger** para animações encadeadas/staggered, paralaxe e sequências (cube, cards, etc.).
- O 3D Cube interactivo (ver prompt 02 — Hero) requer **WebGL/Three.js** ou **CSS 3D**; em Webflow usa custom code embed (`<div class="cube-host"></div>` + script GSAP/Three.js no Footer Code).
- `FloatingParticles` global → custom code embed no `<body>` (ou Symbol "Particles Layer").
- Cada secção em `<section id="...">` para deep-linking via Navbar.
