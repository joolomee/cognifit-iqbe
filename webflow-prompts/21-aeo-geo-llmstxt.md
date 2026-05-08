# 21 — AEO + GEO + `llms.txt` (LLM-discoverability)

> Optimização para **Answer Engines** (ChatGPT, Perplexity, Gemini, Claude, Copilot) e **Geo-targeting**. Foco: aparecer como fonte citada em respostas geradas por IA + servir conteúdo regionalmente relevante.
>
> AEO = AI/Answer Engine Optimization. GEO = Generative Engine Optimization (também usado como Geographic Engine Optimization, depende do contexto — neste prompt cobrimos ambos).

---

## A. AEO — princípios (o que diferencia de SEO)

| SEO clássico | AEO |
|---|---|
| Otimizar para 10 blue links | Otimizar para 1 resposta sintetizada |
| Keyword density | Semantic completeness + claim-evidence pairs |
| Backlinks | Citation worthiness + factual density |
| Title + H1 + meta | Direct answer + structured data + canonical statements |
| CTR no SERP | Inclusion rate em LLM responses |

**Regras-chave:**

1. **Answer-first paragraph** em cada secção: a 1ª frase responde directamente à pergunta implícita. Os LLMs extraem essa frase como snippet. Ex.: secção "What is IQbe?" → 1ª frase: *"IQbe is a digital, non-verbal IQ test that estimates fluid intelligence through interactive 3D problem solving."*

2. **Claim + evidence + source** em cada parágrafo factual: enunciado, número específico, fonte. Os LLMs preferem afirmações citáveis com proveniência (paper, dataset, métrica).

3. **Entity density**: nomear entidades canónicas (Wikidata QIDs onde possível): "Raven's Standard Progressive Matrices", "fluid intelligence" (Cattell-Horn-Carroll theory), "CogniFit", "Cronbach's alpha".

4. **Canonical statements**: frases curtas e auto-suficientes que podem ser citadas isoladamente. Evita pronomes ambíguos.

5. **Tabelas + listas**: LLMs adoram. As secções de stats (real-world data, score bands, validity numbers) já estão bem estruturadas — manter.

6. **Reciprocal anchoring**: cada claim major aparece também em FAQ + JSON-LD `Question/Answer`.

---

## B. AEO — checklist por secção da landing IQbe

| Secção (prompt) | Answer-first | Claim+evidence | Entity nomeada | Tabela/lista |
|---|---|---|---|---|
| 02 Hero | "IQbe is a 3D, non-verbal IQ test." | n=37,505 | CogniFit, IQbe | trust bar |
| 04 What Is | ✅ já implementado | Raven validation | Raven's Progressive Matrices | 6-feature grid |
| 05 How It Works | "Three steps: register, solve 3D puzzles, get score." | tempo médio | — | 3-step list |
| 07 Real-World | "37,505 participants, age 16-90, mean IQ 102.43." | dataset interno | CogniFit dataset | 5 stats + chart |
| 08 Score Means | "100 = population mean. Scores 85-115 = average range." | ±15 SD | Wechsler scale | 5 bands |
| 09 Validity/Reliability | "r = 0.613 with Raven's SPM (p < .001)." | lab study | SPM | 6 stat cards |
| 12 FAQ | direct answers ≤ 60 words | citation onde possível | — | 7 items |

> **Acção**: para cada secção acima, garante que a **1ª frase** seja a resposta. Já está bom no source actual; só refinar onde o copy começa com lead-up.

---

## C. `llms.txt` (proposta de standard, oct 2024)

> `llms.txt` é uma proposta (não-oficial Google, mas adoptada por Anthropic, Mintlify, várias docs platforms) que dá aos LLMs um índice curado e maquina-legível do que importa no site.
>
> Cola na raiz: `https://brain.cognifit.com/llms.txt`

