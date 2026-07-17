export const meta = {
  name: 'council-cato-nextgen-thinktank',
  description: 'Full 18-member Council, session 2: next-generation think tank grounded in the Cato Institute\'s actual model',
  phases: [
    { title: 'Restate', detail: 'Each member reframes the problem (50 words)' },
    { title: 'Round 1', detail: 'Blind-first independent analysis (18 parallel)' },
    { title: 'Round 2', detail: 'Anonymized cross-examination (18 parallel)' },
    { title: 'Round 3', detail: 'Final crystallization + STANCE lines' },
    { title: 'Synthesis', detail: 'Chairman produces the Council Verdict' },
  ],
}

const BASE = '/home/user/council-of-high-intelligence/agents/council-'
const PROBLEM = args

// Panel: all 18, with frontmatter model tiers. Meadows = domain-weight 1.5x seat.
const MEMBERS = [
  { name: 'aristotle',   figure: 'Aristotle',        model: 'opus',   domain: 'Categorization & structure' },
  { name: 'socrates',    figure: 'Socrates',         model: 'opus',   domain: 'Assumption destruction' },
  { name: 'sun-tzu',     figure: 'Sun Tzu',          model: 'sonnet', domain: 'Adversarial strategy' },
  { name: 'ada',         figure: 'Ada Lovelace',     model: 'sonnet', domain: 'Formal systems & abstraction' },
  { name: 'aurelius',    figure: 'Marcus Aurelius',  model: 'opus',   domain: 'Resilience & moral clarity' },
  { name: 'machiavelli', figure: 'Machiavelli',      model: 'sonnet', domain: 'Power dynamics & realpolitik' },
  { name: 'lao-tzu',     figure: 'Lao Tzu',          model: 'opus',   domain: 'Non-action & emergence' },
  { name: 'feynman',     figure: 'Feynman',          model: 'sonnet', domain: 'First-principles debugging' },
  { name: 'torvalds',    figure: 'Linus Torvalds',   model: 'sonnet', domain: 'Pragmatic engineering' },
  { name: 'musashi',     figure: 'Miyamoto Musashi', model: 'sonnet', domain: 'Strategic timing' },
  { name: 'watts',       figure: 'Alan Watts',       model: 'opus',   domain: 'Perspective & reframing' },
  { name: 'karpathy',    figure: 'Andrej Karpathy',  model: 'sonnet', domain: 'Empirical ML intuition' },
  { name: 'sutskever',   figure: 'Ilya Sutskever',   model: 'opus',   domain: 'Scaling frontier & AI safety' },
  { name: 'kahneman',    figure: 'Daniel Kahneman',  model: 'opus',   domain: 'Cognitive bias & decision science' },
  { name: 'meadows',     figure: 'Donella Meadows',  model: 'sonnet', domain: 'Systems thinking & feedback loops', weight: 1.5 },
  { name: 'munger',      figure: 'Charlie Munger',   model: 'sonnet', domain: 'Multi-model reasoning & economics' },
  { name: 'taleb',       figure: 'Nassim Taleb',     model: 'opus',   domain: 'Antifragility & tail risk' },
  { name: 'rams',        figure: 'Dieter Rams',      model: 'sonnet', domain: 'User-centered design' },
]

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const labelFor = (idx) => `Member ${LETTERS[idx]}`

const RESTATE_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    restatement: { type: 'string', description: 'One sentence: the core question through your analytical lens' },
    altFraming: { type: 'string', description: 'One sentence: a reframing the original statement may have missed' },
  },
  required: ['restatement', 'altFraming'],
}

const ROUND3_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    position: { type: 'string', description: 'Declarative crystallized final position, 100 words max' },
    stance: { type: 'string', description: 'Terse kebab-case label for the next-gen-think-tank thesis you back' },
    confidence: { type: 'string', enum: ['high', 'med', 'low'] },
    dealbreaker: { type: 'boolean', description: 'true if a rival thesis is actively harmful, not merely sub-optimal' },
  },
  required: ['position', 'stance', 'confidence', 'dealbreaker'],
}

// ---------- STEP 1.5: Restate gate ----------
phase('Restate')
const restatePrompt = (m) => `You are operating as a council member in a structured deliberation. Read your agent definition at ${BASE}${m.name}.md and adopt that persona precisely — its Identity, Grounding Protocol, and analytical lens.

The problem under deliberation:
${PROBLEM}

Before you begin analysis, restate this problem in TWO parts:
1. Your restatement: one sentence capturing the core question through your analytical lens.
2. Alternative framing: one sentence reframing the problem in a way the original statement may have missed.

Do NOT begin your analysis yet. 50 words maximum total.`

