# IQbe Webflow Prompts

> Pacote modular de **23 prompts** para recriar e operar a landing **IQbe (CogniFit)** no Webflow. Design fiel ao Figma Make actual, lógica visual alinhada com `cognifit.com/longevity` adaptada ao IQ. Master language: **EN** (`brain.cognifit.com/IQ-test`). Stack i18n para **22 idiomas**, SEO + AEO + GEO completos, JSON-LD avançado (Organization · WebSite · WebApplication · MedicalWebPage · HowTo · FAQPage · BreadcrumbList), `robots.txt` + `sitemap-index.xml` multilíngue, cookie consent (GDPR/CCPA/LGPD), páginas legais, language switcher, geo-suggest banner, páginas de erro.

## Como usar

1. **Cola o prompt `00-design-system.md`** primeiro num Webflow novo (configura Variables, fonts, classes-base e SEO global).
2. **Recria cada secção pela ordem** abaixo, colando os prompts individuais num agente AI de design (ou usando como guia humano no Designer).
3. Cada prompt é **autocontido** — pode ser executado isoladamente. Para reduzir repetição, todos referenciam o `00-design-system.md`.
4. **Ordem de implementação recomendada**:
   - **Phase 1 (conversão crítica + i18n base):** `00`, `15`, `16`, `01`, `02`, `03`, `05`, `13`, `14`, `17`, `18`.
   - **Phase 2 (compliance + trust):** `19`, `20`, `04`, `06`, `07`, `08`, `12`, `22`.
   - **Phase 3 (ciência + AEO):** `09`, `10`, `11`, `21`.

## Índice (23 prompts)

### Landing — secções (00–14)

| # | Ficheiro | Secção | Componente Figma Make |
|---|----------|--------|------------------------|
| 00 | [00-design-system.md](./00-design-system.md) | Design System (tokens, animações, partículas, scroll progress, SEO base) | App.tsx + ui.tsx + FloatingParticles.tsx |
| 01 | [01-header-navbar.md](./01-header-navbar.md) | Header / Navbar fixa | Layout.tsx → Navbar |
| 02 | [02-hero.md](./02-hero.md) | Hero com 3D Cube interactivo + 3 floating labels | IntroSections.tsx → Hero + InteractiveCube.tsx |
| 03 | [03-why-different.md](./03-why-different.md) | Why IQbe Is Different — comparison table | IntroSections.tsx → WhyDifferent |
| 04 | [04-what-is-iqbe.md](./04-what-is-iqbe.md) | What Is the IQbe Intelligence Test? — 6 features + quote | IntroSections.tsx → WhatIs |
| 05 | [05-how-it-works.md](./05-how-it-works.md) | How the IQ Test Works — 3 steps timeline | IntroSections.tsx → HowItWorks |
| 06 | [06-cognitive-skills.md](./06-cognitive-skills.md) | What Cognitive Skills Does It Measure? — 4 cards | DataSections.tsx → WhatItMeasures |
| 07 | [07-real-world-data.md](./07-real-world-data.md) | Backed by Large-Scale Real-World Use — 5 stats + bar chart | DataSections.tsx → RealWorldData |
| 08 | [08-score-meaning.md](./08-score-meaning.md) | What Your IQ Score Means — 5 score bands | DataSections.tsx → ScoreMeans |
| 09 | [09-validity-reliability.md](./09-validity-reliability.md) | Validity + Reliability — 6 stat cards + 3 accordions | ScienceSections.tsx → ValidityReliability |
| 10 | [10-why-it-matters.md](./10-why-it-matters.md) | Why IQbe Matters Beyond Traditional IQ Tests — 3 benefits | ScienceSections.tsx → WhyItMatters |
| 11 | [11-who-is-it-for.md](./11-who-is-it-for.md) | Who Is the IQbe Intelligence Test Aimed At? — 5 audiences | ScienceSections.tsx → WhoIsFor |
| 12 | [12-faq.md](./12-faq.md) | Frequently Asked Questions — 7 accordion items + FAQPage schema | ScienceSections.tsx → FAQ |
| 13 | [13-final-cta.md](./13-final-cta.md) | Final CTA — atmospheric background | FinalCTA.tsx |
| 14 | [14-footer.md](./14-footer.md) | Footer CogniFit (mega footer) | Layout.tsx → Footer |

### SEO + i18n + compliance (15–22)

