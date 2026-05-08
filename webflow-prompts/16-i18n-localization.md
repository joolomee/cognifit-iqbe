# 16 — i18n / Localization (22 idiomas) — Estratégia + Implementação Webflow

> **Master language:** EN (alinhada com `brain.cognifit.com/IQ-test`).
> **Target locales:** 22, espelhando a oferta de `cognifit.com/longevity`.
> **Sub-paths em domínio único** (`brain.cognifit.com/{lang}/IQ-test`) — melhor para SEO consolidado, link equity e implementação simples no Webflow Localization.
>
> Este prompt define: matriz de locales, URL strategy, hreflang, x-default, RTL, fallback, geo-suggest (não geo-redirect), JSON-LD `inLanguage`, OG locale alternates, content workflow, QA. **Antes de Webflow Localization, valida que o conjunto abaixo bate certo com a lista viva da Longevity** — actualiza onde necessário.

---

## A. Matriz canónica dos 22 locales

> Lista por defeito (verifica contra a lista viva no language switcher de `cognifit.com/longevity` e ajusta se diferente). RTL marcado.

| #  | Código BCP-47 | Nome (nativo)        | Inglês          | Direcção | OG locale  |
|----|---------------|----------------------|-----------------|----------|------------|
| 1  | `en`          | English              | English         | LTR      | `en_US`    |
| 2  | `es`          | Español              | Spanish         | LTR      | `es_ES`    |
| 3  | `fr`          | Français             | French          | LTR      | `fr_FR`    |
| 4  | `de`          | Deutsch              | German          | LTR      | `de_DE`    |
| 5  | `it`          | Italiano             | Italian         | LTR      | `it_IT`    |
| 6  | `pt-PT`       | Português            | Portuguese (PT) | LTR      | `pt_PT`    |
| 7  | `pt-BR`       | Português (Brasil)   | Portuguese (BR) | LTR      | `pt_BR`    |
| 8  | `nl`          | Nederlands           | Dutch           | LTR      | `nl_NL`    |
| 9  | `pl`          | Polski               | Polish          | LTR      | `pl_PL`    |
| 10 | `ru`          | Русский              | Russian         | LTR      | `ru_RU`    |
| 11 | `tr`          | Türkçe               | Turkish         | LTR      | `tr_TR`    |
| 12 | `ja`          | 日本語                 | Japanese        | LTR      | `ja_JP`    |
| 13 | `ko`          | 한국어                 | Korean          | LTR      | `ko_KR`    |
| 14 | `zh-CN`       | 简体中文                | Chinese (Simp.) | LTR      | `zh_CN`    |
| 15 | `zh-TW`       | 繁體中文                | Chinese (Trad.) | LTR      | `zh_TW`    |
| 16 | `ar`          | العربية                | Arabic          | **RTL**  | `ar_AR`    |
| 17 | `he`          | עברית                  | Hebrew          | **RTL**  | `he_IL`    |
| 18 | `el`          | Ελληνικά             | Greek           | LTR      | `el_GR`    |
| 19 | `sv`          | Svenska              | Swedish         | LTR      | `sv_SE`    |
| 20 | `da`          | Dansk                | Danish          | LTR      | `da_DK`    |
| 21 | `no`          | Norsk                | Norwegian       | LTR      | `no_NO`    |
| 22 | `fi`          | Suomi                | Finnish         | LTR      | `fi_FI`    |

> **`x-default` aponta sempre para EN** (`https://brain.cognifit.com/IQ-test`).
> **Sem regiões mistas** (ex. `en-US`/`en-GB`) por defeito — usa `en` único, salvo se vais escrever copy distinto por mercado.

---

## B. URL strategy

```
EN (master):  https://brain.cognifit.com/IQ-test
ES:           https://brain.cognifit.com/es/IQ-test
PT-PT:        https://brain.cognifit.com/pt/IQ-test
PT-BR:        https://brain.cognifit.com/pt-br/IQ-test
ZH-CN:        https://brain.cognifit.com/zh/IQ-test
ZH-TW:        https://brain.cognifit.com/zh-tw/IQ-test
AR:           https://brain.cognifit.com/ar/IQ-test
…
```

