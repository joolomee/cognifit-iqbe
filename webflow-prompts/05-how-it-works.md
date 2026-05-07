# 05 — How the IQ Test Works

> Replica `HowItWorks` (IntroSections.tsx). 3 passos horizontais com numbered icon-tile, label, description e linha gradiente conectora subtil.

## Prompt completo

```
Cria a SECÇÃO "How the IQ Test Works" — guia rápido de 3 passos para o utilizador entender o fluxo.

LAYOUT
- <section id="how-it-works" scroll-mt 96px>.
- max-width 1200px, padding 40-64px vertical, padding lateral 24px.

SECTION HEADER
- H2: "How the IQ Test Works"
  (PT: "Como funciona o teste")
- Subtitle (max 750px, centered):
  "Taking the IQbe intelligence test is simple, fast, and 100% online. Follow these three steps to accurately measure your fluid intelligence and cognitive health."
  (PT: "Fazer o teste IQbe é simples, rápido e 100% online. Segue estes três passos para medires com precisão a tua inteligência fluida e saúde cognitiva.")

CONTENT (mt 48px, position relative)

LINHA CONECTORA (decorativa, só desktop ≥1024px)
- Position absolute, top 40px (alinhado com o centro vertical das tiles), left 16% right 16%, height 2px.
- Background: linear-gradient(90deg, transparent, rgba(0,102,255,0.20), transparent).
- z-index 0.

GRID DE PASSOS (z-index 10, 1 col mobile / 3 col desktop, gap 40px)

Cada passo (FadeIn com delay i*0.15s, items center, text-center, group hover):

1) ICON TILE
- 80x80px, rounded 16px, background #FFFFFF, border 1px rgba(0,102,255,0.20).
- Box-shadow 0 8px 30px rgba(0,102,255,0.08).
- Padding center; emoji 32px (ou ícone Phosphor 32px gradient #0066FF→#00A3FF stroke).
- Hover: rotate sequence [0,-10,10,-5,5,0] + scale 1.10 (300ms).
- z-index 10 acima da linha.

2) STEP LABEL
- mt 24px, 12px uppercase tracking-widest weight 700 #0066FF.
- Texto: "Step 01" / "Step 02" / "Step 03".

3) H4 TÍTULO
- Plus Jakarta Sans 700, 20px, #0A102E, mb 8px.

4) DESCRIPTION
- 14px weight 400 line-height 1.6 #4A5578, max-width 280px.

Os 3 passos:

PASSO 1
- Ícone: 📝 (clipboard / pen, ou Phosphor "ClipboardText").
- Title: "Register & Start"
  (PT: "Regista-te e começa")
- Desc: "Create an account to securely access the premium intelligence test."
  (PT: "Cria uma conta para aceder em segurança ao teste de inteligência premium.")

PASSO 2
- Ícone: 🧩 (puzzle, ou Phosphor "PuzzlePiece").
- Title: "Solve the 3D Puzzles"
  (PT: "Resolve os puzzles 3D")
- Desc: "Complete the brain test mental assessment by rotating cubes to find logical rules."
  (PT: "Completa a avaliação rotando cubos 3D para encontrar as regras lógicas.")

PASSO 3
- Ícone: 📊 (chart, ou Phosphor "ChartLineUp").
- Title: "Get Your IQ Score"
  (PT: "Recebe o teu QI")
- Desc: "Instantly receive a detailed PDF report of your IQ intelligence and cognitive profile."
  (PT: "Recebes instantaneamente um relatório PDF detalhado do teu QI e perfil cognitivo.")

ANIMAÇÕES
- SectionHeader: FadeIn no scroll-into-view.
- Linha conectora: opcional desenhar-se com clip-path inset(0 100% 0 0) → inset(0) on enter, 1.2s ease-in-out (efeito de "preencher").
- Cada step tile: FadeIn delay i*0.15s.
- Hover tile: rotate sequence + scale.
- Mobile: empilhar verticalmente com vertical line conectora opcional (transform-origin top, scaleY 0→1).

ACESSIBILIDADE
- <section id="how-it-works" aria-labelledby="how-title">.
- <ol> semântico para os 3 passos:
  <ol class="steps">
    <li>
      <div class="step-tile">📝</div>
      <div class="step-meta"><span>Step 01</span><h4>Register & Start</h4><p>...</p></div>
    </li>
    ...
  </ol>
- O número "Step 01" é decorativo; o `<li>` numera por defeito (em CSS list-style-type:none, mas a ordem semântica preserva-se).

SEO
- JSON-LD HowTo no <head> (ver prompt 15) com itemListElement HowToStep para cada passo:
  {
    "@type": "HowToStep",
    "name": "Register & Start",
    "text": "Create an account to securely access the premium intelligence test.",
    "url": "https://brain.cognifit.com/IQ-test#how-it-works"
  }
- H2 com keyword "IQ Test Works".
```

## Notas Webflow

- A linha conectora pode ser um `<div>` absolute com gradient. Para o efeito de "preencher" no scroll, GSAP `from({ scaleX: 0 })` com `transform-origin: left`.
- Os emojis podem render-se diferente entre OS — recomendo Phosphor icons custom-coloridos com gradient SVG inline.
- Hover tile rotation: Webflow Interactions Element Trigger Hover → keyframes manuais.
