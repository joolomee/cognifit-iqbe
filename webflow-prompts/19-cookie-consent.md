# 19 — Cookie Consent Banner (GDPR + CCPA + LGPD + ePrivacy)

> Banner de consentimento multi-região, com Consent Mode v2 do Google integrado. Categorias: Strictly necessary (sempre), Analytics, Marketing, Preferences. Linguagem do banner segue o `<html lang>` do locale (i18n via prompt **16**). Geo-aware: na UE/UK pede opt-in explícito; nos EUA/CA mostra "Do Not Sell or Share My Personal Information".

---

## A. Decisão arquitectural

| Opção | Recomendação | Notas |
|---|---|---|
| **Build próprio** | Não no MVP | Cookie law muda a cada 12-18 meses; manter custo alto. |
| **Cookiebot** | ✅ Recomendado | Suporta 47 idiomas, Consent Mode v2, scanner mensal automático, IAB TCF v2.2. ~PT€10-50/mês. |
| **Iubenda** | ✅ Alternativa | Bom para LGPD (Brasil), gerador de Privacy Policy incluído. |
| **OneTrust** | Enterprise-only | Excessivo para 1 landing. |
| **Termly** | Free tier OK | Funcional mas UX menos polido. |

> Este prompt usa **Cookiebot** como referência. Para Iubenda/Termly substituir os snippets equivalentes.

---

## B. Prompt completo (Webflow AI Builder + Custom Code)

```
Cria o sistema de consentimento de cookies para a landing IQbe. Multi-região (UE = opt-in, US/CA = opt-out, Brasil = LGPD). Banner traduzido conforme <html lang>, com Google Consent Mode v2 disparado antes de qualquer tracking.

═══════════════════════════════════════
1. BLOCO INSIDE <head> — antes de TUDO
═══════════════════════════════════════

<!-- Google Consent Mode v2 — DEFAULT (denied) antes de qualquer load -->
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  // Defaults conservadores: tudo denied antes do utilizador decidir.
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied',
    'functionality_storage': 'granted',  // strictly necessary
    'personalization_storage': 'denied',
    'security_storage': 'granted',
    'wait_for_update': 500
  });
  gtag('set', 'ads_data_redaction', true);
  gtag('set', 'url_passthrough', true);
</script>

<!-- Cookiebot — substitui CBID pelo teu Domain Group ID -->
<script id="Cookiebot" src="https://consent.cookiebot.com/uc.js"
        data-cbid="00000000-0000-0000-0000-000000000000"
        data-blockingmode="auto" data-georegions="{'region':'US-06','cbid':'…'},{'region':'GB','cbid':'…'}"
        type="text/javascript"></script>

<!-- Cookiebot Declaration script (renderizado na página /cookies — ver prompt 20) -->
<!-- <script id="CookieDeclaration" src="https://consent.cookiebot.com/00000000-0000-0000-0000-000000000000/cd.js" type="text/javascript" async></script> -->

═══════════════════════════════════════
2. CATEGORIAS DE COOKIES (definir no Cookiebot dashboard)
═══════════════════════════════════════

Strictly necessary
  · iqbe.locale.pref          (12 meses)  — preferência de idioma
  · iqbe.locale.pref.dismissed (30 dias)   — banner geo-suggest dismissed
  · CookieConsent             (12 meses)  — Cookiebot
  · __cf_bm                   (30 min)    — Cloudflare bot management
  · XSRF-TOKEN                (sessão)    — CSRF protection (se aplicável)

Preferences
  · iqbe.theme                (12 meses)  — light/dark
  · iqbe.reduced-motion       (12 meses)  — preferência manual

Statistics (analytics)
  · _ga                       (24 meses)  — Google Analytics 4
  · _ga_*                     (24 meses)  — GA4 session
  · _gid                      (24 horas)  — GA4 user
  · _hjSession*               (30 min)    — Hotjar (se usado)
  · _clck, _clsk              (12 meses)  — Microsoft Clarity (se usado)

Marketing
  · _fbp                      (3 meses)   — Meta Pixel
  · _gcl_au                   (3 meses)   — Google Ads conversion
  · IDE                       (24 meses)  — DoubleClick
  · NID                       (6 meses)   — Google personalisation
  · MUID                      (12 meses)  — Bing Ads
  · _ttp                      (13 meses)  — TikTok Ads
  · _pin_unauth               (12 meses)  — Pinterest

═══════════════════════════════════════
3. UI DO BANNER (estilo IQbe)
═══════════════════════════════════════

Posição: bottom-center, max-width 720px (desktop), full-width (mobile).
Margem inferior: 24px desktop / 16px mobile.
Background: rgba(255,255,255,0.97) backdrop-blur 20px, border 1px rgba(0,102,255,0.10),
border-radius 24px, box-shadow 0 20px 60px rgba(10,16,46,0.20).

Estrutura:
- Ícone cookie (lucide Cookie 24×24, cor #0066FF) à esquerda do título.
- H4 "We value your privacy" — 18px font-weight 700 cor #0A102E.
- Body 14px cor #4A5578: "We use cookies to improve your experience, analyze traffic, and personalize content. You can accept all, reject non-essential, or customize your preferences. See our [Cookie Policy](/cookies)."
- Linha de botões (flex, gap 12px, mobile column):
  · "Reject all"        — ghost (border 1px #4A5578, color #4A5578, padding 10px 20px, border-radius 999px).
  · "Customize"         — ghost com underline.
  · "Accept all"        — primário (gradient #0066FF→#00A3FF, padding 12px 28px, font-weight 700).
- Footer micro 12px cor #8B95B5: "By accepting, you agree to our [Privacy Policy](/privacy)."

═══════════════════════════════════════
4. CUSTOMIZE MODAL (categorias)
═══════════════════════════════════════

Modal centrado, max-width 640px, mesma estética do banner.
- Tabs: "Consent" / "Details" / "About".
- Para cada categoria: título, descrição 1 linha, switch on/off.
  · Strictly necessary → switch DISABLED, sempre on, com badge "Always active".
  · Preferences, Statistics, Marketing → toggle livre.
- Botões: "Reject all" / "Save preferences" / "Accept all".
- "Details" mostra tabela de cookies (nome, propósito, duração, provider).

═══════════════════════════════════════
5. GEO-AWARENESS
═══════════════════════════════════════

UE/UK/Suíça/Noruega/Islândia → opt-in explícito (banner bloqueante apenas se data-blockingmode="auto" do Cookiebot).
Califórnia (US-CA) + Virgínia + Colorado + Connecticut + Utah → adicionar link footer "Do Not Sell or Share My Personal Information" + Global Privacy Control honor.
Brasil → linguagem LGPD ("Tratamento de dados pessoais"), mostrar Cookies categorizados.
Resto do mundo → opt-out passivo aceitável (banner não-bloqueante).

Detecção via Cookiebot georegions ou Cloudflare CF-IPCountry header.

═══════════════════════════════════════
6. INTEGRAÇÃO COM CONSENT MODE v2
═══════════════════════════════════════

Quando o utilizador aceita Statistics + Marketing:

<script>
window.addEventListener('CookiebotOnAccept', function () {
  if (Cookiebot.consent.statistics) {
    gtag('consent', 'update', { 'analytics_storage': 'granted' });
  }
  if (Cookiebot.consent.marketing) {
    gtag('consent', 'update', {
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted'
    });
  }
  if (Cookiebot.consent.preferences) {
    gtag('consent', 'update', { 'personalization_storage': 'granted' });
  }
});

window.addEventListener('CookiebotOnDecline', function () {
  // Tudo fica em denied — Consent Mode v2 ainda envia pings anonimizados (cookieless).
});
</script>

═══════════════════════════════════════
7. RE-OPEN ENTRY POINTS
═══════════════════════════════════════

- Footer: link "Cookie preferences" abre o modal Cookiebot (ou dispara Cookiebot.renew()).
- /cookies (página): inclui o widget CookieDeclaration + botão "Withdraw consent".
- Persistência: 12 meses; após expirar, banner reaparece.

═══════════════════════════════════════
8. ACESSIBILIDADE
═══════════════════════════════════════

- Banner em <div role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-desc">.
- Trap focus dentro do modal Customize quando aberto.
- Esc fecha o Customize (se a região permitir — UE bloqueia até decidir).
- Switch toggles com aria-checked + label associada.
- Contraste mínimo AA em todos os elementos.

═══════════════════════════════════════
9. PERFORMANCE
═══════════════════════════════════════

- Cookiebot script marcado data-blockingmode="auto" → bloqueia scripts de tracking até consent.
- LCP do hero não deve depender do banner: render banner DEPOIS do first paint (delay 200ms via setTimeout ou IntersectionObserver no body).
- Lazy load do banner CSS via media="print" + onload="this.media='all'".

═══════════════════════════════════════
10. WEBFLOW — IMPLEMENTAÇÃO
═══════════════════════════════════════

A. Site Settings → Custom Code → Inside <head>: cola Bloco 1.
B. Site Settings → Custom Code → Footer: cola Bloco 6 (event listeners).
C. Footer Symbol: adiciona link "Cookie preferences" → onclick="Cookiebot.renew(); return false;"
D. Cria página /cookies (ver prompt 20) e cola CookieDeclaration script lá.
E. Configura Cookiebot dashboard com:
   · Domínio: brain.cognifit.com
   · Idiomas: 22 (corresponder à matriz do prompt 16)
   · Geo-targeting: UE strict, US-CA opt-out, BR LGPD, RoW soft.
   · Pre-fill banner copy nos 22 idiomas (Cookiebot tem traduções built-in).
F. Activa Auto-blocking → injeta scripts de tracking apenas após consent.
```

