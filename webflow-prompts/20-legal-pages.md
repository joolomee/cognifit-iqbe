# 20 — Páginas legais (Terms · Privacy · Cookies · Imprint · Accessibility)

> 5 páginas obrigatórias para publicar legalmente em UE/UK/US/BR. Cada uma multilíngue (22 locales — ver prompt **16**), indexável, com schema.org `WebPage` + `LegalService`. Layout limpo, máxima legibilidade, sem CTAs distractores.

---

## A. Estrutura partilhada de página legal

```
URL pattern: /{locale?}/{slug}
Slugs:
  - /terms
  - /privacy
  - /cookies
  - /imprint           (obrigatório DE / AT / CH)
  - /accessibility     (recomendado, obrigatório UE EAA 2025)

Layout:
  · Header IQbe (mesmo do prompt 01) — sem CTAs comerciais agressivos.
  · Container central max-width 760px.
  · Breadcrumb: CogniFit › IQbe › {Page Title}
  · H1 grande (--fs-h2 do design system).
  · Last updated: <date> + selector de locale.
  · Sticky TOC à direita (desktop) com âncoras às H2/H3.
  · Conteúdo em prose: H2 secção, H3 sub-secção, body 16px line-height 1.7.
  · Footer (mesmo do prompt 14).

Schema:
  <script type="application/ld+json">
  {
    "@context":"https://schema.org",
    "@type":"WebPage",
    "name":"{Page Title}",
    "url":"{URL}",
    "inLanguage":"{locale}",
    "datePublished":"2026-01-15",
    "dateModified":"{ISO}",
    "publisher":{ "@type":"Organization","name":"CogniFit","url":"https://www.cognifit.com" },
    "isPartOf":{ "@type":"WebSite","name":"CogniFit IQbe","url":"https://brain.cognifit.com/IQ-test" }
  }
  </script>

SEO por página:
  - <title>: "{Page Title} — IQbe by CogniFit"
  - meta description: 1 frase específica.
  - <meta name="robots" content="index, follow">
  - Hreflang completo (22 locales — ver prompt 16).
  - canonical = URL do locale.

Acessibilidade:
  - Skip-link "Saltar para conteúdo".
  - H1 único, hierarquia respeitada.
  - Links com underline visível.
  - Contraste AAA em texto longo.
```

---

## B. Página `/terms` — Terms & Conditions (Termos e Condições)

> **Aviso legal:** o conteúdo abaixo é uma **estrutura/template** baseado em práticas standard. **Tem de ser revisto por um advogado** antes de publicação — varia por jurisdição (UE, UK, US, BR), por mercado (B2C vs healthcare-aware) e por integração com plataformas pagamento.

### Prompt para Webflow AI

```
Cria a página /terms da IQbe (CogniFit). Layout legal padrão (TOC sticky, prose 760px). Estrutura de secções (H2, com 2-4 parágrafos cada):

1. Acceptance of Terms
   - Quem opera o serviço (CogniFit Inc., morada legal).
   - Aceitação ao usar / criar conta.
   - Capacidade legal mínima (16+ na UE, 13+ nos EUA com COPPA, 18+ para compras).

2. Description of Service
   - IQbe é um assessment cognitivo digital — NÃO é diagnóstico médico.
   - Disclaimer clínico: "Not a medical device. Not a substitute for professional consultation."

3. User Account
   - Registo, password, responsabilidade do utilizador.
   - Suspensão / encerramento.

4. License & Restrictions
   - License limitada não-exclusiva, não-transferível.
   - Proibições: scraping, reverse engineering, partilha de credenciais, uso comercial não autorizado.

5. Payment & Refunds
   - Modelo: pagamento único / subscrição.
   - Preços disponíveis na página de checkout.
   - Política de reembolso: 14 dias (UE) com excepções para serviços digitais consumidos.

6. Intellectual Property
   - CogniFit detém marca, software, conteúdos.
   - Resultados do utilizador pertencem ao utilizador, mas CogniFit pode usar dados anonimizados para investigação (com consentimento).

7. User Conduct
   - Respeito por outros utilizadores.
   - Não interferir com o serviço.

8. Privacy
   - Pointer para /privacy.
   - HIPAA / GDPR / LGPD compliance summary.

9. Disclaimer of Warranties
   - "AS IS" — sem garantia de exactidão clínica para diagnóstico.
   - IQ score é estimativa, não diagnóstico.

10. Limitation of Liability
    - Cap legal (depende da jurisdição — usualmente o valor pago).

11. Indemnification
    - Utilizador indemniza CogniFit em caso de uso indevido.

12. Governing Law & Dispute Resolution
    - Lei aplicável: Delaware (US) ou Espanha (EU entity), conforme estrutura corporativa CogniFit.
    - Arbitragem (US) / tribunais competentes (UE).

13. Changes to Terms
    - Notificação 30 dias por email para alterações materiais.
    - Histórico de versões linkado.

14. Contact
    - Morada postal + email legal@cognifit.com.

Cada H2 deve ter ID anchor (ex. id="acceptance"). TOC sticky lista todas as 14 secções.

Footer da página: "Last updated: {ISO date}" + link "View previous versions" (modal com versões anteriores).
```

