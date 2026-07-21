export const meta = {
  name: 'council-cato-record-libertarian-refine',
  description: 'Refine the Cato Record spec against a hardcore-libertarian adversarial panel and design an impact-capture layer',
  phases: [
    { title: 'Impact design', detail: 'design the impact-capture ledger before it is attacked' },
    { title: 'Libertarian attack', detail: '6 personas attack spec+impact from distinct hardcore-libertarian sub-frames (blind)' },
    { title: 'Cross-examination', detail: 'anonymized: refute weakest, escalate strongest, withdraw dead attacks' },
    { title: 'Chairman', detail: 'synthesize required changes, libertarian-defensibility ruling, impact integration, dry-check' },
  ],
}

const BASE = '/home/user/council-of-high-intelligence'
const SPEC = `${BASE}/demos/sessions/2026-07-17-cato-nextgen-thinktank/04-cato-record-spec-v0.2.md`
const REPORT = `${BASE}/demos/sessions/2026-07-17-cato-nextgen-thinktank/03-stress-test-report.md`

const READ_FIRST = `Before anything else, Read two files:
1. The live product spec under attack: ${SPEC}
2. The prior stress-test report (so you do NOT re-raise already-fixed findings): ${REPORT}
Treat the spec's v0.2 fixes and its listed "known-unexamined surfaces" as the current state. Your job is to find what is STILL wrong, from your frame — not to restate fixed items.`

// ---- The impact-capture design brief (the new feature the sponsor demanded) ----
const IMPACT_BRIEF = `${READ_FIRST}

You are ${'Andrej Karpathy'} — read your persona at ${BASE}/agents/council-karpathy.md and adopt it.

DESIGN TASK: the sponsor wants the Record extended to CAPTURE IMPACT across the full spectrum —
"from verbiage being included in a bill that passes, to retweets from influencers."
Design the **Impact Ledger**: a companion to the claim Record that traces Cato's real-world influence with the SAME falsifiability/honesty discipline the Record already enforces (external verification, misses as visible as hits, no vanity aggregate score).

Non-negotiable design constraints (a hardcore libertarian will attack anything that violates these):
- Every impact event must be **externally verifiable** from a public artifact: enacted/introduced bill text, committee hearing transcript, judicial opinion, agency rule docket, dated media item, or a public post. No self-asserted wins.
- **Attribution ladder, never collapsed:** CITED (documentary proof — the bill/opinion/article quotes or names Cato) > CONTRIBUTED (Cato demonstrably participated — testimony filed, coalition of record) > CLAIMED (asserted influence, no documentary proof — flagged as such and visually subordinate). Sole-causation claims are forbidden.
- **Statutory language capture:** specify concretely how you detect that Cato model language appears in bill text (text-similarity method, thresholds, false-positive handling, human confirmation step). This is the "verbiage in a bill" case.
- **Social/influencer layer:** tracked but explicitly the LOWEST evidentiary tier — deduplicated, bot/inauthentic-filtered, and never arithmetically combined with policy outcomes. Reach is not impact.
- **Symmetry:** ignored recommendations, rejected amici, bills that went the other way must be as visible as wins. An impact ledger that only shows wins is propaganda.
- Link each impact event back to the originating artifact and, where one exists, the claim card.
- No "impact score," ranking, or leaderboard — same guardrail as the Record.

Return: a complete, buildable spec section (markdown) for the Impact Ledger; the attribution ladder definition; the anti-vanity guardrails; and an honest list of the weaknesses YOU can already see a libertarian exploiting.`

const IMPACT_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['impactLedgerSpec', 'attributionLadder', 'antiVanityGuardrails', 'selfIdentifiedWeaknesses'],
  properties: {
    impactLedgerSpec: { type: 'string', description: 'Full markdown spec section for the Impact Ledger' },
    attributionLadder: { type: 'array', items: { type: 'string' } },
    antiVanityGuardrails: { type: 'array', items: { type: 'string' } },
    selfIdentifiedWeaknesses: { type: 'array', items: { type: 'string' } },
  },
}

