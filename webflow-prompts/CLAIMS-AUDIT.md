# CLAIMS AUDIT — IQbe Webflow Prompts

> Auditoria de **todas as afirmações** com risco de defensibilidade (números, percentagens, correlações, ratings, superlativos). Para cada claim, status, fonte requerida e replacement sugerido. Usa este doc como referência antes de aprovar copy → live, ou para conversas internas com produto/legal.

**Legenda:**
- ✅ **DEFENSIBLE** — factual, descritivo ou alinhado com convenção psicométrica reconhecida.
- ⚠ **VERIFY** — pode ser correcto mas precisa de confirmar com fonte interna (paper, dataset audit, internal docs).
- ❌ **UNJUSTIFIABLE** — overclaim, falso ou legalmente exposto. **Remover ou reescrever** antes de live.

---

## 02 — Hero

| # | Claim | Local | Status | Acção / Fonte |
|---|---|---|---|---|
| 2.1 | "CogniFit QI Assessment" | Eyebrow | ✅ | Nome próprio do produto |
| 2.2 | "The Ultimate Intelligence Test." | H1 | ⚠ | Marketing claim. "Ultimate" é superlativo; usar com confiança apenas se for posicionamento aprovado pela marca |
| 2.3 | "premium IQ test" | Subheadline `<strong>` | ⚠ | "Premium" implica pricing/positioning superior; alinhar com a estratégia comercial (preço €49,99 já existe no schema) |
| 2.4 | "brain test mental" | Subheadline `<strong>` | ❌ | EN gramaticalmente quebrado. **Substituir por `brain assessment`** (mantém SEO equivalente: "brain", "assessment") |
| 2.5 | "cognitive health" | Subheadline `<strong>` | ✅ | Conceito psicométrico aceite |
| 2.6 | "scientifically validated platform" | Subheadline | ⚠ | Defensível APENAS se houver paper publicado/whitepaper acessível. Ver 09 Validity & Reliability |
| 2.7 | "100% Online & Secure" | Reassurance | ✅ | Factual. "Online" defensável; "Secure" defensável se houver TLS + RGPD compliance |
| 2.8 | "Scientifically Validated" | Reassurance | ⚠ | Mesmo issue que 2.6 — depende de paper |
| 2.9 | ~~"37,505+ Datasets"~~ | Trust strip | ❌ **REMOVIDO** | Já tirado nesta versão. Não reintroduzir sem audit do dataset |
| 2.10 | "Raven's Matrices Based" | Trust strip | ✅ | Factual, descritivo. O test baseia-se em Raven's SPM (paradigma público) |

---

## 03 — Why IQbe Is Different

Comparação de 5 linhas (Static 2D vs Interactive 3D, Passive recognition vs Active manipulation, etc.) — **todas ✅ defensíveis** porque são descrições factuais de paradigmas (Raven 2D vs IQbe 3D).

### ⚠ ANTI-PATTERN: Stats block "5 / 3D / 0"
A IA do Figma Make tem tendência a gerar um stats block após o CTA "Experience the difference →" com:
- "**5** Cognitive Dimensions" — ⚠ **CONFLITO**: prompt 06 diz 4 dimensões. Decidir 4 ou 5 com whitepaper, alinhar ambos os sítios.
- "**3D** Interactive Challenges" — ✅ ok (descritivo do cubo).
- "**0** Cultural Bias" — ❌ **FALSO** e expostíço. Substituir por "**Low** Cultural Bias" ou remover o stat.

**REGRA**: Se o stats block aparecer, ou (a) o usas com claims auditados, ou (b) eliminas e ficas só com a comparação. Não publicar com "0 Cultural Bias" — overclaim documentado.

---

## 04 — What Is the IQbe Intelligence Test?

| # | Claim | Status | Acção |
|---|---|---|---|
| 4.1 | "digital, non-verbal IQ test designed to estimate fluid intelligence" | ✅ | Descritivo |
| 4.2 | "Inspired by Raven's Progressive Matrices" | ✅ | Factual, paradigma público |
| 4.3 | "Fluid intelligence" feature | ✅ | Conceito psicométrico |
| 4.4 | "Non-verbal by design" | ✅ | Descritivo |
| 4.5 | "Low cultural bias" | ✅ | Defensível como atributo do paradigma Raven |
| 4.6 | "Interactive and manipulative" | ✅ | Descritivo |
| 4.7 | "Digitally native" | ✅ | Descritivo |
| 4.8 | "Beyond pattern recognition" | ✅ | Marketing claim defensável |
| 4.9 | Quote: "IQbe measures not just whether you can see a pattern, but whether you can mentally manage and solve it." | ⚠ | Verificar se é citação oficial CogniFit ou frase gerada por IA. Se IA-only, remover aspas e usar como tagline editorial sem atribuição. |

