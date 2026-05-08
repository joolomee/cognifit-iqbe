# 17 — Language Switcher (Header + Footer)

> Componente para troca de idioma entre os 22 locales (matriz no prompt **16**). Aparece em duas posições:
> - **Header**: ícone Globe → menu dropdown elegante (desktop) / bottom-sheet full-width (mobile).
> - **Footer**: lista vertical agrupada por região, sempre visível (sem JS).
>
> Acessível via teclado (Tab, Esc, Arrow keys), `aria-haspopup="listbox"`, `aria-expanded` controlado.

---

## Prompt completo (cola no Webflow AI Builder)

```
Cria o componente "Language Switcher" para a landing IQbe. Duas variantes:

═══════════════════════════════════════
VARIANTE A — HEADER (dropdown)
═══════════════════════════════════════

LAYOUT
- Botão trigger: ícone Globe (lucide), 20×20px, cor #4A5578, hover #0066FF.
  · Acompanhado de label curta com o código locale actual (ex. "EN", "ES", "PT", "العربية").
  · Padding 8px 12px, border-radius 999px, hover background rgba(0,102,255,0.06).
- Posição: dentro do <nav> do header, à esquerda do CTA "Check My IQ Score" e à direita de "Log In".
- Mobile (<768px): mantém o ícone visível; ao clicar abre bottom-sheet full-width.

DROPDOWN (DESKTOP)
- Painel: posição absoluta abaixo do trigger, alinhado à direita.
- Largura 320px, padding 12px, background #FFFFFF, border 1px rgba(0,102,255,0.10), border-radius 16px,
  box-shadow 0 12px 40px rgba(10,16,46,0.12).
- Header do painel: H6 "Choose your language" 13px font-weight 700 cor #8B95B5, uppercase, tracking 0.08em, margin-bottom 8px.
- Lista (max-height 480px, overflow-y auto, scrollbar fina): 22 itens, cada item:
  · Botão full-width, padding 10px 12px, border-radius 10px, display flex, align-items center, gap 12px.
  · Bandeira (não obrigatória — preferir typografia limpa). Se usar bandeira: SVG 20×14px, border 1px rgba(0,0,0,0.06), border-radius 2px.
  · Coluna texto: nome NATIVO (peso 600 cor #0A102E) + label inglesa (peso 400 cor #8B95B5 12px) na linha abaixo.
  · Item ACTIVO: background rgba(0,102,255,0.08), check-icon (lucide Check, 16×16, cor #0066FF) à direita.
  · Hover: background rgba(0,102,255,0.04).
  · Focus visible: outline 2px solid #7B61FF, outline-offset 2px.

GROUPING (opcional — melhora UX em listas longas)
- Sub-headings 11px uppercase tracking 0.1em cor #8B95B5, padding-y 6px:
  · "European languages" → en, es, fr, de, it, pt-PT, nl, pl, el, sv, da, no, fi
  · "Americas" → pt-BR
  · "MENA" → ar, he
  · "Asia" → ja, ko, zh-CN, zh-TW
  · "Other" → ru, tr
- Se omitido, alfabético por nome nativo.

INTERACÇÃO
- Trigger click → abre painel (transition: opacity 0→1, translateY -4px → 0, 200ms ease-out).
- Click fora ou Esc → fecha.
- Setas ↑/↓ → navega items; Enter → selecciona; Home/End → primeiro/último.
- Selecção: navega para a URL hreflang correspondente (ex. /es/IQ-test).
- Preserve query string + hash quando navegar (ex. ?utm=campaign#how-it-works).

ACESSIBILIDADE
- Trigger: <button aria-haspopup="listbox" aria-expanded="false" aria-label="Choose language. Current: English.">
- Painel: role="listbox" aria-label="Languages".
- Cada item: role="option" aria-selected="true|false" lang="<código BCP-47>".
- O texto do nome nativo deve ter o atributo lang correspondente (importante para screen readers / AR e HE → switch automático para voice árabe/hebraica).

PERSISTÊNCIA
- Ao seleccionar, gravar localStorage["iqbe.locale.pref"] = "<código>" antes de navegar.
- Cookie alternativa para bots/SSR: Set-Cookie iqbe_locale=<código>; SameSite=Lax; Path=/; Max-Age=31536000.

═══════════════════════════════════════
VARIANTE B — FOOTER (lista plana)
═══════════════════════════════════════

LAYOUT
- Bloco no fundo do footer (acima do bottom legal bar), separado por linha border-top rgba(255,255,255,0.10).
- H4 "Available languages" cor #FFFFFF font-weight 700 14px margin-bottom 16px.
- Lista flex wrap: 22 links separados por divider "·" #4A5578 ou em grid 4 colunas (responsive 2 colunas mobile).
- Cada link: nome nativo, font 13px cor #94A3B8, hover #FFFFFF.
- Item activo: cor #FFFFFF font-weight 600 + underline.
- Cada link tem rel="alternate" hreflang="<código>".

═══════════════════════════════════════
DADOS — 22 LOCALES
═══════════════════════════════════════

[
  { "code":"en",     "native":"English",            "english":"English",            "url":"/IQ-test" },
  { "code":"es",     "native":"Español",            "english":"Spanish",            "url":"/es/IQ-test" },
  { "code":"fr",     "native":"Français",           "english":"French",             "url":"/fr/IQ-test" },
  { "code":"de",     "native":"Deutsch",            "english":"German",             "url":"/de/IQ-test" },
  { "code":"it",     "native":"Italiano",           "english":"Italian",            "url":"/it/IQ-test" },
  { "code":"pt-PT",  "native":"Português",          "english":"Portuguese (PT)",    "url":"/pt/IQ-test" },
  { "code":"pt-BR",  "native":"Português (Brasil)", "english":"Portuguese (BR)",    "url":"/pt-br/IQ-test" },
  { "code":"nl",     "native":"Nederlands",         "english":"Dutch",              "url":"/nl/IQ-test" },
  { "code":"pl",     "native":"Polski",             "english":"Polish",             "url":"/pl/IQ-test" },
  { "code":"ru",     "native":"Русский",            "english":"Russian",            "url":"/ru/IQ-test" },
  { "code":"tr",     "native":"Türkçe",             "english":"Turkish",            "url":"/tr/IQ-test" },
  { "code":"ja",     "native":"日本語",              "english":"Japanese",           "url":"/ja/IQ-test" },
  { "code":"ko",     "native":"한국어",              "english":"Korean",             "url":"/ko/IQ-test" },
  { "code":"zh-CN",  "native":"简体中文",            "english":"Chinese (Simplified)","url":"/zh/IQ-test" },
  { "code":"zh-TW",  "native":"繁體中文",            "english":"Chinese (Traditional)","url":"/zh-tw/IQ-test" },
  { "code":"ar",     "native":"العربية",            "english":"Arabic",             "url":"/ar/IQ-test", "dir":"rtl" },
  { "code":"he",     "native":"עברית",              "english":"Hebrew",             "url":"/he/IQ-test", "dir":"rtl" },
  { "code":"el",     "native":"Ελληνικά",           "english":"Greek",              "url":"/el/IQ-test" },
  { "code":"sv",     "native":"Svenska",            "english":"Swedish",            "url":"/sv/IQ-test" },
  { "code":"da",     "native":"Dansk",              "english":"Danish",             "url":"/da/IQ-test" },
  { "code":"no",     "native":"Norsk",              "english":"Norwegian",          "url":"/no/IQ-test" },
  { "code":"fi",     "native":"Suomi",              "english":"Finnish",            "url":"/fi/IQ-test" }
]

═══════════════════════════════════════
COMPONENTE GEO-SUGGEST (banner sugerido pelo prompt 16)
═══════════════════════════════════════

- Banner não-intrusivo, fixed top, z-index 200, full-width.
- Background rgba(10,16,46,0.95) backdrop-blur 12px, border-bottom 1px rgba(0,102,255,0.30).
- Padding 12px 24px, font-size 14px, cor #FFFFFF.
- Conteúdo: "🌐 Looks like you're browsing from {Country}. Switch to {LanguageNative}?"
- Botão primário: "Switch to {LanguageNative}" (pill, gradient #0066FF→#00A3FF, padding 8px 20px, font-weight 700).
- Botão secundário: "Stay in English" (ghost, cor #94A3B8, font-weight 500).
- Botão fechar: ícone X (lucide) à direita, 16×16, hover #FFFFFF.
- Animação: slide-down 300ms ease-out na primeira visita; ao fechar slide-up 200ms.
- Persiste decisão em localStorage["iqbe.locale.pref.dismissed"] = true por 30 dias.

═══════════════════════════════════════
WEBFLOW — IMPLEMENTAÇÃO
═══════════════════════════════════════

1. Cria Symbol "Language Switcher Dropdown" — desktop variant.
2. Cria Symbol "Language Switcher Footer" — footer variant.
3. Cria Symbol "Locale Suggest Banner" — geo-suggest, hidden por defeito.
4. Os 22 itens são CMS Collection "Locales" com fields: code (text), nativeName (text), englishName (text), url (link), dir (option: ltr/rtl), region (option). Bind como Collection List dentro dos Symbols.
5. Custom code (Footer Code) para a interacção (toggle dropdown, keyboard nav, persistência localStorage). Ver snippet abaixo.

═══════════════════════════════════════
SNIPPET — INTERACÇÃO (Webflow Footer Code)
═══════════════════════════════════════

<script>
(function() {
  const trigger = document.querySelector('[data-locale-trigger]');
  const panel   = document.querySelector('[data-locale-panel]');
  if (!trigger || !panel) return;

  const open = () => {
    panel.removeAttribute('hidden');
    trigger.setAttribute('aria-expanded', 'true');
    panel.querySelector('[role="option"]')?.focus();
  };
  const close = () => {
    panel.setAttribute('hidden', '');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.focus();
  };

  trigger.addEventListener('click', () => {
    trigger.getAttribute('aria-expanded') === 'true' ? close() : open();
  });

  document.addEventListener('click', (e) => {
    if (!panel.contains(e.target) && e.target !== trigger) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  // Keyboard nav nos items
  panel.addEventListener('keydown', (e) => {
    const items = [...panel.querySelectorAll('[role="option"]')];
    const idx = items.indexOf(document.activeElement);
    if (e.key === 'ArrowDown') { e.preventDefault(); items[(idx+1) % items.length].focus(); }
    if (e.key === 'ArrowUp')   { e.preventDefault(); items[(idx-1+items.length) % items.length].focus(); }
    if (e.key === 'Home')      { e.preventDefault(); items[0].focus(); }
    if (e.key === 'End')       { e.preventDefault(); items[items.length-1].focus(); }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const code = document.activeElement.dataset.localeCode;
      if (code) {
        localStorage.setItem('iqbe.locale.pref', code);
        window.location.href = document.activeElement.getAttribute('href');
      }
    }
  });

  // Geo-suggest banner
  document.addEventListener('iqbe:suggest-locale', (e) => {
    const banner = document.querySelector('[data-locale-suggest]');
    if (!banner || localStorage.getItem('iqbe.locale.pref.dismissed')) return;
    banner.dataset.target = e.detail.target;
    banner.removeAttribute('hidden');
  });
})();
</script>
```

