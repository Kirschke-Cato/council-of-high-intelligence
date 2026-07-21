export const meta = {
  name: 'council-cato-record-libertarian-refine-r4',
  description: 'Round 4 (terminal check): confirm v0.5 sits at its honest ceiling; refuse infinite governance-of-governance regress',
  phases: [
    { title: 'Terminal attack', detail: '6 frames attack v0.5, priority-target the v0.5 governance fixes (blind)' },
    { title: 'Cross-examination', detail: 'anonymized: refute weakest, escalate strongest, withdraw dead attacks' },
    { title: 'Chairman', detail: 'declare terminal or name the single genuine non-regress defect; this is the last round' },
  ],
}

const BASE = '/home/user/council-of-high-intelligence'
const SPEC = `${BASE}/demos/sessions/2026-07-17-cato-nextgen-thinktank/09-cato-record-spec-v0.5.md`
const R3 = `${BASE}/demos/sessions/2026-07-17-cato-nextgen-thinktank/10-libertarian-refinement-round3.md`

const ANTI_REGRESS = `THE ANTI-REGRESS RULE (binding this round). Round 3's lesson was that every fix that ADDS a mechanism opens a new mechanism to defend — an infinite "who watches the watchers" regress. v0.5 adopts a governance-complexity ceiling and declares four residuals as ACCEPTED IRREDUCIBLE FLOORS (small-pool correlation; no fine-grained corrective for a drifted-but-not-dead panel; the Janus-faced falsifiability instrument; terminal quis-custodiet). A finding counts as blocking-terminal ONLY if it is a genuine NEW fixable fatal/serious defect that is NOT answerable merely by "add another watcher / body / audit / estimate." If your objection reduces to "but who checks THAT?" applied to a v0.5 safeguard, it is the accepted floor, not a new defect — label it irreducible-prior. Do not manufacture a new fatal to justify a fifth round; this is the LAST round.`

const READ_FIRST = `Before anything else, Read two files:
1. The live spec under attack (v0.5, terminal draft): ${SPEC}
2. Round-3 report (the eight defects v0.5 closed): ${R3}
v0.5 closed all eight Round-3 serious defects VIA NEGATIVA where possible: de-monopolized the auto-kill sensor (externally-benchmarked, blinded, cohort-controlled, independent-second-estimate concordance); reconstituted the veto (core triggers non-vetoable, lesser vetoes delay-not-cancel + supermajority); de-monopolized the meta-audit (public/adversarial or two-auditor); fixed funding+mission-sunset (Cato retains a blunt kill-switch over the ENTIRE Record); named + adversarially-heterogenized appointers; fixed governance sequencing (light certifier from Phase 0); capped the protected pole ≤10-15%; right-sized the gate stack (direction-not-rate, gates-per-claim ceiling, falling-boldness alarm). Do NOT restate anything v0.5 already fixed or already declared an accepted floor.
${ANTI_REGRESS}`

const ATTACKERS = [
  { persona: 'taleb', name: 'Nassim Taleb', frame: 'Skin-in-the-game & fragility',
    charge: `Did v0.5's sensor de-monopolization (independent second estimate + external benchmark) actually restore the margin of safety, or add a new correlated estimator? Does the ≤10-15% pole cap + monitored ratio hold, or create a new gaming edge? Is the blunt whole-Record mission-sunset a cleaner tail than the fine-grained corrective it replaced? Is v0.5 genuinely simpler (via negativa) or just differently-complex?` },
  { persona: 'machiavelli', name: 'Niccolò Machiavelli', frame: 'Capture & weaponization',
    charge: `v0.5 names mutually-hostile appointers and a public meta-audit. Is that real de-concentration or a new theater? Can the whole-Record mission-sunset (Cato's restored kill-switch) itself be abused — Cato threatens discontinuation to pressure the panel? Is there a residual capture path that is NOT just "who appoints the appointers" (which is the declared floor)?` },
  { persona: 'munger', name: 'Charlie Munger', frame: 'Incentives & opportunity cost',
    charge: `Does v0.5's cost now clear the bar — light certifier from Phase 0, capped pole, gates-per-claim ceiling — or is the whole edifice still too much machine for a receipts registry? Show me any NEW perverse incentive v0.5's fixes install (e.g., the non-vetoable trigger, the delay-not-cancel veto, the mission-sunset). Is there a simpler design that gets 80% of the value?` },
  { persona: 'sun-tzu', name: 'Sun Tzu', frame: "The adversary's counter-move",
    charge: `Non-vetoable core triggers + delay-not-cancel: can an adversary now weaponize the BRAKE (manufacture the concordant signal that fires an un-stoppable freeze)? Does requiring an external base-rate/market proxy to concur create a new input an adversary can poison? Any new attack surface in v0.5's fixes specifically?` },
  { persona: 'meadows', name: 'Donella Meadows', frame: 'Systems & mission drift',
    charge: `Does the governance-complexity ceiling + accepted-floors framing actually stop the proceduralism drift, or just declare it stopped? Does the falling-boldness alarm + direction-not-rate coverage genuinely reduce the chilling, or add more instruments? Is v0.5 a stable system or still accreting?` },
  { persona: 'socrates', name: 'Socrates', frame: 'Hayekian first principles & legitimacy',
    charge: `v0.5 explicitly concedes rule-AUTHORSHIP stays Cato's and lists the irreducible priors in the open. Given that honesty, is there any remaining FIXABLE defect at all — or is everything left now either fixed, cosmetic, or an owned irreducible prior? Is the design finally honest to its own ceiling? If you cannot find a genuine new fixable defect, say so.` },
]