---

## C. CCPA / "Do Not Sell or Share My Personal Information" (footer link extra)

Para visitantes com IP da Califórnia (e dos restantes 4 estados com leis equivalentes), aparece um link extra no bottom footer:

```html
<a href="/privacy#dnsmpi" class="dnsmpi-link" data-region="us-ca">
  Do Not Sell or Share My Personal Information
</a>
```

Com behaviour:
- Clica → abre modal "Confirm your choice" → grava cookie `iqbe.dnsmpi=1` por 12 meses.
- Honor de **Global Privacy Control** (`Sec-GPC: 1` header): se presente, marca automaticamente o utilizador como opted-out, sem interacção.

```js
if (navigator.globalPrivacyControl) {
  document.cookie = 'iqbe.dnsmpi=1; Path=/; Max-Age=31536000; SameSite=Lax; Secure';
  gtag('consent', 'update', { 'ad_storage': 'denied', 'ad_user_data': 'denied', 'ad_personalization': 'denied' });
}
```

---

## D. QA

- [ ] **Lighthouse Privacy** (extensão) → 0 trackers loaded antes de consent.
- [ ] **Cookiebot scanner** mensal → 0 categorias indefinidas.
- [ ] **Google Tag Assistant** com Consent Mode debugger → ver pings cookieless quando denied.
- [ ] Manual: abrir em VPN UE → banner bloqueante; VPN US-CA → DNSMPI visível; VPN BR → LGPD copy.
- [ ] **Wave / axe** → 0 erros em modal Customize.
- [ ] **Reduced motion**: banner respeita `prefers-reduced-motion: reduce` (sem slide-up animation).
