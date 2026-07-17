export const meta = {
  name: 'council-design-triad-stress-test',
  description: 'Adversarial stress test of the Cato Record product spec: design triad (Rams + Torvalds + Watts) attacks, cross-examines, and rules ship/revise/kill',
  phases: [
    { title: 'Attack', detail: 'Each member independently tries to break the spec (parallel, blind)' },
    { title: 'Cross-Examination', detail: 'Anonymized: defend, concede, or sharpen attacks' },
    { title: 'Ruling', detail: 'Ship / ship-with-fixes / rework / kill + top vulnerabilities' },
    { title: 'Synthesis', detail: 'Chairman produces the Stress-Test Report' },
  ],
}

const BASE = '/home/user/council-of-high-intelligence/agents/council-'
const SPEC = args

// Design triad. Rams = domain-weight 1.5x seat (product-design artifact under review), locked pre-analysis.
const MEMBERS = [
  {
    name: 'rams', figure: 'Dieter Rams', model: 'sonnet', weight: 1.5,
    lens: `Attack USER FIT and DESIGN HONESTY. Does each surface actually serve the four named users (staffer, clerk, educator, donor) or does it serve the institution's self-image? Is anything decoration? Is the claim card genuinely "less, but better" or is it clutter wearing minimalism's clothes? Where does the product lie to its users — implicitly promise something it cannot deliver? What should be DELETED?`,
  },
  {
    name: 'torvalds', figure: 'Linus Torvalds', model: 'sonnet', weight: 1.0,
    lens: `Attack BUILDABILITY and PRODUCTION SURVIVAL. What breaks in year 2 when nobody's excited anymore? Where is the maintenance burden hiding (docket watchers, resolution disputes, right-of-reply loops)? Which pipeline stage silently rots? Is 2-3 FTE a fantasy number? Where will scholars route around the editorial gate? What is over-engineered and what is under-specified? Call out anything that only works in the demo.`,
  },
  {
    name: 'watts', figure: 'Alan Watts', model: 'opus', weight: 1.0,
    lens: `Attack the FRAME itself. Does the problem this product solves actually exist for anyone but its authors? Is "receipts institution" a real category or a story Cato tells itself? What does the product pretend about how trust, persuasion, and policy influence actually work? Does writing promises in a notebook change anything real, or does it ritualize honesty while the actual game (persuasion, patronage, tribal loyalty) continues untouched? You may attack the underlying council verdict's frame, not just the spec — flag which you are attacking.`,
  },
]

const LETTERS = 'ABC'
const labelFor = (idx) => `Member ${LETTERS[idx]}`

const RULING_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    position: { type: 'string', description: 'Crystallized final ruling on the spec, 100 words max' },
    stance: { type: 'string', enum: ['ship-as-is', 'ship-with-fixes', 'rework', 'kill'] },
    topVulnerabilities: {
      type: 'array', maxItems: 5,
      items: {
        type: 'object', additionalProperties: false,
        properties: {
          title: { type: 'string', description: 'Short name of the vulnerability' },
          severity: { type: 'string', enum: ['fatal', 'serious', 'cosmetic'] },
          fix: { type: 'string', description: 'Concrete fix, or "none — structural" if unfixable' },
        },
        required: ['title', 'severity', 'fix'],
      },
    },
    confidence: { type: 'string', enum: ['high', 'med', 'low'] },
    dealbreaker: { type: 'boolean', description: 'true if shipping the spec UNCHANGED would be actively harmful' },
  },
  required: ['position', 'stance', 'topVulnerabilities', 'confidence', 'dealbreaker'],
}

// ---------- Round 1: Attack (parallel, blind) ----------
phase('Attack')
const attackPrompt = (m) => `You are operating as a council member in an ADVERSARIAL STRESS TEST of a product specification. Read your agent definition at ${BASE}${m.name}.md and adopt that persona precisely — its Identity, Grounding Protocol, and analytical method.

${SPEC}

YOUR ATTACK LENS THIS SESSION:
${m.lens}

Your job in this round is to BREAK the spec, not to admire it or improve it gently. Find the strongest failure modes you can. Rules of engagement:
- Attack specifics — quote or name the exact section/mechanism you are attacking. No generic criticism.
- For EACH vulnerability you find: name it, state the concrete failure scenario (who does what, what breaks, what the damage is), rate severity (fatal | serious | cosmetic), and give a concrete fix if one exists ("none — structural" if not).
- Steelman first, then strike: one sentence on the strongest version of what you attack, then why it still fails.
- If, after honest effort, some part of the spec survives your best attack, say so explicitly — a stress test that finds nothing solid is as suspect as one that finds nothing wrong.
- Do NOT state your own name or figure — your text will be anonymized before the next round.

Find 3-5 vulnerabilities. Limit: 400 words maximum.`

