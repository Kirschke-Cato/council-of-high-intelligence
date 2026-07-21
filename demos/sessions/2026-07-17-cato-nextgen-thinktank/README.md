# Deliberation Record — Next-Generation Think Tank (Cato)

A complete, real multi-session council run: from an open generative question, through institution-grounded re-deliberation, to a productized spec hardened first by an adversarial stress test and then by a **four-round hardcore-libertarian refinement loop** that ran until the design reached its honest terminal state. Kept as both a decision record and a working example of chaining council modes — including a self-paced adversarial loop that knows when to stop.

**Headline findings of the refinement loop:** (1) the public impact-capture showcase the sponsor asked for — bill-language capture down to influencer amplification — is **dead in every framing tried** (proximity *and* subtraction); the only public "we mattered" surface that survives is court-adoption receipts. (2) "Convince the *most hardcore* libertarian" is **asymptotic, not reachable** — the ceiling is grudging worth-pursuing under permanent suspicion, because the product *is* the premise the purist rejects (a central scorekeeper of empirical truth). Both are owned in the open rather than sold around.

## The question

> The think tank industry is ripe for disruption. Hypothesize what the next generation of think tanks looks like — at the level of disruption the iPhone was to mobile phones, Tesla to ICE vehicles. The fundamentals must change, and we must be the first to build it.

## The trail

| # | Artifact | Session | Outcome |
|---|----------|---------|---------|
| 01 | [Session 1 verdict](01-verdict-session1-generic.md) | Full mode, 18 members, ungrounded | Unanimous (18.5/18.5): "staked-claims verification exchange." Sponsor unconvinced — deliberated in a vacuum. |
| 02 | [Session 2 verdict](02-verdict-session2-cato-grounded.md) | Full mode, 18 members, grounded in the Cato Institute's actual model | Prior thesis **adapted; core build rejected** (0/18 affirmed the exchange as designed). Consensus 15.5/17.5: the **Cato Record** — an embedded, litigation-anchored, dated-claim ledger; axioms never scored; external resolution; funding untouched. |
| 03 | [Stress-test report](03-stress-test-report.md) | Adversarial design triad (Rams 1.5× · Torvalds · Watts) attacking the spec | **Ship-with-fixes (2.5/3.5)**: 3 fatal + 6 serious vulnerabilities confirmed; 3 attacks refuted/withdrawn in cross-examination; frame attack partially sustained. |
| 04 | [Product spec v0.2](04-cato-record-spec-v0.2.md) | Coordinator productization, revised | All 8 required + 2 cosmetic fixes applied; version history maps every edit to its finding. |
| 05 | [Spec v0.3 — barbell](05-cato-record-spec-v0.3.md) | Libertarian Round 1 applied | Public **Impact Ledger killed**; blocking legal gate; per-author scoreboard removed; statutory-reuse kept internal. 17 fixes. |
| 06 | [Round 1 report](06-libertarian-refinement-round1.md) | 6-frame libertarian panel vs. v0.2 + a proposed impact ledger | pursue-with-changes; 5/6 frames *not*-worth-pursuing; the public influence showcase is intrinsically weaponizable. |
| 07 | [Spec v0.4 — governance](07-cato-record-spec-v0.4.md) | Libertarian Round 2 applied | Liberty Ledger → internal-only; independent-governance architecture built out; demand gate hardened. |
| 08 | [Round 2 report](08-libertarian-refinement-round2.md) | Panel vs. v0.3 + a subtraction-framed "Liberty Ledger" | All 6 frames → worth-pursuing-with-fixes; public impact surface killed in a **second** framing; bar found asymptotic. |
| 09 | [Spec v0.5 — terminal draft](09-cato-record-spec-v0.5.md) | Libertarian Round 3 applied | 8 governance defects closed via negativa; governance-complexity ceiling; accepted irreducible floors declared. |
| 10 | [Round 3 report (closing)](10-libertarian-refinement-round3.md) | Panel vs. v0.4's governance layer | Ceiling *proven* terminal; v0.4 over-built (each fix added apparatus); 7 self-withdrawals. |
| 11 | [Round 4 report (terminal check)](11-libertarian-refinement-round4.md) | Panel vs. v0.5's own fixes, anti-regress rule | **Architecture terminal**, `stop-terminal`; 3 one-edit survivors; 5 self-withdrawals; loop closed. |
| 12 | [**Spec v0.5.1 — FINAL**](12-cato-record-spec-v0.5.1-FINAL.md) | Round 4 applied; canonical | The terminal draft: three scope-completion edits + two cosmetics; only irreducible priors and accepted floors remain. |
| 13 | [**Decision memo — FINAL**](13-decision-memo-FINAL.md) | Coordinator synthesis | The bottom line: what to build, what to never build, the impact spectrum mapped tier-by-tier, and the two findings needing outside human validation. |