// ---- Attacker frames ----
const ATTACKERS = [
  {
    persona: 'taleb', name: 'Nassim Taleb',
    frame: 'Skin-in-the-game & fragility',
    charge: `Attack from skin-in-the-game and fragility. The axiom exemption removes skin from the LOAD-BEARING product (the moral case) — scholars bet only where cheap. Is the Record/Impact Ledger a fragile central point that lawfare, a subpoena, or a hostile administration can weaponize? Are impact metrics without skin just vanity? Where does the Impact Ledger claim causation it cannot own (correlation, overdetermination)?`,
  },
  {
    persona: 'machiavelli', name: 'Niccolò Machiavelli',
    frame: 'Capture & weaponization',
    charge: `Attack from power and capture. How does a hostile administration, regulator, rival institution, or adversarial journalist turn the Record and the Impact Ledger AGAINST Cato? Does the Impact Ledger read as a self-published lobbying-influence dossier that opponents cite as proof Cato is an influence operation subject to disclosure/regulation? Who captures the scorekeeper?`,
  },
  {
    persona: 'munger', name: 'Charlie Munger',
    frame: 'Incentives & opportunity cost (skeptical libertarian donor)',
    charge: `Attack as the cold-eyed libertarian donor. Show me the incentive and I'll show you the outcome: where does this reward gaming (trivially-true wrong_if farming CONFIRMED cards, chasing legible impact)? Invert: how does building this make Cato WORSE at shrinking government? Is a scoreboard the best use of the marginal dollar versus more litigation and scholarship? Would this convince you to keep giving — or make you suspect mission drift?`,
  },
  {
    persona: 'sun-tzu', name: 'Sun Tzu',
    frame: "The adversary's counter-move",
    charge: `Attack from the opponent's move. The Record publishes a curated, machine-readable list of Cato's own REFUTED claims — free opposition research. The Impact Ledger publishes Cato's causal claims — the exact attack surface a rival uses to discredit ("they take credit for X, but X failed / was overdetermined / was someone else's win"). What terrain have we handed the enemy?`,
  },
  {
    persona: 'meadows', name: 'Donella Meadows',
    frame: 'Systems, feedback loops & mission drift',
    charge: `Attack from systems and leverage points. What feedback loops do the Record and especially the Impact Ledger install? Measuring impact makes Cato chase MEASURABLE impact — drifting toward legible, state-adjacent, incremental wins and away from radical, unpopular, long-horizon liberty positions that don't score. Goodhart's law on the impact metric. Does the instrument reshape the institution into something a hardcore libertarian would no longer recognize?`,
  },
  {
    persona: 'socrates', name: 'Socrates',
    frame: 'Hayekian first principles & legitimacy',
    charge: `Attack from first principles / the knowledge problem. A scored ledger presumes a scorekeeper who can know — but knowledge is dispersed and outcomes overdetermined (Hayek's pretense of knowledge). Is a "receipts institution" even coherent to someone who denies any central authority can adjudicate truth or attribute causation? Define "impact" without smuggling in the very central-planning epistemology libertarians reject. What is the honest meaning of a claim resolving CONFIRMED, or of an "impact event"?`,
  },
]

const FINDINGS_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['member', 'frame', 'findings', 'overallStance', 'hardcoreLibertarianVerdict'],
  properties: {
    member: { type: 'string' },
    frame: { type: 'string' },
    findings: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['title', 'severity', 'surface', 'argument', 'suggestedFix'],
        properties: {
          title: { type: 'string' },
          severity: { type: 'string', enum: ['fatal', 'serious', 'cosmetic'] },
          surface: { type: 'string', description: 'Which section/feature (e.g. §2 axiom exemption, Impact Ledger social layer)' },
          argument: { type: 'string' },
          suggestedFix: { type: 'string' },
        },
      },
    },
    overallStance: { type: 'string', enum: ['worth-pursuing', 'worth-pursuing-with-fixes', 'not-worth-pursuing', 'kill'] },
    hardcoreLibertarianVerdict: { type: 'string', description: 'Would this convince the most hardcore libertarian? Why or why not.' },
  },
}