| # | Ficheiro | Cobertura |
|---|----------|-----------|
| 15 | [15-seo-head.md](./15-seo-head.md) | SEO `<head>` global + JSON-LD (Organization · WebSite · WebApplication · MedicalWebPage · HowTo · FAQPage · BreadcrumbList) + matriz hreflang completa para 22 locales + og:locale:alternate |
| 16 | [16-i18n-localization.md](./16-i18n-localization.md) | Estratégia i18n (22 locales BCP-47, URL pattern, hreflang, x-default, RTL ar/he, geo-suggest, JSON-LD inLanguage, Webflow Localization vs fallback, workflow tradução) |
| 17 | [17-language-switcher.md](./17-language-switcher.md) | Componente Language Switcher (header dropdown + footer + bottom-sheet mobile + geo-suggest banner) |
| 18 | [18-sitemap-robots.md](./18-sitemap-robots.md) | `robots.txt` (com bots de IA explicitamente listados) + `sitemap-index.xml` + 22 sitemaps por locale com hreflang inline + Cloudflare Worker template + CI hook |
| 19 | [19-cookie-consent.md](./19-cookie-consent.md) | Cookie banner GDPR/CCPA/LGPD/ePrivacy + Google Consent Mode v2 + Cookiebot integração + categorias + DNSMPI + Global Privacy Control |
| 20 | [20-legal-pages.md](./20-legal-pages.md) | 5 páginas legais (Terms · Privacy · Cookies · Imprint DE · Accessibility EAA 2025) com schema.org, multilíngue |
| 21 | [21-aeo-geo-llmstxt.md](./21-aeo-geo-llmstxt.md) | AEO (Answer Engine Optimization para ChatGPT/Perplexity/Gemini/Claude) + GEO (geo-targeting + currency display + region-specific schema) + `llms.txt` + `llms-full.txt` |
| 22 | [22-404-error-pages.md](./22-404-error-pages.md) | Páginas 404 + 500 + offline (PWA), com recovery CTAs e tracking |

## Estrutura visual da landing (ordem das secções na página)

```
┌─────────────────────────────────────────┐
│  01 — Header (fixo) + 17 Language Switcher │
├─────────────────────────────────────────┤
│  02 — Hero (100svh)                     │
├─────────────────────────────────────────┤
│  03 — Why Different (comparison)         │
├─────────────────────────────────────────┤
│  04 — What Is IQbe (features + quote)    │
├─────────────────────────────────────────┤
│  05 — How It Works (3 steps)            │
├─────────── divider ─────────────────────┤
│  06 — Cognitive Skills (4 cards)        │
├─────────────────────────────────────────┤
│  07 — Real-World Data (stats + chart)   │
├─────────────────────────────────────────┤
│  08 — Score Meaning (5 bands)           │
├─────────── divider ─────────────────────┤
│  09 — Validity + Reliability             │
├─────────────────────────────────────────┤
│  10 — Why It Matters (3 benefits)       │
├─────────────────────────────────────────┤
│  11 — Who Is It For (5 audiences)       │
├─────────── divider ─────────────────────┤
│  12 — FAQ (7 questions)                 │
├─────────────────────────────────────────┤
│  13 — Final CTA                         │
├─────────────────────────────────────────┤
│  14 — Footer (mega + 17 footer switcher) │
└─────────────────────────────────────────┘

Camadas globais (overlay):
  · 00 → FloatingParticles (z=0, fixed)
  · 00 → ScrollProgress (z=50, right side)
  · 00 → ScrollToTop (z=50, bottom-right)
  · 15 → SEO + JSON-LD (head)
  · 17 → Geo-suggest banner (z=200, top, when applicable)
  · 19 → Cookie consent (z=300, bottom, until consent given)
```

## i18n — 22 locales suportados

| Region | Locales |
|---|---|
| Western Europe | en · es · fr · de · it · pt-PT · nl |
| Northern Europe | sv · da · no · fi |
| Central / Eastern Europe | pl · ru · el |
| Mediterranean / Turkey | tr |
| Americas | pt-BR |
| Asia (CJK) | ja · ko · zh-CN · zh-TW |
| MENA (RTL) | ar · he |

> Verifica a lista canónica viva em `cognifit.com/longevity` (footer/language switcher) e ajusta se diferente. Detalhe completo: prompt **16**.

## Tokens-chave (resumo)

```
Background     : #F4F7FB  (corpo)  ·  #FFFFFF (cards)  ·  #0A102E (footer)
Text primary   : #0A102E
Text body      : #4A5578
Text muted     : #8B95B5
Accent blue    : #0066FF → gradient → #00A3FF / #00E5FF
Accent teal    : #00D4AA  (validation, success)
Accent violet  : #7B61FF  (focus, highlights)
Accent gold    : #FFB800  (high range, statistic)
Border subtle  : rgba(0,102,255,0.10)
Shadow card    : 0 4px 20px rgba(0,102,255,0.03)
Shadow CTA     : 0 8px 20px rgba(0,102,255,0.25)
Radius card    : 24px
Radius pill    : 999px
Font           : 'Plus Jakarta Sans', 200-800
Font (AR fallback): 'Noto Sans Arabic'
Font (HE fallback): 'Noto Sans Hebrew'
```

## Testes obrigatórios pós-launch

### Performance & rendering
- [ ] **Lighthouse** (Mobile + Desktop) ≥ 90 em Performance / Accessibility / Best Practices / SEO **em cada um dos 22 locales**.
- [ ] **WebPageTest** — LCP < 2.5s, CLS < 0.1, INP < 200ms.
- [ ] **3D Cube** — testar drag em iOS Safari, Android Chrome, desktop Chrome/Firefox/Safari/Edge.
- [ ] **prefers-reduced-motion** — confirmar fallbacks em todas as animações.

