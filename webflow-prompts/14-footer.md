# 14 — Footer (CogniFit Mega Footer)

> Replica `Footer` (Layout.tsx). Footer dark navy CogniFit completo: top banner com mini-CTA, 4 colunas (logo+app stores · Brain Training · Assessments · For Professionals + Follow Us), mega footer 5 colunas (Brain Science · Research · Brain Games x2 · Tools), disclaimer e bottom bar.

## Prompt completo

```
Cria o FOOTER global do IQbe — réplica do mega-footer da CogniFit, em fundo dark navy com glows azuis subtis.

LAYOUT GERAL
- <footer role="contentinfo">.
- Background #0A102E (cor sólida).
- Padding-top 48-80px desktop, padding-bottom 40px.
- border-top 1px rgba(0,102,255,0.20).
- position relative, overflow hidden, z-index 10.

DECORAÇÃO AMBIENT (z 0)
- Blob superior esquerdo: top 0 left 25%, 500x500px, bg rgba(0,102,255,0.10), rounded full, blur 120px, pointer-events none.

CONTAINER (max-width 1200px centered, padding 24px, position relative z-10)

═══════════════════════════════════════
TOP BANNER — "Want to keep improving your memory?" 
═══════════════════════════════════════

mb 48-64px, padding 24-48px, rounded 16px.
Background: linear-gradient(90deg, rgba(0,102,255,0.20), transparent).
Border 1px rgba(0,102,255,0.30).
Flex column md:row, items-center, justify-between, gap 24-32px.

ESQUERDA (max-width 36rem):
- H3: 24-30px font-bold #FFFFFF mb 12px.
  "Want to keep improving your memory?"
- Body: 15px line-height 1.6 #CBD5E1 (slate-300).
  "Once you receive your IQ intelligence score, discover how CogniFit's personalized brain training can help you stimulate your cognitive abilities, memory, and executive function."

DIREITA (CTA button):
- Pill, padding 14px 32px, bg #0066FF (sólido), hover #0055DD, fonte 15px weight 700 #FFFFFF.
- Hover: -translateY 2px, shadow xl.
- Texto: "Visit CogniFit.com"
- href: https://www.cognifit.com/ target=_blank rel=noopener.

═══════════════════════════════════════
MAIN FOOTER GRID (4 colunas estilo CogniFit)
═══════════════════════════════════════

Grid 1 col mobile / md 12 cols, gap-y 40px gap-x 32px, mb 64px.

COLUNA 1 (md col-span 4, padding-right 0/32px) — LOGO + DESCRIPTION + APP STORES
- Logo CogniFit (cognifit_-_Logo_Branco-01.svg) 32px height, brightness 0 invert (forçar branco), mb 24px.
- Description: 14px line-height 1.6 #94A3B8 (slate-400), max-width 280px, mb 32px:
  "CogniFit is a leading digital cognitive assessment and training platform, helping millions worldwide understand and stimulate their cognitive abilities."

- App store badges (flex column sm:row, gap 12px):
  · App Store badge: 144x44 pill, bg rgba(0,0,0,0.40), border 1px rgba(255,255,255,0.20), rounded 8px, hover bg rgba(0,0,0,0.60) e border rgba(255,255,255,0.40).
    Conteúdo: SVG Apple logo 20px white + "Download on the / App Store" (9px / 13px bold).
    href: https://apps.apple.com/app/cognifit-brain-fitness/id317315169
  · Google Play badge: idem.
    Conteúdo: SVG Play triangle 20px white + "GET IT ON / Google Play" (9px / 13px bold).
    href: https://play.google.com/store/apps/details?id=com.cognifit.app

COLUNA 2 (md col-start 6 col-span 2) — BRAIN TRAINING
- H4: "Brain Training" 15px bold #FFFFFF tracking-wide mb 20px.
- <ul> space-y 14px, 14px #94A3B8 hover #FFFFFF.
- Links (todos target=_blank rel=noopener):
  · Brain Games — /brain-games
  · Brain Training — /brain-training
  · Reading Test — /reading-test
  · Driving Test — /driving-test
  · Mindfulness — /mindfulness

COLUNA 3 (md col-span 2) — ASSESSMENTS
- H4: "Assessments"
- Links:
  · IQbe Test — /iq-test-iqbe (currentPage marker: aria-current="page", color #FFFFFF font-medium)
  · CAB™ Assessment — /cognitive-assessment/cab
  · ADHD Test — /adhd-test
  · Dyslexia Test — /dyslexia-test

COLUNA 4 (md col-span 3) — FOR PROFESSIONALS + FOLLOW US
- H4: "For Professionals" mb 20px.
- Links:
  · Healthcare Professionals — /medical-platform
  · Scientific Research — /cognitive-research-tool
  · Education Professionals — /educational-technology
  · Employee Wellbeing — /employee-wellbeing
  · Clinical Trials — /clinical-trials
  · Commercial Partnerships — /commercial-partnerships
  · Sports & Athletes — /sports

- H4: "Follow Us" mt 32px mb 16px.
- Social icons row (gap 16px). Cada ícone 36x36 rounded full, bg rgba(255,255,255,0.05), border 1px rgba(255,255,255,0.10), color #94A3B8.
- Hover: text white + border + bg colour brand.
  · Facebook — hover bg #0066FF
  · Twitter/X — hover bg #00A3FF
  · Instagram — hover bg #E1306C
  · LinkedIn — hover bg #0077B5
  · YouTube — hover bg #FF0000
- Cada ícone 16x16 (Phosphor / Lucide). Cada link target=_blank rel=noopener aria-label "CogniFit on [platform]".

═══════════════════════════════════════
MEGA FOOTER (5 colunas, border-top 1px rgba(255,255,255,0.10), pt 64px mt 64px)
═══════════════════════════════════════

Grid 2 cols mobile / 3 cols tablet / 5 cols desktop, gap 32px.
Cada coluna: H4 15px bold #FFFFFF mb 24px + <ul> space-y 12px de links 13px #94A3B8 hover #FFFFFF.

COLUNA 1 — Brain Science (15 links)
- The Human Brain — /brain
- Brain and Mind — /brain-mind
- Parts of the Brain — /parts-of-the-brain
- Neurons — /neurons
- Brain Plasticity — /brain-plasticity
- Brain Fitness — /brain-fitness
- Cognition — /cognition
- Memory Loss — /memory-loss
- Intellectual Disabilities — /intellectual-disability
- Brain Functions — /brain-functions
- Executive Functions — /executive-functions
- Coordination — /coordination
- Memory — /memory
- Perception — /perception
- Attention — /attention

COLUNA 2 — Research (10 links — todos para /research)
- Digital Therapeutics Validation
- Computer Games
- Healthy Older Adults Trial
- Navy Pilots
- Senior Wellness
- Healthy Seniors
- Senior Cognitive Training
- Cognitive state in adults
- Systematic review
- SG4D taxonomy

COLUNA 3 — Brain Games (parte 1, 22 jogos — todos para /brain-games)
- Chess Online · Mini Crossword · Fruit Frenzy · Pipe Panic · Crystal Miner · Solitaire · Robo Factory · Ant Escape · Treasure Island · Neon Lights · Drive me crazy · Visual Crossword · Match it! · Space Rescue · Math Madness · Marble Race · Melodic Tennis · Scrambled · Find Your Pet · Melody Mayhem · Color Rush · 3D Art Puzzle

COLUNA 4 — Brain Games (parte 2, 22 jogos — empty header alinhamento, padding-top md 44px)
- Happy Hopper · Candy Line Up · Puzzles · Penguin Explorer · Digits · Color Bee · Bee Balloon · Crossroads · Cube Foundry · Fresh Squeeze · Jigsaw · Fuel a Car · Math Twins · Minus Malus · Mouse Challenge · Perfect Tension · Slice and Drop · Twist It · Water Lilies · Reaction Field · Words Birds · See More Games...

COLUNA 5 — Tools (24 links — todos para /)
- For Families · For Clinicians · For Researchers · Education · Patent · MindFit® · Babybright® · Resellers · Exercises for Children · Cognitive Development · Brain Exercise · Individualized Training System · Mind Quiz · Cognitive Stimulation Therapy · Mind Exercises · Personalized Brain Training · Brain Games · Mental Exercise · Online Memory Games · Cool Math Games · Reading Comprehension · Gifted Children · Brain Battles · IQ Test

═══════════════════════════════════════
DISCLAIMER (border-top 1px rgba(255,255,255,0.10), pt 40px pb 40px, mt 40px)
═══════════════════════════════════════

Texto justificado, italic, 11px line-height 1.6, color #64748B (slate-500), max-width 100%:

"* Every CogniFit cognitive assessment is intended as an aid for assessing cognitive wellbeing of an individual. In a clinical setting, the CogniFit results (when interpreted by a qualified healthcare provider), may be used as an aid in determining whether further cognitive evaluation is needed. CogniFit's brain trainings are designed to promote/encourage the general state of cognitive health. CogniFit does not offer any medical diagnosis or treatment of any medical disease or condition. CogniFit products may also be used for research purposes for any range of cognitive related assessments. If used for research purposes, all use of the product must be in compliance with appropriate human subjects' procedures as they exist within the researchers' institution and will be the researcher's obligation. All such human subject protections shall be under the provisions of all applicable sections of the Code of Federal Regulations."

═══════════════════════════════════════
BOTTOM BAR (border-top 1px rgba(255,255,255,0.10), pt 24px pb 16px)
═══════════════════════════════════════

Flex column md:row, justify-between items-center, gap 24px, 12px text #94A3B8.

ESQUERDA (flex wrap gap 12-20px, justify-center md:start):
- "Terms of Service" — /terms-and-conditions
- "Privacy Policy" — /privacy-policy
- "Management Team" — /management-team
- "CogniFit Newsroom" — /newsroom
- "Media Kit" — /media-kit
- "Become an Affiliate" — /affiliates
- "Become a Reseller" — /resellers
- "Contact us" — /contact
- "Help" — https://support.cognifit.com/

DIREITA:
- "CogniFit Inc © 2026" — 12px medium #FFFFFF/90.

═══════════════════════════════════════
SCROLL-TO-TOP BUTTON (fixed)
═══════════════════════════════════════

- Position fixed bottom 32px right 32px, z 90.
- 48x48 rounded full bg rgba(255,255,255,0.10) backdrop-blur-md border 1px rgba(255,255,255,0.20).
- Color #FFFFFF.
- Mostrar quando scrollY > 500px com transition 300ms (opacity 0→1, translateY 40→0).
- Hover: bg #FFFFFF, color #0A102E, -translateY 4px.
- Ícone ArrowUp 20px.
- aria-label "Scroll to top".

ANIMAÇÕES
- Footer entra com simple FadeIn ao chegar.
- Hover dos social icons: 200ms colour swap.
- Hover dos links: 200ms colour swap.
- Scroll-to-top: opacity + translate transition.

ACESSIBILIDADE
- <footer role="contentinfo">.
- Cada coluna em <nav aria-label="Brain Training links">, etc.
- aria-label nos social icons descritivo.
- Disclaimer em <p class="disclaimer"> sem necessidade de aria adicional.
- Skip-to-content target já no header (não duplicar).

SEO
- JSON-LD Organization no <head> (ver prompt 15) com sameAs apontando para todos os perfis sociais e address (PostalAddress).
- Sitelinks search box schema (em prompt 15).
- hreflang tags (en/es/pt) já no <head>.
- Footer rico em links internos = boa distribuição de PageRank.
- Cada link com `rel="noopener"` quando `target="_blank"`. Para links internos `noopener` opcional.
```

## Notas Webflow

- Footer altíssimo em densidade de links — usar Webflow Symbol para reuse global noutras páginas.
- App Store / Google Play badges: SVGs inline para evitar 2 requests extra.
- Mega footer: 5 colunas exigem grid responsivo cuidado. Considerar collapse para 2 colunas em <768px.
- Scroll-to-top: Webflow Page Trigger Scroll → mostrar quando scroll > 500px.
- Cada link interno deve ter `target="_blank"` para os domínios externos (cognifit.com, app stores).