Regras:
- Master sem prefixo (mantém URLs históricos / link equity).
- Slugs traduzidos? **Não no MVP.** Mantém `IQ-test` em todos os locales para simplificar canonical/hreflang. Numa Phase 2, traduz slugs com mapeamento explícito (ex. `pt/teste-de-qi`) — exige actualizar a matriz hreflang e os JSON-LD `inLanguage`.
- Trailing slash: **off** (uniforme com `brain.cognifit.com`). Configura redirect 301 `/IQ-test/` → `/IQ-test`.
- Lower-case sempre (excepto o segmento `IQ-test` que mantém capitalização legacy se já existir; senão `iq-test`).

---

## C. Hreflang (matriz completa para `<head>`)

> Cola TODOS os links em todas as 22 páginas. Cada página tem 23 entradas (22 locales + `x-default`). Auto-referência inclusive.

```html
<link rel="alternate" hreflang="x-default" href="https://brain.cognifit.com/IQ-test" />
<link rel="alternate" hreflang="en"        href="https://brain.cognifit.com/IQ-test" />
<link rel="alternate" hreflang="es"        href="https://brain.cognifit.com/es/IQ-test" />
<link rel="alternate" hreflang="fr"        href="https://brain.cognifit.com/fr/IQ-test" />
<link rel="alternate" hreflang="de"        href="https://brain.cognifit.com/de/IQ-test" />
<link rel="alternate" hreflang="it"        href="https://brain.cognifit.com/it/IQ-test" />
<link rel="alternate" hreflang="pt-PT"     href="https://brain.cognifit.com/pt/IQ-test" />
<link rel="alternate" hreflang="pt-BR"     href="https://brain.cognifit.com/pt-br/IQ-test" />
<link rel="alternate" hreflang="nl"        href="https://brain.cognifit.com/nl/IQ-test" />
<link rel="alternate" hreflang="pl"        href="https://brain.cognifit.com/pl/IQ-test" />
<link rel="alternate" hreflang="ru"        href="https://brain.cognifit.com/ru/IQ-test" />
<link rel="alternate" hreflang="tr"        href="https://brain.cognifit.com/tr/IQ-test" />
<link rel="alternate" hreflang="ja"        href="https://brain.cognifit.com/ja/IQ-test" />
<link rel="alternate" hreflang="ko"        href="https://brain.cognifit.com/ko/IQ-test" />
<link rel="alternate" hreflang="zh-CN"     href="https://brain.cognifit.com/zh/IQ-test" />
<link rel="alternate" hreflang="zh-TW"     href="https://brain.cognifit.com/zh-tw/IQ-test" />
<link rel="alternate" hreflang="ar"        href="https://brain.cognifit.com/ar/IQ-test" />
<link rel="alternate" hreflang="he"        href="https://brain.cognifit.com/he/IQ-test" />
<link rel="alternate" hreflang="el"        href="https://brain.cognifit.com/el/IQ-test" />
<link rel="alternate" hreflang="sv"        href="https://brain.cognifit.com/sv/IQ-test" />
<link rel="alternate" hreflang="da"        href="https://brain.cognifit.com/da/IQ-test" />
<link rel="alternate" hreflang="no"        href="https://brain.cognifit.com/no/IQ-test" />
<link rel="alternate" hreflang="fi"        href="https://brain.cognifit.com/fi/IQ-test" />
```

Regras críticas:
- **Bidirecional.** Cada locale referencia TODOS os outros (incluindo si próprio).
- **`canonical`** aponta para a própria URL do locale (não para o master).
- **`<html lang="…">`** é o BCP-47 do locale. Para AR/HE adicionar `dir="rtl"`.
- **OG locale**: `og:locale` = locale principal; `og:locale:alternate` listadas para os restantes 21.

---

## D. RTL (Arabic + Hebrew)

```html
<html lang="ar" dir="rtl">
<html lang="he" dir="rtl">
```