const round1 = (await parallel(MEMBERS.map((m, i) => () =>
  agent(attackPrompt(m), { label: `attack:${m.name}`, phase: 'Attack', model: m.model })
    .then((text) => (text ? { member: m, idx: i, text } : null))
))).filter(Boolean)

const anon1 = round1.map((r) => `### ${labelFor(r.idx)}\n${r.text}`).join('\n\n')

// ---------- Round 2: Cross-examination (anonymized, parallel) ----------
phase('Cross-Examination')
const crossPrompt = (m) => `You are council-${m.name} in Round 2 of an adversarial stress test. Read your agent definition at ${BASE}${m.name}.md and follow it precisely.

Identity is masked this round. The Round 1 attacks below are labeled Member A/B/C — one is your own, anonymized with the rest. Evaluate by argument quality, not source. Use only the labels.

The specification under attack (for reference):
${SPEC}

The (anonymized) Round 1 attacks:

${anon1}

Anti-conformity directive: do not soften your attacks because peers found different flaws, and do not adopt a peer's vulnerability unless it genuinely survives your scrutiny. If you now believe one of your own Round 1 vulnerabilities was wrong or overstated, name the specific flaw in your reasoning and withdraw it explicitly.

Respond:
1. Which attack (by label) is OVERSTATED or wrong? Refute it concretely — show why the failure scenario doesn't hold or the severity is inflated.
2. Which attack (by label) is UNDERSTATED — more dangerous than its author realized? Escalate it with a sharper failure scenario.
3. Restate your own strongest surviving vulnerabilities, sharpened by this exchange. Note any you withdraw and why.
4. Label your key claims: empirical | mechanistic | strategic | ethical | heuristic

Limit: 300 words maximum. Engage at least 2 attacks by label. Do not state your own name.`

const round2 = (await parallel(round1.map((r) => () =>
  agent(crossPrompt(r.member), { label: `cross:${r.member.name}`, phase: 'Cross-Examination', model: r.member.model })
    .then((text) => (text ? { member: r.member, idx: r.idx, text } : null))
))).filter(Boolean)

const anon2 = round2.map((r) => `### ${labelFor(r.idx)}\n${r.text}`).join('\n\n')
const r1ByName = Object.fromEntries(round1.map((r) => [r.member.name, r.text]))
const r2ByName = Object.fromEntries(round2.map((r) => [r.member.name, r.text]))

// ---------- Round 3: Ruling (parallel, structured) ----------
phase('Ruling')
const rulingPrompt = (m) => `You are council-${m.name} in the FINAL round of an adversarial stress test. Read your agent definition at ${BASE}${m.name}.md.

The specification under attack:
${SPEC}

Your Round 1 attack:
${r1ByName[m.name] || '(unavailable)'}

Your Round 2 cross-examination:
${r2ByName[m.name] || '(unavailable)'}

All (anonymized) Round 2 cross-examinations:
${anon2}

Crystallize your ruling on the spec. No new arguments. Return:
- position: your final ruling in 100 words or less — what must change before this ships, if anything.
- stance: ship-as-is | ship-with-fixes | rework (structure is wrong, salvage parts) | kill (the product should not exist).
- topVulnerabilities: your final list (max 5), each with title, severity (fatal|serious|cosmetic), and a concrete fix ("none — structural" if unfixable). Only vulnerabilities that SURVIVED cross-examination.
- confidence: high | med | low.
- dealbreaker: true only if shipping the spec UNCHANGED would be actively harmful.`

const round3 = (await parallel(round2.map((r) => () =>
  agent(rulingPrompt(r.member), { label: `ruling:${r.member.name}`, phase: 'Ruling', model: r.member.model, effort: 'low', schema: RULING_SCHEMA })
    .then((s) => (s ? { member: r.member, idx: r.idx, ...s } : null))
))).filter(Boolean)

