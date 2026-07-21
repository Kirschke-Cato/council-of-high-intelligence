export const meta = {
  name: 'council-cato-record-libertarian-refine-r2',
  description: 'Round 2: attack the v0.3 barbell + a constraint-framed public impact surface (Liberty Ledger); test if the libertarian bar is reachable or asymptotic',
  phases: [
    { title: 'Liberty Ledger design', detail: 'design a PUBLIC impact surface counting only subtractions from state power + court citations' },
    { title: 'Libertarian attack', detail: '6 frames attack v0.3 barbell + Liberty Ledger (blind)' },
    { title: 'Cross-examination', detail: 'anonymized: refute weakest, escalate strongest, withdraw dead attacks' },
    { title: 'Chairman', detail: 'dry-check, convinces-check, is the bar reachable or asymptotic, does the Liberty Ledger survive' },
  ],
}

const BASE = '/home/user/council-of-high-intelligence'
const SPEC = `${BASE}/demos/sessions/2026-07-17-cato-nextgen-thinktank/05-cato-record-spec-v0.3.md`
const R1 = `${BASE}/demos/sessions/2026-07-17-cato-nextgen-thinktank/06-libertarian-refinement-round1.md`

const READ_FIRST = `Before anything else, Read two files:
1. The live product spec under attack (v0.3, the "barbell" — public Impact Ledger already KILLED): ${SPEC}
2. The Round-1 report (so you do NOT re-raise findings already applied in v0.3): ${R1}
v0.3 already: killed the public influence showcase; made outside legal counsel a blocking gate; removed the per-author scoreboard; fixed the kill-trigger gauge (informativeness); scoped state statistics to a data-disputed lane; instrumented coverage/mission-drift; published the rulebook under a rotating independent panel; kept statutory-reuse only as an internal, counsel-gated, defensive tool. Do NOT restate those — find what STILL fails in v0.3, and judge the NEW public Liberty Ledger below.`

// ---- Design the constraint-framed public impact surface ----
const LEDGER_BRIEF = `${READ_FIRST}

You are ${'Ada Lovelace'} — read your persona at ${BASE}/agents/council-ada.md and adopt it.

DESIGN TASK. Round 1 killed the public "Impact Ledger" because it defined impact as PROXIMITY TO STATE ACTION (our words in a bill) — a lobbying dossier and a frame-capture. But the panel pointed at the one impact story a hardcore libertarian CELEBRATES rather than distrusts: impact as SUBTRACTION FROM THE STATE. Design the **Liberty Ledger** — a PUBLIC impact surface that a Rothbard/Hayek/Mises purist would actually endorse, because it counts only *government that got smaller*, externally scored.

Design constraints (violating any re-opens the Round-1 defects):
- Count ONLY externally-verifiable SUBTRACTIONS from state power, each first-class and equal: a statute or rule REPEALED, an agency action VACATED by a court, a program DEFUNDED (appropriations line), a mandate/license regime ABOLISHED, a bill BLOCKED where Cato was of-record opposing, a SUNSET reached. Plus judicial-opinion citations of Cato briefs (courts keep score; the forum constrains state power).
- Reframe explicitly: this is "government we helped shrink," NOT "influence we exerted." Distinguish, on every surface, a libertarian WIN (state power reduced) from mere PROXIMITY (our language appeared) — the latter is not counted here at all.
- Same honesty discipline as the Record: attribution ladder CITED > CONTRIBUTED > CLAIMED never collapsed; sole-causation forbidden; misses (OPPOSED-OUTCOME, the repeals that failed, the expansions Cato could not stop) as visible as wins; no aggregate "liberty score," no leaderboard, non-enumerable in bulk.
- It must NOT recreate the lobbying-disclosure surface (no cataloguing of Cato's legislative language reuse — that stays internal per §11), and must NOT crown state-proximity.
- Be honest about what this still CANNOT escape: does counting "blocks" still reward legible fights over quiet/radical ones? Does "we helped repeal X" still claim causation? Is a court VACATE still leaning on the state as arbiter? Does a subtraction-only frame still measure Cato by its relationship to the state apparatus?

Return: a complete buildable spec section (markdown) for the Liberty Ledger; the win/proximity distinction rule; the anti-vanity + anti-lobbying-surface guardrails; and an honest list of the residual objections you can already see a purist raising against even THIS framing.`