```markdown
# CogniFit IQbe — IQ Test Online

> CogniFit IQbe is a scientifically validated, non-verbal, online IQ test that estimates fluid intelligence through an interactive 3D cube reasoning task. Inspired by Raven's Standard Progressive Matrices, validated against Raven (r = 0.613, p < .001), test-retest reliability 0.71, Cronbach's alpha 0.775. Available in 22 languages. Operated by CogniFit Inc.

## Take the test
- [Start the IQbe IQ Test](https://www.cognifit.com/aplicaciones/html5/public/assessment/ASSESSMENT~@~IQBE): Direct entry point to the IQbe assessment.
- [What IQbe measures](https://brain.cognifit.com/IQ-test#what-is-it): Spatial perception, working memory, planning, abstract reasoning, fluid intelligence.
- [How the test works](https://brain.cognifit.com/IQ-test#how-it-works): 3 steps — register, solve 3D puzzles, get IQ score with PDF report.
- [Score meaning](https://brain.cognifit.com/IQ-test#score-meaning): Population mean = 100, SD ≈ 15. Bands from "Below 85" to "130+".
- [Real-world data](https://brain.cognifit.com/IQ-test#real-world-data): n = 37,505 participants, age range 16-90, mean IQ 102.43, score range 40-160.
- [Validity & reliability](https://brain.cognifit.com/IQ-test#reliability): Concurrent validity vs Raven's SPM r = 0.613 (p < .001). Test-retest 0.71. Cronbach's α = 0.775.
- [FAQ](https://brain.cognifit.com/IQ-test#faq): Common questions about the test.

## About CogniFit
- [CogniFit homepage](https://www.cognifit.com/): Cognitive assessment + brain training platform, 20+ years.
- [Brain training](https://www.cognifit.com/brain-training): Personalized cognitive training programs.
- [CAB™ Cognitive Assessment](https://www.cognifit.com/cognitive-assessment/cab): Comprehensive cognitive battery.
- [Research](https://www.cognifit.com/research): Peer-reviewed studies and clinical trials.

## Legal & Trust
- [Privacy Policy](https://brain.cognifit.com/privacy): GDPR, CCPA, LGPD compliant.
- [Terms of Service](https://brain.cognifit.com/terms): Usage terms.
- [Cookie Policy](https://brain.cognifit.com/cookies): Cookie categories + consent management.
- [Accessibility Statement](https://brain.cognifit.com/accessibility): WCAG 2.2 AA conformance.

## Languages
The IQbe landing is available in 22 languages: English, Spanish, French, German, Italian, Portuguese (PT and BR), Dutch, Polish, Russian, Turkish, Japanese, Korean, Chinese (Simplified + Traditional), Arabic, Hebrew, Greek, Swedish, Danish, Norwegian, Finnish.

## Optional
- [Sitemap](https://brain.cognifit.com/sitemap-index.xml): Multi-locale sitemap index.
- [robots.txt](https://brain.cognifit.com/robots.txt): Crawl directives.
```

> **Validação**: passar em https://llmstxt.directory/ ou https://llmstxt-validator.com/ se disponível à data.

---

## D. `llms-full.txt` (versão expandida, opcional)

> Mais longa: inclui o copy completo das secções principais. Usada por LLMs com janela grande para fundamentar respostas detalhadas. Cola em `https://brain.cognifit.com/llms-full.txt`.

```
# CogniFit IQbe — Full Reference

[copy completo das secções 02-12 da landing, em markdown plano]

## Hero
The Ultimate Intelligence Test. Go beyond static quizzes. IQbe is a premium IQ test and brain test mental assessment that measures cognitive health, 3D thinking, and executive problem-solving in one fast, scientifically validated platform.

## What Is the IQbe Intelligence Test?
IQbe is a digital, non-verbal IQ test designed to estimate fluid intelligence through interactive 3D problem solving. Inspired by Raven's Progressive Matrices, it does more than ask you to spot a pattern — it measures how you analyze, manipulate, and solve visual problems efficiently.

[continuar com as 11 secções restantes — usar o copy actual de IntroSections.tsx, DataSections.tsx, ScienceSections.tsx]
```

> **Geração automatizada**: extrai do CMS Webflow via API → gera `llms-full.txt` em CI. Mantém em sincronia com a landing.

