# 22 — Páginas de erro (404 · 500 · offline)

> Páginas amigáveis para erros de navegação e servidor, multilíngue, com CTA de recovery e busca interna. Compatíveis com Webflow Pages → Settings → Custom Pages → 404 e 500.

---

## A. `/404` — Page Not Found

```
Cria a página 404 da IQbe.

LAYOUT
- Mesmo header (Symbol Navbar do prompt 01) e footer (Symbol Footer do prompt 14).
- Container central, max-width 720px, padding-y 120px (80px mobile).
- Texto centrado.

VISUAL HEADER
- Ilustração 240×240px: cubo 3D fragmentado / "puzzle peça em falta" — referência visual ao InteractiveCube do hero, mas com 1 face em falta + glow accent #FFB800. Lottie ou SVG animado opcional (rotate slow loop 8s).

COPY
- H1 (52px desktop / 40px mobile, --fs-h2): "This page doesn't fit the puzzle."
- Subtítulo (--fs-body, --text-body): "We couldn't find what you were looking for. The link might be broken, or the page may have moved."
- Microcopy 12px --text-muted: "Error code: 404 · {currentPath}"

CTAs
Linha de 2 botões (flex, gap 16px, mobile column):
- Primário (gradient, pill): "Go to homepage" → /
- Secundário (ghost, pill): "Take the IQ Test" → /IQ-test (entry point principal)

LINKS DE RECOVERY (4 cards, grid 2×2 ou 4 colunas desktop)
1. "What is IQbe?"          → /IQ-test#what-is-it       (icon: Brain)
2. "How the test works"     → /IQ-test#how-it-works     (icon: Cube)
3. "FAQ"                    → /IQ-test#faq              (icon: HelpCircle)
4. "Contact support"        → https://support.cognifit.com (icon: LifeBuoy)

Cada card: estilo iqbe-card (radius 24px, white/80, hover lift), padding 24px, ícone 32px cor #0066FF, título font-weight 700 14px #0A102E.

SEARCH (opcional)
- Search field placeholder "Search the IQbe site…" → submete a /search?q=… (Webflow site search ou Google CSE).

SEO
- <title>Page not found — IQbe by CogniFit</title>
- <meta name="robots" content="noindex, follow"> (não indexar 404, mas permitir crawl dos links).
- HTTP status 404 (Webflow Hosting já devolve correctamente).
- Sem hreflang (página de erro não-canónica).

ACESSIBILIDADE
- H1 anuncia o erro.
- Skip-link no topo.
- Focus inicial vai para o H1 (programmatic via tabindex="-1" + autofocus script).

ANALYTICS
<script>
  if (window.gtag) {
    gtag('event', 'page_not_found', {
      event_category: 'error',
      event_label: window.location.pathname,
      non_interaction: true
    });
  }
</script>

I18N
- 22 versões (uma por locale via Webflow Localization).
- Slugs do botão "Go to homepage" e "Take the IQ Test" mantêm o prefixo do locale actual (ex. /es/IQ-test em ES).
```

---

## B. `/500` — Server Error

```
Cria a página 500.

LAYOUT idêntico ao 404, mudanças:

ILUSTRAÇÃO
- Cubo 3D em órbita instável (efeito wobble/shake suave). Cor accent #FF5555 ou #FFB800 (warning).

COPY
- H1: "Something cracked on our side."
- Subtítulo: "Our servers hit a snag. We're already on it. Please try again in a moment."
- Microcopy: "Error code: 500 · Reference: {requestId}" (se disponível)

CTAs
- Primário: "Try again" → window.location.reload()
- Secundário: "Go to homepage" → /
- Tertiary text link: "Report this issue" → mailto:support@cognifit.com?subject=IQbe%20500%20error&body=Reference:%20{requestId}

SEO
- <meta name="robots" content="noindex, follow">
- Status 500.

ANALYTICS
<script>
  if (window.gtag) {
    gtag('event', 'server_error', {
      event_category: 'error',
      event_label: '{requestId}',
      non_interaction: true
    });
  }
  // Sentry / monitoring opcional:
  if (window.Sentry) Sentry.captureMessage('500 page rendered', 'warning');
</script>
```

---

## C. `/offline` (Service Worker fallback, opcional)

> Se for instalada PWA com service worker, criar fallback offline.

```
Cria /offline (servida pelo SW quando network=offline).

COPY
- H1: "You're offline."
- Sub: "Connect to the internet to take the IQbe test. Some content is available below."
- Lista 3 links (cached): /IQ-test, /privacy, /terms.

VISUAL
- Ícone WifiOff lucide 80×80, cor #8B95B5.
- Background subtil grayscale.

PWA / SW
- Registar SW em /sw.js (Webflow Custom Code Footer):

<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}
</script>

- O SW deve cachear: shell HTML do hero + /offline + assets críticos (Plus Jakarta Sans, logo, hero image).
```

---

## D. Webflow — passos

1. **Site Settings → Pages → 404 page**: cria página `404` com o conteúdo do bloco A.
2. **Site Settings → Pages → 500 page** (se plano permitir): cria com bloco B.
3. **Localization**: traduz cada uma para os 22 locales (apenas H1/sub/microcopy/CTAs/cards).
4. **Test**: navega a `https://brain.cognifit.com/foo-inexistente` — deve devolver a 404 customizada com status 404 (não 200).
5. **GSC**: verificar Coverage Report → "Soft 404" deve estar a 0.

---

## E. QA

- [ ] HTTP status correcto (404 / 500).
- [ ] `noindex` presente.
- [ ] CTAs funcionam.
- [ ] Lighthouse Accessibility ≥ 95.
- [ ] Mobile responsive.
- [ ] Recovery cards levam a destinos válidos.
- [ ] Locale-aware: visitar `/es/foo-inexistente` → 404 em ES com botões a apontar para `/es/…`.
- [ ] GA4 evento `page_not_found` ou `server_error` dispara.