const LEDGER_SCHEMA = {
  type: 'object', additionalProperties: false,
  required: ['libertyLedgerSpec', 'winVsProximityRule', 'guardrails', 'residualObjections'],
  properties: {
    libertyLedgerSpec: { type: 'string' },
    winVsProximityRule: { type: 'string' },
    guardrails: { type: 'array', items: { type: 'string' } },
    residualObjections: { type: 'array', items: { type: 'string' } },
  },
}

const ATTACKERS = [
  { persona: 'taleb', name: 'Nassim Taleb', frame: 'Skin-in-the-game & fragility',
    charge: `Does v0.3 still leave the load-bearing product (the moral case) with no skin? Is the Liberty Ledger a new fragile scoreboard? Does counting "blocks/repeals" create a convex incentive to pick winnable fights and dodge the important-but-unwinnable ones? Where does "we helped shrink X" still claim causation it cannot own?` },
  { persona: 'machiavelli', name: 'Niccolò Machiavelli', frame: 'Capture & weaponization',
    charge: `Does the Liberty Ledger reopen a disclosure/oppo surface (a public catalogue of every fight Cato picked and every agency it fought)? How does a hostile administration or rival weaponize a public "government we shrank" boast? Is the internal §11 detector still a discoverable liability? Who captures the rotating review panel over time?` },
  { persona: 'munger', name: 'Charlie Munger', frame: 'Incentives & opportunity cost (skeptical libertarian donor)',
    charge: `As the cold-eyed donor: is the Liberty Ledger worth building, or is it the same vanity metric wearing a libertarian costume? Show me the incentive it installs. Does it still pull Cato toward legible, scoreable, state-adjacent wins? Would it convince you to keep giving, or make you suspect the scoreboard has become the mission? Invert: how does v0.3 make Cato worse?` },
  { persona: 'sun-tzu', name: 'Sun Tzu', frame: "The adversary's counter-move",
    charge: `The Liberty Ledger publishes a curated list of Cato's fights and its LOSSES (misses-first). What oppo does that hand a rival ("Cato lost 60% of the fights it picked")? Does the win/proximity distinction survive contact with a hostile journalist who collapses it anyway? What terrain does even the subtraction-framed surface concede?` },
  { persona: 'meadows', name: 'Donella Meadows', frame: 'Systems, feedback loops & mission drift',
    charge: `Round 1's deepest strike was goal-level frame capture. Does defining impact as "subtraction from the state" ESCAPE that, or just invert the sign while keeping the state as the reference frame? Does a subtraction scoreboard still install a feedback loop that narrows Cato toward measurable teardowns and away from idea-work whose payoff is invisible and long-horizon? Goodhart on "repeals helped."` },
  { persona: 'socrates', name: 'Socrates', frame: 'Hayekian first principles & legitimacy',
    charge: `Is "we helped shrink government" any more honestly attributable than "we influenced a bill"? Repeals are as overdetermined as enactments. Does a subtraction frame still presume a central scorekeeper who can attribute causation? And the deepest Round-1 objection: the greatest libertarian victory is the idea so absorbed that no law cites it and Cato's name disappears — which even the Liberty Ledger scores as zero. Has v0.3 answered that, or merely stated it?` },
]

const FINDINGS_SCHEMA = {
  type: 'object', additionalProperties: false,
  required: ['member', 'frame', 'findings', 'overallStance', 'hardcoreLibertarianVerdict', 'libertyLedgerVerdict'],
  properties: {
    member: { type: 'string' }, frame: { type: 'string' },
    findings: { type: 'array', items: { type: 'object', additionalProperties: false,
      required: ['title', 'severity', 'surface', 'argument', 'suggestedFix'],
      properties: { title: { type: 'string' }, severity: { type: 'string', enum: ['fatal', 'serious', 'cosmetic'] }, surface: { type: 'string' }, argument: { type: 'string' }, suggestedFix: { type: 'string' } } } },
    overallStance: { type: 'string', enum: ['worth-pursuing', 'worth-pursuing-with-fixes', 'not-worth-pursuing', 'kill'] },
    hardcoreLibertarianVerdict: { type: 'string' },
    libertyLedgerVerdict: { type: 'string', enum: ['ship-public', 'ship-public-with-fixes', 'internal-only', 'kill'], description: 'Fate of the public Liberty Ledger specifically' },
  },
}