## Method notes

- **Grounding changed the answer.** The same 18 personas, same protocol, produced a materially different institution once the sponsor's real constraints (values mission, donor independence, litigation assets) entered the problem statement. Session 1's unanimity was flagged *from inside the room* (Kahneman) as an availability cascade — Session 2 confirmed the diagnosis while rejecting the build.
- **The stress test inverted the protocol** from generate to destroy: blind attack → anonymized cross-examination (refute one attack, escalate one, withdraw your own dead ones) → structured ship/revise/kill rulings → chairman merge. Withdrawals under cross-examination (3 of them) are the signal the adversarial round worked.
- **The refinement loop was a loop-until-dry that respected an asymptote.** Four adversarial rounds, each attacking the prior round's spec (and, in rounds 1–2, a freshly-designed impact surface). It did not stop at "no findings" (that never comes against a purist); it stopped when the chairman ruled the *architecture terminal* — every remaining objection an irreducible philosophical prior or a declared accepted floor, and every fixable survivor a one-edit correction rather than a new defect. The anti-regress rule in Round 4 explicitly refused infinite "who watches the watchers." Self-withdrawals under cross-examination (7 in R3, 5 in R4) are the signal the adversarial rounds were honest.
- **Grounding, then adversarial pressure, changed the answer twice.** Session 2 (grounding) rejected the Session-1 build; the libertarian loop (pressure) killed the sponsor's headline impact feature and proved the "convince the purist" bar unreachable — each time vindicating skepticism the coordinator did not paper over.
- **Standing caveat on all sessions:** single-provider panel (Claude-only), convergence risk rated High throughout — and *higher-stakes* in the refinement loop, where six frames converging is a strongly raised prior but not independent corroboration. The two existential findings (legal exposure; frame capture) are flagged as requiring outside human validation (counsel; Cato leadership) before any greenlight. Treat consensus as a hypothesis with kill criteria, not corroboration.

## Harness

Session-specific Workflow scripts (JavaScript, run via the coordinator's Workflow tool) are in [`harness/`](harness/):
- `council-full-panel.js` — 18-member full mode: restate gate → blind R1 → anonymized R2 → structured R3 stances → chairman synthesis. Problem statement passed via `args`.
- `council-stress-test.js` — 3-member adversarial variant: attack → cross-examination → ship/revise/kill ruling → chairman stress report. Artifact under attack passed via `args`.
- `council-libertarian-refine.js` (R1) — 6-frame hardcore-libertarian panel + an impact-ledger designer: design → blind attack → anonymized cross-examination → chairman with a structured dry-check.
- `council-libertarian-refine-r2.js` (R2) — adds a subtraction-framed public "Liberty Ledger" designer and an `untilCondition` (achievable / asymptotic / unachievable) chairman field.
- `council-libertarian-refine-r3.js` (R3, closing) — priority-targets the new governance layer; chairman rules terminal-state and a stop recommendation.
- `council-libertarian-refine-r4.js` (R4, terminal check) — binds an **anti-regress rule** (a finding counts only if it is a genuine new fixable defect, not "add another watcher") so the loop converges instead of chasing governance-of-governance.

Each spec version reads the *previous* spec and the prior reports from disk (subagents Read them), so every round attacks the live artifact and cannot re-raise already-fixed findings.

Both scripts read member personas from `agents/council-*.md` and implement the SKILL.md execution sequence (anonymization, anti-conformity directives, domain-weight seat, weighted 2/3 tally) as deterministic orchestration.
