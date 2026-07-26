# Context-Engineering Findings for the Council

Digest of [muratcankoylan/Agent-Skills-for-Context-Engineering](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering) (reviewed at commit `c578e85`, 2026-07-26), mapped against the council coordinator protocol. Skills reviewed in depth: `long-horizon-prompting`, `multi-agent-patterns`, `context-degradation`, `context-compression`.

## What the council already gets right

The review validates several existing design choices — keep these and cite them when challenged:

| Council mechanism | Backing principle (source skill) |
| --- | --- |
| Round 2 anonymization + anti-conformity directive | Sycophantic consensus is the dominant multi-agent failure; adversarial roles + stated disagreement before convergence (`multi-agent-patterns`) |
| Blind-first Round 1 | Keep early-round workers blind to the favored approach (`long-horizon-prompting`) |
| Agreement check >70% → counterfactual prompt | Treat fast consensus as a diversity-failure signal, not corroboration (`long-horizon-prompting`) |
| Chairman is not a deliberator | Fresh-context verifiers beat self-critique; a synthesizer who built the argument rationalizes its gaps (`long-horizon-prompting`) |
| Structured `STANCE:` line, tallied not inferred | Artifact-based reporting; reject prose impressions (`long-horizon-prompting`) |
| Per-round word limits | Constrain worker output schemas to protect the supervisor context (`multi-agent-patterns`) |
| Anonymization is label-swap only, content unchanged | Telephone-game problem: paraphrase between agents loses fidelity (`multi-agent-patterns`) |
| Fixed round budget as forcing function | Effort bounds are permissions/forcing functions, enforced outside the prompt (`long-horizon-prompting`) |

## Gaps worth adopting (ranked)

1. **Chairman audit checklist (STEP 7).** Highest-leverage finding: verifiers with an *enumerated, domain-specific* failure-mode list catch what generic "weigh by validity" instructions miss. The Chairman prompt should hunt for named council failure modes: stance-label gerrymandering (distinct prose positions normalized into one label to fake consensus), position updates that never name the flaw (silent anti-conformity violations), evidence-label inflation (heuristic claims tagged empirical), unobservable or undated kill criteria, `DEALBREAKER: yes` dissent missing from the Minority Report, and verdict positions no member actually held.

2. **Non-counting outcomes for verdicts (STEP 7 / templates).** Long-horizon briefs enumerate "answer-shaped near misses" that do not count. The verdict templates constrain format but never state what does *not* count as a verdict: "it depends" without decision conditions, a restatement of the dilemma as the Consensus section, kill criteria without thresholds. An explicit non-counting list gives the Chairman a rejection gate, not just a fill-in template.

3. **Chairman transcript ordering (STEP 7).** Attention follows a U-curve; middle-of-context content loses 10–40% recall. The Chairman receives Round 1 → 2 → 3 concatenated, which buries the cross-examination (Round 2, the highest-signal round) in the middle of an 18-member transcript. Reorder: problem + Round 3 stances first, Round 2 next, Round 1 last as appendix — or compress Round 1 to per-member structured summaries in `--full` mode (`context-degradation`, `context-compression`).

4. **`--full` supervisor bottleneck (STEP 2–3).** Production guidance caps workers per supervisor at 3–5; beyond that the coordinator spends more tokens shuttling summaries than members spend deliberating, and 18 parallel outputs push the coordinator toward its own degradation cliff. Options: two-tier synthesis (per-triad mini-synthesis before the Chairman) or filesystem coordination (members write outputs to session files; the coordinator passes paths, not content).

5. **Single-agent baseline in benchmarking (STEP 8, Phase 2).** Multi-agent runs cost ~15× single-agent baseline, and browsing-agent evaluations show token usage and model choice dominate performance variance. When the Phase 2 benchmarking harness lands, include a single-strong-model control arm per fixture — the council must beat it, not just complete.

## Adjacent pattern worth knowing

The source repo backs every volatile claim with a `claim-*` ID resolving to a dated registry (`researcher/claims/index.jsonl`). The council SKILL.md cites papers inline (Choi et al., Cui et al.) — same instinct, lighter weight. Not actionable now; worth copying if citations multiply.

## Long-horizon tryout

The `long-horizon-prompting` skill was exercised end-to-end against this repo — see [demos/long-horizon-brief.md](../demos/long-horizon-brief.md) for the resulting pseudo-formal brief, its rubric self-score, and the red-team patches.
