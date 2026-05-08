# 12 — Frequently Asked Questions

> Replica `FAQ` (ScienceSections.tsx). Section header centrado + 7 accordion items max-width 720px, com border-left animado e schema FAQPage.

## Prompt completo

```
Cria a SECÇÃO "Frequently Asked Questions" — FAQ accordion com FAQPage schema.

LAYOUT
- max-width 1200px, padding 40-64px vertical, padding lateral 24px.

SECTION HEADER
- H2: "Frequently Asked Questions"
- (sem subtitle)

ACCORDION LIST (max-width 720px centered) — SEM CARD em volta de cada item

Cada accordion item: SEM rounded, SEM border, SEM bg no container do item.
- Apenas hairline 1px rgba(0,102,255,0.10) horizontal acima de cada item (separador entre Qs).
- Open state: accent line 4px à esquerda do TÍTULO em #0066FF (linha vertical decorativa, não caixa).

Botão toggle (este SIM tem leve hover state, é um elemento interactivo):
- w-full text-left, p 24px, flex justify-between items-center, focus outline 3px #7B61FF outline-offset 3px.
- Hover: cor do title shifta para #0066FF.
- Title (esquerda): Plus Jakarta Sans 700, 18px, #0A102E.
- Chevron (direita): ChevronDown 20px #0066FF, rotate 0 idle / 180 open (300ms).

Conteúdo aberto: p 24px pt 0, mt 8px, 16px weight 500 line-height 1.6 #4A5578, space-y 16px.
Animação: motion height 0→auto + opacity 0→1, 300ms easeInOut.

OS 7 FAQS:

Q1: "What does this intelligence test measure?"
A1: "The IQbe intelligence test measures fluid intelligence through a non-verbal 3D reasoning task that also places demands on visuospatial processing and executive problem-solving."

Q2: "Is IQbe scientifically validated?"
A2: "Yes. This premium IQ test was validated against Raven's Standard Progressive Matrices and showed a significant positive correlation with Raven-based IQ intelligence scores."

Q3: "Is this a mental health test?"
A3: "While IQbe is a cognitive intelligence test rather than a clinical psychiatric mental health test, it provides highly valuable insights into your mental fitness, executive function, and overall brain health."

Q4: "How long does the brain test take?"
A4: "The IQbe brain test is designed to be completed online in minutes. Duration depends on your performance and how quickly you progress through difficulty levels."

Q5: "Does the test require language comprehension?"
A5: "No. The IQbe is a completely non-verbal intelligence test. All instructions and tasks are designed to be universally understood regardless of your native language, making it highly cross-culturally valid."

Q6: "Can I take the IQ test on my phone?"
A6: "Yes. IQbe is a modern intelligence test designed to work flawlessly on your desktop, tablet, and smartphone."

Q7: "Is this better than a traditional IQ quiz?"
A7: "IQbe is fundamentally different from static online IQ quizzes because it combines reasoning with interactive 3D problem solving, acting as a complete brain test mental assessment."

ANIMAÇÕES
- Section header: FadeIn.
- Cada FAQ: FadeIn delay i*0.1s.
- Open/close: motion height + opacity (300ms easeInOut).
- Chevron rotate: 300ms.
- Border-left transition.

INTERACÇÃO
- Permitir múltiplos abertos simultâneos (default) OU radio-mode (apenas 1 aberto). Recomendo múltiplo aberto para usabilidade.
- Cada item independente.

ACESSIBILIDADE
- <section aria-labelledby="faq-title">.
- Cada item:
  <button aria-expanded="false" aria-controls="faq-content-1" id="faq-trigger-1">
    What does this intelligence test measure?
  </button>
  <div id="faq-content-1" role="region" aria-labelledby="faq-trigger-1" hidden>...</div>
- Fallback `<details><summary>` em caso de JS off.
- Focus visible no toggle.

SEO — FAQPage SCHEMA (CRÍTICO)
JSON-LD no <head> ou inline:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does this intelligence test measure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The IQbe intelligence test measures fluid intelligence through a non-verbal 3D reasoning task that also places demands on visuospatial processing and executive problem-solving."
      }
    },
    {
      "@type": "Question",
      "name": "Is IQbe scientifically validated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. This premium IQ test was validated against Raven's Standard Progressive Matrices and showed a significant positive correlation with Raven-based IQ intelligence scores."
      }
    },
    {
      "@type": "Question",
      "name": "Is this a mental health test?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While IQbe is a cognitive intelligence test rather than a clinical psychiatric mental health test, it provides highly valuable insights into your mental fitness, executive function, and overall brain health."
      }
    },
    {
      "@type": "Question",
      "name": "How long does the brain test take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The IQbe brain test is designed to be completed online in minutes. Duration depends on your performance and how quickly you progress through difficulty levels."
      }
    },
    {
      "@type": "Question",
      "name": "Does the test require language comprehension?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The IQbe is a completely non-verbal intelligence test. All instructions and tasks are designed to be universally understood regardless of your native language, making it highly cross-culturally valid."
      }
    },
    {
      "@type": "Question",
      "name": "Can I take the IQ test on my phone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. IQbe is a modern intelligence test designed to work flawlessly on your desktop, tablet, and smartphone."
      }
    },
    {
      "@type": "Question",
      "name": "Is this better than a traditional IQ quiz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IQbe is fundamentally different from static online IQ quizzes because it combines reasoning with interactive 3D problem solving, acting as a complete brain test mental assessment."
      }
    }
  ]
}
</script>
```

- H2 com keyword "FAQ" / "Frequently Asked Questions".
- itemscope/itemtype Schema.org/FAQPage no <section> como fallback microdata.
- Validar com Google Rich Results Test após launch.
```

## Notas Webflow

- Webflow Tabs/Accordion native ou custom embed `<details><summary>`.
- Para FAQPage schema, criar embed no Footer Code (rodar JSON-LD a partir de array).
- Para tipo "open" mostrar border-left animado: combo class `.faq-item.is-open`.
- Smoothing: respeitar prefers-reduced-motion → desabilitar height transition.
