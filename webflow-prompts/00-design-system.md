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

  /* Typo (alinhada com cognifit.com/longevity) */
  --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --fs-h1: clamp(40px, 6vw, 90px);    /* hero */
  --fs-h2: clamp(36px, 4.5vw, 52px);  /* section title */
  --fs-h3: 20px;                       /* card title */
  --fs-body: 17px;
  --fs-small: 14px;
  --fs-micro: 12px;
}
```

**Selecção:** `::selection { background: rgba(0,102,255,0.20); color: #0066FF; }`

**Fontes:** carrega `Plus Jakarta Sans` via Google Fonts (200, 300, 400, 500, 600, 700, 800), idêntica à usada em `cognifit.com/longevity`. Pré-conecta `fonts.googleapis.com` e `fonts.gstatic.com`.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
```

## Regra de informação justificável (GLOBAL)

**Toda a copy com claims, números, percentagens, estatísticas, ratings ou metodologia tem de estar suportada por evidência interna ou pública verificável.** Não inventar números nem citar valores que não existem em estudo, dataset ou comunicação oficial CogniFit.

Antes de publicar qualquer prompt/secção, validar:
- **Stats numéricos** — datasets, participantes, idades, médias, ranges, distribuições — só usar se houver auditoria interna ou paper publicado. Caso contrário, marcar como `[REPLACE: claim verificável]` e remover antes de live.
- **Correlações, p-values, alpha de Cronbach, test-retest** — só usar com referência ao estudo (DOI ou link interno do whitepaper).
- **Ratings agregados** (★ 4.x/5, "X+ reviews") — só usar com fonte (App Store, Google Play, Trustpilot). Sem fonte → remover.
- **Comparativos com concorrência** — só fazer claims que sejam factuais e verificáveis.
- **Aprovações regulatórias / certificações** — usar apenas se existirem.
- **"Cientificamente validado"** — sustentar com paper(s) peer-reviewed na secção Validity ou no whitepaper.

Se um claim **não pode ser justificado**, deve ser **removido** (não suavizado, não reescrito de forma vaga). É preferível espaço em branco a copy não-defensável (regulatório + GEO/AEO + reputação).

## Regra de framing (GLOBAL — APLICA-SE A TODAS AS SECÇÕES)

**Apenas elementos clicáveis (buttons, toggles, links-pill com acção, social icons) podem ter rectângulo visível** — ou seja, combinação de `background` + `border` + `border-radius`.

Tudo o resto — eyebrows, badges informativos, floating labels, feature blocks, stat blocks, score rows, FAQ items, audience blocks, testemunhos, comparison cells, quote blocks, banner blocks — **não tem rectângulo**. Para organizar o conteúdo usa apenas:

- **Espaçamento** (padding interno, margins, gaps de grid).
- **Hierarquia tipográfica** (font-size, weight, cor, tracking).
- **Dividers 1px** (`hairline`) entre items, com gradient ou cor sólida `var(--border-subtle)`.
- **Accent lines** (4-8px verticais à esquerda, ou 2px horizontais no topo) onde for útil para destacar — mas como linha, não como caixa fechada.
- **Hover lift / opacity / colour shift** continuam permitidos como micro-interacção; não introduzem moldura.

Nunca aplicar `border + bg + rounded` em conjunto a um elemento puramente informativo. Não envolver títulos/parágrafos/listagens em "cards" decorativos. Mantém o site editorial, arejado e direccionado pelo grid.

Buttons que MANTÊM rectângulo: CTA pill primário (Hero, Final CTA, Header, Footer banner), Scroll-to-top, hamburger toggle (mobile), accordion toggle (apenas o botão do header de cada item — não o container do item), App Store / Google Play badges (links externos), social icons (round full counta como rectângulo circular).

## Componentes-base

### Button primário (`.iqbe-btn`) — único componente com frame
- Pill: `border-radius: 999px; padding: 16px 32px; font-weight: 700; color: white;`
- Background: `linear-gradient(135deg, #0066FF 0%, #00E5FF 100%)`
- Shadow: `0 8px 20px rgba(0,102,255,0.25)`
- Hover: `scale(1.03); box-shadow: 0 10px 25px rgba(0,229,255,0.35);`
- Inner highlight on hover: pseudo-elemento branco a 10% opacity.

### Content block (substitui o antigo `.iqbe-card`)
Para qualquer bloco informativo (feature, stat, testemunho, audience, etc.):
- **Sem** `background`, **sem** `border`, **sem** `border-radius`, **sem** `box-shadow` no container.
- Apenas `padding` (24-32px) para respirar e `gap` interno entre elementos.
- Hover (opcional): `transform: translateY(-4px); transition: 300ms ease;` — sem mudar bg/border (já não existem).
- Para destacar visualmente um bloco "premium" (ex.: plano recomendado, stat highlight): usar **accent line** 2-4px superior ou esquerda, com `var(--accent-blue-500)` ou um gradient.

### Section header (`.iqbe-section-header`)
- Centro, max-width 750px.
- H2 em `--fs-h2`, weight 700, `tracking-tight (-0.02em)`, line-height 1.1, cor `--text-primary`.
- Subtítulo: `--fs-body`, weight 300 (light), cor `--text-body`, line-height 1.6.
- Margem inferior 64px.

### Section divider (`.iqbe-divider`)
- Linha 1px, gradient horizontal `transparent → rgba(0,102,255,0.15) → transparent`. Margem `64-96px`.

### Hairline (entre items dentro de uma secção)
- Linha 1px sólida `var(--border-subtle)`, normalmente full-width do bloco pai.
- Usar entre score bands, entre comparison rows, entre FAQ items, entre stat numbers.

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

  <!-- hreflang — master EN. Adicionar PT/ES só se as variantes existirem em páginas separadas. -->
  <link rel="alternate" hreflang="en" href="https://brain.cognifit.com/IQ-test" />
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