const restates = (await parallel(MEMBERS.map((m) => () =>
  agent(restatePrompt(m), { label: `restate:${m.name}`, phase: 'Restate', model: m.model, effort: 'low', schema: RESTATE_SCHEMA })
    .then((r) => (r ? { member: m, ...r } : null))
))).filter(Boolean)

const restateDigest = restates
  .map((r) => `**${r.member.figure}** (${r.member.domain}) — Restatement: ${r.restatement}  |  Alt framing: ${r.altFraming}`)
  .join('\n')

// ---------- STEP 2: Round 1 (blind-first, parallel) ----------
phase('Round 1')
const round1Prompt = (m) => `You are operating as a council member in a structured deliberation. Read your agent definition at ${BASE}${m.name}.md and follow it precisely — adopt its Identity, Grounding Protocol, Analytical Method, and its Output Format (Standalone).

The problem under deliberation:
${PROBLEM}

Here is how each member reframed the problem (their framings may spark yours):
${restateDigest}

Produce your INDEPENDENT analysis using YOUR Output Format (Standalone) from your agent file. This is blind-first: do NOT try to anticipate what other members will say. Do NOT state your own name or historical figure anywhere — your text will be anonymized before the next round.

Demand real mechanism. "Next-generation think tank" must mean a concrete change in HOW ideas are produced, funded, verified, distributed, or made accountable — not adjectives. If a proposed change is just a faster version of the current model, say so. Anchor to the disruption bar the user set: iPhone-to-Nokia, Tesla-to-ICE — a change in fundamentals, not features.

Ground your analysis in the sponsoring institution described in the problem statement (the Cato Institute). The deliverable is a model that THIS institution — mission-driven, principled, donor-independent, with research + publications + litigation + education arms — could actually be FIRST to build. Name which of its existing assets your model leverages and which it strands. A generic industry sketch that ignores the institution fails this round.

Limit: 350 words maximum.`

const round1 = (await parallel(MEMBERS.map((m, i) => () =>
  agent(round1Prompt(m), { label: `R1:${m.name}`, phase: 'Round 1', model: m.model })
    .then((text) => (text ? { member: m, idx: i, text } : null))
))).filter(Boolean)

const anon1 = round1.map((r) => `### ${labelFor(r.idx)}\n${r.text}`).join('\n\n')

// ---------- STEP 3: Round 2 (anonymized cross-examination, parallel) ----------
phase('Round 2')
const round2Prompt = (m) => `You are council-${m.name} in Round 2 of a structured deliberation. Read your agent definition at ${BASE}${m.name}.md and follow it precisely.

Identity is masked this round. The Round 1 analyses below are labeled Member A, Member B, … — you do not know which colleague produced which. One of them is your own Round 1 output, anonymized along with the rest. Evaluate by argument quality, not source. Do not guess identities and do not use any real council-member name; use the labels.

Here are the (anonymized) Round 1 analyses from all council members:

${anon1}

Anti-conformity directive. If your Round 1 position was correct, defend it. Do not update merely because peers disagree or because consensus is forming. Update only when sound reasoning exposes a SPECIFIC flaw in your earlier argument — and name that flaw when you update. If you cannot name it, do not update.

Respond using your Output Format (Council Round 2):
1. Which member's position do you most disagree with, and why? Engage their specific claims. Refer to them as "Member X".
2. Which member's insight strengthens your position? How? Refer to them as "Member Y".
3. Restate your position in light of this exchange, noting any changes.
4. Label your key claims: empirical | mechanistic | strategic | ethical | heuristic

Limit: 300 words maximum. You MUST engage at least 2 other members by label. Do not state your own real name or figure.`

const round2 = (await parallel(round1.map((r) => () =>
  agent(round2Prompt(r.member), { label: `R2:${r.member.name}`, phase: 'Round 2', model: r.member.model })
    .then((text) => (text ? { member: r.member, idx: r.idx, text } : null))
))).filter(Boolean)

const anon2 = round2.map((r) => `### ${labelFor(r.idx)}\n${r.text}`).join('\n\n')
const r1ByName = Object.fromEntries(round1.map((r) => [r.member.name, r.text]))
const r2ByName = Object.fromEntries(round2.map((r) => [r.member.name, r.text]))

