# Deliberation Record — Next-Generation Think Tank (Cato)

A complete, real multi-session council run: from an open generative question, through institution-grounded re-deliberation, to a productized spec hardened by an adversarial stress test. Kept as both a decision record and a working example of chaining council modes.

## The question

> The think tank industry is ripe for disruption. Hypothesize what the next generation of think tanks looks like — at the level of disruption the iPhone was to mobile phones, Tesla to ICE vehicles. The fundamentals must change, and we must be the first to build it.

## The trail

| # | Artifact | Session | Outcome |
|---|----------|---------|---------|
| 01 | [Session 1 verdict](01-verdict-session1-generic.md) | Full mode, 18 members, ungrounded | Unanimous (18.5/18.5): "staked-claims verification exchange." Sponsor unconvinced — deliberated in a vacuum. |
| 02 | [Session 2 verdict](02-verdict-session2-cato-grounded.md) | Full mode, 18 members, grounded in the Cato Institute's actual model | Prior thesis **adapted; core build rejected** (0/18 affirmed the exchange as designed). Consensus 15.5/17.5: the **Cato Record** — an embedded, litigation-anchored, dated-claim ledger; axioms never scored; external resolution; funding untouched. |
| 03 | [Stress-test report](03-stress-test-report.md) | Adversarial design triad (Rams 1.5× · Torvalds · Watts) attacking the spec | **Ship-with-fixes (2.5/3.5)**: 3 fatal + 6 serious vulnerabilities confirmed; 3 attacks refuted/withdrawn in cross-examination; frame attack partially sustained. |
| 04 | [Product spec v0.2](04-cato-record-spec-v0.2.md) | Coordinator productization, revised | All 8 required + 2 cosmetic fixes applied; version history maps every edit to its finding. |

## Method notes

- **Grounding changed the answer.** The same 18 personas, same protocol, produced a materially different institution once the sponsor's real constraints (values mission, donor independence, litigation assets) entered the problem statement. Session 1's unanimity was flagged *from inside the room* (Kahneman) as an availability cascade — Session 2 confirmed the diagnosis while rejecting the build.
- **The stress test inverted the protocol** from generate to destroy: blind attack → anonymized cross-examination (refute one attack, escalate one, withdraw your own dead ones) → structured ship/revise/kill rulings → chairman merge. Withdrawals under cross-examination (3 of them) are the signal the adversarial round worked.
- **Standing caveat on all sessions:** single-provider panel (Claude-only), convergence risk rated High throughout. Treat consensus as a hypothesis with kill criteria, not corroboration.

## Harness

Session-specific Workflow scripts (JavaScript, run via the coordinator's Workflow tool) are in [`harness/`](harness/):
- `council-full-panel.js` — 18-member full mode: restate gate → blind R1 → anonymized R2 → structured R3 stances → chairman synthesis. Problem statement passed via `args`.
- `council-stress-test.js` — 3-member adversarial variant: attack → cross-examination → ship/revise/kill ruling → chairman stress report. Artifact under attack passed via `args`.

Both scripts read member personas from `agents/council-*.md` and implement the SKILL.md execution sequence (anonymization, anti-conformity directives, domain-weight seat, weighted 2/3 tally) as deterministic orchestration.