---

## C. Página `/privacy` — Privacy Policy

```
Cria a página /privacy da IQbe (CogniFit). Estrutura com base GDPR + LGPD + CCPA:

1. Introduction & Data Controller
   - CogniFit Inc. (US) e CogniFit S.L. (EU entity) como controllers.
   - DPO contact: dpo@cognifit.com.
   - EU Representative (Art. 27 GDPR): nome + morada.

2. Data We Collect
   Categorias:
   - Account data: email, password hash, name (opcional), country.
   - Assessment data: respostas, tempos de resposta, score IQ calculado, sessões parciais.
   - Usage data: device type, browser, IP (truncado após 30 dias), pages viewed, click events.
   - Cookies: ver /cookies.
   - Payment data: gerido por Stripe / outro processor; CogniFit recebe apenas confirmação + último 4 dígitos.
   - Comunicação: emails de support.

3. Legal Basis for Processing (GDPR Art. 6)
   - Contrato: provisão do serviço.
   - Consentimento: marketing, cookies não-essenciais, partilha com partners.
   - Interesse legítimo: melhoria do produto, security, fraud prevention.
   - Obrigação legal: fiscal, anti-money-laundering.

4. Special Category Data (Art. 9)
   - IQbe score: tratado como "health-related data inference" em algumas jurisdições.
   - Consentimento explícito recolhido no signup.

5. How We Use Your Data
   Lista bullet:
   - Provision do assessment + entrega do score.
   - Geração de PDF report.
   - Comunicação de service updates.
   - Estatísticas agregadas (ex. n=37,505 dataset) — sempre anonimizado.
   - Investigação científica (com consentimento opcional).
   - Marketing, com consentimento.

6. Data Sharing
   Categorias de recipientes:
   - Cloud infra: AWS, Cloudflare (DPA assinado).
   - Analytics: Google Analytics 4 (com Consent Mode v2 + IP anonymization).
   - Payment: Stripe.
   - Email: SendGrid / Mailgun.
   - Support: Zendesk / Intercom.
   - Lista completa de sub-processors em /privacy/sub-processors (link).

7. International Transfers
   - Maioria do processing em EU (Frankfurt) ou US (us-east-1).
   - Para US: SCCs (Standard Contractual Clauses) + DPF (Data Privacy Framework) onde aplicável.

8. Retention Periods
   Tabela:
   - Conta activa: durante a vigência da conta.
   - Conta inactiva: anonimização após 24 meses sem login.
   - Pagamento: 7 anos (obrigação fiscal).
   - Logs de segurança: 12 meses.
   - Cookies: ver /cookies.

9. Your Rights (GDPR Art. 15-22 / CCPA / LGPD)
   - Access, Rectification, Erasure ("right to be forgotten"), Restriction, Portability, Objection.
   - Withdraw consent.
   - Right to complain to a Supervisory Authority (lista para EU).
   - CCPA: Right to know, delete, opt-out of sale, non-discrimination.
   - LGPD: confirmação de existência, acesso, correcção, anonimização, portabilidade, eliminação, info sobre partilha, revogação.
   - Como exercer: privacy@cognifit.com ou formulário /privacy/request.
   - Resposta dentro de 30 dias.

10. Children's Privacy
    - Idade mínima: 13 (US, COPPA), 16 (UE — varia por estado-membro).
    - Para menores: consentimento parental verificável.

11. Security Measures
    - Encryption in transit (TLS 1.3) + at rest (AES-256).
    - SOC 2 / ISO 27001 (se aplicável — ajustar à realidade).
    - Penetration testing anual.
    - Bug bounty program.

12. Automated Decision-Making
    - O score IQ é calculado por algoritmo, mas não toma decisões legais ou de elegibilidade sobre o utilizador.
    - Right to human review se contestar o resultado.

13. California Specific Disclosures (CCPA / CPRA)
    - Categorias de PI recolhidos nos últimos 12 meses.
    - Categorias partilhadas/vendidas (idealmente "none sold").
    - "Do Not Sell or Share My PI" link → /privacy#dnsmpi.

14. Brazil Specific (LGPD)
    - Encarregado (DPO) Brazil contact.
    - Base legal por finalidade.

15. Changes to This Policy
    - Notificação 30 dias antes via email + banner in-app.

16. Contact
    - DPO: dpo@cognifit.com
    - General: privacy@cognifit.com
    - Postal: morada legal.

Schema adicional:
  <script type="application/ld+json">
  {
    "@context":"https://schema.org",
    "@type":"PrivacyPolicy",
    "name":"IQbe Privacy Policy",
    "url":"https://brain.cognifit.com/privacy",
    "datePublished":"2026-01-15",
    "dateModified":"{ISO}"
  }
  </script>
```

---

## D. Página `/cookies` — Cookie Policy