Webflow:
1. **Localization → Locale → Custom Code → Inside `<html>`**: define `dir="rtl"` apenas para `ar` e `he`.
2. **CSS lógico**: substitui `margin-left/right`, `padding-left/right`, `border-left/right` por `margin-inline-start/end`, etc. Em Webflow Designer não há helper directo — usa Custom Code:
```html
<style>
  html[dir="rtl"] .iqbe-card { padding-inline-start: 32px; padding-inline-end: 32px; }
  html[dir="rtl"] .iqbe-btn svg { transform: scaleX(-1); }
  html[dir="rtl"] .nav-links { flex-direction: row-reverse; }
  html[dir="rtl"] .timeline-row { flex-direction: row-reverse; }
  /* CTAs com seta → flip da seta */
  html[dir="rtl"] .arrow-icon { transform: rotate(180deg); }
</style>
```
3. **Texto bidi**: dentro de blocos AR/HE com inserts EN (ex. "IQbe", "CogniFit"), envolve em `<bdi>` ou `<span dir="ltr">` para evitar quebras.
4. **Tipografia**: para árabe usa **Noto Sans Arabic** (peso 400/600/700) como fallback antes de `Plus Jakarta Sans`. Para hebraico, **Noto Sans Hebrew**. Adiciona em `Page Settings → Custom Code` por locale.

---

## E. Webflow Localization (recomendado) vs. fallback

### Opção 1 — Webflow Localization (add-on, ~PT$45/locale/mês)
- Uma única página master. Cada locale gera URL automaticamente sob `/{locale}/…`.
- Suporta hreflang automático, sitemap por locale agregado, language switcher nativo.
- Para Webflow gerar correctamente: Activa **Locale Settings → SEO → Auto-generate hreflang tags = ON**, define **Locale slug** = código BCP-47 lowercase.
- **Master locale = English (no slug).**
- Para cada locale, configura no Webflow Designer:
  - **Site Settings → Localization → Locales** → adiciona os 22.
  - Define **slug** por locale (exemplo: `es`, `pt`, `pt-br`, `zh`, `zh-tw`, `ar`, `he`).
  - **Defaults**: copia o master para todos os locales como ponto de partida; depois traduz texto, alt-text, meta title, meta description e OG.
  - Activa **Localized images** se o OG-image precisa de versão por locale.
  - **Locale visibility**: garante que o locale só publica quando 100% traduzido.

### Opção 2 — fallback sem add-on (subdirectories manuais)
- Duplica a página por locale: `/IQ-test`, `/es/IQ-test`, …
- Menos automatização, mais risco de hreflang inconsistente.
- Sitemap manual (ver prompt **18**).
- Só recomendado se o Localization não estiver disponível no plano contratado.

---

## F. Geo-suggest (não geo-redirect)

> **Nunca** faças hard redirect baseado em IP — o Googlebot vê 1 versão, os utilizadores vêem outra → cloaking + canibalização SEO.

Padrão recomendado:
1. Detecta `Accept-Language` + país (Cloudflare `CF-IPCountry`, Vercel `x-vercel-ip-country`, Webflow Edge → custom JS) **lado cliente**.
2. Compara com locale actual da página.
3. Se diferente → mostra **banner não-intrusivo** no topo: *"Looks like you're browsing from {country}. Switch to {language}? [Switch] [Stay in English] [×]"*.
4. Persiste preferência em `localStorage` `iqbe.locale.pref`.
5. **Não muda o `<html lang>`** — só sugere navegação.

Webflow custom code (Footer Code):
```html
<script>
(async () => {
  const KEY = 'iqbe.locale.pref';
  if (localStorage.getItem(KEY)) return;
  const map = { ES:'es', FR:'fr', DE:'de', IT:'it', PT:'pt', BR:'pt-br', NL:'nl', PL:'pl',
    RU:'ru', TR:'tr', JP:'ja', KR:'ko', CN:'zh', TW:'zh-tw', SA:'ar', AE:'ar', IL:'he',
    GR:'el', SE:'sv', DK:'da', NO:'no', FI:'fi' };
  try {
    const r = await fetch('/api/geo'); // ou Cloudflare Worker
    const { country } = await r.json();
    const target = map[country];
    const current = document.documentElement.lang;
    if (target && target !== current) {
      // Disparar componente <iqbe-locale-suggest> (definido no prompt 17)
      document.dispatchEvent(new CustomEvent('iqbe:suggest-locale', { detail: { target } }));
    }
  } catch (e) { /* falha silenciosa */ }
})();
</script>
```

---

## G. JSON-LD `inLanguage`

Cada bloco JSON-LD do prompt **15** deve ter `inLanguage` explícito por locale:

```json
{
  "@type": "WebApplication",
  "name": "CogniFit QI Assessment (IQbe)",
  "inLanguage": "es",
  "url": "https://brain.cognifit.com/es/IQ-test",
  ...
}
```

Para `MedicalWebPage`, `FAQPage`, `HowTo`, `BreadcrumbList`, `WebSite`, `Organization` — adicionar `inLanguage` em todos.

