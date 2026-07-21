export const meta = {
  name: 'council-cato-record-libertarian-refine-r3',
  description: 'Round 3 (closing): attack v0.4, priority-target the new §8 governance layer, and rule whether the design has reached its honest terminal state',
  phases: [
    { title: 'Libertarian attack', detail: '6 frames attack v0.4; §8 governance is the priority target (blind)' },
    { title: 'Cross-examination', detail: 'anonymized: refute weakest, escalate strongest, withdraw dead attacks' },
    { title: 'Chairman', detail: 'terminal-state ruling: new fatal? residuals irreducible? stop or continue?' },
  ],
}

const BASE = '/home/user/council-of-high-intelligence'
const SPEC = `${BASE}/demos/sessions/2026-07-17-cato-nextgen-thinktank/07-cato-record-spec-v0.4.md`
const R1 = `${BASE}/demos/sessions/2026-07-17-cato-nextgen-thinktank/06-libertarian-refinement-round1.md`
const R2 = `${BASE}/demos/sessions/2026-07-17-cato-nextgen-thinktank/08-libertarian-refinement-round2.md`

const READ_FIRST = `Before anything else, Read three files:
1. The live spec under attack (v0.4): ${SPEC}
2. Round-1 report: ${R1}
3. Round-2 report: ${R2}
v0.4 already applied: killed BOTH the proximity and subtraction public impact surfaces; demoted the Liberty Ledger to internal-only; built out §8 independent governance (structural independence + separation of powers + auto-executing kill-triggers); hardened the §6 demand gate (≥3 distinct unaffiliated citations, adversarial-framing = KILL); brand-separated the axiom pole; widened the §0 counsel gate; added internal-tool mechanism gates; dropped the word "helped." Do NOT restate anything already applied. This is the CLOSING round: find only what is genuinely NEW and unfixed in v0.4, and judge whether the design has reached its honest terminal state.`

const ATTACKERS = [
  { persona: 'taleb', name: 'Nassim Taleb', frame: 'Skin-in-the-game & fragility',
    charge: `Is the NEW §8 governance a fragile single point (independent panel = one capture target)? Does auto-execution of kill-triggers create a new tail (mass false-positive freeze; adversary trips it deliberately)? Does the barbell still leave the load-bearing moral case with no skin, now that it has its own brand-separated surface? Anything in v0.4 that is fragile in a way v0.3 was not?` },
  { persona: 'machiavelli', name: 'Niccolò Machiavelli', frame: 'Capture & weaponization',
    charge: `Attack §8 as capture theater. "External appointment, escrowed funding, non-renewable terms" — who appoints the appointers? Can Cato capture the panel through the appointment source, the funding escrow trustee, or the meta-audit? Over a decade, does separation-of-powers just multiply the surfaces to capture? Is a published rulebook a gift to adversaries who now know exactly how to game or discredit it?` },
  { persona: 'munger', name: 'Charlie Munger', frame: 'Incentives & opportunity cost (skeptical libertarian donor)',
    charge: `As the donor: v0.4 now costs outside counsel + THREE governance bodies + a meta-audit + escrowed funding + engineers — for a receipts registry. Has the cure become more elaborate than the disease? Show me the incentive §8 installs. Is this still worth the marginal dollar vs. litigation/scholarship? At what point does governance overhead itself become the mission drift?` },
  { persona: 'sun-tzu', name: 'Sun Tzu', frame: "The adversary's counter-move",
    charge: `v0.4 still publishes court-adoption receipts and a REFUTED-carrying Record. What oppo remains? Can an adversary weaponize the AUTO-EXECUTING kill-trigger (manufacture the signal that freezes Cato's own product)? Can a hostile actor exploit the hardened demand gate (poison it with adversarial citations to force a KILL)? What new attack surface did §8 and the hardened §6 open?` },
  { persona: 'meadows', name: 'Donella Meadows', frame: 'Systems, feedback loops & mission drift',
    charge: `Does the elaborate §8 governance create its own feedback loops (compliance culture, defensive lawyering, the panel optimizing for its own permanence)? Does auto-freeze + quarterly mission-narrowing instrumentation make Cato risk-averse in exactly the high-variance intellectual bets the shop exists to make? Has v0.4 traded one drift (toward legible impact) for another (toward proceduralism)?` },
  { persona: 'socrates', name: 'Socrates', frame: 'Hayekian first principles & legitimacy',
    charge: `Does §8's independent panel actually dissolve the central-scorekeeper objection, or just relocate it (now an unelected board adjudicates truth)? Is "structural independence" from Cato meaningful to a purist who distrusts ALL central adjudication regardless of who staffs it? Given the Round-2 conclusion that residuals are irreducible priors — is there ANY v0.4 change that could move the purist from grudging-tolerance to conviction, or is the ceiling now proven?` },
]

