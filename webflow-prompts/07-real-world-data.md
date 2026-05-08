# 07 — Grounded in Cognitive Science (default) / Backed by Real-World Data (com audit)

> Substitui `RealWorldData` (DataSections.tsx). **Default = versão qualitativa sem números** (regra: tudo tem de ser real e verificável). A versão numérica fica como Prompt B, **só publicar se a equipa científica devolver os 6 valores auditados**.

---

## ⚠ Regra para esta secção

A versão numérica original (37,505 / 16–90 / 102.43 / 100 / 40–160 + distribuição em 8 bins) **não está auditada** e **não pode ser publicada**. Ler `CLAIMS-AUDIT.md` secção 07 para o detalhe completo. Resumo:
- Os 6 valores numéricos são gerados pela IA do Figma Make sem fonte verificável.
- A cauda superior (≥130 = 8,72%) é ~4× mais alta do que numa normal teórica — precisa de explicação documentada se for publicada.
- O range 40–160 contradiz o doc técnico interno (55–145).
- Os labels do chart contradizem as bandas da secção 08.

**Path forward:**
- **Default (Prompt A)**: versão qualitativa, sem números. Publicável já. Defensável sem audit interno.
- **Alternativa (Prompt B)**: versão numérica, só publicar se a equipa científica devolver: snapshot date, mean calc, range canónico, justificação da cauda superior.

---

## Prompt A — Default (qualitativo, real e defensável)

```
Substitui inteiramente a secção "Backed by Large-Scale Real-World Use" do componente actual pela versão sem números abaixo. Não toques no resto do site.

LAYOUT
- max-width 1200px centrado, padding 40-64px vertical, padding lateral 24px.
- SEM cards, SEM rectângulos. Só texto + ícones + dividers (regra global).

SECTION HEADER
- H2 (Plus Jakarta Sans 700, clamp 36-52px, leading-tight, tracking-tight, #0A102E):
  "Grounded in Cognitive Science"
- Subtitle (centered max 750px, 18px weight 300 #4A5578, leading 1.6):
  "IQbe is built on Raven's Standard Progressive Matrices — one of the most widely studied paradigms for measuring fluid intelligence. The test extends that framework with interactive 3D problem solving, bringing real-world cognitive demands closer to the assessment experience."

3 PILARES (mt 64px, max 1000px centered, grid 1/3 cols mobile/desktop, gap 32-48px) — SEM cards
Cada pilar:
- flex column items-start gap 16px, padding interno 16-24px (respiração).
- Hover (opcional): translateY -4px (300ms ease).
- Hairlines 1px verticais rgba(0,102,255,0.10) entre pilares (em desktop).

ÍCONE (sem container/box): 32-40px lucide, cor #0066FF.

PILAR 1 — Brain icon (lucide)
Title: "Peer-reviewed framework"
Body 15px line 1.6 #4A5578: "Built on Raven's Progressive Matrices, a paradigm in cognitive psychology since 1938 and one of the most cited non-verbal intelligence tests in the literature."
(Verifiável: Raven's foi publicado em 1938 — facto público.)

PILAR 2 — Globe icon (lucide)
Title: "Non-verbal by design"
Body: "Tasks rely on visual reasoning rather than language, making the test usable across cultures and educational backgrounds with low cultural bias."
(Verifiável: descritivo factual + atributo bem documentado do paradigma Raven.)

PILAR 3 — Box icon (lucide, 3D cube)
Title: "Interactive 3D format"
Body: "Extends static pattern recognition with active manipulation — rotate the cube, infer the missing piece — bringing the task closer to real cognitive demands."
(Verifiável: descreve literalmente o que o produto faz.)

ANIMAÇÕES
- Section header FadeIn standard (y 40 → 0, opacity 0 → 1, 0.6s ease-out).
- Pilares stagger delay i*0.1s.
- SEM counter-up (já não há números).
- SEM bar chart.

ACESSIBILIDADE
- <section aria-labelledby="science-grounding-title">.
- 3 pilares como <ul role="list"> com <li><article>.
- Ícones aria-hidden="true".

SEO
- H2 com keyword "Cognitive Science".
- AI-snippet sentence (após o subtitle, opcional como <p class="sr-only"> ou inline 14px muted):
  "IQbe is a non-verbal IQ test based on Raven's Progressive Matrices, with an interactive 3D format that adds active manipulation to traditional pattern recognition."
- JSON-LD adicional Article ou ScholarlyArticle referenciando Raven 1938 (opcional).
```

