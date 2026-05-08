# 02 — Hero

> Replica fielmente o componente `Hero` (IntroSections.tsx) + `InteractiveCube.tsx`. 100svh, split 1fr/1fr no desktop. Coluna esquerda: badge pill com dot azul a pulsar, H1 multi-linha com a 2ª parte em gradient azul, subheadline editorial com termos em bold, CTA pill primário + 2 linhas de reassurance, trust strip com 2 indicadores. Coluna direita: cubo 3D 3×3×3 interactivo (auto-rotate + drag) com 3 floating labels animadas. Indicador "Scroll to explore" centrado no fundo do hero.

## Prompt completo

```
Cria a SECÇÃO HERO do IQbe — landing de avaliação cognitiva premium da CogniFit. Replica EXACTAMENTE o componente Hero do código fonte.

LAYOUT
- <section> relative, min-h 100svh, flex items-center justify-center, overflow hidden.
- Padding-top 112px mobile / 128px desktop (acomodar navbar fixo). Padding-bottom 64px.
- Container interior: max-width 1300px, mx-auto, padding-x 16px mobile / 24px sm+.
- Grid: 1 coluna mobile, 2 colunas (1fr 1fr) ao 1024px+. Gap 32px mobile / 80px desktop. items-center. relative z-10.

GLOW DE FUNDO (decorativo, atrás do grid)
- Absolute, top 50% left 50% translate -50%/-50%.
- 800x800px, rounded-full, bg #0066FF a 10% opacity, blur 150px, pointer-events:none.

══════ COLUNA ESQUERDA ══════
flex column items-start, space-y 32px (8 em escala Tailwind), mt 48px mobile / 0 desktop.
Bloco principal envolto em FadeIn (delay 0).

1) EYEBROW (sem rectângulo — só inline)
- inline-flex items-center, gap 8px. SEM background, SEM border, SEM rounded, SEM shadow.
- Cor #0066FF, 12px weight 600 (semibold), uppercase, tracking-widest (0.1em).
- mb 24px.
- Conteúdo: dot 8x8 com `animate-ping` Tailwind nativo (scale 1→2.25 + opacity 1→0, 1s infinite) sobre dot fixo 8x8 #0066FF.
- Texto: "CogniFit QI Assessment".

2) H1
- Plus Jakarta Sans 800 (extrabold), cor #0A102E, leading 1.05, tracking-tight (~-0.025em), drop-shadow-sm.
- Tamanhos: 40px → sm 60px → md 80px → lg 90px (sem clamp; usa breakpoints discretos).
- mb 24px (mb-6) + pb 8px (pb-2).
- Estrutura:
  · "The Ultimate" (cor sólida #0A102E)
  · <br> oculto em <640px, visível em ≥640px (forçar quebra)
  · <span> "Intelligence Test." com gradient text linear-gradient(90deg, #00A3FF 0%, #0066FF 100%) — `bg-clip-text`, `text-transparent`, drop-shadow-sm extra, inline-block, pb 8px.

3) SUBHEADLINE
- 18px (text-lg) mobile / 20px (text-xl) desktop, weight 300 (font-light), cor #4A5578, leading-relaxed (1.625), max-w 512px (max-w-lg), mb 32px.
- Texto EXACTO (com <strong> nas keywords primárias):
  Go beyond static quizzes. IQbe is a premium <strong>IQ test</strong> and <strong>brain assessment</strong> that measures your <strong>cognitive health</strong>, 3D thinking, and executive problem-solving — in one fast, scientifically validated platform.
  (Mudança: "brain test mental" → "brain assessment" porque "brain test mental" é EN gramaticalmente partido e não defensável; "brain assessment" mantém densidade SEO equivalente.)

4) CTA + REASSURANCE (flex column mobile / row sm+, items-center, gap 16px, w-full sm:w-auto)
- BOTÃO primário pill:
  · Padding 40x20 (px-10 py-5), 18px weight 700 (font-bold), rounded-full, white text.
  · bg linear-gradient(90deg, #0066FF 0%, #00A3FF 100%) — sobrescreve gradient default da Button base.
  · Hover: gradient escurece (from #0055DD to #0088DD) + translateY -2px (-translate-y-0.5) + shadow-xl. Transition 300ms.
  · Shadow base shadow-lg.
  · Conteúdo: texto "Check My IQ Score" + ArrowRight (lucide) 20x20 ml 8px.
  · onClick: window.open("https://www.cognifit.com/aplicaciones/html5/public/assessment/ASSESSMENT~@~IQBE?testButtonUrl=https://www.cognifit.com%2Fbattery-of-tests%2Fiqbe-test%3Freg%3Dtrue", "_blank")
- REASSURANCE (flex column justify-center, 13px weight 500 #4A5578):
  · Linha 1: <CheckCircle> lucide 14x14 #00D4AA gap 6px + "100% Online & Secure"
  · Linha 2 (mt 4px): <CheckCircle> 14x14 #00D4AA + "Scientifically Validated"

5) TRUST STRIP — bloco separado dentro de FadeIn delay 0.2s, w-full
- pt 32px, mt 16px, border-top 1px rgba(0,102,255,0.10) (hairline divider, único frame permitido aqui).
- flex flex-wrap items-center, gap-x 24px, gap-y 12px.
- ⚠ "37,505+ Datasets" REMOVIDO (claim não justificável sem auditoria interna ao dataset). Substitui por uma das opções abaixo (escolher só claims defensáveis):
  · "Validated against Raven's SPM" (com <BadgeCheck> 16x16 #0066FF) — defensável se houver paper interno.
  · "Non-verbal · Cross-cultural" (com <Globe> 16x16 #0066FF) — descritivo factual, sempre defensável.
  · "Built with neuroscientists" (com <Brain> 16x16 #0066FF) — defensável se a equipa científica for pública.
  · ou DEIXAR APENAS o item 2 e remover o item 1 (preferível se nada for verificável).
- Separador: dot 4x4 rounded-full bg rgba(0,102,255,0.30); só visível em sm+; usar APENAS se houver 2 items.
- Item 2: <MapPin> lucide 16x16 mr 8px #0066FF + "Raven's Matrices Based" — 14px weight 600 #4A5578.
  (NB: na screenshot vê-se MapPin; o código fonte tinha Brain — alinha com o Figma actual.)

══════ COLUNA DIREITA — Visual ══════
FadeIn delay 0.3s, direction "left" (entra com x-40 → x-0).
Container: relative, flex center, w-full h-full, min-h 350px / 500px md+.
Inner: relative w-full max-w 350px / 600px md+, aspect-square, flex center, scale 0.75 / 0.90 sm / 1.0 md, mt 32px / 0 lg+.

CUBO 3D INTERACTIVO (z 10, absolute inset 0, pointer-events auto, scale 0.9 / 1.0 sm+)
Implementação CSS 3D pura (a do código fonte) ou WebGL/Three.js. Specs do código fonte:

ESTRUTURA
- 3×3×3 grid (Rubik). 27 posições no total, mas removem-se 2:
  · O centro absoluto (0,0,0) — sempre invisível.
  · A peça (-1, 0, 1) — frontal-esquerda-meio — para criar o "missing piece" estilo Raven.
  · Resultado visível: 25 sub-cubos.
- Sub-cubo: width 90px, gap 8px → offset entre centros = 98px.
- Container do cubo tem `perspective: 1800px` (no parent), `transform-style: preserve-3d`.
- Rotação inicial: rotateX 15°, rotateY 45° (mostra 3 faces simultaneamente).

SUB-CUBO (cada um)
- Body entre faces: bg #CBD5E1, rounded 12px (rounded-xl), shadow-md.
- Faces (6 por sub-cubo) cada uma absolute inset 0:
  · Face style: bg linear-gradient(135deg, #FFFFFF 0%, #F4F7FA 100%), rounded 12px, border 1px branco, inset shadow 0 0 12px rgba(0,0,0,0.03).
  · backfaceVisibility: hidden.

PADRÕES nas faces externas (só renderizam no perímetro):
- Front (Z=+1) e Back (Z=-1): 2 dots #0066FF circulares 14x14 px, rounded-full, shadow-sm. Posicionados:
  · Top-right: top 4px, right 4px.
  · Bottom-left: bottom 4px, left 4px.
- Right (X=+1) e Left (X=-1): cruz vermelha — 2 traços `bg-red-500` (Tailwind = #EF4444), height 6px, width 32px, rotated +45° e -45°, rounded-full, shadow-sm.
- Top (Y=-1) e Bottom (Y=+1): triângulo equilátero a apontar para cima, base 28px (border-l/r 14px transparent), altura 24px (border-b 24px solid #00D4AA), drop-shadow-sm.

HIGHLIGHT BOX DO MISSING PIECE (na posição vazia -1,0,1)
- Renderiza 3 faces (front, right, left), cada uma absolute inset 0, border 3px solid rgba(0,163,255,0.60), rounded 12px (rounded-xl), shadow 0 0 30px rgba(0,163,255,0.40).
- Animação: Tailwind `animate-pulse` nativa (opacity 1 ↔ 0.5, 2s cubic-bezier(0.4,0,0.6,1) infinite).

INTERACÇÃO
- Auto-rotate idle: rotateX += delta * 0.005, rotateY += delta * 0.008 (delta em ms; ≈ 5°/s no X e 8°/s no Y).
- Drag handler: ao arrastar (mouse ou touch), info.delta.x → rotateY += 0.5x, info.delta.y → rotateX -= 0.5y. Suspende auto-rotate enquanto isDragging===true.
- Touch action none, cursor grab / grabbing active.
- Overlay invisível drag-capture: absolute inset 0 z-50.

HAND HINT (visível até 1ª interacção)
- absolute z 60, pointer-events none.
- Ícone <Hand> de lucide-react, 48x48 (w-12 h-12), color #00A3FF + fill #00A3FF/20, strokeWidth 1.5, rotate -15deg.
- Wrapper com `text-white drop-shadow-lg` (a class lucide interna sobrescreve text-white).
- Animação keyframes (motion):
  · initial: opacity 0, x -30, y 30
  · animate: opacity [0, 1, 1, 0], x [-30, 30, 30, 30], y [30, -10, -10, -10]
  · duration 2.5s, repeat Infinity, repeatDelay 0.5s, ease "easeInOut"
- Esconder ao primeiro pointerDown ou drag (`hasInteracted` true).

══════ 3 FLOATING LABELS (à volta do cubo) — SEM RECTÂNGULO ══════
Cada label é só dot + texto inline, absolute, z 20, pointer-events none, will-change-transform.
SEM bg, SEM border, SEM rounded-full, SEM shadow.
Estrutura: inline-flex items-center, gap 8px.
Texto 12px mobile / 14px md+, weight 700 (font-bold), tracking-wide, cor #0A102E (todos os labels).
Para legibilidade sobre fundo claro/glow, opcional: text-shadow 0 1px 2px rgba(255,255,255,0.6) — aplicado APENAS no texto, não num container.
Dot 8x8 rounded-full (única forma circular — é o dot, não um wrapper).

LABEL 1 — "3D Reasoning"
- Posição: absolute top 5% / 20% md+, left 0% / -5% md+.
- Dot 8x8 bg #00E5FF (cyan) + box-shadow 0 0 10px #00E5FF + Tailwind `animate-pulse`.
- Animação container: motion y [-4, 4, -4], duration 5s, repeat Infinity, ease "easeInOut", delay 0.2s.

LABEL 2 — "Executive Function"
- Posição: absolute top 10% / 5% md+, right 0% / 5% md+ (md:bottom-auto).
- Dot 8x8 bg #7B61FF (violet, sem glow, sem animate-pulse).
- Animação: motion y [-5, 5, -5], duration 6s, ease "easeInOut", delay 1s.

LABEL 3 — "Fluid Intelligence"
- Posição: absolute bottom 5% / 10% md+, left 0% / -15% md+ (md:top-auto, md:right-auto).
- Dot 8x8 bg #00D4AA (teal, sem glow, sem animate-pulse).
- Animação: motion y [4, -4, 4], duration 4.5s, ease "easeInOut", delay 1.5s.

══════ INDICADOR SCROLL (rodapé do hero, fora do grid) ══════
- absolute bottom 32px (bottom-8), left 50% translateX -50% — centrado horizontalmente.
- flex column items-center gap 8px, cor #4A5578.
- Initial opacity 0 → animate opacity 1, transition delay 2s, duration 1s.
- Texto: "Scroll to explore" — 12px (text-xs) uppercase tracking-widest weight 700 (font-bold).
- Ícone <ChevronDown> lucide 20x20 (w-5 h-5) #0066FF, dentro de motion.div com animate y [0, 8, 0], duration 1.5s, repeat Infinity, ease "easeInOut".

══════ ANIMAÇÕES DE ENTRADA (apenas 3 FadeIns reais) ══════
- FadeIn 1 (bloco principal: badge + H1 + sub + CTA + reassurance): y 40 → 0, opacity 0 → 1, duration 0.6s ease-out, delay 0s. ÚNICO bloco — não há stagger interno.
- FadeIn 2 (trust strip): mesmas specs, delay 0.2s.
- FadeIn 3 (coluna direita inteira: cubo + 3 labels): direction "left" (x 40 → 0 na verdade x -40 → 0 conforme implementação), delay 0.3s.
- Floating labels: motion infinitos descritos acima começam imediatamente após o FadeIn 3.
- Scroll indicator: opacity transition delay 2s.
- (NÃO há word-by-word reveal no H1, NÃO há stagger por linha do H1, NÃO há AI-snippet sentence.)

ACESSIBILIDADE
- <section id="hero" aria-labelledby="hero-title">.
- <h1 id="hero-title">.
- 3D Cube embrulhar em <figure aria-label="Interactive 3D cube — IQbe Raven-inspired puzzle preview"> com fallback estático para `prefers-reduced-motion: reduce`.
- @media reduced-motion: cubo congelado (sem auto-rotate nem hand hint), labels sem float, animate-ping/pulse off.
- Botão CTA com aria-label completo: "Check My IQ Score — start the IQbe assessment in a new tab".
- Trust strip dot separator é decorativo, aria-hidden.
- Ícones lucide (Shield, Brain, CheckCircle, ArrowRight, Hand, ChevronDown) sempre aria-hidden="true".

SEO
- H1 ÚNICO da página, com keyword "Intelligence Test" + tag <strong>IQ test</strong>, <strong>brain test mental</strong> no <p> da subheadline (sinal forte para SEO).
- LCP candidate: o <h1>. Garantir font-display:swap na Plus Jakarta Sans + preconnect a fonts.googleapis.com / fonts.gstatic.com.
- og:image (1200x630): exportar uma versão estática do hero para meta. NÃO usar o cubo animado.
- Schema (JSON-LD): tratado no prompt 15 — WebApplication + MedicalWebPage referenciam este hero como mainEntity.
```