const CROSSEX_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['member', 'refuted', 'escalated', 'withdrawn'],
  properties: {
    member: { type: 'string' },
    refuted: { type: 'array', items: { type: 'object', additionalProperties: false, required: ['targetTitle', 'why'], properties: { targetTitle: { type: 'string' }, why: { type: 'string' } } } },
    escalated: { type: 'array', items: { type: 'object', additionalProperties: false, required: ['targetTitle', 'why'], properties: { targetTitle: { type: 'string' }, why: { type: 'string' } } } },
    withdrawn: { type: 'array', items: { type: 'object', additionalProperties: false, required: ['ownTitle', 'why'], properties: { ownTitle: { type: 'string' }, why: { type: 'string' } } } },
    strongestSurviving: { type: 'string' },
  },
}

const CHAIRMAN_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['ruling', 'requiredChanges', 'libertarianDefensibility', 'impactLedgerIntegration', 'newFatalSerious', 'dry', 'synthesis'],
  properties: {
    ruling: { type: 'string', enum: ['pursue', 'pursue-with-changes', 'do-not-pursue'] },
    requiredChanges: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['section', 'change', 'severity', 'sourceFrame'],
        properties: {
          section: { type: 'string' },
          change: { type: 'string' },
          severity: { type: 'string', enum: ['fatal', 'serious', 'cosmetic'] },
          sourceFrame: { type: 'string' },
        },
      },
    },
    libertarianDefensibility: {
      type: 'object',
      additionalProperties: false,
      required: ['convinces', 'residualObjections', 'whatWouldConvince'],
      properties: {
        convinces: { type: 'boolean', description: 'Would the refined spec convince the most hardcore libertarian it is worth pursuing?' },
        residualObjections: { type: 'array', items: { type: 'string' } },
        whatWouldConvince: { type: 'string' },
      },
    },
    impactLedgerIntegration: { type: 'string', description: 'How the Impact Ledger folds into the spec after surviving attack, with its guardrails' },
    newFatalSerious: { type: 'number', description: 'Count of NEW fatal/serious vulnerabilities surfaced this round (beyond already-fixed items)' },
    dry: { type: 'boolean', description: 'True if this round surfaced no new fatal/serious vulnerability AND the panel concedes the idea is worth pursuing' },
    synthesis: { type: 'string' },
  },
}

// ================= EXECUTION =================

phase('Impact design')
const impact = await agent(IMPACT_BRIEF, { label: 'design:impact-ledger', phase: 'Impact design', schema: IMPACT_SCHEMA })

const impactSummaryForAttackers = `
--- PROPOSED IMPACT LEDGER (design just produced; attack it alongside the spec) ---
${impact ? impact.impactLedgerSpec : '(impact design failed to return; attack the spec as-is and note the impact layer is undefined)'}
Attribution ladder: ${impact ? JSON.stringify(impact.attributionLadder) : 'n/a'}
Anti-vanity guardrails: ${impact ? JSON.stringify(impact.antiVanityGuardrails) : 'n/a'}
--- END IMPACT LEDGER ---
`

phase('Libertarian attack')
const attacks = await parallel(ATTACKERS.map(a => () =>
  agent(
    `${READ_FIRST}

You are ${a.name} — read your persona at ${BASE}/agents/council-${a.persona}.md and adopt its method fully.

You sit on an adversarial council whose ONLY job is to decide whether this idea could survive — and convince — the MOST HARDCORE LIBERTARIAN (think Rothbard/Hayek/Mises purist, deeply suspicious of any central scorekeeper, any instrument the state could capture, any mission drift toward respectability).

YOUR ASSIGNED FRAME: ${a.frame}.
${a.charge}

Attack BOTH the v0.2 spec AND the proposed Impact Ledger below. Be specific and concrete — name the section, the failure scenario, the severity. Do not re-raise findings the spec already fixed. Anti-conformity directive: do not soften to seem reasonable; the strongest honest attack is the service you owe.
${impactSummaryForAttackers}

Return your findings, your overall stance, and your honest verdict on whether this convinces the most hardcore libertarian.`,
    { label: `attack:${a.persona}`, phase: 'Libertarian attack', schema: FINDINGS_SCHEMA },
  ),
)).then(r => r.filter(Boolean))

