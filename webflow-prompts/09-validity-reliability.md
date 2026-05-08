# 09 — Validity & Reliability of the IQbe Test

> Replica `ValidityReliability` (ScienceSections.tsx). Combina dois mini-blocos: Validity (3 stat cards + accordion) e Reliability (3 stat cards + 2 accordions). Acentua autoridade científica com badges, glow rings e gradient borders.

## Prompt completo

```
Cria a SECÇÃO "Validity & Reliability of the IQbe Test" — credibilidade científica com dados quantitativos.

⚠ JUSTIFIABILITY NOTICE
Toda a numerologia desta secção (r = 0.613, p < .001, test-retest 0.71, Cronbach's α 0.775) tem de estar suportada por estudo interno publicado ou whitepaper acessível, com link/DOI a partir do botão "See validation/test-retest details". Antes de publicar, validar com a equipa científica. Se algum valor não estiver auditado → REMOVER o respectivo card. Não usar valores aproximados sem fonte.

LAYOUT
- <section id="reliability" scroll-mt 96px>.
- max-width 1200px, padding 40-64px vertical, padding lateral 24px.

═════════════════════════════════════
PARTE A — VALIDITY
═════════════════════════════════════

SECTION HEADER A
- H2: "Validity of the IQbe Test"
- Subtitle (max 750px centered):
  "IQbe was validated against Raven's Standard Progressive Matrices, one of the best-known non-verbal intelligence tests. In a lab study, IQbe scores showed a strong positive correlation with Raven-based IQ scores."

GRID 3 STAT CARDS A (mt 48px, mb 48px, max-width 900px centered, grid 1/3 cols mobile/desktop, gap 24px)

CARD 1 — Concurrent Validity (badge teal) — SEM CARD/RECTÂNGULO
- SEM rounded, SEM border, SEM bg, SEM shadow no bloco.
- Padding 32px, text-center, items-center, group cursor-default.
- Hover: translateY -4px (spring 300). Sem mudar bg.
- Conteúdo:
  · Container relative mb 16px:
    - Glow blob ambient (não conta como rectângulo — é blur radial circular): absolute inset 0, bg #00D4AA, blur xl, opacity 0.30, rounded full, group-hover opacity 0.60 (300ms).
    - Ícone BadgeCheck 56px, #00D4AA, stroke 1.5, drop-shadow-md, group-hover scale 1.10 (300ms). SEM container box.
  · "✓" 32px font-extrabold #0A102E mb 8px.
  · Label 14px weight 700 #4A5578: "Concurrent validity"

CARD 2 — Correlation r (gradient blue) — SEM CARD/RECTÂNGULO
- Apenas o stat tipográfico, sem container. Hover translateY -4px.
- Conteúdo:
  · Letra "r" estilizada 32-40px, gradient text linear-gradient(135deg, #0066FF, #00E5FF), inline com o número. SEM pill/badge atrás.
  · OU: número grande "0.613" como hero stat tipográfico (32-48px font-extrabold gradient text), com a letra "r" como prefixo subtil 20px ao lado (regular weight, cor muted).
  · Label 14px weight 700 #4A5578: "Correlation with Raven-based scores".

CARD 3 — p-value — SEM CARD/RECTÂNGULO
- Igual ao Card 2: stat tipográfico puro, sem pill/badge.
- Conteúdo:
  · Valor "p < .001" 32px font-extrabold, "p" prefix 20px regular cor muted, "< .001" gradient text gold #FFB800.
  · Label 14px weight 700 #4A5578: "Statistical significance".

(Hairlines 1px verticais rgba(0,102,255,0.10) entre os 3 stat blocks, opcional, em desktop.)

ACCORDION A (max-width 800px centered, mb 80px) — SEM card exterior

Accordion item style:
- SEM card/rectângulo no container do item. Apenas hairline 1px rgba(0,102,255,0.10) horizontal acima de cada item (separador).
- Botão de toggle (este SIM tem leve estado visual ao hover/open, é elemento interactivo):
  · w-full text-left p 24px flex justify-between items-center, focus outline ring 3px #7B61FF.
  · Title: 18px weight 700 #0A102E. Hover: cor #0066FF.
  · Chevron 20px #0066FF, rotate 0 → 180 quando aberto (300ms).
  · No state OPEN: accent line 4px à esquerda do TÍTULO em #0066FF (linha vertical, não caixa) — sinaliza item activo.
- Content (open): p 24px pt 0, mt 8px, space-y 16px, 16px weight 500 line-height 1.6 #4A5578.
- Animação: motion height 0 → auto + opacity 0 → 1, 300ms easeInOut.

1 accordion item:
Title: "See validation study details"
Content (3 parágrafos):
- "The concurrent validity of IQbe was assessed by correlating its scores with scores from the Raven's Standard Progressive Matrices (SPM)."
- "**Methodology:** A sample of participants completed both assessments under controlled conditions. Results were analyzed to determine the strength of the relationship between performance on both tools."
- "**Findings:** The strong positive correlation (r = 0.613, p < .001) confirms that IQbe measures the same core constructs of fluid intelligence and reasoning ability as the established standard."

═════════════════════════════════════
PARTE B — RELIABILITY
═════════════════════════════════════

SECTION HEADER B
- H2: "Reliability of the IQbe Test"
- Subtitle:
  "Reliability indicates whether a test produces stable and internally consistent results. IQbe showed adequate test-retest stability and internal consistency."

GRID 3 STAT CARDS B (mt 48px, mb 48px, max-width 900px centered, grid 1/3 cols, gap 24px)

Cada card: padding 32px, text-center, items-center, border-top 4px solid (cor varia), hover shadow lg (300ms).

3 stat blocks. SEM CARD/RECTÂNGULO. Apenas accent line top 4px solid (cor varia) acima do número — linha horizontal, não caixa. Hover translateY -4px no bloco.

STAT 1 — Test-retest reliability
- Accent line top 4px #0066FF.
- Valor: "0.71" 36px font-extrabold gradient text linear-gradient(135deg, #0066FF, #00E5FF). mb 12px.
- Label 14px weight 700 #4A5578: "Test-retest reliability"

STAT 2 — Cronbach's alpha
- Accent line top 4px #7B61FF.
- Valor: "0.775" 36px font-extrabold gradient text linear-gradient(135deg, #7B61FF, #00E5FF). mb 12px.
- Label: "Cronbach's alpha"

STAT 3 — Assessment quality
- Accent line top 4px #00D4AA.
- Valor: "Reliable ✓" 36px font-extrabold #00D4AA. mb 12px.
- Label: "Assessment quality"

ACCORDIONS B (max-width 800px centered, mb 48px)

2 accordion items:

Item 1 — "See test-retest details"
- "Test-retest reliability measures how consistent scores remain over time. A subsample completed IQbe twice, with an appropriate interval between sessions to minimize learning effects."
- "The correlation of 0.71 demonstrates that IQbe yields stable estimates of a person's abilities across different testing sessions."

Item 2 — "See internal consistency details"
- "Internal consistency indicates how well the different items within the test measure the same general construct. Evaluated via Cronbach's alpha (α = 0.775), IQbe demonstrates strong internal coherence."
- "This means all items, despite increasing difficulty, consistently contribute to the measurement of fluid intelligence."

ANIMAÇÕES
- Section headers: FadeIn standard.
- Stat cards: stagger delay i*0.1s. Em hover: lift -8px + scale 1.02 + shadows reforçadas.
- Accordion: chevron rotate 300ms, content height 0→auto + opacity 0→1 (300ms easeInOut).
- Glow pulsante na badge teal (CARD 1 da Validity): blur amplitude 0.30 → 0.45 → 0.30, 3s ease-in-out infinite.
- Pill "r" gradient hover: rotate 360° em 700ms (uma volta).
- Cards numéricos: counter-up dos valores numéricos ao entrar viewport.

ACESSIBILIDADE
- <section id="reliability" aria-labelledby="science-title">.
- Pode-se subdividir em <section aria-labelledby="validity-title"> e <section aria-labelledby="reliability-title">.
- Stat cards como <dl><dt>label</dt><dd>value</dd></dl> (description list — semânticamente adequado).
- Accordions como <details><summary> nativos para fallback sem JS:
  <details>
    <summary>See validation study details</summary>
    <p>...</p>
  </details>
- Cada accordion com aria-expanded e aria-controls quando custom JS.

SEO
- H2 com keywords "validated IQ test", "reliable IQ test".
- JSON-LD ScholarlyArticle (opcional, se houver paper publicado):
  {
    "@type": "ScholarlyArticle",
    "name": "Concurrent Validity of IQbe Against Raven's Standard Progressive Matrices",
    "author": "...",
    "datePublished": "2024-...",
    "publisher": "CogniFit",
    "citation": "..."
  }
- Inclui valores numéricos (0.613, p<.001, 0.71, 0.775) em <data value="..."> ou <span class="stat-value"> para ranking semântico.
- Microdata "MedicalTest" possível: 
  {
    "@type": "MedicalTest",
    "name": "IQbe",
    "usedToDiagnose": { "@type": "MedicalCondition", "name": "Fluid intelligence assessment" }
  }
```

## Notas Webflow

- Accordion: usar nativo `<details><summary>` em embed ou Webflow Accordion component (do Library) com style override.
- Animação chevron rotate: Element Trigger Click → animate rotateZ 0 → 180.
- Glow pulsante: CSS keyframes embed.
- Counter-up para 0.613, 0.775, 0.71 — script numeric.js ou snippet js custom (cuidado com decimais).
- Para gradient text, criar combo class `.stat-gradient-blue`, `.stat-gradient-violet`.