const CROSSEX_SCHEMA = {
  type: 'object', additionalProperties: false,
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
  type: 'object', additionalProperties: false,
  required: ['ruling', 'requiredChanges', 'libertarianDefensibility', 'libertyLedger', 'untilCondition', 'newFatalSerious', 'dry', 'synthesis'],
  properties: {
    ruling: { type: 'string', enum: ['pursue', 'pursue-with-changes', 'do-not-pursue'] },
    requiredChanges: { type: 'array', items: { type: 'object', additionalProperties: false,
      required: ['section', 'change', 'severity', 'sourceFrame'],
      properties: { section: { type: 'string' }, change: { type: 'string' }, severity: { type: 'string', enum: ['fatal', 'serious', 'cosmetic'] }, sourceFrame: { type: 'string' } } } },
    libertarianDefensibility: { type: 'object', additionalProperties: false,
      required: ['convinces', 'residualObjections', 'residualAreIrreducible', 'whatWouldConvince'],
      properties: { convinces: { type: 'boolean' }, residualObjections: { type: 'array', items: { type: 'string' } }, residualAreIrreducible: { type: 'boolean', description: 'True if the remaining objections are structural libertarian priors, not fixable design defects' }, whatWouldConvince: { type: 'string' } } },
    libertyLedger: { type: 'object', additionalProperties: false,
      required: ['fate', 'rationale'],
      properties: { fate: { type: 'string', enum: ['ship-public', 'ship-public-with-fixes', 'internal-only', 'kill'] }, rationale: { type: 'string' } } },
    untilCondition: { type: 'string', enum: ['achievable', 'asymptotic-grudging-only', 'unachievable'], description: "Is the sponsor's bar (convince the MOST hardcore libertarian it is worth pursuing) reachable by any design?" },
    newFatalSerious: { type: 'number' },
    dry: { type: 'boolean', description: 'True if no NEW fatal/serious survived this round AND the panel concedes the design (barbell + whatever Liberty Ledger fate) is worth pursuing' },
    synthesis: { type: 'string' },
  },
}

// ================= EXECUTION =================

phase('Liberty Ledger design')
const ledger = await agent(LEDGER_BRIEF, { label: 'design:liberty-ledger', phase: 'Liberty Ledger design', schema: LEDGER_SCHEMA })

const ledgerForAttackers = `
--- PROPOSED PUBLIC LIBERTY LEDGER (design just produced; judge it alongside the v0.3 barbell) ---
${ledger ? ledger.libertyLedgerSpec : '(design failed; the barbell has no public impact surface — attack that absence too)'}
Win-vs-proximity rule: ${ledger ? ledger.winVsProximityRule : 'n/a'}
Guardrails: ${ledger ? JSON.stringify(ledger.guardrails) : 'n/a'}
--- END LIBERTY LEDGER ---
`

phase('Libertarian attack')
const attacks = await parallel(ATTACKERS.map(a => () =>
  agent(
    `${READ_FIRST}

You are ${a.name} — read your persona at ${BASE}/agents/council-${a.persona}.md and adopt its method fully.

You sit on an adversarial council deciding whether v0.3 (the barbell) could survive AND convince the MOST HARDCORE LIBERTARIAN (Rothbard/Hayek/Mises purist), and whether the NEW public Liberty Ledger below is safe to ship or must stay internal / die like its predecessor.

YOUR FRAME: ${a.frame}.
${a.charge}

Judge BOTH the v0.3 spec AND the Liberty Ledger. Be concrete: name the section, the failure scenario, the severity. Do NOT restate Round-1 findings already applied in v0.3. Distinguish sharply: is a residual objection a FIXABLE defect, or an IRREDUCIBLE libertarian prior you would hold against ANY such instrument? Say which. Anti-conformity: the strongest honest attack is the service you owe — do not soften.
${ledgerForAttackers}

Return findings, overall stance, your honest verdict on whether this convinces the most hardcore libertarian, and your verdict on the public Liberty Ledger specifically.`,
    { label: `attack:${a.persona}`, phase: 'Libertarian attack', schema: FINDINGS_SCHEMA },
  ),
)).then(r => r.filter(Boolean))