---

## 05 — How the IQ Test Works

| # | Claim | Status |
|---|---|---|
| 5.1 | "Register & Start" / "Solve the 3D Puzzles" / "Get Your IQ Score" | ✅ Descritivo do flow |
| 5.2 | "detailed PDF report of your IQ intelligence and cognitive profile" | ⚠ Confirmar que o produto **realmente** entrega PDF detalhado (não só on-screen) |

---

## 06 — Cognitive Skills

⚠ **Discrepância numérica**: Esta secção lista **4** skills (Spatial Perception, Working Memory, Planning & Execution, Abstract Reasoning), mas o anti-pattern stats block (ver 03) anuncia **5 Cognitive Dimensions**. Conflito visível na mesma página.

**Resolução**: alinhar com whitepaper. Opções:
- Manter 4 → corrigir stats block para "4 Cognitive Dimensions".
- Adicionar 5ª (provável: "Fluid Intelligence" como dimensão umbrella) → manter "5 Cognitive Dimensions" e re-organizar 06.

Cada skill em si é ✅ defensável (são construtos psicométricos clássicos).

---

## 07 — Real-World Data ⚠ TODA A SECÇÃO PRECISA DE AUDIT

| # | Claim | Status | Fonte Requerida |
|---|---|---|---|
| 7.1 | "37,505 participants" | ⚠ | Dataset audit interno com timestamp e IP/anonymisation |
| 7.2 | "ages 16–90" | ⚠ | Dataset audit |
| 7.3 | "average IQ 102.43" | ⚠ | Dataset audit (com método de cálculo) |
| 7.4 | "median IQ 100" | ⚠ | Dataset audit |
| 7.5 | "score range 40–160" | ⚠ | Dataset audit |
| 7.6 | Distribution % (40–55 to 145–160, 8 bins) | ⚠ | Dataset audit |
| 7.7 | "collected over the last two years" | ⚠ | Confirm date window |

**SE não houver dataset audit acessível** → **REMOVER A SECÇÃO INTEIRA**. Substituir por bloco editorial (sem números) sobre metodologia. Não usar "approximately" / "estimated".

---

## 08 — Score Meaning

5 score bands (Below 85 / 85-100 / 100-115 / 115-130 / 130+) — ✅ **DEFENSIBLE**. Estas faixas seguem convenção psicométrica reconhecida (Wechsler scale, normalmente: SD 15, M 100). Ver: APA standards.

---

## 09 — Validity & Reliability ⚠ TODA A SECÇÃO PRECISA DE AUDIT

| # | Claim | Status | Fonte Requerida |
|---|---|---|---|
| 9.1 | "validated against Raven's Standard Progressive Matrices" | ⚠ | Estudo interno + paper |
| 9.2 | "r = 0.613" | ⚠ | Paper / whitepaper com metodologia |
| 9.3 | "p < .001" | ⚠ | Paper / whitepaper |
| 9.4 | "Test-retest reliability 0.71" | ⚠ | Paper / whitepaper |
| 9.5 | "Cronbach's alpha 0.775" | ⚠ | Paper / whitepaper |
| 9.6 | "concurrent validity confirmed" | ⚠ | Paper / whitepaper |

**SE o whitepaper / paper não estiver acessível ao público** (com DOI ou link interno), os números individuais NÃO podem aparecer. Pode-se manter a secção com texto qualitativo ("validated against Raven's framework — see methodology") e remover os números.

---

## 10 — Why It Matters

3 marketing benefits (More dynamic, More engaging, Closer to real-world) — ✅ **DEFENSIBLE** como diferenciadores qualitativos.

---

## 11 — Who Is It For

| # | Audiência | Status | Acção |
|---|---|---|---|
| 11.1 | Adults | ✅ | Generalist, defensível |
| 11.2 | "Children & Teens (13+)" | ⚠ | Confirmar idade mínima oficial. CogniFit em outros produtos usa 7+; IQbe pode ser diferente. Verificar com produto/legal |
| 11.3 | Seniors | ✅ | Generalist |
| 11.4 | "Health Professionals" | ⚠ | Confirmar se há use case clínico aprovado / certificação CE-MDR ou FDA. Caso contrário, suavizar para "Researchers" |
| 11.5 | "Researchers & Schools" | ✅ | Defensível para uso académico/educacional |