```
Cria /cookies. Estrutura:

1. What are cookies (definição neutra, 1 parágrafo).
2. How we use cookies (categorias do prompt 19 — Strictly necessary / Preferences / Statistics / Marketing).
3. Tabela exaustiva de cookies — usar widget Cookiebot CookieDeclaration:
   <script id="CookieDeclaration" src="https://consent.cookiebot.com/{CBID}/cd.js" async></script>
4. Third-party cookies (links: Google Analytics privacy, Stripe privacy, Meta Pixel, etc.).
5. How to manage cookies (browser settings + link "Cookie preferences" que dispara Cookiebot.renew()).
6. Updates to policy.
7. Contact.

Schema: WebPage + Last Updated visível.
```

---

## E. Página `/imprint` — Impressum (Alemanha + Áustria + Suíça)

```
Cria /imprint (visível APENAS em /de, /at, /ch caso existam). Cumprimento legal §5 TMG (Alemanha).

Conteúdo obrigatório:
- Razão social completa: CogniFit Inc.
- Morada postal completa.
- Representante legal: nome.
- Contacto: telefone + email.
- Registo comercial: número + tribunal.
- VAT-ID (USt-IdNr): se aplicável.
- Responsável editorial (§55 RStV): nome + morada.
- Plataforma de Resolução de Litígios da UE: link https://ec.europa.eu/consumers/odr/.
- Disclaimer de responsabilidade por links externos.

Layout: prose simples, sem decoração. <noindex> opcional (algumas legislações pedem que seja indexável).
```

---

## F. Página `/accessibility` — Accessibility Statement (EAA 2025)

```
Cria /accessibility — declaração de acessibilidade conforme European Accessibility Act 2025 + WCAG 2.2 AA.

Estrutura:
1. Compromisso (CogniFit compromete-se com WCAG 2.2 AA).
2. Conformidade actual: "Substantial conformance" — listar exceções conhecidas (ex. "InteractiveCube em hero não tem alternativa text-only equivalente; alternativa via /accessibility/cube-alt").
3. Funcionalidades de acessibilidade implementadas:
   · Navegação por teclado (Tab, Esc, arrows).
   · Screen reader friendly (ARIA labels, landmarks).
   · prefers-reduced-motion respeitado.
   · Contraste mínimo AA em todo o texto.
   · Focus visível.
   · Skip-link "Saltar para conteúdo".
4. Limitações conhecidas + workarounds.
5. Como reportar problemas: accessibility@cognifit.com.
6. Procedimento de enforcement (UE: pointer para autoridade nacional).
7. Data de avaliação + metodologia (auto + auditoria externa anual).
8. Compatibilidade testada: Chrome, Safari, Firefox, Edge + NVDA, JAWS, VoiceOver.

Schema: WebPage + AboutPage.
```

---

## G. Tradução & sincronização

- Master EN → tradução humana profissional para os 22 locales (preço estimado: legal-grade ~PT€0.20/palavra, ~10k palavras Terms+Privacy → PT€2k×22 ≈ PT€44k. Considerar Privacy/Terms só nos 5-7 mercados primários no MVP, restantes em EN com nota "English only — translation in progress").
- Sincronização: cada update legal → bump `dateModified` em todos os 22 simultaneamente. CI hook recomendado.
- Versioning: manter histórico em `/privacy/v/2026-01-15`, `/terms/v/2026-01-15`. Footer link "View history".

---

## H. SEO

- Páginas legais devem ser **indexáveis** (Google indexa-as e dá-lhes peso de E-E-A-T).
- Sem nofollow nos links internos.
- Sitemap inclui as 5 páginas (ver prompt 18) com `priority 0.3` e `changefreq yearly`.
- Hreflang completo nas 5 páginas (matriz prompt 16).

---

## I. Webflow — implementação

1. Criar 5 páginas: `/terms`, `/privacy`, `/cookies`, `/imprint`, `/accessibility`.
2. Symbol "Legal Page Layout" reutilizado: header (símbolo Navbar), container 760px, TOC sticky (Webflow Interactions: Position fixed when in viewport), prose styles, footer.
3. Cada página: Settings → SEO → Title, Description, OG image (genérico legal-banner.jpg).
4. Cada página: Custom Code → Inside `<head>` → cola hreflang completo (prompt 16 secção C).
5. Localization: traduzir cada página nos 22 locales OU manter EN-only com `<meta name="robots" content="index, follow">` e adicionar nota "English only — translation in progress" no topo.
6. CMS Collection "Legal Versions" com fields: title, slug, version, publishedDate, content (Rich Text). Permite histórico de versões via dynamic page `/{type}/v/{version}`.

---

## J. QA

- [ ] Lawyer review (jurisdição EU + US + BR).
- [ ] Lighthouse Accessibility ≥ 95 nas 5 páginas.
- [ ] Schema.org Validator passa em todas.
- [ ] WAVE 0 erros.
- [ ] Hreflang verificado em GSC.
- [ ] Links de "Cookie preferences" e "Withdraw consent" funcionam.
- [ ] Mobile: TOC vira accordion no topo (não sticky lateral).