const pool = attacks.flatMap(a => a.findings.map(f => ({ severity: f.severity, surface: f.surface, title: f.title, argument: f.argument })))
const anonPool = pool.map((f, i) => `[F${i + 1}] (${f.severity}) ${f.surface} — ${f.title}: ${f.argument}`).join('\n')

phase('Cross-examination')
const crossex = await parallel(ATTACKERS.map(a => () =>
  agent(
    `You are ${a.name} (persona: ${BASE}/agents/council-${a.persona}.md). Anonymized cross-examination. Below are ALL findings, authorship stripped. Honestly:
1. REFUTE the single weakest finding (yours or another's) that would not survive how v0.3 actually works.
2. ESCALATE the single strongest finding you did not author.
3. WITHDRAW any of your OWN findings that don't survive scrutiny.
Then name the strongest surviving objection overall, and state whether it is a fixable defect or an irreducible libertarian prior.
Anti-conformity: withdrawing a dead attack of your own is rigor, not weakness.

--- ANONYMIZED FINDINGS POOL ---
${anonPool}
--- END POOL ---`,
    { label: `crossex:${a.persona}`, phase: 'Cross-examination', schema: CROSSEX_SCHEMA },
  ),
)).then(r => r.filter(Boolean))

phase('Chairman')
const chairmanPrompt = `You are the Council Chairman synthesizing Round 2 of the hardcore-libertarian refinement of the Cato Record spec. Read v0.3 first: ${SPEC}. Read the Round-1 report for continuity: ${R1}.

The sponsor's bar: refine UNTIL (a) free of surviving fatal/serious scrutiny, (b) convinces the MOST HARDCORE LIBERTARIAN it is worth pursuing, and (c) captures impact in a form a libertarian cannot dismiss as vanity. Round 1 killed the proximity-framed public Impact Ledger. Round 2 tests the v0.3 barbell and a NEW subtraction-framed public Liberty Ledger.

ATTACKS:
${JSON.stringify(attacks.map(a => ({ member: a.member, frame: a.frame, stance: a.overallStance, libertarianVerdict: a.hardcoreLibertarianVerdict, libertyLedgerVerdict: a.libertyLedgerVerdict, findings: a.findings })), null, 2)}

CROSS-EXAMINATION:
${JSON.stringify(crossex, null, 2)}

PROPOSED LIBERTY LEDGER:
${ledger ? ledger.libertyLedgerSpec : '(design failed)'}
Designer's own residual objections: ${ledger ? JSON.stringify(ledger.residualObjections) : 'n/a'}

Your job — be decisive and honest:
- Discard refuted/withdrawn findings; keep escalated/surviving ones.
- REQUIRED CHANGES to reach v0.4 (section, change, severity, source frame).
- Rule on the LIBERTY LEDGER's fate (ship-public / ship-public-with-fixes / internal-only / kill) with rationale.
- Rule on LIBERTARIAN DEFENSIBILITY: convinces true/false; list residual objections; set residualAreIrreducible=true if what remains is structural libertarian priors rather than fixable defects.
- Set untilCondition: is the sponsor's bar reachable by ANY design (achievable), only as grudging worth-pursuing with permanent-suspicion (asymptotic-grudging-only), or unachievable?
- newFatalSerious count; dry=true ONLY if zero new fatal/serious survived AND the panel concedes the design is worth pursuing.
- Single-provider caveat: note that convergence is a raised prior, not corroboration.
- If the remaining objections are irreducible priors and no new fatal/serious survived, say so plainly — that is the realistic terminal state, and continuing to "refine" cannot dissolve a philosophical prior.`

const ruling = await agent(chairmanPrompt, { label: 'chairman:synthesis', phase: 'Chairman', schema: CHAIRMAN_SCHEMA })

return { ledger, attacks, crossex, ruling }