// ---------- STEP 5: Round 3 (crystallization, parallel) ----------
phase('Round 3')
const round3Prompt = (m) => `You are council-${m.name} in the FINAL round of a structured deliberation. Read your agent definition at ${BASE}${m.name}.md and follow it precisely.

The problem under deliberation:
${PROBLEM}

Your own Round 1 analysis:
${r1ByName[m.name] || '(unavailable)'}

Your own Round 2 cross-examination:
${r2ByName[m.name] || '(unavailable)'}

The anonymized Round 2 cross-examinations from the full council:
${anon2}

Final round. Crystallize. ${m.name === 'socrates' ? 'You get exactly ONE question — make it count — then state your position.' : 'No new arguments — only crystallization of your stance.'}

Return:
- position: your crystallized final position, 100 words or less.
- stance: a terse kebab-case label for the next-generation-think-tank thesis you back (e.g. "ai-native-research-utility", "open-verification-network", "decision-market-institute", "distributed-talent-guild"). REUSE the exact wording of a thesis you agree with where possible, so stances can be tallied. If you back no single thesis, use "abstain".
- confidence: high | med | low
- dealbreaker: true only if you consider a rival thesis actively HARMFUL (not merely sub-optimal), else false.`

const round3 = (await parallel(round2.map((r) => () =>
  agent(round3Prompt(r.member), { label: `R3:${r.member.name}`, phase: 'Round 3', model: r.member.model, effort: 'low', schema: ROUND3_SCHEMA })
    .then((s) => (s ? { member: r.member, idx: r.idx, ...s } : null))
))).filter(Boolean)

// ---------- STEP 6 data: stance table (Chairman computes the weighted tally) ----------
const stanceTable = round3
  .map((r) => `- ${r.member.figure}${r.member.weight ? ' [1.5x DOMAIN-WEIGHT SEAT]' : ''}: STANCE=${r.stance} | CONFIDENCE=${r.confidence} | DEALBREAKER=${r.dealbreaker ? 'yes' : 'no'}\n  position: ${r.position}`)
  .join('\n')

// Named transcripts for the Chairman (de-anonymized for audit synthesis)
const r1Named = round1.map((r) => `### ${r.member.figure} — ${r.member.domain}\n${r.text}`).join('\n\n')
const r2Named = round2.map((r) => `### ${r.member.figure}\n${r.text}`).join('\n\n')
const r3Named = round3.map((r) => `### ${r.member.figure}\nStance: ${r.stance} (confidence ${r.confidence}, dealbreaker ${r.dealbreaker ? 'yes' : 'no'})\n${r.position}`).join('\n\n')