const FINDINGS_SCHEMA = {
  type: 'object', additionalProperties: false,
  required: ['member', 'frame', 'findings', 'overallStance', 'atTerminalState', 'genuineNewDefect'],
  properties: {
    member: { type: 'string' }, frame: { type: 'string' },
    findings: { type: 'array', items: { type: 'object', additionalProperties: false,
      required: ['title', 'severity', 'surface', 'argument', 'fixableOrIrreducible', 'isRegress', 'suggestedFix'],
      properties: { title: { type: 'string' }, severity: { type: 'string', enum: ['fatal', 'serious', 'cosmetic'] }, surface: { type: 'string' }, argument: { type: 'string' }, fixableOrIrreducible: { type: 'string', enum: ['fixable-defect', 'irreducible-prior'] }, isRegress: { type: 'boolean', description: 'True if this reduces to "who watches the watchers" applied to a v0.5 safeguard (= accepted floor, not a new defect)' }, suggestedFix: { type: 'string' } } } },
    overallStance: { type: 'string', enum: ['worth-pursuing', 'worth-pursuing-with-fixes', 'not-worth-pursuing', 'kill'] },
    atTerminalState: { type: 'boolean' },
    genuineNewDefect: { type: 'string', description: 'The single genuine NEW fixable non-regress defect in v0.5, or "none"' },
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
    terminalConfirmed: { type: 'boolean', description: 'After cross-examination, is v0.5 at its honest ceiling (only irreducible priors + cosmetics)?' },
  },
}

const CHAIRMAN_SCHEMA = {
  type: 'object', additionalProperties: false,
  required: ['ruling', 'terminalState', 'newFixableFatalSerious', 'convinces', 'residualAreIrreducible', 'stopRecommendation', 'finalVerdict', 'anyRequiredChanges', 'synthesis'],
  properties: {
    ruling: { type: 'string', enum: ['pursue', 'pursue-with-changes', 'do-not-pursue'] },
    terminalState: { type: 'boolean' },
    newFixableFatalSerious: { type: 'number', description: 'NEW fixable non-regress fatal/serious in v0.5 (excludes accepted-floor regress items)' },
    convinces: { type: 'boolean' },
    residualAreIrreducible: { type: 'boolean' },
    stopRecommendation: { type: 'string', enum: ['stop-terminal', 'one-more-round'] },
    anyRequiredChanges: { type: 'array', items: { type: 'object', additionalProperties: false, required: ['section', 'change', 'severity'], properties: { section: { type: 'string' }, change: { type: 'string' }, severity: { type: 'string', enum: ['fatal', 'serious', 'cosmetic'] } } } },
    finalVerdict: { type: 'string', description: 'The definitive one-paragraph bottom line for the sponsor: what to build, what never to build, the surviving public impact capture, and the proven ceiling on the libertarian bar' },
    synthesis: { type: 'string' },
  },
}

// ================= EXECUTION =================