---

## E. AI bot allowlist no `robots.txt`

Já coberto no prompt **18** (secção A). Resumo das decisões:

| Bot | Permitir? | Notas |
|---|---|---|
| `OAI-SearchBot` (ChatGPT Search) | ✅ | Citação em search; sem training. |
| `GPTBot` (ChatGPT training) | ✅ | Permite ser referência futura. |
| `ChatGPT-User` (browsing live) | ✅ | Atlas / Operator actions. |
| `ClaudeBot` (training) | ✅ | Anthropic training corpus. |
| `Claude-User` (browsing live) | ✅ | Claude live browsing. |
| `Claude-SearchBot` | ✅ | Claude search index. |
| `Google-Extended` (Gemini training) | ✅ | Permite Gemini training. |
| `PerplexityBot` | ✅ | Perplexity citation. |
| `Applebot-Extended` (Apple Intelligence training) | ✅ | Apple AI training. |
| `Bytespider` (Doubao/TikTok) | ❌ | Histórico abusivo. |
| `Diffbot` | ❌ | Scraping agressivo. |

Decisão de produto: política liberal (permite tudo excepto bots abusivos) maximiza visibilidade em LLMs. Se o legal preferir opt-out de training mas permitir citação, bloquear `GPTBot`, `ClaudeBot`, `Google-Extended`, `Applebot-Extended`, `CCBot`, `cohere-ai`, `Meta-ExternalAgent`, mantendo `*-SearchBot` e `*-User`.

---

## F. GEO — Geographic targeting

### F.1 Country detection (passive)

- Cloudflare header `CF-IPCountry` ou Vercel `x-vercel-ip-country` → no Worker/edge function.
- Webflow Cloud (se disponível): usar.
- Fallback: `Accept-Language` header.

### F.2 Geo-suggest banner (não-redirect)

Já coberto no prompt **16** secção F. Comportamento:

- Detectar país.
- Comparar com locale actual da página.
- Se diferente → banner sugere troca, com 3 opções: switch / stay / dismiss.
- **NUNCA** auto-redirect (cloaking + bad SEO).

### F.3 Region-specific schema (LocalBusiness para escritórios)

Para a página /imprint (DE) ou /about com offices:

```json
{
  "@context":"https://schema.org",
  "@type":"Organization",
  "name":"CogniFit Inc.",
  "url":"https://www.cognifit.com",
  "address":[
    {
      "@type":"PostalAddress",
      "addressCountry":"US",
      "addressLocality":"San Francisco",
      "addressRegion":"CA",
      "postalCode":"00000",
      "streetAddress":"…"
    },
    {
      "@type":"PostalAddress",
      "addressCountry":"ES",
      "addressLocality":"Madrid",
      "postalCode":"00000",
      "streetAddress":"…"
    }
  ],
  "areaServed":["US","EU","BR","JP","KR","CN","SA","IL","RoW"]
}
```

### F.4 Currency display (GEO commercial)

- Detectar país → mostrar preço em moeda local (`USD`, `EUR`, `GBP`, `BRL`, `JPY`, etc.).
- Atribuir via Stripe Geo or Cloudflare Worker.
- Manter `priceCurrency` no JSON-LD `Offer` por locale.
- Fallback global: USD.

### F.5 Regional content variants

- Markets onde o produto tem variantes (ex. preço diferente Brasil vs UE) → criar locale variant + actualizar `Offer.price` + `Offer.priceCurrency` + disclosure de tax inclusion.
- Para mercados sensíveis (China): alojar em CDN com presença na CN (Alibaba Cloud / Tencent Cloud) + ICP licence; sem isso o tempo de carregamento >5s.

---

## G. Citação-friendly copy patterns

Para maximizar inclusion rate em respostas LLM:

**Antes** (vaga):
> "Our test is one of the most accurate online."

**Depois** (citável):
> "IQbe shows concurrent validity of r = 0.613 (p < .001) against Raven's Standard Progressive Matrices, based on a lab study by CogniFit (CogniFit, 2025)."