const stanceTable = round3
  .map((r) => `- ${r.member.figure}${r.member.weight > 1 ? ' [1.5x DOMAIN-WEIGHT SEAT]' : ''}: STANCE=${r.stance} | CONFIDENCE=${r.confidence} | DEALBREAKER=${r.dealbreaker ? 'yes' : 'no'}\n  position: ${r.position}\n  vulnerabilities: ${JSON.stringify(r.topVulnerabilities)}`)
  .join('\n')

const r1Named = round1.map((r) => `### ${r.member.figure}\n${r.text}`).join('\n\n')
const r2Named = round2.map((r) => `### ${r.member.figure}\n${r.text}`).join('\n\n')

// ---------- Synthesis: Chairman stress-test report ----------
phase('Synthesis')
const chairmanPrompt = `You are the Chairman of the Council of High Intelligence, synthesizing an ADVERSARIAL STRESS TEST. You did not attack or defend — weigh findings by validity, not repetition. Single-provider note: you (anthropic/opus) share a provider with the panel.

The specification under attack:
${SPEC}

PANEL: design triad — Dieter Rams (user fit / design honesty, 1.5x domain-weight seat, locked pre-analysis because the artifact under review is a product spec), Linus Torvalds (buildability / production survival), Alan Watts (frame validity). Sequence: blind attack → anonymized cross-examination → structured ruling.

=== ROUND 1 — ATTACKS ===
${r1Named}

=== ROUND 2 — CROSS-EXAMINATION ===
${r2Named}

=== ROUND 3 — RULINGS (structured) ===
${stanceTable}

YOUR JOB:
- Tally the ruling: weights Rams 1.5, Torvalds 1.0, Watts 1.0 (W_total = 3.5, 2/3 threshold = 2.333). Treat ship-as-is and ship-with-fixes as distinct options; report which (if any) clears the threshold.
- Merge duplicate vulnerabilities across members into one canonical list. Keep ONLY vulnerabilities that survived cross-examination (drop any refuted in Round 2 unless the refutation was itself refuted).
- Rank the canonical list by severity, then by how many members independently found it.
- Be honest about what SURVIVED — parts of the spec no attack dented.
- Do not invent vulnerabilities no member raised.

Produce the report using EXACTLY this template:

## Stress-Test Report — The Cato Record Product Spec

### Verdict
{One line: the weighted ruling (e.g. "ship-with-fixes — 3.5/3.5") and what it means. State the tally per option and whether the 2/3 threshold (2.333) was cleared.}

### Confirmed Vulnerabilities
{The canonical merged list, ranked. For each: **{Title}** (severity; found by {members}) — failure scenario in 1-2 sentences → **Fix:** {the concrete fix, or "none — structural"}.}

### Refuted or Withdrawn in Cross-Examination
{Attacks that did NOT survive Round 2, and the specific refutation. If none, say so.}

### What Survived Intact
{Parts of the spec no attack dented — named explicitly.}

### Required Changes Before Ship
{Numbered, priority-ordered changes to the spec derived from fatal+serious vulnerabilities. Each must be a concrete edit to a named section of the spec.}

### The Watts Question — Is the Frame Itself Wrong?
{Deal squarely with the frame-level attack: does the product's theory of trust/influence hold? State whether the panel sustained, partially sustained, or rejected the frame attack, and what hinges on it.}

### Rulings by Member
- **Dieter Rams [1.5x]**: {stance, confidence, dealbreaker, one-line core ruling}
- **Linus Torvalds**: {same}
- **Alan Watts**: {same}

### Dissent
{Any dealbreaker=yes ruling and its strongest argument, even if outvoted. If none, say so.}

### Epistemic Note
{2-3 sentences: single-provider caveat, triad size limits, and whether the attack coverage (user fit, production survival, frame validity) leaves known-unattacked surfaces — name them (e.g. legal exposure, adversarial gaming, donor politics) so the reader knows what this stress test did NOT cover.}`

const report = await agent(chairmanPrompt, { label: 'chairman:stress-report', phase: 'Synthesis', model: 'opus', effort: 'high' })

return {
  panel_size: MEMBERS.length,
  completed: { attack: round1.length, cross: round2.length, ruling: round3.length },
  failed_members: MEMBERS.filter((m) => !round3.some((r) => r.member.name === m.name)).map((m) => m.name),
  rulings: round3.map((r) => ({ figure: r.member.figure, weight: r.member.weight, stance: r.stance, confidence: r.confidence, dealbreaker: r.dealbreaker, vulnerabilities: r.topVulnerabilities })),
  report,
}