// Anonymized pool for cross-examination
const pool = attacks.flatMap(a => a.findings.map(f => ({ severity: f.severity, surface: f.surface, title: f.title, argument: f.argument })))
const anonPool = pool.map((f, i) => `[F${i + 1}] (${f.severity}) ${f.surface} — ${f.title}: ${f.argument}`).join('\n')

phase('Cross-examination')
const crossex = await parallel(ATTACKERS.map((a, idx) => () =>
  agent(
    `You are ${a.name} (persona: ${BASE}/agents/council-${a.persona}.md). This is anonymized cross-examination. Below are ALL findings from the panel, stripped of authorship. Do three things honestly:
1. REFUTE the single weakest finding (yours or another's) — one that would not survive contact with how the spec actually works.
2. ESCALATE the single strongest finding you did not author — say why it is more dangerous than stated.
3. WITHDRAW any of your OWN findings that don't survive scrutiny.
Then name the strongest surviving objection overall.

Anti-conformity: withdrawing a dead attack of your own is a signal of rigor, not weakness.

--- ANONYMIZED FINDINGS POOL ---
${anonPool}
--- END POOL ---`,
    { label: `crossex:${a.persona}`, phase: 'Cross-examination', schema: CROSSEX_SCHEMA },
  ),
)).then(r => r.filter(Boolean))

phase('Chairman')
const chairmanPrompt = `You are the Council Chairman synthesizing an adversarial refinement round on the Cato Record product spec (v0.2). The sponsor's bar: the refined strategy must (a) be free of surviving fatal/serious scrutiny, (b) convince the MOST HARDCORE LIBERTARIAN it is worth pursuing, and (c) incorporate a defensible IMPACT LEDGER (bill language → hearings → courts → media → influencer amplification) that a libertarian cannot dismiss as vanity metrics.

Read the current spec first: ${SPEC}

You have the panel's blind attacks, their anonymized cross-examination (refutations, escalations, withdrawals), and the proposed Impact Ledger design.

ATTACKS (by frame):
${JSON.stringify(attacks.map(a => ({ member: a.member, frame: a.frame, stance: a.overallStance, libertarianVerdict: a.hardcoreLibertarianVerdict, findings: a.findings })), null, 2)}

CROSS-EXAMINATION:
${JSON.stringify(crossex, null, 2)}

PROPOSED IMPACT LEDGER:
${impact ? impact.impactLedgerSpec : '(design failed)'}
Self-identified weaknesses: ${impact ? JSON.stringify(impact.selfIdentifiedWeaknesses) : 'n/a'}

Your job:
- Discard findings refuted or withdrawn in cross-examination. Keep escalated/surviving ones.
- Produce the concrete REQUIRED CHANGES to move the spec to v0.3 (section, change, severity, source frame). Fold in the Impact Ledger with only the guardrails that survived attack.
- Rule honestly on LIBERTARIAN DEFENSIBILITY: does the refined design convince the most hardcore libertarian? If not, what are the residual objections and what specifically would convince them?
- Report newFatalSerious (count of NEW fatal/serious surviving this round) and set dry=true ONLY if zero new fatal/serious survived AND the panel concedes it is worth pursuing.
- Single-provider caveat applies (whole panel is one provider) — note it in synthesis; do not treat agreement as corroboration.`

const ruling = await agent(chairmanPrompt, { label: 'chairman:synthesis', phase: 'Chairman', schema: CHAIRMAN_SCHEMA })

return {
  impact,
  attacks,
  crossex,
  ruling,
}