## Notas Webflow

- **3D Cube**: opção mais simples = recriar com CSS 3D (transforms + preserve-3d) — todo o código fonte é CSS-only, não usa Three.js. Embed `<div class="cube-host">` no Webflow + 1 script JS pequeno para `useAnimationFrame` (rotateX/Y delta) e drag handler. Para tuning rápido podes usar GSAP em vez de motion.
- **Floating labels**: 3 divs absolutos. Webflow Interactions Element Trigger "While Page is Loading" → animation ease-in-out infinite, eixo Y só. Cores nas combo-classes `.label--blue/violet/teal`.
- **Pulse dot do badge**: usar Tailwind `animate-ping` directo via custom code embed `@keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }` aplicado a `.dot-ping`.
- **Animate-pulse do highlight box**: idem, `@keyframes pulse { 50% { opacity: .5; } }`.
- **Drag**: vanilla JS pointer events com pointermove/up listeners; ou GSAP Draggable (`type:"x,y"`).
- **Reduced motion**: `@media (prefers-reduced-motion: reduce) { .cube-host *, .label-float, .scroll-cue * { animation: none !important; transition: none !important; } }`.
- **Hand hint**: SVG inline da `Hand` de lucide; animação por keyframes 4-stop como descrito.
- **NÃO usar Three.js** se não for preciso — adiciona ~600KB de bundle e o efeito CSS 3D é praticamente idêntico ao do código fonte.
