# 08 — What Your IQ Score Means

> Replica `ScoreMeans` (DataSections.tsx). Section header + 5 score band rows (cada uma com left-accent vertical bar de intensidade variável; última em gold).

## Prompt completo

```
Cria a SECÇÃO "What Your IQ Score Means" — escala interpretativa.

LAYOUT
- max-width 1200px, padding 40-64px vertical, padding lateral 24px.

SECTION HEADER
- H2: "What Your IQ Score Means"
  (PT: "O que significa a tua pontuação")
- Subtitle:
  "IQ scores are interpreted relative to a reference population. IQbe uses a familiar scale where 100 represents the middle of the distribution."
  (PT: "As pontuações de QI interpretam-se em relação a uma população de referência. O IQbe usa uma escala familiar em que 100 representa o centro da distribuição.")

SCORE BANDS (mt 48px, max-width 800px centered, space-y 12px)

5 rows. Cada uma:
- flex items-center, rounded 16px, bg #FFFFFF, border 1px rgba(0,102,255,0.10), overflow hidden, position relative.
- Hover: bg #F8FAFC, border rgba(0,102,255,0.20), scale 1.01, shadow 0 4px 12px rgba(0,0,0,0.05) (300ms).
- Group on hover: cor do label muda para #0066FF.

ESTRUTURA DE UMA ROW

Left accent bar (absolute left 0 top 0 bottom 0, width 8px):
- background-color: var(--accent-color)
- opacity: max(0.30, intensity/100)
- box-shadow (apenas se intensity===100): 0 0 15px var(--accent-color)
- transition all 300ms (intensifica no hover).

Score column (padding 20px, padding-left 32px, w 140-200px, weight 700 #0A102E, border-right 1px rgba(0,102,255,0.10), shrink 0):
Texto da pontuação (ex.: "Below 85").

Label column (padding 20px, weight 500 #4A5578, transition colors 300ms):
Texto descritivo.

OS 5 BANDS:

| Score      | Label                       | Intensity | Accent color  |
|------------|-----------------------------|-----------|---------------|
| Below 85   | Below average range         | 10        | #0066FF       |
| 85–100     | Average range, lower half   | 40        | #0066FF       |
| 100–115    | Average range, upper half   | 100       | #0066FF       |
| 115–130    | Above average range         | 100       | #00E5FF (cyan)|
| 130+       | High range                  | 100       | #FFB800 (gold)|

(PT labels:
- "Abaixo da média"
- "Média, metade inferior"
- "Média, metade superior"
- "Acima da média"
- "Excepcional")

NOTA FINAL (mt 40px, centered, max-width 600px, 14px weight 500 #4A5578):
"A score is not a complete portrait of a person's abilities, but it can offer a useful snapshot of reasoning and problem-solving performance."
(PT: "Uma pontuação não é um retrato completo da pessoa, mas dá um snapshot útil do raciocínio e da resolução de problemas.")

ANIMAÇÕES
- Header: FadeIn standard.
- Cada row: FadeIn com delay i*0.1s (stagger 100ms top→bottom).
- Hover row: bg shift + scale + shadow (300ms).
- Accent bar com glow pulsante no row "130+" (gold): box-shadow oscila entre 0 0 15px e 0 0 25px, 2.4s ease-in-out infinite.
- Nota final: FadeIn delay 0.6s.

ACESSIBILIDADE
- <section aria-labelledby="score-title">.
- Score bands como <table> com columns "Score" e "Interpretation":
  <table>
    <caption class="sr-only">IQ score interpretation bands</caption>
    <thead><tr><th scope="col">Score Range</th><th scope="col">Interpretation</th></tr></thead>
    <tbody>
      <tr><td>Below 85</td><td>Below average range</td></tr>
      ...
    </tbody>
  </table>
- Accent bar é decorativo — aria-hidden="true".

SEO
- H2 com keyword "IQ score" / "average IQ".
- Schema.org Table não tem markup específico — basta semântica HTML.
- Adicionar PT description rica para sitelinks: cada interpretação 1-2 frases adicionais (ex.: "Average range, upper half — 50% to 84% of population...").
```

## Notas Webflow

- Cada row é um `<div>` com grid 8px / auto / 1fr.
- Accent bar com `position: absolute; left: 0; top: 0; bottom: 0; width: 8px;` e dynamic color via combo class.
- Hover state via Element Trigger Hover.
- Glow pulsante no gold band: CSS keyframes embed.
