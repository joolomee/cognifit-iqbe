# 08 — What Your IQ Score Means

> Replica `ScoreMeans` (DataSections.tsx). Section header + 5 score band rows (cada uma com left-accent vertical bar de intensidade variável; última em gold).

## Prompt completo

```
Cria a SECÇÃO "What Your IQ Score Means" — escala interpretativa.

⚠ NOTA DE COERÊNCIA NARRATIVA
Esta secção é totalmente defensável (ver abaixo). Mas se publicares também a 07 com a versão NUMÉRICA (Prompt B mostra 8,72% dos utilizadores IQbe ≥130), há leitura conflituosa com o "~2% of reference population" desta secção. Resolução recomendada:
- 07 Prompt A (qualitativo) + 08 com percentagens → coerente.
- 07 Prompt B (numérico) + 08 → adicionar nota explícita "Reference population, not IQbe users" no subtitle de 08 + reforçar "self-selected sample" no parágrafo de 07.

DEFENSIBILIDADE DAS PERCENTAGENS (preparar resposta a chefe/legal)
"~16% / ~34% / ~34% / ~14% / ~2%" derivam directamente da distribuição normal teórica (μ=100, σ=15) — escala universal de QI. Verificável em qualquer livro de psicometria:
- Below 85 (z<-1) = 15.87% → ~16%
- 85–100 (z∈[-1,0]) = 34.13% → ~34%
- 100–115 (z∈[0,1]) = 34.13% → ~34%
- 115–130 (z∈[1,2]) = 13.59% → ~14%
- 130+ (z>2) = 2.27% → ~2%
NÃO são dados internos CogniFit. São propriedades estatísticas da distribuição-base.

LAYOUT
- max-width 1200px, padding 40-64px vertical, padding lateral 24px.

EYEBROW (sem rectângulo, só inline)
- inline-flex items-center gap 8px. Cor #0066FF, 12px weight 600 uppercase tracking-widest.
- Dot 6-8px #0066FF (sem animate-ping aqui — usar só no Hero).
- Texto: "SCORE INTERPRETATION".
- Centrado acima do H2.

SECTION HEADER
- H2: "What Your IQ Score Means"
- Subtitle:
  "IQ scores are interpreted relative to a reference population. IQbe uses a familiar scale where 100 represents the middle of the distribution."

SCORE BANDS (mt 48px, max-width 800px centered, space-y 12px)

5 rows. SEM RECTÂNGULO em volta do row.
- flex items-center, position relative.
- SEM rounded, SEM border, SEM bg, SEM shadow no container do row.
- Hairlines 1px rgba(0,102,255,0.10) horizontais entre rows.
- Hover: scale 1.005 + cor do label muda para #0066FF (300ms). Sem alterar bg.

ESTRUTURA DE UMA ROW (4 colunas: accent bar | score | interpretation | mini progress)

Left accent bar (absolute left 0 top 0 bottom 0, width 4-8px):
- background-color: var(--accent-color)
- opacity: max(0.30, intensity/100)
- box-shadow (apenas se intensity===100): 0 0 15px var(--accent-color)
- transition all 300ms (intensifica no hover).

Score column (padding 20px, padding-left 32px, w 140-200px, weight 700, shrink 0):
- Cor: a accent-color do row (Below 85 = muted; 85-100/100-115 = blue; 115-130 = cyan; 130+ = gold).
- Texto da pontuação: "Below 85", "85–100", "100–115", "115–130", "130+".

Interpretation column (padding 20px, flex column gap 4px):
- Title 16-18px weight 700 #0A102E: o label descritivo.
- Sub-label 13px #8B95B5 (muted): "~X% of reference population".
  ⚠ IMPORTANTE: usar "of reference population", NÃO "of population". Evita ambiguidade (não são utilizadores IQbe — é a referência teórica).

Mini progress bar column (right side, w 200-280px, h 8px, rounded-full):
- Track bg #E5EAF2.
- Fill bg accent-color, width = intensity% (10/40/100/100/100 nas respectivas rows).
- Fill rounded-full.

OS 5 BANDS:

| Score    | Label                       | % ref pop | Intensity | Accent color  |
|----------|-----------------------------|-----------|-----------|---------------|
| Below 85 | Below average range         | ~16%      | 10        | #8B95B5 muted |
| 85–100   | Average range, lower half   | ~34%      | 70        | #0066FF       |
| 100–115  | Average range, upper half   | ~34%      | 100       | #0066FF       |
| 115–130  | Above average range         | ~14%      | 50        | #00E5FF (cyan)|
| 130+     | High range                  | ~2%       | 15        | #FFB800 (gold)|

(Intensidade do progress bar reflecte a escala visual da distribuição, não o tamanho da banda — convention.)

NOTA FINAL (mt 40px, centered, max-width 600px, 14px weight 500 italic #8B95B5):
"A score is not a complete portrait of a person's abilities, but it can offer a useful snapshot of reasoning and problem-solving performance."

ANIMAÇÕES
- Header: FadeIn standard.
- Cada row: FadeIn com delay i*0.1s (stagger 100ms top→bottom).
- Mini progress bar: scaleX 0 → final width on enter viewport, 1s ease-out, delay i*0.15s.
- Hover row: scale 1.005 + cor do score number shifta para o accent (300ms).
- Accent bar com glow pulsante no row "130+" (gold): box-shadow oscila entre 0 0 15px e 0 0 25px, 2.4s ease-in-out infinite.
- Nota final: FadeIn delay 0.6s.

ACESSIBILIDADE
- <section aria-labelledby="score-title">.
- Score bands como <table> com columns "Score Range", "Interpretation", "% of reference population":
  <table>
    <caption class="sr-only">IQ score interpretation bands</caption>
    <thead><tr><th scope="col">Score Range</th><th scope="col">Interpretation</th><th scope="col">% of reference population</th></tr></thead>
    <tbody>
      <tr><td>Below 85</td><td>Below average range</td><td>~16%</td></tr>
      ...
    </tbody>
  </table>
- Accent bar é decorativo — aria-hidden="true".
- Mini progress bar role="presentation" (a info já está no texto adjacente).

SEO
- H2 com keyword "IQ score" / "average IQ".
- AI-snippet sentence (sob o H2 ou na nota final): "IQ scores follow a normal distribution centered at 100 with standard deviation 15; about 68% of the reference population scores between 85 and 115."
- Cada banda mapável a entidades indexáveis ("Average IQ range", "Above average IQ", "High IQ range").

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