phase('Terminal attack')
const attacks = await parallel(ATTACKERS.map(a => () =>
  agent(
    `${READ_FIRST}

You are ${a.name} — read your persona at ${BASE}/agents/council-${a.persona}.md and adopt its method fully.

TERMINAL-CHECK round (the LAST). Prior rounds: the barbell earned all six frames' worth-pursuing-with-fixes; the public impact showcase is dead in every framing; the libertarian bar was proven asymptotic (residuals are irreducible priors); Round 3 found v0.4 over-built its governance; v0.5 closed those eight defects via negativa. Your job: confirm v0.5 sits at its honest ceiling, or name the single genuine NEW fixable non-regress defect if one truly exists.

YOUR FRAME: ${a.frame}.
${a.charge}

For every finding, mark fixable-defect vs irreducible-prior AND isRegress (true if it's "who watches the watchers" on a v0.5 safeguard = accepted floor). If v0.5 is honestly at its ceiling, set atTerminalState=true and genuineNewDefect="none" — that is a valid and expected outcome; do not invent a defect to justify another round.

Return findings, overall stance, terminal-state judgment, and the single genuine new non-regress defect (or "none").`,
    { label: `attack:${a.persona}`, phase: 'Terminal attack', schema: FINDINGS_SCHEMA },
  ),
)).then(r => r.filter(Boolean))

const pool = attacks.flatMap(a => a.findings.map(f => ({ severity: f.severity, kind: f.fixableOrIrreducible, regress: f.isRegress, surface: f.surface, title: f.title, argument: f.argument })))
const anonPool = pool.map((f, i) => `[F${i + 1}] (${f.severity}/${f.kind}${f.regress ? '/REGRESS' : ''}) ${f.surface} — ${f.title}: ${f.argument}`).join('\n')

phase('Cross-examination')
const crossex = await parallel(ATTACKERS.map(a => () =>
  agent(
    `You are ${a.name} (persona: ${BASE}/agents/council-${a.persona}.md). Final anonymized cross-examination. Below are ALL findings, authorship stripped. Honestly:
1. REFUTE the single weakest finding that would not survive how v0.5 actually works.
2. ESCALATE the single strongest GENUINE non-regress finding you did not author — or state that none rises to blocking-terminal.
3. WITHDRAW any of your OWN findings that are actually regress (accepted floor) or don't survive.
Then name the strongest surviving objection, and confirm whether v0.5 is at its honest ceiling.
${ANTI_REGRESS}

--- ANONYMIZED FINDINGS POOL ---
${anonPool}
--- END POOL ---`,
    { label: `crossex:${a.persona}`, phase: 'Cross-examination', schema: CROSSEX_SCHEMA },
  ),
)).then(r => r.filter(Boolean))

phase('Chairman')
const chairmanPrompt = `You are the Council Chairman delivering the DEFINITIVE closing ruling on the Cato Record spec after four adversarial rounds. Read v0.5: ${SPEC}. Continuity: ${R3}.

This is the terminal check. Prior settled results: public impact showcase dead in every framing; libertarian bar asymptotic (grudging worth-pursuing, never conviction; residuals irreducible); v0.5 closed Round-3's eight governance defects via negativa and declared four quis-custodiet residuals as accepted floors.

TERMINAL ATTACKS:
${JSON.stringify(attacks.map(a => ({ member: a.member, frame: a.frame, stance: a.overallStance, atTerminalState: a.atTerminalState, genuineNewDefect: a.genuineNewDefect, findings: a.findings })), null, 2)}

CROSS-EXAMINATION:
${JSON.stringify(crossex, null, 2)}

Rule decisively:
- Count ONLY genuine NEW fixable NON-REGRESS fatal/serious defects (exclude accepted-floor "who watches the watchers" items — those are irreducible, already owned).
- terminalState=true iff newFixableFatalSerious==0 (only irreducible priors + cosmetics remain).
- If a genuine non-regress fixable defect DID survive, list it in anyRequiredChanges — but set stopRecommendation=stop-terminal regardless (this is the last round; a residual cosmetic/serious is applied as final polish, not another full round).
- Set convinces (expected false) and residualAreIrreducible (expected true).
- finalVerdict: the definitive bottom line for the sponsor — what to build, what never to build, the one surviving public impact-capture surface (court-adoption receipts), and the proven ceiling on "convince the most hardcore libertarian."
- Single-provider caveat: convergence is a raised prior, not corroboration; §0 legal + frame-capture need outside human validation.`

const ruling = await agent(chairmanPrompt, { label: 'chairman:definitive', phase: 'Chairman', schema: CHAIRMAN_SCHEMA })

return { attacks, crossex, ruling }