---

## 12 — FAQ

| # | Claim em resposta | Status |
|---|---|---|
| 12.1 | "validated against Raven's Standard Progressive Matrices and showed a significant positive correlation" | ⚠ Mesmo issue de 09 |
| 12.2 | "Cognitive intelligence test rather than a clinical psychiatric mental health test" | ✅ Distinção correcta e útil legalmente |
| 12.3 | "completed online in minutes" | ⚠ Confirmar duração real (5? 10? 30 minutos?). Original prompt diz "10 minutes" mas o doc técnico diz "20s a 15 min" — alinhar |
| 12.4 | "completely non-verbal intelligence test... universally understood regardless of native language" | ✅ Defensível |
| 12.5 | "works flawlessly on desktop, tablet, and smartphone" | ⚠ "Flawlessly" é superlativo; substituir por "across desktop, tablet, and smartphone" |

---

## 13 — Final CTA

| # | Claim | Status |
|---|---|---|
| 13.1 | "Fast online assessment" | ✅ Descritivo (se "in minutes" estiver alinhado) |
| 13.2 | "Non-verbal" | ✅ |
| 13.3 | "Scientifically grounded" | ⚠ Defensível APENAS se 09 Validity & Reliability tiver suporte público |

---

## 14 — Footer

| # | Claim | Status | Acção |
|---|---|---|---|
| 14.1 | "leading digital cognitive assessment and training platform" | ⚠ | "Leading" precisa de fonte (market share study, ranking, awards). Caso contrário, usar "established" ou "comprehensive" |
| 14.2 | "helping millions worldwide" | ⚠ | Confirmar nº real de utilizadores. Se < 10M, substituir por "trusted by users in [X] countries" ou número específico ("trusted by 5M+ users") |
| 14.3 | App Store ID 317315169 | ✅ | Verificável publicamente |
| 14.4 | Google Play `com.cognifit.app` | ✅ | Verificável publicamente |
| 14.5 | "© 2026" | ✅ | Date |

---

## 15 — SEO Head

| # | Claim em meta | Status | Acção |
|---|---|---|---|
| 15.1 | Title: "CogniFit QI Assessment: Premium IQ Test & Cognitive Evaluation" | ⚠ | "Premium" — alinhar com 2.3 |
| 15.2 | Meta description: "**the most accurate** online IQ test" | ❌ | "Most accurate" é superlativo não substanciado. **Substituir por "**a scientifically grounded** online IQ test"** ou similar |
| 15.3 | aggregateRating 4.8 / 37505 reviews | ❌ **REMOVIDO** | Já tirado |
| 15.4 | featureList — "Validated against Raven (r = 0.613, p < .001)" | ❌ **REMOVIDO** | Já tirado, depende de 09 audit |

---

## Resumo executivo (para o chefe)

**Para fazer hoje (riscos altos):**
1. ❌ Remover "**0 Cultural Bias**" do stats block (overclaim psicométrico).
2. ❌ Trocar meta description "**most accurate**" → "scientifically grounded".
3. ❌ Trocar "**brain test mental**" → "**brain assessment**" no Hero (EN gramaticalmente quebrado).
4. ⚠ Decidir **4 ou 5 dimensões cognitivas** com whitepaper.
5. ⚠ Decidir **duração do test** (alinhar Hero/FAQ/CTA: "in minutes" vs "10 min" vs "20s-15min").

**Para validar com produto/ciência:**
1. Auditar dataset 37,505 participantes (07).
2. Localizar paper/whitepaper das estatísticas r/p/alpha (09).
3. Confirmar idade mínima oficial (11.2 — Children & Teens 13+).
4. Confirmar use case clínico (11.4 — Health Professionals).

**Para validar com marca/legal:**
1. "Premium" position aprovado? (2.3, 15.1)
2. "Leading platform" suportável? (14.1)
3. "Helping millions" — quantos exactamente? (14.2)
4. "Ultimate Intelligence Test" — H1 aprovado pela marca? (2.2)

**Já cumprido nesta versão dos prompts:**
- Trust strip do Hero limpo de claims não auditados.
- SEO schema sem aggregateRating fake.
- Validity/Reliability com JUSTIFIABILITY NOTICE bem visível.
- Real-World Data com NOTICE pedindo audit antes de publish.
