# 18 — `robots.txt` + `sitemap.xml` (multilíngue)

> Stack completo de discovery para os 22 locales. Sitemap-index → 1 sitemap por locale → URLs com hreflang inline. `robots.txt` com regras por user-agent + bloco de bots problemáticos + lista de sitemaps. Compatível com Webflow (que serve `/sitemap.xml` automaticamente, mas ignora a estratégia multi-sitemap — abaixo a alternativa).

---

## A. `robots.txt`

> Cola em **Site Settings → SEO → robots.txt** (Webflow Designer). Substitui o default.

```txt
# robots.txt — IQbe (CogniFit)
# Last updated: 2026-05-08

# ───────────────────────────────────────
# Default rules — todos os crawlers
# ───────────────────────────────────────
User-agent: *
Allow: /
Disallow: /search?
Disallow: /*?*sessionid=
Disallow: /*?*utm_
Disallow: /api/
Disallow: /admin/
Disallow: /preview/
Disallow: /draft/
Disallow: /401
Disallow: /403
Disallow: /500
Crawl-delay: 1

# ───────────────────────────────────────
# Googlebot — sem crawl-delay (Google ignora)
# ───────────────────────────────────────
User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /
Disallow: /og/internal/

User-agent: Googlebot-News
Disallow: /

User-agent: Googlebot-Video
Allow: /

# ───────────────────────────────────────
# Bing
# ───────────────────────────────────────
User-agent: Bingbot
Allow: /

User-agent: BingPreview
Allow: /

# ───────────────────────────────────────
# AI / LLM crawlers — opt-in explícito ou bloqueio
# ───────────────────────────────────────
# Permite training se quiseres aparecer em LLMs (ChatGPT, Perplexity, Gemini search).
# Para bloquear training mas permitir search citation, ler nota abaixo.

# OpenAI — GPTBot (training)
User-agent: GPTBot
Allow: /

# OpenAI — ChatGPT-User (browsing em tempo real, ações de Atlas/Operator)
User-agent: ChatGPT-User
Allow: /

# OpenAI — OAI-SearchBot (ChatGPT Search index)
User-agent: OAI-SearchBot
Allow: /

# Anthropic — ClaudeBot (training) + Claude-User (browsing)
User-agent: ClaudeBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: Claude-SearchBot
Allow: /

# Anthropic — anthropic-ai (legacy)
User-agent: anthropic-ai
Allow: /

# Google — Google-Extended (Gemini training opt-out)
User-agent: Google-Extended
Allow: /

# Perplexity
User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

# Apple
User-agent: Applebot
Allow: /

User-agent: Applebot-Extended
Allow: /

# Meta
User-agent: Meta-ExternalAgent
Allow: /

User-agent: Meta-ExternalFetcher
Allow: /

User-agent: facebookexternalhit
Allow: /

# DuckDuckGo
User-agent: DuckDuckBot
Allow: /

# You.com
User-agent: YouBot
Allow: /

# Common Crawl (alimenta muitos LLMs)
User-agent: CCBot
Allow: /

# Cohere
User-agent: cohere-ai
Allow: /

# Mistral
User-agent: MistralAI-User
Allow: /

# Bytedance / Doubao
User-agent: Bytespider
Disallow: /

# Diffbot — agregador agressivo
User-agent: Diffbot
Disallow: /

# Omgili — blogspam
User-agent: Omgilibot
Disallow: /

# Petalbot (Huawei) — historicamente abusivo
User-agent: PetalBot
Crawl-delay: 10

# ───────────────────────────────────────
# Bots agressivos / scraping
# ───────────────────────────────────────
User-agent: AhrefsBot
Crawl-delay: 10

User-agent: SemrushBot
Crawl-delay: 10

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

User-agent: SeekportBot
Disallow: /

# ───────────────────────────────────────
# Sitemaps
# ───────────────────────────────────────
Sitemap: https://brain.cognifit.com/sitemap.xml
Sitemap: https://brain.cognifit.com/sitemap-index.xml

# Por locale (se gerado manualmente — ver secção C)
Sitemap: https://brain.cognifit.com/sitemaps/sitemap-en.xml
Sitemap: https://brain.cognifit.com/sitemaps/sitemap-es.xml
Sitemap: https://brain.cognifit.com/sitemaps/sitemap-fr.xml
Sitemap: https://brain.cognifit.com/sitemaps/sitemap-de.xml
Sitemap: https://brain.cognifit.com/sitemaps/sitemap-it.xml
Sitemap: https://brain.cognifit.com/sitemaps/sitemap-pt.xml
Sitemap: https://brain.cognifit.com/sitemaps/sitemap-pt-br.xml
Sitemap: https://brain.cognifit.com/sitemaps/sitemap-nl.xml
Sitemap: https://brain.cognifit.com/sitemaps/sitemap-pl.xml
Sitemap: https://brain.cognifit.com/sitemaps/sitemap-ru.xml
Sitemap: https://brain.cognifit.com/sitemaps/sitemap-tr.xml
Sitemap: https://brain.cognifit.com/sitemaps/sitemap-ja.xml
Sitemap: https://brain.cognifit.com/sitemaps/sitemap-ko.xml
Sitemap: https://brain.cognifit.com/sitemaps/sitemap-zh.xml
Sitemap: https://brain.cognifit.com/sitemaps/sitemap-zh-tw.xml
Sitemap: https://brain.cognifit.com/sitemaps/sitemap-ar.xml
Sitemap: https://brain.cognifit.com/sitemaps/sitemap-he.xml
Sitemap: https://brain.cognifit.com/sitemaps/sitemap-el.xml
Sitemap: https://brain.cognifit.com/sitemaps/sitemap-sv.xml
Sitemap: https://brain.cognifit.com/sitemaps/sitemap-da.xml
Sitemap: https://brain.cognifit.com/sitemaps/sitemap-no.xml
Sitemap: https://brain.cognifit.com/sitemaps/sitemap-fi.xml

# llms.txt (ver prompt 21)
# Não é standard, mas indica explicitamente o que pode ser indexado por LLMs.

# Host preferido (signal antigo, ainda lido por Yandex)
Host: brain.cognifit.com
```

