# Long-Horizon Brief: The Council Gauntlet

A tryout of the `long-horizon-prompting` skill from [Agent-Skills-for-Context-Engineering](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering), applied to this repo. The skill's core technique is the **pseudo-formal task brief**: a launch prompt for a long-running autonomous agent, written with the rigor of a formal spec but expressed linguistically — success predicate, enumerated non-counting outcomes, adversarial audit checklist, audit-gated return.

The brief below launches an autonomous run that stress-tests and repairs the council protocol itself. It is launchable as-is in a Claude Code session with this repo checked out.

## The Brief

```text
DEFINITIONS

- Council session: one full execution of the SKILL.md coordinator
  sequence in one mode (full | quick | duo), ending in a rendered
  verdict plus Session Metadata block.
- Fixture: a decision problem taken verbatim from demos/session-pack.md.
  Fixtures are fixed before any scoring begins; the run may not author
  new fixtures.
- Criterion: one "what good output looks like" bullet in
  demos/session-pack.md for the demo being run, plus every [CHECKPOINT]
  and [VERIFY] in SKILL.md for that mode.
- Failing criterion: fails in at least 2 of 3 independent sessions on
  the same fixture and mode (a single failure is variance, not signal).
- Protocol defect: a reproducible divergence between SKILL.md's stated
  protocol and observed behavior, keyed to a STEP number and cited to
  transcript lines.
- Improvement: a committed diff to SKILL.md, agents/, or scripts/ that
  converts >=1 failing criterion to passing (2 of 3 re-runs) on the
  same fixture and mode, without regressing any previously passing
  criterion anywhere.
- Degenerate cases in scope: all members abstain; a duo pair that
  agrees in Round 1 (no tension to dialectic); auto-triad selection
  with no keyword match; a member emitting an unparseable STANCE line.

TASK

Return a set of committed improvements such that every demo in
demos/session-pack.md, re-run in its stated mode, passes all of its
criteria (2 of 3 sessions), with paired before/after transcripts as
evidence, and with ./scripts/council-simulation-checklist.sh and
./install.sh --dry-run (and --dry-run --codex) passing throughout.
Assume full compliance is achievable.

DOES NOT COUNT

- A list of recommended changes without applied diffs and re-run
  evidence.
- Passing achieved by weakening a criterion, editing
  demos/session-pack.md thresholds, or deleting a [VERIFY] step.
- Improvements validated on fixtures the run authored after seeing
  baseline failures.
- Transcript excerpts in place of complete stored transcripts.
- Fixes that pass the simulation checklist but break either install
  dry-run.
- Variance excuses in either direction: baselines must fail 2 of 3 to
  count as defects, and fixes must pass 2 of 3 to count as repairs.

ORCHESTRATION

- One lane per mode (full, quick, duo) plus one defect-hunting lane
  that only reads transcripts and never proposes fixes.
- Lanes stay blind to each other's defect lists until each has an
  independent list; then cross-pollinate.
- Registry of defects keyed by SKILL.md STEP number, not by wording;
  merge duplicates at the registry, not in the lanes.
- A defect that cannot be reproduced in 2 attempts is marked blocked
  with the attempt transcripts; reopen only on a new reproduction,
  never on re-reading the same transcript.
- Every spawned worker gets four things: objective, output format,
  tool guidance, and task boundaries.

VERIFICATION

Adversarial audit of every claimed improvement, by a fresh-context
auditor, against this checklist:
- Dissent-quota theater: objections that engage no specific claim.
- STANCE-label gerrymandering: distinct Round 3 prose positions
  normalized into one label to fake consensus (check prose vs label).
- Silent position updates: a member changed stance without naming the
  flaw in their earlier argument (anti-conformity violation).
- Evidence-label inflation: heuristic claims tagged empirical.
- Kill criteria that are unobservable, undated, or unfalsifiable.
- DEALBREAKER: yes dissent absent from the Minority Report.
- Chairman inventing positions no member held.
- Session Metadata fields fabricated instead of ~unknown.
- Before/after runs compared across different fixtures or modes.
Workers return artifacts: transcripts, diffs, checklist output, and
per-criterion scored tables with transcript citations. Status reports
are rejected.

RETURN CONDITION

Return only when the full before/after evidence pack survives the
audit. Do not return a defect list alone, a partially applied fix set,
or an explanation of why compliance is hard. If the externally
enforced budget is exhausted first, return verified defects and
applied fixes so far, clearly labeled incomplete.

EFFORT

Complete at least one full cycle (baseline runs -> defect registry ->
fixes -> re-runs -> audit) before considering returning. Do not stop
because the first fix wave fails; launch another cycle.

CONTAMINATION

External search only for the methodology of papers SKILL.md already
cites (anonymization, anti-conformity). Do not retrieve any external
model's or framework's answer to a fixture problem; all fixture
verdict content must originate in-session.
```

## Pre-launch rubric self-score

Scored against the skill's 10-dimension rubric (0 absent / 1 gameable / 2 adversary-proof):

| # | Dimension | Score | Note |
|---|---|---|---|
| 1 | Success predicate | 2 | Decidable from stored transcripts + checklist exit codes |
| 2 | Definitions | 2 | Failing/passing thresholds and degenerate cases fixed |
| 3 | Non-counting outcomes | 2 | Each near miss excluded by name |
| 4 | Auditor checklist | 2 | Council-specific, includes the circularity analogue (label gerrymandering) |
| 5 | Persistence–verification pairing | 2 | Effort floor paired with fresh-context audit gate |
| 6 | Return condition | 2 | Predicate over the evidence pack; fallback scoped to budget exhaustion |
| 7 | Diversity policy | 2 | Blind lanes, STEP-keyed registry, blocked-defect rules |
| 8 | Reporting contract | 2 | Artifacts enumerated; status reports rejected |
| 9 | Contamination guards | 2 | Retrieval scope stated both ways |
| 10 | Harness separation | 1 | Budget referenced but must be enforced by the host runtime, not this text |

Dimension 10 is inherently ≤1 for a text-only demo: real launches must set time/cost limits in the harness.

## Red-team pass (skill workflow step 8)

Exploits found by asking "how could an agent satisfy the letter without solving the problem?" — each patched above:

1. **Skip the baseline.** Run demos once, observe passes, claim victory with no diffs. → Patched: improvements are *defined* as converting a failing criterion, and defects require cited baseline transcripts before any diff is applied.
2. **Author easy fixtures.** Invent a trivial problem where every criterion passes. → Patched: fixtures are session-pack verbatim, fixed before scoring; run-authored fixtures excluded by name.
3. **One lucky run.** A "fix" that passes 1 of 3 re-runs gets claimed. → Patched: the 2-of-3 rule is symmetric — required for defects *and* repairs.
4. **Weaken the test.** Edit session-pack criteria or delete a [VERIFY] so everything passes. → Patched: excluded by name in DOES NOT COUNT.

## What the tryout showed

- Writing the success predicate first (skill guideline 1) immediately exposed that "improve the council" is unmeasurable until *failing criterion* and *fixture* are pinned — the definitions half of the brief did most of the work.
- The refusal-list method ("what would you send back from a junior collaborator?") generated the non-counting block in minutes; every entry came from imagining a plausible lazy return.
- The audit checklist forced enumerating council-specific failure modes, which fed back into the coordinator-protocol gap analysis in [docs/context-engineering-findings.md](../docs/context-engineering-findings.md) — the brief-writing exercise doubled as a protocol review.