---

## Prompt B — Versão numérica (SÓ se valores auditados pela equipa científica)

> ⚠ Não usar até teres do whitepaper / dataset audit interno: snapshot date dos 37,505, método de cálculo da média 102.43, range canónico (40–160 vs 55–145), e justificação documentada para a cauda superior anómala (≥130 = 8,72% vs ~2,3% expected).

```
Edita APENAS os textos da secção "Backed by Real-World Data". Layout e visualização do chart mantêm-se. Substitui as strings.

⚠ ANTES DE PUBLICAR:
1. Pedir à equipa científica os 6 valores auditados (37,505 / 16–90 / 102.43 / 100 / 40–160 / 8 distribution %).
2. Confirmar snapshot date (DD/MM/YYYY).
3. Decidir range canónico (40–160 do dataset OU 55–145 do doc técnico — não os dois).
4. Ter pronto: explicação para a cauda ≥130 inflada (self-selection / repeat attempts / escala IQbe).

H2: "Backed by Real-World Data"
(Tirar "Large-Scale" — só usar se o nº real (a confirmar) qualificar comparativamente em psicometria.)

INTRO (centered max 720, 18px #4A5578):
"IQbe is grounded in cognitive science and supported by real-world usage. As of [SNAPSHOT_DATE], an internal CogniFit dataset of [N] completed assessments shows a broad and interpretable score distribution."

5 STAT BLOCKS (sem rectângulo, accent line top 2px #0066FF):
1) [N] / Participants                  ← ex.: 37,505
2) [AGE_MIN]–[AGE_MAX] / Age range     ← ex.: 16–90
3) [MEAN] / Average IQ                 ← ex.: 102.43
4) [MEDIAN] / Median IQ                ← ex.: 100
5) [SCORE_MIN]–[SCORE_MAX] / Score range ← decidir 40–160 ou 55–145

SOURCE NOTE (12px #4A5578, mt 16, abaixo dos stats):
"Source: CogniFit IQbe internal dataset, snapshot of [SNAPSHOT_DATE]. Score range reflects the IQbe scaling."

PARÁGRAFO ANTES DO CHART (centered max 720, 16px #4A5578):
"Most users score between 85 and 115. The proportion above 130 is higher than in a theoretical normal distribution, consistent with self-selected online samples [or other documented explanation]."

BAR CHART — alinhar labels com a secção 08:
Trocar as 5 categorias actuais ("VERY LOW / BELOW AVG / AVERAGE / ABOVE AVG / VERY HIGH") por:
"BELOW 85 / 85–100 / 100–115 / 115–130 / 130+"

Manter as 8 barras visualmente, mas agrupar sob estas 5 labels:
- BELOW 85 → 40–55, 55–70, 70–85
- 85–100 → 1 barra
- 100–115 → 1 barra
- 115–130 → 1 barra
- 130+ → 130–145, 145–160

Os valores numéricos das 8 percentagens dependem do dataset auditado.

(Manter highlight visual nas barras 85–100 e 100–115 = gradient azul→cyan; resto fica subtle.)
```

---

## Notas Webflow (aplicáveis a ambos os prompts)

- **Default = Prompt A**: implementar primeiro a versão qualitativa. É publicável e defensável já.
- **Bar chart de Prompt B**: 8 divs com grid horizontal. Animação `scaleY` aplicada à barra fill. Webflow Interactions: Page Trigger "Scroll into view" → animate scale (Y axis only, transform origin Bottom Center).
- **Counter-up nos stats** (Prompt B): script numeric.js ou snippet js custom — só implementar se os números forem auditados.
- **JSON-LD Dataset**: só incluir se Prompt B for publicado, com cutoff date e source explícitos.
- Se publicares Prompt A e mais tarde tiveres dados auditados, não há retrabalho de layout — só substituis os 3 pilares por stats + chart.