> **Nota AI/LLM**: a política acima permite TODOS os principais crawlers de IA. Se quiseres bloquear training mas permitir citação em search → mantém `OAI-SearchBot`, `Claude-SearchBot`, `PerplexityBot`, `Applebot` e `ChatGPT-User` em `Allow:`, e bloqueia `GPTBot`, `ClaudeBot`, `Google-Extended`, `Applebot-Extended`, `CCBot`, `cohere-ai`, `Meta-ExternalAgent`. Decisão de produto.

---

## B. `sitemap-index.xml`

> Master sitemap que aponta para os 22 sitemaps por locale. Cola num ficheiro `sitemap-index.xml` na raiz (Webflow → Pages → upload via custom hosting OU edge function via Cloudflare Worker se Webflow não permitir).

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://brain.cognifit.com/sitemaps/sitemap-en.xml</loc>
    <lastmod>2026-05-08</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://brain.cognifit.com/sitemaps/sitemap-es.xml</loc>
    <lastmod>2026-05-08</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://brain.cognifit.com/sitemaps/sitemap-fr.xml</loc>
    <lastmod>2026-05-08</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://brain.cognifit.com/sitemaps/sitemap-de.xml</loc>
    <lastmod>2026-05-08</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://brain.cognifit.com/sitemaps/sitemap-it.xml</loc>
    <lastmod>2026-05-08</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://brain.cognifit.com/sitemaps/sitemap-pt.xml</loc>
    <lastmod>2026-05-08</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://brain.cognifit.com/sitemaps/sitemap-pt-br.xml</loc>
    <lastmod>2026-05-08</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://brain.cognifit.com/sitemaps/sitemap-nl.xml</loc>
    <lastmod>2026-05-08</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://brain.cognifit.com/sitemaps/sitemap-pl.xml</loc>
    <lastmod>2026-05-08</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://brain.cognifit.com/sitemaps/sitemap-ru.xml</loc>
    <lastmod>2026-05-08</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://brain.cognifit.com/sitemaps/sitemap-tr.xml</loc>
    <lastmod>2026-05-08</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://brain.cognifit.com/sitemaps/sitemap-ja.xml</loc>
    <lastmod>2026-05-08</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://brain.cognifit.com/sitemaps/sitemap-ko.xml</loc>
    <lastmod>2026-05-08</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://brain.cognifit.com/sitemaps/sitemap-zh.xml</loc>
    <lastmod>2026-05-08</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://brain.cognifit.com/sitemaps/sitemap-zh-tw.xml</loc>
    <lastmod>2026-05-08</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://brain.cognifit.com/sitemaps/sitemap-ar.xml</loc>
    <lastmod>2026-05-08</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://brain.cognifit.com/sitemaps/sitemap-he.xml</loc>
    <lastmod>2026-05-08</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://brain.cognifit.com/sitemaps/sitemap-el.xml</loc>
    <lastmod>2026-05-08</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://brain.cognifit.com/sitemaps/sitemap-sv.xml</loc>
    <lastmod>2026-05-08</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://brain.cognifit.com/sitemaps/sitemap-da.xml</loc>
    <lastmod>2026-05-08</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://brain.cognifit.com/sitemaps/sitemap-no.xml</loc>
    <lastmod>2026-05-08</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://brain.cognifit.com/sitemaps/sitemap-fi.xml</loc>
    <lastmod>2026-05-08</lastmod>
  </sitemap>