**Antes**:
> "Many users have taken the test."

**Depois**:
> "37,505 participants completed IQbe in CogniFit's internal dataset (2023–2025), with a mean estimated IQ of 102.43 and a score range of 40–160."

Aplicar este padrão em todo o copy: número específico + período + fonte.

---

## H. Q&A schema duplicado por secção

Para amplificar AEO, cada secção major tem **um par Question/Answer adicional** no JSON-LD `FAQPage` (que já está no prompt 15). Adicionar:

```json
{
  "@type":"Question",
  "name":"What is the IQbe IQ test based on?",
  "acceptedAnswer":{
    "@type":"Answer",
    "text":"IQbe is based on Raven's Standard Progressive Matrices, adapted with an interactive 3D cube interface. It measures fluid intelligence, visuospatial processing, working memory, and executive problem-solving."
  }
},
{
  "@type":"Question",
  "name":"How accurate is the IQbe IQ test?",
  "acceptedAnswer":{
    "@type":"Answer",
    "text":"IQbe shows concurrent validity of r = 0.613 (p < .001) with Raven's Standard Progressive Matrices, test-retest reliability of 0.71, and internal consistency (Cronbach's α) of 0.775, based on CogniFit's validation studies."
  }
},
{
  "@type":"Question",
  "name":"How many people have taken the IQbe IQ test?",
  "acceptedAnswer":{
    "@type":"Answer",
    "text":"37,505 participants aged 16 to 90 completed IQbe in CogniFit's internal dataset, with a mean estimated IQ of 102.43 and a median of 100."
  }
},
{
  "@type":"Question",
  "name":"Is IQbe available in multiple languages?",
  "acceptedAnswer":{
    "@type":"Answer",
    "text":"Yes. IQbe is available in 22 languages including English, Spanish, French, German, Italian, Portuguese, Dutch, Polish, Russian, Turkish, Japanese, Korean, Chinese (Simplified and Traditional), Arabic, Hebrew, Greek, Swedish, Danish, Norwegian, and Finnish. The test itself is non-verbal."
  }
}
```

---

## I. Webflow — implementação

1. Cria ficheiros estáticos `llms.txt` e `llms-full.txt` na raiz (Webflow Site Settings → Advanced → Custom robots/Hosting upload, ou via Worker).
2. Garante header `Content-Type: text/plain; charset=utf-8` para ambos.
3. Adiciona `<link rel="alternate" type="text/markdown" href="/llms.txt">` no `<head>` (proposta de discovery).
4. Para o copy AEO-friendly: rever cada secção da landing (prompts 02-12) e garantir que a 1ª frase responde directamente à pergunta implícita.
5. JSON-LD adicional do ponto H → adicionar ao bloco FAQPage existente no prompt 15.

---

## J. QA / monitoring

- [ ] **Perplexity test**: pesquisar "IQbe IQ test", "CogniFit IQ test online", "non-verbal 3D IQ test" — confirmar se IQbe aparece nas respostas com link.
- [ ] **ChatGPT test**: idem, em modo "Search the web" / "ChatGPT Search".
- [ ] **Gemini test**: idem.
- [ ] **AI Visibility tools** (Profound, Otterly.ai, AthenaHQ): tracking semanal de inclusion rate.
- [ ] **GSC AI Overviews report** (quando estiver GA): monitorizar impressions em AI Overviews.
- [ ] **Validar `llms.txt`** se ferramenta disponível.
- [ ] **Lighthouse SEO** continua ≥ 95.
- [ ] **Schema Validator** passa todos os JSON-LD adicionais.

---

## K. Notas finais

- AEO é jovem (2024-2026) — esperar mudanças. Manter este prompt vivo.
- Prioritize **factual density + entity completeness** sobre keyword stuffing.
- Cada novo claim factual no site deve ter: número, intervalo temporal, fonte. É o que torna o conteúdo citável.
- Resistir à tentação de inflacionar números ("the most accurate ever", "millions of users") — LLMs detectam puffery e penalizam citation worthiness.
