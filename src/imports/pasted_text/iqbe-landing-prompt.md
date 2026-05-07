# IQbe Landing Page — Figma Make Design Prompt

> **Target URL:** brain.cognifit.com/IQ-test
> **Reference style:** brain.cognifit.com/longevity/
> **Format:** Full-page responsive landing page (Desktop 1440px / Tablet 768px / Mobile 375px)

-----

## GLOBAL DESIGN SYSTEM

### Visual DNA (Inherited from CogniFit Longevity Page)

**Color palette:**

- Background: Deep navy/dark (#0A0E27) with subtle radial gradient overlays
- Primary accent: Electric blue (#00B4FF → #0066FF gradient)
- Secondary accent: Vibrant teal (#00D4AA)
- Tertiary: Soft violet (#7B61FF) for highlights and data viz
- Text primary: White (#FFFFFF) at 95% opacity
- Text secondary: Slate blue-gray (#8B95B5) at 70% opacity
- Surface cards: Semi-transparent frosted glass (#FFFFFF at 4–6% opacity, with 1px border at 8% white, backdrop-blur: 20px)
- CTA gradient: Linear from #00B4FF to #0066FF (135deg), with hover glow halo
- Alert/stat accent: Warm gold (#FFB800) for key numbers

**Typography:**

- Display/H1: Bold, 56–64px, tight tracking (−0.02em), white — use a clean geometric sans (the longevity page uses a modern sans-serif in the family of DM Sans / Outfit / Satoshi)
- H2 section titles: Semibold, 40–44px, white
- H3 card titles: Semibold, 20–22px, white
- Body: Regular, 16–17px, line-height 1.65, secondary text color
- Microcopy/trust text: Regular, 13–14px, muted blue-gray
- Stats/numbers: Bold or Extra-bold, 48–56px, accent gradient text (blue-to-teal)

**Component patterns:**

- Glass-morphism cards with subtle inner glow on hover
- Icon cards with 48px icon + title + short description
- Stat cards: Large number on top, small label below, thin accent line at top
- Section dividers: Subtle horizontal gradient lines (blue → transparent → blue)
- Buttons: Rounded-full (pill shape, border-radius 999px), gradient fill, white bold text, subtle drop-shadow, hover scale(1.03) + intensified glow
- Comparison tables: Dark surface with alternating row opacity, accent check marks
- Accordions: Clean chevron toggle, glass-card style, smooth reveal animation

**Spacing & layout:**

- Max content width: 1200px centered
- Section vertical padding: 100–120px
- Card grid gaps: 24–32px
- Generous whitespace between sections — let the dark background breathe

**Micro-animations (annotate for dev):**

- Fade-up on scroll (stagger children by 100ms)
- Number count-up animation on stat cards when in viewport
- Smooth accordion expand/collapse
- CTA button pulse glow on idle
- Trust bar logos: infinite horizontal scroll ticker with edge fade gradients

-----

## PAGE STRUCTURE — SECTION BY SECTION

-----

### SECTION 1 — HERO

**Layout:** Full viewport height. Content centered vertically. Two-column on desktop (text left, visual right). Single stack on mobile.

**Left column:**

**H1:** Test Your Real IQ Online

**Subtitle (body text, max 2 lines):**
Go beyond static IQ quizzes. IQbe measures reasoning, 3D thinking, and executive problem-solving in one fast, scientifically validated test.

**Primary CTA button (pill, gradient):**
Start My IQ Test →

**Trust microcopy (directly below CTA, 13px, muted):**
Online in minutes · Works on mobile, tablet, and desktop · Non-verbal and low cultural bias

**Trust bar (3 items, horizontal row with separator dots):**

- 37,505+ participants analyzed
- Based on Raven’s Progressive Matrices
- Validated digital IQ assessment

Each trust item: Small icon (shield, brain, checkmark) + text, 14px, muted color.

**Right column / visual:**
Product mockup of the 3D cube interaction on desktop screen + floating mobile device beside it. Small overlay label chips on the mockup:

- “3D reasoning”
- “Executive function”
- “Fluid intelligence”

Labels styled as small frosted-glass pills with accent border.

**Background treatment:** Hero gets a large radial blue glow (centered behind the mockup) fading into the dark background. Optional: subtle floating geometric particles or grid dots.

-----

### SECTION 2 — WHY IQbe IS DIFFERENT

**Layout:** Section title centered, intro text centered (max 680px), then a comparison table below.

**Section title (H2):** Why IQbe Is Different from Traditional IQ Tests

**Intro sentence (body):**
Most online IQ tests only check whether you can recognize a pattern. IQbe goes further — it measures how well you can manipulate information, plan your response, and solve visual problems under time pressure.

**Comparison table (2 columns):**

|Traditional IQ Tests          |IQbe                                        |
|------------------------------|--------------------------------------------|
|Static 2D patterns            |Interactive 3D cube challenges              |
|Passive recognition           |Active manipulation and decision-making     |
|Limited real-world resemblance|Closer to real-world cognitive demands      |
|Often text-heavy              |Non-verbal and low cultural bias            |
|Basic pattern matching        |Reasoning + visuospatial + executive demands|

Style: Dark glass-card surface. Left column text in muted color, right column in white with a small teal accent checkmark per row. Thin separator lines between rows at 6% opacity.

**Side-by-side illustration below the table:**
Left: flat 2D matrix grid (simplified, grayscale, opacity 40%)
Right: 3D cube puzzle (vibrant, accent-lit, full opacity)
Arrow or “→” gradient connector between them.

**Small CTA (text link with arrow):**
Try IQbe now →

-----

### SECTION 3 — WHAT IS IQbe

**Layout:** Section title left-aligned, body text in a max 720px column, bullet list below, then a highlighted quote box.

**Section title (H2):** What Is the IQbe Intelligence Test?

**Body paragraph:**
IQbe is a digital, non-verbal IQ test designed to estimate fluid intelligence through interactive 3D problem solving. Inspired by Raven’s Progressive Matrices, it does more than ask you to spot a pattern — it measures how you analyze, manipulate, and solve visual problems efficiently.

**Feature bullets (icon + text cards, 2-column grid):**

1. **Fluid intelligence** — Measures your ability to reason, detect patterns, and solve novel problems.
1. **Non-verbal by design** — No language knowledge needed to take the test.
1. **Low cultural bias** — Suitable for broad international audiences and varied educational backgrounds.
1. **Interactive and manipulative** — Users rotate a 3D cube to locate missing pieces and infer the correct solution.
1. **Digitally native** — Works online across desktop, tablet, and smartphone.
1. **Beyond pattern recognition** — Adds visuospatial and executive demands that make the task more dynamic and closer to real cognitive performance.

Each card: Glass surface, small 32px icon (brain, globe, cube, hand-touch, device, lightning), title in white bold, description in muted text.

**Highlighted quote box:**
Glass card with left accent border in gradient blue-to-teal.

> “IQbe measures not just whether you can see a pattern, but whether you can mentally manage and solve it.”

-----

### SECTION 4 — HOW THE IQ TEST WORKS

**Layout:** Section title centered, intro paragraph centered (max 680px), then a 4-step horizontal visual row, supporting line, and media placeholder.

**Section title (H2):** How the IQ Test Works

**Body paragraph:**
IQbe presents you with a 3D cube puzzle. Your goal is to rotate the cube, understand the visual relationships across its faces, identify the missing components, and choose the correct solution before time runs out.

**4-step visual row (horizontal on desktop, vertical stack on mobile):**
Each step: Numbered circle (accent gradient) + icon + label.

1. 🔄 Rotate the cube
1. 🔍 Detect the pattern
1. 🧩 Infer the missing piece
1. ✅ Choose the correct solution

Steps connected by a thin gradient line flowing left to right.

**Supporting text (below steps, centered, muted):**
This makes IQbe more engaging than static IQ quizzes and more reflective of real-world problem solving.

**Media placeholder:**
Rectangle placeholder for a 10–15 second muted loop GIF/video showing the cube rotating and a face being completed. Aspect ratio 16:9, rounded corners, subtle inner shadow. Label: “Cube interaction demo — video asset needed.”

-----

### SECTION 5 — WHAT IQbe MEASURES

**Layout:** Section title centered, intro centered, then 5 icon cards in a responsive grid (3+2 on desktop, 2+2+1 on tablet, 1-column on mobile).

**Section title (H2):** What IQbe Measures

**Intro (body, centered, max 640px):**
IQbe is primarily a test of fluid intelligence, but its 3D and manipulative format also places demands on cognitive processes that matter in real life.

**Icon cards:**

1. **Abstract reasoning** — Identify patterns and logical relationships.
   Icon: Interconnected nodes.
1. **Fluid intelligence** — Solve new problems without relying on learned knowledge.
   Icon: Lightbulb with spark.
1. **Visuospatial processing** — Understand shapes, rotations, and spatial structure.
   Icon: 3D cube wireframe.
1. **Executive problem-solving** — Plan and manage the steps needed to reach the correct answer.
   Icon: Checklist with brain.
1. **Working memory demands** — Hold and manipulate visual information while solving.
   Icon: Memory chip / circular arrows.

Card style: Glass surface, 48px accent-colored icon, white title, muted description. Hover: subtle lift + inner glow intensify.

-----

### SECTION 6 — REAL-WORLD DATA

**Layout:** Section title centered, intro paragraph, stat cards row, second paragraph, then a mini bar chart.

**Section title (H2):** Backed by Large-Scale Real-World Use

**Intro paragraph:**
IQbe is not only grounded in cognitive science — it is also supported by extensive real-world usage. In an internal dataset collected over the last two years, 37,505 participants completed the test.

**Stat cards row (5 cards, horizontal scroll on mobile):**

|Stat  |Label       |
|------|------------|
|37,505|participants|
|16–90 |age range   |
|102.43|average IQ  |
|100   |median IQ   |
|40–160|score range |

Card style: Large gradient number (48–56px bold), small label below (13px muted). Thin accent line at top of each card (gradient). Glass surface.

**Second paragraph:**
The score distribution is broad and interpretable, with most users clustering between 85 and 115 and meaningful differentiation across higher and lower score ranges.

**Mini bar chart (IQ score distribution):**

|Range  |Percentage|
|-------|----------|
|40–55  |0.68%     |
|55–70  |3.02%     |
|70–85  |11.52%    |
|85–100 |31.64%    |
|100–115|32.08%    |
|115–130|12.34%    |
|130–145|3.77%     |
|145–160|4.95%     |

Chart style: Horizontal or vertical bars with gradient fill (blue-to-teal). Dark background. Labels in muted text. The central bars (85–115) should visually dominate. Subtle grid lines at 5% opacity. Optional: overlaid normal distribution curve in thin white line at 20% opacity.

-----

### SECTION 7 — WHAT YOUR SCORE MEANS

**Layout:** Section title centered, intro, then 5 score band rows, then a note.

**Section title (H2):** What Your IQ Score Means

**Intro:**
IQ scores are interpreted relative to a reference population. IQbe uses a familiar scale where 100 represents the middle of the distribution.

**Score bands (styled as a horizontal scale or stacked cards):**

|Score   |Label                    |Visual intensity|
|--------|-------------------------|----------------|
|Below 85|Below average range      |Low opacity bar |
|85–100  |Average range, lower half|Medium opacity  |
|100–115 |Average range, upper half|Full accent     |
|115–130 |Above average range      |Strong accent   |
|130+    |High range               |Gold accent     |

Design as a visual gradient scale bar with labeled segments, or as stacked glass-cards with progressively intensifying left-border accent.

**Note (muted text, 14px):**
A score is not a complete portrait of a person’s abilities, but it can offer a useful snapshot of reasoning and problem-solving performance.

-----

### SECTION 8 — VALIDITY

**Layout:** Section title, summary intro, stat cards, then accordion for detailed methodology.

**Section title (H2):** Validity of the IQbe Test

**Summary intro:**
IQbe was validated against Raven’s Standard Progressive Matrices, one of the best-known non-verbal intelligence tests. In a lab study, IQbe scores showed a strong positive correlation with Raven-based IQ scores.

**Summary stat cards (3, horizontal row):**

|Label                              |Value    |
|-----------------------------------|---------|
|Concurrent validity                |✓        |
|Correlation with Raven-based scores|r = 0.613|
|Statistical significance           |p < .001 |

Card style: Glass card, accent icon/badge, large value, small label.

**Accordion:**
Title: “See validation study details”
Content: Keep existing detailed methodology text, lightly edited for readability. Subheadings, bold key numbers, shorter sentences.

-----

### SECTION 9 — RELIABILITY

**Layout:** Mirror Section 8 structure.

**Section title (H2):** Reliability of the IQbe Test

**Summary intro:**
Reliability indicates whether a test produces stable and internally consistent results. IQbe showed adequate test-retest stability and internal consistency.

**Summary stat cards (3):**

|Label                  |Value     |
|-----------------------|----------|
|Test-retest reliability|0.71      |
|Cronbach’s alpha       |0.775     |
|Assessment quality     |Reliable ✓|

**Accordions:**

1. “See test-retest details”
1. “See internal consistency details”

-----

### SECTION 10 — WHY IQbe MATTERS

**Layout:** Section title centered, body paragraph centered (max 680px), then 3 benefit cards.

**Section title (H2):** Why IQbe Matters Beyond Traditional IQ Tests

**Body:**
Real-world cognition is not only about spotting a rule on a flat page. It also involves holding information in mind, manipulating it, planning the next step, and responding efficiently. IQbe was designed to bring those demands closer to the testing experience through interactive 3D problem solving.

**3 benefit cards (horizontal row):**

1. **More dynamic** than static paper tests
   Icon: Lightning bolt
1. **More engaging** for digital users
   Icon: Touch/swipe gesture
1. **Closer to real-world** cognitive demands
   Icon: Globe with brain

Card style: Glass surface, centered icon (48px), title in white bold, description in muted.

-----

### SECTION 11 — WHO IS THIS FOR

**Layout:** Section title centered, then 5 audience cards in responsive grid.

**Section title (H2):** Who Is This IQ Test For?

**Audience cards:**

1. **Curious individuals** — See how your reasoning compares to a reference population.
   Icon: User with question mark
1. **Students** — Explore a fast snapshot of problem-solving performance.
   Icon: Graduation cap
1. **Professionals** — Assess abstract reasoning and mental flexibility.
   Icon: Briefcase
1. **Global users** — Non-verbal format with low cultural bias.
   Icon: Globe
1. **Mobile-first users** — Take it online from your phone, tablet, or desktop.
   Icon: Smartphone

Card style: Same glass-card pattern. Hover lift + glow. 2-column on tablet, 1-column on mobile.

-----

### SECTION 12 — FAQ

**Layout:** Section title centered, then accordion list (max 720px centered).

**Section title (H2):** Frequently Asked Questions

**FAQ entries (accordion items):**

**Q: What does IQbe measure?**
A: IQbe measures fluid intelligence through a non-verbal 3D reasoning task that also places demands on visuospatial processing and executive problem-solving.

**Q: Is IQbe scientifically validated?**
A: Yes. IQbe was validated against Raven’s Standard Progressive Matrices and showed a significant positive correlation with Raven-based scores.

**Q: How long does the test take?**
A: IQbe is designed to be completed online in minutes. Duration depends on your performance and how quickly you progress through difficulty levels.

**Q: Do I need to know English?**
A: No. It is a non-verbal test and does not depend on language knowledge.

**Q: Can I take the IQ test on my phone?**
A: Yes. IQbe is designed for desktop, tablet, and smartphone.

**Q: Is this better than a traditional IQ quiz?**
A: IQbe is different from many static online IQ quizzes because it combines reasoning with interactive 3D problem solving and executive demands.

Accordion style: Glass-card per item. Chevron icon rotates on open. Smooth height animation. Active item gets subtle accent left border.

**Dev note:** Implement FAQPage schema markup for all entries.

-----

### SECTION 13 — FINAL CTA

**Layout:** Full-width section with centered content, atmospheric background.

**Background:** Subtle blurred 3D cube geometry pattern, or large radial blue glow. High contrast for CTA visibility.

**Headline (H2):** Ready to Discover Your IQ?

**Subheadline (body):**
Take CogniFit’s interactive IQbe test and see how your reasoning compares to the reference population.

**Primary CTA button (pill, gradient, large):**
Start My IQ Test →

**Trust microcopy (below CTA):**
Fast online assessment · Non-verbal · Scientifically grounded

-----

## SEO & METADATA REQUIREMENTS

**Title tag:** IQ Test Online | Measure Your IQ with IQbe by CogniFit

**Meta description:** Measure your IQ with CogniFit’s IQbe — a scientifically validated, non-verbal 3D IQ test designed to assess fluid intelligence online in minutes.

**Target keyword phrases (use naturally, once each, in visible headings/intros):**

- IQ test online
- measure your IQ
- non-verbal IQ test
- fluid intelligence test
- scientifically validated IQ test
- 3D IQ test

**AI-optimized snippet sentence (place under hero or Section 3):**
IQbe is a digital, non-verbal IQ test based on Raven-inspired reasoning tasks, enhanced with interactive 3D problem solving to assess fluid intelligence online.

**Schema markup:** FAQPage, WebPage, Organization, BreadcrumbList, SoftwareApplication (if consistent with site schema strategy).

-----

## ASSETS NEEDED (ANNOTATION FOR DESIGN TEAM)

|#|Asset                   |Type           |Notes                                                                          |
|-|------------------------|---------------|-------------------------------------------------------------------------------|
|1|Hero product mockup     |Image/3D render|Cube interaction on desktop + mobile device                                    |
|2|2D vs 3D comparison     |Illustration   |Flat matrix grid vs 3D cube side-by-side                                       |
|3|How it works icons      |Icon set (4)   |Rotate, detect, infer, choose                                                  |
|4|What IQbe measures icons|Icon set (5)   |Abstract reasoning, fluid intelligence, visuospatial, executive, working memory|
|5|Score distribution chart|Data viz       |Bar chart from the data above                                                  |
|6|Cube interaction demo   |Video/GIF      |10–15s muted loop                                                              |
|7|Final CTA background    |Texture/pattern|Blurred cube geometry or abstract particles                                    |
|8|Audience segment icons  |Icon set (5)   |Individual, student, professional, globe, mobile                               |

-----

## COPY CONSISTENCY RULES (PRE-LAUNCH)

1. **Test duration:** Align on a single claim. The hero says “10 minutes” but the technical doc says “20 seconds to 15 minutes.” Recommendation: Use “Complete in minutes” as the neutral claim until product/analytics alignment is confirmed.
1. **Hyphenation:** Standardize on “non-verbal” (hyphenated) throughout.
1. **Raven’s reference:** Standardize on “Raven’s Standard Progressive Matrices” for scientific sections; “Raven’s Progressive Matrices” is acceptable in marketing copy.
1. **Primary naming:** Use “IQ test” as the public-facing primary term; “intelligence test” as secondary.
1. **Score range:** The technical doc cites estimated IQ range 55–145; the real-world data shows 40–160. Clarify with product team which applies to user-facing communication.

-----

## IMPLEMENTATION PRIORITY (PHASED ROLLOUT)

**Phase 1 — Conversion core:**
Hero, “Why IQbe is different,” “How it works,” Final CTA

**Phase 2 — Trust and SEO layer:**
Real-world data + chart, Score meaning, FAQ, Metadata + schema markup

**Phase 3 — Scientific credibility + media:**
Validity/reliability section redesign, All visual assets, Video/demo integration

-----

## RECOMMENDED SECTION ORDER

1. Hero
1. Why IQbe Is Different
1. What Is IQbe
1. How the IQ Test Works
1. What IQbe Measures
1. Backed by Large-Scale Real-World Use
1. What Your IQ Score Means
1. Validity
1. Reliability
1. Why IQbe Matters
1. Who Is This For
1. FAQ
1. Final CTA