</sitemapindex>
```

---

## C. Sitemap por locale (template)

> Exemplo `sitemap-en.xml`. Replicar para os 21 outros, ajustando `<loc>`, `hreflang`, `<image:caption>` traduzido.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">

  <!-- HOME / Landing IQbe -->
  <url>
    <loc>https://brain.cognifit.com/IQ-test</loc>
    <lastmod>2026-05-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>

    <xhtml:link rel="alternate" hreflang="x-default" href="https://brain.cognifit.com/IQ-test" />
    <xhtml:link rel="alternate" hreflang="en"        href="https://brain.cognifit.com/IQ-test" />
    <xhtml:link rel="alternate" hreflang="es"        href="https://brain.cognifit.com/es/IQ-test" />
    <xhtml:link rel="alternate" hreflang="fr"        href="https://brain.cognifit.com/fr/IQ-test" />
    <xhtml:link rel="alternate" hreflang="de"        href="https://brain.cognifit.com/de/IQ-test" />
    <xhtml:link rel="alternate" hreflang="it"        href="https://brain.cognifit.com/it/IQ-test" />
    <xhtml:link rel="alternate" hreflang="pt-PT"     href="https://brain.cognifit.com/pt/IQ-test" />
    <xhtml:link rel="alternate" hreflang="pt-BR"     href="https://brain.cognifit.com/pt-br/IQ-test" />
    <xhtml:link rel="alternate" hreflang="nl"        href="https://brain.cognifit.com/nl/IQ-test" />
    <xhtml:link rel="alternate" hreflang="pl"        href="https://brain.cognifit.com/pl/IQ-test" />
    <xhtml:link rel="alternate" hreflang="ru"        href="https://brain.cognifit.com/ru/IQ-test" />
    <xhtml:link rel="alternate" hreflang="tr"        href="https://brain.cognifit.com/tr/IQ-test" />
    <xhtml:link rel="alternate" hreflang="ja"        href="https://brain.cognifit.com/ja/IQ-test" />
    <xhtml:link rel="alternate" hreflang="ko"        href="https://brain.cognifit.com/ko/IQ-test" />
    <xhtml:link rel="alternate" hreflang="zh-CN"     href="https://brain.cognifit.com/zh/IQ-test" />
    <xhtml:link rel="alternate" hreflang="zh-TW"     href="https://brain.cognifit.com/zh-tw/IQ-test" />
    <xhtml:link rel="alternate" hreflang="ar"        href="https://brain.cognifit.com/ar/IQ-test" />
    <xhtml:link rel="alternate" hreflang="he"        href="https://brain.cognifit.com/he/IQ-test" />
    <xhtml:link rel="alternate" hreflang="el"        href="https://brain.cognifit.com/el/IQ-test" />
    <xhtml:link rel="alternate" hreflang="sv"        href="https://brain.cognifit.com/sv/IQ-test" />
    <xhtml:link rel="alternate" hreflang="da"        href="https://brain.cognifit.com/da/IQ-test" />
    <xhtml:link rel="alternate" hreflang="no"        href="https://brain.cognifit.com/no/IQ-test" />
    <xhtml:link rel="alternate" hreflang="fi"        href="https://brain.cognifit.com/fi/IQ-test" />

    <image:image>
      <image:loc>https://brain.cognifit.com/og/iqbe-en-1200x630.jpg</image:loc>
      <image:caption>IQbe — Premium IQ Test by CogniFit. 3D cube reasoning task.</image:caption>
      <image:title>CogniFit QI Assessment</image:title>
    </image:image>

    <video:video>
      <video:thumbnail_loc>https://brain.cognifit.com/video/iqbe-demo-thumb.jpg</video:thumbnail_loc>
      <video:title>How the IQbe IQ Test works — 3D cube interaction demo</video:title>
      <video:description>Short loop showing how to rotate the 3D cube and complete the missing pattern in IQbe.</video:description>
      <video:content_loc>https://brain.cognifit.com/video/iqbe-demo.mp4</video:content_loc>
      <video:duration>15</video:duration>
      <video:family_friendly>yes</video:family_friendly>
    </video:video>
  </url>

  <!-- Páginas legais -->
  <url>
    <loc>https://brain.cognifit.com/terms</loc>
    <lastmod>2026-05-08</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://brain.cognifit.com/terms" />
    <!-- replicar 22 hreflangs -->
  </url>

  <url>
    <loc>https://brain.cognifit.com/privacy</loc>
    <lastmod>2026-05-08</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>

  <url>
    <loc>https://brain.cognifit.com/cookies</loc>
    <lastmod>2026-05-08</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>

</urlset>
```

