# 11 — Who Is the IQbe Intelligence Test Aimed At?

> Replica `WhoIsFor` (ScienceSections.tsx). Bloco com fundo levemente azulado, 2 ambient orbs decorativos, section header + 5 audience cards em grid responsivo.

## Prompt completo

```
Cria a SECÇÃO "Who Is the IQbe Intelligence Test Aimed At?" — segmentação de audiências.

LAYOUT
- <section id="who-is-it-for" scroll-mt 96px>.
- max-width 1200px, padding 48-80px vertical, padding lateral 24px.
- Background: rgba(0,102,255,0.02), border-radius 48px (rounded-[3rem]).
- Margin top 32px, margin bottom 32px (separação visual).
- position relative, overflow hidden.

DECORAÇÃO AMBIENT (absolute, pointer-events none)

ORB 1 — top-right
- 500x500px, rounded full.
- background: linear-gradient(225deg, rgba(0,102,255,0.05), transparent).
- filter: blur 80px.

ORB 2 — bottom-left
- 500x500px, rounded full.
- background: linear-gradient(45deg, rgba(0,229,255,0.05), transparent).
- filter: blur 80px.

CONTENT (z-index 10, position relative)

SECTION HEADER
- H2: "Who Is the IQbe Intelligence Test Aimed At?"
- Subtitle (max 750px):
  "IQbe is designed to be highly accessible and deeply informative for both personal growth and professional cognitive screening."

GRID (mt 48px, max-width 1000px centered, grid 1/2/3 cols mobile/tablet/desktop, gap 24px)

5 cards. Cada um:
- Card hover false, padding 32px h-full.
- bg rgba(255,255,255,0.80) backdrop-blur-sm.
- border 1px rgba(0,102,255,0.10) → hover rgba(0,102,255,0.30) (transition 300ms).
- Hover: translateY -6px (spring 300).
- Group cursor-default.

Layout especial nos cards 4 e 5 (em desktop ≥1024px):
- Card 4 (i=3): col-start 1.
- Card 5 (i=4): col-start 2 col-span 2 (ocupa 2 colunas para preencher visualmente).

ÍCONE CONTAINER
- 48x48 (w-12 h-12), flex center, rounded 12px.
- background: linear-gradient(135deg, rgba(0,102,255,0.10), rgba(0,229,255,0.10)).
- color #0066FF, mb 20px.
- Group hover: scale 1.10 + rotate 6deg (300ms).
- Box-shadow: 0 4px 15px rgba(0,102,255,0.05).
- Ícone 24px (w-6 h-6).

H3 título Plus Jakarta Sans 700, 20px, #0A102E, mb 12px.
Description 15px weight 400 line-height 1.6 #4A5578.

OS 5 AUDIENCE CARDS:

1) Ícone User — "Adults"
   Desc: "Evaluate your IQ intelligence and discover your cognitive strengths with a scientifically validated intelligence test."

2) Ícone GraduationCap — "Children & Teens (13+)"
   Desc: "A great mental health test for families wanting to support and track fluid intelligence development across life stages."

3) Ícone CheckCircle2 — "Seniors"
   Desc: "A comprehensive brain test mental assessment to monitor cognitive health, executive function, and spatial perception as we age."

4) Ícone Briefcase — "Health Professionals"
   Desc: "Doctors, psychologists, and clinicians use this mental health test to reliably assess a patient's reasoning and executive problem-solving."

5) Ícone Globe — "Researchers & Schools"
   Desc: "Academic and educational institutions rely on this standardized intelligence test to gather bias-free, non-verbal data."

ANIMAÇÕES
- Section header: FadeIn.
- Cards: stagger delay i*0.1s.
- Hover ícone: scale + rotate.
- Cards lift no hover (spring).

ACESSIBILIDADE
- <section id="who-is-it-for" aria-labelledby="audience-title">.
- Cards como <article> com <h3>.
- Ícones aria-hidden="true".
- Background orbs com role="presentation" aria-hidden.

SEO
- H2 com keyword "intelligence test for [audience]".
- JSON-LD Audience structured data:
  "audience": [
    { "@type": "Audience", "audienceType": "Adults" },
    { "@type": "Audience", "audienceType": "Children & Teens" },
    { "@type": "Audience", "audienceType": "Seniors" },
    { "@type": "MedicalAudience", "audienceType": "Health Professionals" },
    { "@type": "EducationalAudience", "audienceType": "Researchers & Schools" }
  ]
- Cada card pode ser sub-página em PT (ex.: /IQ-test/para-profissionais-de-saude) com schema dedicado.
```

## Notas Webflow

- Background `rounded-[3rem]` = `border-radius: 48px;` no container exterior.
- Orbs: 2 divs `position: absolute` com gradient + blur.
- Layout especial dos cards 4-5: usar Webflow Custom Grid Layout com manual cell placement.
- Backdrop-blur: aceitar fallback para browsers antigos (sem blur).