### SEO & structured data
- [ ] **Google Rich Results Test** — validar JSON-LD (Organization, WebApplication, FAQPage, HowTo, BreadcrumbList, MedicalWebPage) em 3 locales (EN, AR, JA).
- [ ] **Schema.org Validator** — fallback validation.
- [ ] **GSC International Targeting** — 0 erros de hreflang.
- [ ] **Sitebulb / Screaming Frog** com modo "Hreflang Validation" em crawl completo.
- [ ] **GSC Sitemaps** — `sitemap-index.xml` submetido + 22 child sitemaps reportam 0 erros.
- [ ] **Bing Webmaster Tools** — sitemap + URL Inspection.
- [ ] **`robots.txt` Tester** — `/IQ-test` é Allow.

### Accessibility
- [ ] **WAVE / axe DevTools** — 0 errors, max 5 alerts.
- [ ] **NVDA / VoiceOver** — navegação por teclado completa em DE, JA, AR.
- [ ] **Contraste AA** em todos os 22 locales.

### i18n
- [ ] Cada locale renderiza com `<html lang>` correcto.
- [ ] AR e HE renderizam com `dir="rtl"`.
- [ ] Language switcher persiste preferência em localStorage + cookie.
- [ ] Geo-suggest banner aparece quando país ≠ locale.
- [ ] Hreflang bidirectional verificado.

### Compliance
- [ ] Cookiebot scanner mensal — 0 categorias indefinidas.
- [ ] Consent Mode v2 funcional (GTM + GA4 debug).
- [ ] DNSMPI link visível para visitantes US-CA, US-VA, US-CO, US-CT, US-UT.
- [ ] Páginas legais publicadas + revistas por advogado.
- [ ] Global Privacy Control header honored.

### AEO
- [ ] **Perplexity / ChatGPT Search / Gemini / Claude** — pesquisar "IQbe IQ test", "CogniFit IQ test online", "non-verbal 3D IQ test" — IQbe aparece nas respostas com link.
- [ ] **`llms.txt`** servido em raiz com `Content-Type: text/plain`.
- [ ] **AI Visibility tracking** (Profound / Otterly / AthenaHQ) — baseline registado.

### Tracking
- [ ] CTA tracking — disparo de evento `cta_primary_click` no GA4 do hero, header e final CTA.
- [ ] `language_switch` event ao trocar locale.
- [ ] `page_not_found` / `server_error` events em 404/500.

## Convenções de copy

- **Master language: EN.** Toda a copy nos prompts está em EN, alinhada com o produto vivo (`brain.cognifit.com/IQ-test`).
- **22 locales** publicados via Webflow Localization (recomendado) ou subdirectories manuais (fallback). Ver prompt 16.
- **Keywords obrigatórias** (manter sempre):
  - CogniFit QI Assessment
  - IQ test / intelligence test
  - brain test mental
  - mental health test
  - IQ intelligence
  - fluid intelligence
  - non-verbal IQ test
  - Raven's Standard Progressive Matrices
- **Hyphenation:** "non-verbal" (sempre com hífen).
- **Test duration:** "in minutes" (neutro, alinhar com produto antes de claim de "10 minutos").
- **Score range:** 40–160 (real-world dataset). 55–145 só em contexto técnico/whitepaper.
- **Não traduzir:** "CogniFit", "IQbe", "Raven's Standard Progressive Matrices", códigos estatísticos (`r = 0.613`, `p < .001`, `α = 0.775`, `n = 37,505`).

## Recursos referenciados

- Figma Make: https://www.figma.com/make/9KNKOyniUgd3OjrjYGnFFU/IQbe
- Figma Make publicado: https://denim-stain-86737240.figma.site
- Reference style: https://www.cognifit.com/longevity
- Target URL final: https://brain.cognifit.com/IQ-test
- Repo: https://github.com/joolomee/cognifit-iqbe

## TODO (próximas iterações)

- [ ] Glossário multilíngue versionado em `webflow-prompts/glossary.csv` (chave EN → 22 traduções para termos-chave: fluid intelligence, non-verbal, working memory, executive function, etc.).
- [ ] Snapshots OG por locale (`/og/iqbe-{locale}-1200x630.jpg`) — design system + script de geração.
- [ ] Decisão final sobre tradução de slugs (`/pt/teste-de-qi` vs `/pt/IQ-test`) — actualizar matriz hreflang se mudar.
- [ ] Confirmar lista canónica de 22 locales contra `cognifit.com/longevity` ao vivo.
- [ ] Acordar com legal a posição final em training de LLMs (allow vs block GPTBot/ClaudeBot/Google-Extended).
- [ ] Integração com plataforma TMS (Phrase, Lokalise, Crowdin) para workflow tradução.
