# 15 — SEO Global `<head>` + Structured Data

> Replica `SEO.tsx`. Bloco completo de `<head>` com meta tags primárias, OG, Twitter, robots, Apple, preconnects e dois JSON-LD (WebApplication + FAQPage). Pronto para colar no Webflow Page Settings → Inside `<head>` tag.

## Prompt completo

```
Cria o BLOCO <head> SEO global da landing IQbe — meta tags primárias, OG, Twitter, robots, Apple/iOS, preconnects, hreflang e structured data (WebApplication + FAQPage).

INSTRUÇÕES PARA WEBFLOW
- Página → Settings → SEO Settings:
  · Title Tag: "CogniFit QI Assessment: Premium IQ Test & Cognitive Evaluation"
  · Meta Description: "Take the most accurate online IQ test. The CogniFit QI Assessment evaluates your intelligence, mental fitness, and cognitive health with advanced 3D fluid reasoning."
  · Open Graph Title/Description: idem.
  · OG Image: 1200x630 capturando o hero (export PNG/JPG do Webflow).
- Página → Settings → Custom Code → Inside <head> tag: colar o bloco abaixo.

═══════════════════════════════════════
BLOCO HTML COMPLETO PARA <head>
═══════════════════════════════════════

<!-- Charset & viewport -->
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />

<!-- Primary Meta Tags -->
<title>CogniFit QI Assessment: Premium IQ Test & Cognitive Evaluation</title>
<meta name="title" content="CogniFit QI Assessment: Premium IQ Test & Cognitive Evaluation" />
<meta name="description" content="Take the most accurate online IQ test. The CogniFit QI Assessment evaluates your intelligence, mental fitness, and cognitive health with advanced 3D fluid reasoning." />
<meta name="keywords" content="CogniFit QI Assessment, IQ test, intelligence test, brain test mental, mental health test, IQ intelligence, premium IQ test, online cognitive assessment, fluid intelligence test, accurate brain test, professional intelligence test, valid IQ score" />
<meta name="author" content="CogniFit" />
<link rel="canonical" href="https://brain.cognifit.com/IQ-test" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://brain.cognifit.com/IQ-test" />
<meta property="og:title" content="CogniFit QI Assessment: Premium IQ Test & Cognitive Evaluation" />
<meta property="og:description" content="Take the most accurate online IQ test. The CogniFit QI Assessment evaluates your intelligence, mental fitness, and cognitive health." />
<meta property="og:image" content="https://brain.cognifit.com/og/iqbe-1200x630.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="IQbe — Premium IQ Test by CogniFit. 3D cube reasoning task." />
<meta property="og:site_name" content="CogniFit" />
<meta property="og:locale" content="en_US" />
<!-- Master language: EN. Mantém os alternates abaixo APENAS se publicares páginas PT/ES separadas. -->
<!-- <meta property="og:locale:alternate" content="pt_PT" /> -->
<!-- <meta property="og:locale:alternate" content="es_ES" /> -->

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://brain.cognifit.com/IQ-test" />
<meta property="twitter:title" content="CogniFit QI Assessment: Premium IQ Test & Cognitive Evaluation" />
<meta property="twitter:description" content="Take the most accurate online IQ test. The CogniFit QI Assessment evaluates your intelligence, mental fitness, and cognitive health." />
<meta property="twitter:image" content="https://brain.cognifit.com/og/iqbe-1200x630.jpg" />
<meta property="twitter:site" content="@CogniFit" />
<meta property="twitter:creator" content="@CogniFit" />

<!-- Robots / search -->
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
<meta name="googlebot" content="index, follow" />

<!-- Apple / iOS -->
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<meta name="apple-mobile-web-app-title" content="CogniFit IQbe" />
<meta name="format-detection" content="telephone=no" />
<link rel="apple-touch-icon" href="https://brain.cognifit.com/apple-touch-icon.png" />

<!-- Theme + manifest -->
<meta name="theme-color" content="#F4F7FB" />
<link rel="manifest" href="/site.webmanifest" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" type="image/png" href="/favicon.png" />

<!-- Performance preconnects -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="dns-prefetch" href="https://www.cognifit.com" />
<link rel="dns-prefetch" href="https://fonts.googleapis.com" />
<link rel="dns-prefetch" href="https://www.googletagmanager.com" />

<!-- Fonts (Plus Jakarta Sans — alinhada com cognifit.com/longevity) -->
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />

<!-- hreflang — só EN por default. Descomenta as outras linhas SE publicares páginas PT/ES separadas. -->
<link rel="alternate" hreflang="en" href="https://brain.cognifit.com/IQ-test" />
<link rel="alternate" hreflang="x-default" href="https://brain.cognifit.com/IQ-test" />
<!-- <link rel="alternate" hreflang="pt-PT" href="https://brain.cognifit.com/pt/IQ-test" /> -->
<!-- <link rel="alternate" hreflang="es" href="https://brain.cognifit.com/es/IQ-test" /> -->

<!-- JSON-LD Organization -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CogniFit",
  "url": "https://www.cognifit.com",
  "logo": "https://www.cognifit.com/static/logo.svg",
  "sameAs": [
    "https://www.facebook.com/cognifit/",
    "https://twitter.com/CogniFit",
    "https://www.instagram.com/cognifit/",
    "https://www.linkedin.com/company/cognifit",
    "https://www.youtube.com/user/cognifit"
  ],
  "contactPoint": [{
    "@type": "ContactPoint",
    "contactType": "customer support",
    "url": "https://support.cognifit.com/",
    "availableLanguage": ["en"]
  }]
}
</script>

<!-- JSON-LD WebSite + SearchAction (sitelinks search box) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CogniFit IQbe",
  "url": "https://brain.cognifit.com/IQ-test",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.cognifit.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
</script>

<!-- JSON-LD WebApplication (produto) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "CogniFit QI Assessment (IQbe)",
  "alternateName": "CogniFit Intelligence Test",
  "url": "https://brain.cognifit.com/IQ-test",
  "description": "A scientifically validated IQ test and cognitive assessment. Accurately measure your intelligence, brain health, and mental fitness.",
  "applicationCategory": "EducationalApplication",
  "applicationSubCategory": "Cognitive Assessment",
  "operatingSystem": "Web, iOS, Android",
  "browserRequirements": "Requires JavaScript and a modern browser",
  "provider": {
    "@type": "Organization",
    "name": "CogniFit",
    "url": "https://www.cognifit.com"
  },
  "offers": {
    "@type": "Offer",
    "price": "49.99",
    "priceCurrency": "USD",
    "category": "Premium",
    "availability": "https://schema.org/InStock",
    "url": "https://www.cognifit.com/aplicaciones/html5/public/assessment/ASSESSMENT~@~IQBE"
  },
  "audience": [
    { "@type": "Audience", "audienceType": "Adults" },
    { "@type": "Audience", "audienceType": "Children & Teens 13+" },
    { "@type": "Audience", "audienceType": "Seniors" },
    { "@type": "MedicalAudience", "audienceType": "Health Professionals" },
    { "@type": "EducationalAudience", "audienceType": "Researchers & Schools" }
  ],
  "keywords": "CogniFit QI Assessment, IQ test, intelligence test, brain test mental, mental health test, IQ intelligence, cognitive assessment, fluid intelligence",
  "featureList": [
    "Premium IQ Test",
    "CogniFit QI Assessment",
    "Interactive 3D Cube Interface",
    "Non-verbal by design",
    "Low cultural bias",
    "Executive Function Evaluation",
    "Spatial Perception Measurement",
    "Working Memory Assessment",
    "Abstract Reasoning",
    "Raven's Standard Progressive Matrices Based",
    "Validated against Raven (r = 0.613, p < .001)",
    "Test-retest reliability 0.71",
    "Cronbach's alpha 0.775",
    "Detailed PDF Report"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "37505",
    "bestRating": "5",
    "worstRating": "1"
  }
}
</script>

<!-- JSON-LD MedicalWebPage (página inteira) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "CogniFit QI Assessment: Premium IQ Test",
  "url": "https://brain.cognifit.com/IQ-test",
  "description": "Online IQ test and cognitive assessment by CogniFit, validated against Raven's Standard Progressive Matrices.",
  "audience": {
    "@type": "PeopleAudience",
    "suggestedMinAge": 13
  },
  "medicineSystem": "https://schema.org/WesternConventional",
  "lastReviewed": "2026-01-15",
  "reviewedBy": {
    "@type": "Organization",
    "name": "CogniFit Scientific Team"
  }
}
</script>

<!-- JSON-LD HowTo (How the IQ Test Works) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to take the IQbe IQ test",
  "description": "Three steps to measure your fluid intelligence with the IQbe Intelligence Test.",
  "totalTime": "PT15M",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Register & Start",
      "text": "Create an account to securely access the premium intelligence test.",
      "url": "https://brain.cognifit.com/IQ-test#how-it-works"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Solve the 3D Puzzles",
      "text": "Complete the brain test mental assessment by rotating cubes to find logical rules.",
      "url": "https://brain.cognifit.com/IQ-test#how-it-works"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Get Your IQ Score",
      "text": "Instantly receive a detailed PDF report of your IQ intelligence and cognitive profile.",
      "url": "https://brain.cognifit.com/IQ-test#how-it-works"
    }
  ]
}
</script>

<!-- JSON-LD FAQPage (mantém em sincronia com as 7 perguntas de prompt 12) -->
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

<!-- JSON-LD BreadcrumbList -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "CogniFit", "item": "https://www.cognifit.com" },
    { "@type": "ListItem", "position": 2, "name": "Assessments", "item": "https://www.cognifit.com/assessments" },
    { "@type": "ListItem", "position": 3, "name": "IQbe IQ Test", "item": "https://brain.cognifit.com/IQ-test" }
  ]
}
</script>

═══════════════════════════════════════
GTM / ANALYTICS (opcional, mas recomendado)
═══════════════════════════════════════

<!-- Google Tag Manager -->
<script>
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');
</script>

═══════════════════════════════════════
NOTAS DE PERFORMANCE
═══════════════════════════════════════

- Substitui "GTM-XXXXXXX" pelo ID real.
- A imagem OG (`/og/iqbe-1200x630.jpg`) deve existir; aceitar 1200x630 PNG/JPG <300KB.
- Para LCP: o hero <h1> deve ser o primeiro paint significativo. Garante font-display: swap.
- Schemas a validar com Google Rich Results Test antes de publish.
- Adicionar `<link rel="preload" as="image" href="..." fetchpriority="high">` para o LCP image se hero tiver foto/3D rendered.
```

## Notas Webflow

- Cola o bloco completo no campo "Inside <head> tag" da página.
- Os scripts JSON-LD podem ir todos juntos no head, ou no Footer Code (Google aceita ambos).
- O master é EN. As linhas hreflang/og:locale:alternate para PT/ES estão comentadas; descomenta apenas se publicares essas variantes em páginas separadas no domínio.
- O Title Tag e Meta Description já vão ser geridos pelo Webflow Page Settings — repetir aqui é opcional mas seguro.
- Verifica em https://search.google.com/test/rich-results e https://validator.schema.org/ antes de publicar.