---

## D. Implementação no Webflow

### Cenário 1 — Webflow Localization (recomendado)

- O Webflow gera **automaticamente** `/sitemap.xml` com URLs de todos os locales e hreflang inline. **Não duplicar** sitemap manualmente. Confirmar em `Site Settings → SEO → Sitemap.xml`.
- Para `robots.txt` editável: `Site Settings → SEO → robots.txt` (campo livre).
- Limitação: o Webflow não gera sitemap-index nem sitemaps por locale separados. Se precisar dessa granularidade, ir para Cenário 2.

### Cenário 2 — Sitemap manual via Cloudflare Worker (ou similar)

```js
// worker.js — serve /sitemap.xml e /sitemaps/sitemap-{locale}.xml
addEventListener('fetch', e => e.respondWith(handle(e.request)));

const LOCALES = ['en','es','fr','de','it','pt','pt-br','nl','pl','ru','tr','ja','ko',
                 'zh','zh-tw','ar','he','el','sv','da','no','fi'];

async function handle(req) {
  const url = new URL(req.url);
  if (url.pathname === '/sitemap-index.xml' || url.pathname === '/sitemap.xml') {
    return new Response(buildIndex(), { headers: { 'content-type': 'application/xml' } });
  }
  const m = url.pathname.match(/^\/sitemaps\/sitemap-([a-z-]+)\.xml$/);
  if (m && LOCALES.includes(m[1])) {
    return new Response(buildLocale(m[1]), { headers: { 'content-type': 'application/xml' } });
  }
  return fetch(req); // passthrough
}

function buildIndex() {
  const today = new Date().toISOString().slice(0,10);
  const items = LOCALES.map(l => `<sitemap>
    <loc>https://brain.cognifit.com/sitemaps/sitemap-${l}.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</sitemapindex>`;
}

function buildLocale(locale) {
  const today = new Date().toISOString().slice(0,10);
  const slug = locale === 'en' ? '' : `/${locale}`;
  const hreflangs = LOCALES.map(l => {
    const h = l === 'pt' ? 'pt-PT' : l === 'pt-br' ? 'pt-BR' : l === 'zh' ? 'zh-CN' : l === 'zh-tw' ? 'zh-TW' : l;
    const path = l === 'en' ? '' : `/${l}`;
    return `<xhtml:link rel="alternate" hreflang="${h}" href="https://brain.cognifit.com${path}/IQ-test" />`;
  }).join('\n      ');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://brain.cognifit.com${slug}/IQ-test</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://brain.cognifit.com/IQ-test" />
    ${hreflangs}
  </url>
</urlset>`;
}
```

---

## E. QA / submissão

- [ ] Submete `sitemap-index.xml` em **Google Search Console** (Sitemaps).
- [ ] Submete também em **Bing Webmaster Tools**.
- [ ] **`robots.txt` Tester** (Search Console legacy) — verificar que `/IQ-test` é `Allow`.
- [ ] **Sitebulb / Screaming Frog** com modo "Sitemap Audit" → 0 URLs órfãs, 0 hreflang errors.
- [ ] **Validador XML**: https://www.xml-sitemaps.com/validate-xml-sitemap.html
- [ ] HTTP 200 em `https://brain.cognifit.com/sitemap.xml` e `/robots.txt`.
- [ ] `Content-Type: application/xml` para sitemaps, `text/plain` para robots.
- [ ] `lastmod` actualizado em cada release (CI step).
- [ ] **IndexNow** (Bing/Yandex push): `POST /indexnow` com URLs alteradas — opcional mas recomendado.

---

## F. CI hook — actualização automática de `lastmod`

```yaml
# .github/workflows/sitemap-lastmod.yml
name: Update sitemap lastmod
on:
  push:
    branches: [main]
jobs:
  bump:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: |
          today=$(date -u +%Y-%m-%d)
          sed -i "s|<lastmod>.*</lastmod>|<lastmod>${today}</lastmod>|g" sitemap-index.xml sitemaps/*.xml
      - uses: stefanzweifel/git-auto-commit-action@v5
        with:
          commit_message: "chore(sitemap): bump lastmod"
```