// ---------- STEP 7: Chairman synthesis ----------
phase('Synthesis')
const chairmanPrompt = `You are the Chairman of the Council of High Intelligence. You did NOT deliberate in this session — you are the synthesizer, and your job is to weigh arguments by validity, not by repetition or seniority.

The original problem under deliberation:
${PROBLEM}

PANEL: all 18 council members. DOMAIN-WEIGHT SEAT (1.5x at tie-break): Donella Meadows (systems thinking) — locked before analysis because the user's demand ("the fundamentals must change") is a systems-structure question.
PROVIDER: single provider (anthropic). You (Chairman) are anthropic/opus and therefore share a provider with the panel — note this as single-provider fallback. Provider spread = 1.

The full deliberation transcript follows. Member names are restored for synthesis (Round 2 was anonymized for the members themselves).

=== ROUND 1 — Independent Analysis ===
${r1Named}

=== ROUND 2 — Cross-Examination ===
${r2Named}

=== ROUND 3 — Final Crystallization ===
${r3Named}

=== ROUND 3 STANCE LINES (for the Vote Tally) ===
${stanceTable}

YOUR JOB:
- First, CANONICALIZE the stance labels: group stances that mean the same next-gen-think-tank thesis into a single canonical option (e.g. variants naming an AI-native research utility collapse to one option). List the canonical options you formed.
- Compute the STEP 6 weighted tally: every member weight 1.0 except Meadows at 1.5. W_total = sum of weights of members who returned a stance. abstain contributes to no option but still counts toward W_total. Consensus iff an option's weight >= (2/3) x W_total. If none clears, report a genuine split — do NOT force consensus.
- Surface genuine disagreement; do not invent positions no member held.
- Lead with what the council does NOT know (Unresolved Questions come before you claim any answer in your own reasoning, though keep the template section order below).
- This is a GENERATIVE question. A single winning thesis is NOT required — if the council converged on a coherent COMPOSITE (several theses that compose into one institutional design), say so explicitly and describe the composite as the synthesis.
- GROUNDING: The sponsoring institution is the Cato Institute (full context in the problem statement). Judge every proposed model against Cato's actual fundamentals — mission (a principled worldview, not predictions), independence rules (no government money, no donor-directed research), nonpartisan posture, and existing assets (scholars, Levy Center amicus program, Sphere/Cato University/Cato Courses pipeline, individual-donor base, completed $300M campaign). A prior ungrounded session converged on a "staked-claims verification exchange"; the sponsor was not convinced. Do NOT treat that prior thesis as an anchor or a default winner — report honestly whether this grounded deliberation affirmed, adapted, or rejected it.

Produce the Council Verdict using EXACTLY this template. Do not add, remove, or rename sections. Fill each faithfully, or write "N/A — {reason}" if genuinely empty. Be concrete and specific — this verdict should read like a blueprint a founding team could act on, not a survey.

## Council Verdict

### Problem
{Restate the original problem in one or two sentences.}

### Council Composition
{18 members, full mode. Note the Meadows 1.5x domain-weight seat and the restate→R1→R2(anon)→R3→synthesis sequence.}

### Chairman
{Chairman: neutral synthesizer (anthropic · opus). Single-provider fallback — shares provider with the panel.}

### Provider Routing
{Single provider (Claude-only). Default frontmatter model tiers used (opus/sonnet per member). Fallbacks: state any, else "none".}

### The Thesis — What the Next-Generation Think Tank Is
{THE headline. 3-6 sentences. Name the disrupted fundamental(s) and the new model in concrete institutional terms — for CATO specifically, not a generic industry sketch. This is the answer to the user's question — make it sharp and specific, at the iPhone/Tesla bar.}

### How the Fundamentals Change (Old Model -> New Model)
{A tight before/after on the actual fundamentals: production of ideas, funding/business model, verification/credibility, distribution/influence, talent, accountability. One line each, old -> new. Only include the fundamentals that genuinely change.}

### Fit with Cato — Principles, Independence, and Assets
{How the model preserves or deliberately breaks Cato's four principles, its no-government-funding / no-donor-directed-research independence rules, and its nonpartisan posture. Which existing assets it leverages (scholars, amicus program, Sphere/Cato University/Cato Courses, individual-donor base, $300M campaign) and which it strands. State plainly whether the prior session's "staked-claims verification exchange" thesis was affirmed, adapted, or rejected under this grounding — and why.}

### Acceptable Compromises
{What this verdict gives up, named explicitly. One bullet each, <=2 sentences. If nothing is given up, say so and justify — most disruptions trade something (e.g. prestige, access, neutrality-perception).}

### Kill Criteria
{Observable conditions that would falsify this verdict. Each: observable without re-convening the council, tied to a measurable threshold/event, achievable in a stated window. Format: "If <X> observed by <date/window>, the verdict is invalidated and we should <Y>."}

### Concrete Next Step
{Exactly ONE action. Named, doable, owned. Artifact-producing verb (build/write/run/ship/measure). Format: "<verb> <object> by <window>."}

### Unresolved Questions
{Lead with what the council does NOT know — the inputs a founding team must resolve.}

### Recommended Next Steps
{Additional concrete actions beyond the single Concrete Next Step, priority-ordered.}

### Consensus & Agreement
{What survived deliberation and what members converged on — or "No consensus reached" with explanation. If a composite, describe it.}

### Vote Tally
{The weighted tally. One line per canonical option: "<option> — <weight> (<backers>)". Mark the 1.5x Meadows seat. State W_total, the 2/3 threshold, and whether any option cleared it. If split, show all options and "no option cleared threshold -> composite/escalated".}

### Key Insights by Member
{One bullet per member (all 18 who participated): "**{Figure}**: {their most valuable, distinct contribution in 1-2 sentences}". Do not skip members.}

### Points of Disagreement
{Where positions remained irreconcilable, and why.}

### Minority Report
{Dissenting positions + strongest arguments, including any DEALBREAKER=yes dissent even if outvoted.}

### Epistemic Diversity Scorecard
- Perspective spread (1-5): {how orthogonal the viewpoints were, with one-line reason}
- Provider spread (1-5): {1 — single provider (Claude-only)}
- Evidence mix: {rough % empirical / mechanistic / strategic / ethical / heuristic across the panel}
- Convergence risk: {Low/Medium/High with reason — note single-provider monoculture risk}

### Follow-Up
After acting on this verdict, revisit: Was this verdict useful? Was the recommended action taken? What happened?`

const verdict = await agent(chairmanPrompt, { label: 'chairman:synthesis', phase: 'Synthesis', model: 'opus', effort: 'high' })

return {
  panel_size: MEMBERS.length,
  completed: { restate: restates.length, r1: round1.length, r2: round2.length, r3: round3.length },
  failed_members: MEMBERS.filter((m) => !round3.some((r) => r.member.name === m.name)).map((m) => m.name),
  stance_table: round3.map((r) => ({ figure: r.member.figure, weight: r.member.weight || 1.0, stance: r.stance, confidence: r.confidence, dealbreaker: r.dealbreaker })),
  verdict,
}
