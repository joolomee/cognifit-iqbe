# 07 — Backed by Large-Scale Real-World Use

> Replica `RealWorldData` (DataSections.tsx). Section header + 5 stat cards horizontais (overflow-x mobile) + parágrafo + bar chart 8 barras com bars destacadas (85-100, 100-115).

## Prompt completo

```
Cria a SECÇÃO "Backed by Large-Scale Real-World Use" — credibilidade com dados.

LAYOUT
- max-width 1200px, padding 40-64px vertical, padding lateral 24px.

SECTION HEADER
- H2: "Backed by Large-Scale Real-World Use"
  (PT: "Sustentado por uso real em larga escala")
- (sem subtitle no header, vai num parágrafo separado abaixo)

PARÁGRAFO INTRO (centered, max-width 720px, mb 64px, 18px weight 400 line-height 1.6 #4A5578)
"IQbe is not only grounded in cognitive science — it is also supported by extensive real-world usage. In an internal dataset collected over the last two years, 37,505 participants completed the test."
(PT: "O IQbe não vive só em laboratório — é suportado por utilização real em larga escala. Num dataset interno recolhido nos últimos dois anos, 37.505 participantes completaram o teste.")

LINHA DE STAT CARDS (overflow-x scroll mobile com snap-mandatory, gap 16px, mb 64px, hide-scrollbar)

5 cards. Cada um:
- min-width 180px, flex 1, snap-center.
- Card style hover false (sem lift).
- Padding 24px, text-center, flex column items-center justify-center.
- Border-top 2px #0066FF.

Conteúdo de cada card:
- Valor: gradient text linear-gradient(90deg, #0066FF, #00E5FF), 32-40px font-extrabold (weight 800), line-height 1.2, mb 8px, whitespace-nowrap.
  Aplicar -webkit-background-clip:text, -webkit-text-fill-color:transparent, background-clip:text.
- Label: 12-13px uppercase tracking-wider weight 700 #4A5578.

5 stats:
1) "37,505" / "participants" (PT: "participantes")
2) "16–90" / "age range" (PT: "idades")
3) "102.43" / "average IQ" (PT: "QI médio")
4) "100" / "median IQ" (PT: "QI mediano")
5) "40–160" / "score range" (PT: "intervalo de pontuações")

ANIMAÇÃO STAT CARDS
- FadeIn delay i*0.1s.
- Counter-up: o valor numérico anima de 0 → valor final em 1.4s ease-out-expo, ao entrar no viewport. Para "16–90", "40–160", animar ambas as pontas em paralelo.

PARÁGRAFO TRANSITION (centered max-width 720px, mb 48px, 16px #4A5578):
"The score distribution is broad and interpretable, with most users clustering between 85 and 115 and meaningful differentiation across higher and lower score ranges."
(PT: "A distribuição é ampla e interpretável: a maior parte dos utilizadores cai entre 85 e 115, com diferenciação clara nos extremos.")

BAR CHART (max-width 900px centered, dentro de um Card hover-false p 16-40px)
- min-width 450px, height 280-350px (alt mobile ≈ 280px), overflow-x auto, hide-scrollbar.
- Container interno: flex items-end justify-between gap 6-12px, padding 24-40px top, 24px bottom.

8 BARRAS (cada uma flex column items-center flex-1 group):

Cada barra:
- Track (rectangle background): w-full, relative, flex items-end, h 180-280px, bg #F0F5FA, rounded-t 6px, overflow hidden.
- Fill (motion bar):
  · Initial scaleY 0; whileInView scaleY value/35; transform-origin bottom.
  · Duration 1s, delay i*0.1s, ease cubic-bezier(0.25, 0.1, 0.25, 1).
  · Background highlight (bars 85-100 + 100-115): linear-gradient(0deg, #0066FF 0%, #00E5FF 100%), shadow 0 0 20px rgba(0,102,255,0.20).
  · Background normal: linear-gradient(0deg, rgba(0,102,255,0.20) 0%, rgba(0,102,255,0.40) 100%).
  · Group-hover brightness 110%.
- Tooltip (group-hover only): top 0, mt -32px, bg #FFFFFF, border 1px rgba(0,102,255,0.20), text 12px weight 700 #0A102E, padding 6px 10px, rounded 4px, shadow 0 4px 12px rgba(0,0,0,0.10).
  Texto: `${value}%`. Opacity 0 → 1 (300ms).
- Label X-axis (abaixo da bar): 10-12px weight 700 #4A5578, mt 16px, whitespace-nowrap.
  Mobile: rotate -45deg; Desktop: rotate 0.

8 bars dataset:
| name      | value  | highlight |
|-----------|--------|-----------|
| 40–55     | 0.68   | false     |
| 55–70     | 3.02   | false     |
| 70–85     | 11.52  | false     |
| 85–100    | 31.64  | true ✓    |
| 100–115   | 32.08  | true ✓    |
| 115–130   | 12.34  | false     |
| 130–145   | 3.77   | false     |
| 145–160   | 4.95   | false     |

(value/35 escalado para que a maior bar ocupe ~92% da altura.)

ANIMAÇÕES
- Bars: stagger 100ms entre cada, com transform-origin bottom para "crescerem" do chão.
- Tooltips: opacity transition no group-hover.
- Counter-up dos stat cards.

ACESSIBILIDADE
- <section aria-labelledby="data-title">.
- Bar chart com role="img" aria-label="IQ score distribution histogram. Most participants score between 85 and 115."
- Texto descritivo equivalente em <figcaption> visualmente oculto:
  "Distribution of 37,505 IQbe scores. Range 40–55: 0.68%. Range 55–70: 3.02%. Range 70–85: 11.52%. Range 85–100: 31.64%. Range 100–115: 32.08%. Range 115–130: 12.34%. Range 130–145: 3.77%. Range 145–160: 4.95%."

SEO
- H2 com keyword "IQ score distribution".
- JSON-LD Dataset:
  {
    "@type": "Dataset",
    "name": "IQbe Real-World Performance Dataset",
    "description": "Aggregated, anonymized IQ test results from 37,505 IQbe participants between ages 16-90.",
    "creator": { "@type": "Organization", "name": "CogniFit" },
    "variableMeasured": [
      { "@type": "PropertyValue", "name": "IQ score", "value": "40-160" },
      { "@type": "PropertyValue", "name": "Average IQ", "value": "102.43" },
      { "@type": "PropertyValue", "name": "Median IQ", "value": "100" }
    ],
    "size": "37,505 records"
  }
- Stats com `<data value="37505">37,505</data>` para semântica.
```

## Notas Webflow

- **Bar chart**: 8 divs com grid horizontal. Animação `scaleY` aplicada à barra fill. Webflow Interactions: Page Trigger "Scroll into view" → animate scale (Y axis only, transform origin Bottom Center).
- **Counter-up nos stats**: usar Webflow native (sem suporte nativo) → custom JS (numeric.js ou animateCounter snippet).
- **Snap horizontal**: CSS `scroll-snap-type: x mandatory; overflow-x: auto;` no container, e `scroll-snap-align: center` em cada card.