---

## H. Open Graph + Twitter por locale

```html
<!-- exemplo locale ES -->
<meta property="og:locale" content="es_ES" />
<meta property="og:locale:alternate" content="en_US" />
<meta property="og:locale:alternate" content="fr_FR" />
<meta property="og:locale:alternate" content="de_DE" />
<!-- ... lista os outros 20 ... -->
<meta property="og:url" content="https://brain.cognifit.com/es/IQ-test" />
<meta property="og:image" content="https://brain.cognifit.com/og/iqbe-es-1200x630.jpg" />
```

OG image dinâmica:
- Prefere uma OG por locale (`/og/iqbe-{locale}-1200x630.jpg`).
- Se orçamento limitado, partilha 1 imagem master EN; o título traduzido aparece via `og:title`.

---

## I. Workflow de tradução

1. **Source of truth = EN** (este repo + prompts 01–15).
2. Exporta strings traduzíveis para CSV/JSON com chave + texto EN + comentário de contexto.
3. Tradução **humana** (não MT) por nativo + revisão clínica (terminologia: "fluid intelligence", "Raven's", "validity", "reliability" exigem precisão técnica).
4. **Não traduzir**:
   - Marca: "CogniFit", "IQbe"
   - Nomes próprios: "Raven's Standard Progressive Matrices"
   - Códigos / unidades: `r = 0.613`, `p < .001`, `Cronbach's α = 0.775`, `n = 37,505`
   - Botão `Check My IQ Score` → traduzir; `Start Test` → traduzir.
5. **Revisão**: 2 olhos por locale (tradutor + revisor cultural). Critério de aceitação: passa Hemingway grade 6, mantém keywords-chave do GLOSSARY.
6. **Glossário** (parte do entregável):
   - EN: *fluid intelligence* → ES: *inteligencia fluida* / PT: *inteligência fluida* / FR: *intelligence fluide* / DE: *flüssige Intelligenz* / …
   - EN: *non-verbal* → ES: *no verbal* / PT: *não-verbal* (com hífen consistente) / …
   - Manter glossário versionado em `webflow-prompts/glossary.csv` (TODO).

---

## J. QA / validação

- [ ] **Google Search Console** → International Targeting → 0 erros de hreflang.
- [ ] **Sitebulb / Screaming Frog** → crawl com modo "Hreflang Validation" — confirmar bidireccionalidade.
- [ ] **`hreflang.org/checker`** → testar 1 URL por locale.
- [ ] **Lighthouse** em cada locale → SEO ≥ 95, sem flag `document-has-valid-hreflang`.
- [ ] **Manual**: abrir cada locale em browser, verificar:
  - `<html lang>` correcto
  - `dir="rtl"` apenas para AR/HE
  - Hero render sem flash de fonte (FOUT) em scripts não-latinos
  - CTA primário visível first paint
  - Cookie banner aparece no idioma do locale
- [ ] **Schema.org Validator** em 3 locales (EN, AR, JA) → todos passam.
- [ ] **Rich Results Test** → FAQ + WebApplication + HowTo por locale.

---

## K. Webflow — passos finais

1. **Site Settings → Localization** → adicionar os 22 locales com slugs do quadro A.
2. **Master = English (no slug).**
3. Para cada locale: **Settings → SEO** → traduzir Title, Description, OG.
4. **Custom Code → Inside `<head>`**: colar bloco hreflang completo (este prompt, secção C).
5. **Custom Code → Inside `<html>` tag** (apenas AR/HE): `dir="rtl"`.
6. **Sitemap**: ver prompt **18**.
7. **Language switcher**: ver prompt **17**.

---

## Notas finais

- Mantém os 22 locales **mesmo que alguns ainda não tenham conteúdo traduzido** — usa `<meta name="robots" content="noindex">` nos locales incompletos até estarem prontos. Hreflang só lista os que estão indexáveis.
- **Webflow Localization** consolida sitemap automaticamente. Se for fallback manual, ver prompt **18**.
- **Não uses `<meta http-equiv="content-language">`** (ignorado pelo Google desde 2012). Apenas `<html lang>` e hreflang contam.
- **Verifica antes de publicar**: a lista canónica de 22 idiomas em `cognifit.com/longevity` (footer/language switcher). Se houver desvios, ajusta a matriz acima.