---

## Notas de implementação

- **Não use bandeiras como única identificação.** Bandeiras representam países, não idiomas. Espanhol não pertence só a Espanha. Usa nome nativo como fonte primária e bandeira (se houver) só como decoração.
- **Texto AR/HE dentro do menu**: garante `lang="ar"` / `lang="he"` no item — o screen reader troca de voz automaticamente.
- **Mobile bottom-sheet**: usar `<dialog>` HTML nativo se possível (suporte 95%+) com `showModal()`. Caso contrário, div fixed bottom + overlay.
- **Performance**: a lista de 22 locales é estática — não usar fetch. Renderizar inline (Symbol Webflow + Collection bind).
- **Tracking**: ao clicar, dispara evento GA4 `language_switch` com payload `{ from: "en", to: "es" }`.

---

## QA

- [ ] Tab navigation funciona em desktop (Header switcher).
- [ ] Esc fecha o painel e devolve focus ao trigger.
- [ ] AR e HE selecionados → próxima página renderiza com `dir="rtl"`.
- [ ] Selecionar locale preserva `?utm=…#hash` da URL actual.
- [ ] Geo-suggest aparece só quando preferência não está gravada.
- [ ] Mobile: bottom-sheet abre, swipe-down fecha (touchstart + touchmove).
- [ ] Lighthouse: 0 issues de "Touch targets are sized appropriately" (min 48×48px).