const FINDINGS_SCHEMA = {
  type: 'object', additionalProperties: false,
  required: ['member', 'frame', 'findings', 'overallStance', 'newInV04', 'atTerminalState'],
  properties: {
    member: { type: 'string' }, frame: { type: 'string' },
    findings: { type: 'array', items: { type: 'object', additionalProperties: false,
      required: ['title', 'severity', 'surface', 'argument', 'fixableOrIrreducible', 'suggestedFix'],
      properties: { title: { type: 'string' }, severity: { type: 'string', enum: ['fatal', 'serious', 'cosmetic'] }, surface: { type: 'string' }, argument: { type: 'string' }, fixableOrIrreducible: { type: 'string', enum: ['fixable-defect', 'irreducible-prior'] }, suggestedFix: { type: 'string' } } } },
    overallStance: { type: 'string', enum: ['worth-pursuing', 'worth-pursuing-with-fixes', 'not-worth-pursuing', 'kill'] },
    newInV04: { type: 'string', description: 'The single most important NEW problem v0.4 introduced (esp. in §8/§6), or "none" if v0.4 only improved things' },
    atTerminalState: { type: 'boolean', description: 'Has the design reached its honest ceiling — only irreducible priors remain, no new fixable fatal/serious?' },
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
  required: ['ruling', 'requiredChanges', 'terminalState', 'newFatalSerious', 'dry', 'convinces', 'residualAreIrreducible', 'stopRecommendation', 'finalVerdict', 'synthesis'],
  properties: {
    ruling: { type: 'string', enum: ['pursue', 'pursue-with-changes', 'do-not-pursue'] },
    requiredChanges: { type: 'array', items: { type: 'object', additionalProperties: false,
      required: ['section', 'change', 'severity', 'sourceFrame'],
      properties: { section: { type: 'string' }, change: { type: 'string' }, severity: { type: 'string', enum: ['fatal', 'serious', 'cosmetic'] }, sourceFrame: { type: 'string' } } } },
    terminalState: { type: 'boolean', description: 'True if only irreducible priors + at most cosmetic items remain — the honest ceiling' },
    newFatalSerious: { type: 'number', description: 'NEW fixable fatal/serious surfaced in v0.4 (governance/gate especially)' },
    dry: { type: 'boolean' },
    convinces: { type: 'boolean' },
    residualAreIrreducible: { type: 'boolean' },
    stopRecommendation: { type: 'string', enum: ['stop-terminal', 'one-more-round', 'keep-going'], description: 'Whether the refinement loop should stop (ceiling reached) or continue' },
    finalVerdict: { type: 'string', description: 'The one-paragraph honest bottom line for the sponsor: what to build, what to never build, and the true ceiling on the libertarian bar' },
    synthesis: { type: 'string' },
  },
}

// ================= EXECUTION =================

phase('Libertarian attack')
const attacks = await parallel(ATTACKERS.map(a => () =>
  agent(
    `${READ_FIRST}

You are ${a.name} — read your persona at ${BASE}/agents/council-${a.persona}.md and adopt its method fully.

CLOSING round of a hardcore-libertarian refinement. The barbell already earned all six frames' grudging worth-pursuing-with-fixes in Round 2; the public impact showcase is dead in two framings; residual objections were ruled irreducible priors. Your job now: attack v0.4's NEW material — above all the §8 governance architecture and the hardened §6 demand gate — and judge honestly whether the design has hit its ceiling.

YOUR FRAME: ${a.frame}.
${a.charge}

For every finding, mark it FIXABLE-DEFECT or IRREDUCIBLE-PRIOR. Do not manufacture new fatals to justify another round — if v0.4 only improved things and only irreducible priors remain, say so (atTerminalState=true) and name the single most important residual. Anti-conformity still applies: if you see a real new hole in §8/§6, name it plainly.

Return findings, overall stance, the most important NEW v0.4 problem (or "none"), and whether the design is at its terminal state.`,
    { label: `attack:${a.persona}`, phase: 'Libertarian attack', schema: FINDINGS_SCHEMA },
  ),
)).then(r => r.filter(Boolean))

const pool = attacks.flatMap(a => a.findings.map(f => ({ severity: f.severity, kind: f.fixableOrIrreducible, surface: f.surface, title: f.title, argument: f.argument })))
const anonPool = pool.map((f, i) => `[F${i + 1}] (${f.severity}/${f.kind}) ${f.surface} — ${f.title}: ${f.argument}`).join('\n')

phase('Cross-examination')
const crossex = await parallel(ATTACKERS.map(a => () =>
  agent(
    `You are ${a.name} (persona: ${BASE}/agents/council-${a.persona}.md). Anonymized cross-examination of the closing round. Below are ALL findings, authorship stripped. Honestly:
1. REFUTE the single weakest finding that would not survive how v0.4 actually works.
2. ESCALATE the single strongest finding you did not author.
3. WITHDRAW any of your OWN findings that don't survive scrutiny.
Then name the strongest surviving objection, and state plainly whether it is a fixable defect (needs a v0.5) or an irreducible libertarian prior (the ceiling).
Anti-conformity: withdrawing a dead attack of your own is rigor.

--- ANONYMIZED FINDINGS POOL ---
${anonPool}
--- END POOL ---`,
    { label: `crossex:${a.persona}`, phase: 'Cross-examination', schema: CROSSEX_SCHEMA },
  ),
)).then(r => r.filter(Boolean))

phase('Chairman')
const chairmanPrompt = `You are the Council Chairman closing out the hardcore-libertarian refinement of the Cato Record spec. Read v0.4: ${SPEC}. Continuity: ${R1} , ${R2}.

This is the CLOSING round. Round 2 established: all six frames at worth-pursuing-with-fixes; public impact showcase dead in two framings; untilCondition asymptotic-grudging-only; residuals irreducible. Round 3 attacked v0.4's new §8 governance + hardened §6 gate to check for NEW holes and confirm the terminal state.

ATTACKS:
${JSON.stringify(attacks.map(a => ({ member: a.member, frame: a.frame, stance: a.overallStance, newInV04: a.newInV04, atTerminalState: a.atTerminalState, findings: a.findings })), null, 2)}

CROSS-EXAMINATION:
${JSON.stringify(crossex, null, 2)}

Your job — decisive and honest:
- Discard refuted/withdrawn findings; keep survivors.
- List any REQUIRED CHANGES for a v0.5 (section, change, severity, source). If the only survivors are irreducible priors + cosmetics, requiredChanges may be small or empty.
- Set terminalState=true iff no NEW fixable fatal/serious survived AND all remaining objections are irreducible priors.
- Report newFatalSerious (NEW fixable, in v0.4), dry, convinces, residualAreIrreducible.
- stopRecommendation: 'stop-terminal' if the ceiling is reached (further rounds cannot dissolve philosophical priors), 'one-more-round' if a v0.5 is needed first, 'keep-going' if the design is still moving materially.
- finalVerdict: the one-paragraph honest bottom line for the sponsor — what to build, what to never build, the surviving public impact capture (court-adoption receipts only), and the true ceiling on "convince the most hardcore libertarian."
- Single-provider caveat: convergence is a raised prior, not corroboration.`

const ruling = await agent(chairmanPrompt, { label: 'chairman:closing', phase: 'Chairman', schema: CHAIRMAN_SCHEMA })

return { attacks, crossex, ruling }
