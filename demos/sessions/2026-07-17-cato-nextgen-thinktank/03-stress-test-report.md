# Council of High Intelligence — Adversarial Stress Test
**Artifact under attack:** The Cato Record — Product Specification v0.1
**Panel:** Design triad — Rams (user fit / design honesty, 1.5× seat) · Torvalds (buildability / production survival) · Watts (frame validity)
**Protocol:** blind attack → anonymized cross-examination → structured ruling → Chairman synthesis
**Date:** 2026-07-17

---

## Stress-Test Report — The Cato Record Product Spec

### Verdict
**Ship-with-fixes — 2.5/3.5, clears the 2.333 threshold.** Tally by option: ship-as-is = 0; ship-with-fixes = 2.5 (Rams 1.5 + Watts 1.0); rework = 1.0 (Torvalds). Ship-with-fixes is the only option above the 2/3 line, and no member raised a dealbreaker — but Torvalds' "rework" and both ship-with-fixes votes converge on the *same* mandatory pre–Phase-2 fixes, so the fixes below are not optional polish; they are the price of the passing verdict.

### Confirmed Vulnerabilities
- **Live-status embeds let a card retroactively contradict its own citer** (fatal; found by Rams + Torvalds) — A staffer cites an OPEN card in a floor speech; the same live-status URL, still rendering in the Congressional Record and press clips, later flips to REFUTED and now shows the opposite of what was cited — zero effort by any adversary. → **Fix:** Pin cited/embedded URLs (§3.2) to a resolution-time snapshot; reserve live-status rendering for the canonical, uncited card page only.
- **Silent watcher rot — no staleness signal on cards** (fatal; found by Torvalds + Rams) — A dead docket/data scraper leaves a card reading OPEN indefinitely with no visual cue anything broke; a card that should be RESOLVED-CONFIRMED sits OPEN for months, and the citing user cannot distinguish "genuinely unresolved" from "nobody checked." → **Fix:** Add a `last_checked` timestamp field to the card schema (§2); render it visibly and flag when a monitor has gone stale past a threshold.
- **Watch-stage monitoring has no named owner or maintenance budget** (fatal; found by Torvalds) — §4 step 5 bundles three fragile scraper integrations (PACER/CourtListener, CBO/GAO/BLS/Fed calendars, legislative tracking) into "engineering share"; APIs change format, rate-limit, and vanish, and this is the exact layer that rots unnoticed. → **Fix:** Name a specific owner for the watcher stack, budget it as ongoing software maintenance (not shared "engineering share," §9), and add watcher uptime / match-latency to the §7 kill-criteria dashboard — currently the most failure-prone component has no instrument on it.
- **NORMATIVE exemption is a structural escape hatch that spares the load-bearing product** (serious; found by Torvalds + Watts) — The incentive gradient is one-directional: falsifiable claims can be REFUTED, NORMATIVE claims never are, so rational scholars drift toward the exempt layer (§7 already instruments this as "claim-mix drift," conceding the Record erodes what it measures); worse, the exemption covers "the moral case for liberty" — Cato's actual product — so the Record measures a thin, self-selected, structurally-shrinking slice while branding itself the institution's honesty. → **Fix:** Keep claim-mix drift as a hard kill trigger (§7); require adversarial editorial review of NORMATIVE declarations rather than a self-declaration checkbox (§2); and stop copy that claims the Record measures Cato's honesty — state it covers only an empirical slice.
- **2-3 FTE is a Phase-0/1 demo number costed against the whole pipeline** (serious; found by Torvalds) — §9's headcount is priced against Phase 0-1 retrospective work but carried forward across all new publications (Phase 2) plus three independently-piloted Phase 3 adjuncts, each with its own tag/watch logic; one analyst cannot tag, adjudicate, run right-of-reply, and staff three pilots. → **Fix:** Cost Phase 2 and Phase 3 FTE separately and explicitly in §9 before greenlight; do not carry the demo headcount forward as a placeholder.
- **Sphere educator is named as a Phase-2 user with no pedagogy pipeline** (serious; found by Rams) — §5 promises "classroom-ready case studies," but no pipeline step (§4) converts a legal-analytic claim card into a lesson, and Phase 3's Sphere adjunct routes educators *into* Levy rather than cards *out to* classrooms — and is unscheduled. → **Fix:** Remove the educator from the §5 Phase-2 user list until a card-to-lesson translation layer is built and scheduled, not deferred to an unscheduled adjunct.
- **Receipts Report donor gate can run on a cherry-picked PoC** (serious; found by Rams) — §6 Phase 1's gate is donor reaction to a *curated* PoC deck; nothing forces the miss set to precede the palatability test, so "stewardship through demonstrated honesty" can be staged. → **Fix:** Pre-register the Phase 0 PoC sample set (issue areas, count, date range) before it is ever shown to donors.
- **Category of one with no revealed demand** (serious; found by Watts) — "Receipts institution" (§1) is a self-told category; §5 invents four users but shows no external actor who prices accuracy — policy runs on coalition and priors, and no judge shops amici by box score. → **Fix:** Rewrite §6 Phase 1 as a *demand* test (does any external actor cite a card unprompted?), not a donor-sentiment test; kill if no external citation appears. (Partial counter: Rams noted the named user is the *clerk* doing volume triage, not the verdict-writing judge, so a triage-cost reduction can be real value even absent box-score shopping — this narrows but does not dissolve the demand question.)
- **Manufactured urgency — a solution hunting for a wound** (serious; found by Watts) — Cato's influence has never rested on prediction accuracy; §7 instruments "mission-narrowing" as a risk the product itself creates, so the urgency is generated inside the builder's frame. → **Fix:** Name one concrete loss Cato suffers *today* for lack of a Record; if none, scope the product as optional infrastructure (§1), not strategic necessity.
- **Nutrition-label typography doesn't distinguish contested resolutions from clean ones** (cosmetic; found by Rams) — One visual grammar carries both a clean external flip and a card with an active dispute logged. → **Fix:** Add a distinct visual marker for cards with an active right-of-reply dispute (§3.1/§3.2).
- **External resolution, internal narration (feed framing)** (cosmetic; found by Watts, conceded cosmetic by Torvalds) — Cato curates the feed "misses first, author commentary" (§3.3), keeping the narrative even when the verdict is external. → **Fix:** Hand resolution-feed authorship/framing to a non-Cato editor.

### Refuted or Withdrawn in Cross-Examination
- **Rams V1 "design lie / nutrition label promises FDA-grade certainty" (as a *serious* charge) — refuted.** Watts and Torvalds showed the status flips on the external document (§4 step 6); the right-of-reply is *appended* commentary, not a veto over the bit, so the label carries what it claims for the vast majority of cards. Survives only as the cosmetic visual-distinction polish above.
- **Torvalds' right-of-reply SLA critique — withdrawn by its author** as not load-bearing next to the watcher-ownership gap (downgraded, not sustained as a ship blocker).
- **Watts' "adversarial is decorative" as a *serious* framing — withdrawn by its author.** External resolution is genuinely real; only the feed's narration is Cato's, which reduces to the cosmetic feed-framing fix.

### What Survived Intact
- **The claim-card schema** — Torvalds: "it's a struct," fine as engineering (§2), pending only the added `last_checked` field.
- **The chronological, no-ranking registry and its hard guardrails** — no leaderboard, no rankings, no aggregate score, no staking/odds/market, misses as visible as hits (§3.2, §8). No attacker dented these; Torvalds called them "genuinely boring and shippable."
- **The external-resolution mechanism itself** — the bit flips on a court ruling or a BLS/CBO print, not on negotiation; sustained under cross-examination against Rams' own attack.
- **Phase 0's brief-to-ruling record** (§6) — genuinely external and falsifiable, because courts already keep score independent of the product. Watts explicitly conceded this survives; it is the load-bearing legitimate core.
- **The inherited guardrails** (donor-blind funding, moral axioms never scored, external-only resolution) — attackers were licensed to attack the frame and did, but none of these specific commitments was breached or defeated.

### Required Changes Before Ship
1. **§3.2 — snapshot-pin cited URLs.** Freeze embedded/cited card URLs to a resolution-time snapshot; restrict live-status rendering to the canonical uncited page. (Fatal.)
2. **§2 — add a `last_checked` staleness field** and surface it visibly so a stale-monitored OPEN card is distinguishable from an actively-watched one. (Fatal.)
3. **§4/§7/§9 — name and separately budget a watcher-stack owner** as ongoing software maintenance, and add watcher uptime / match-latency to the kill-criteria dashboard. (Fatal.)
4. **§9 — cost Phase 2 and Phase 3 headcount separately;** stop carrying the 2-3 FTE demo number forward across the adjuncts. (Serious.)
5. **§2 — replace the NORMATIVE self-declaration checkbox with adversarial editorial review** of normative tags, and delete copy claiming the Record measures Cato's overall honesty. (Serious.)
6. **§6 Phase 1 — convert the donor-sentiment gate into an external-demand test** (unprompted citation by a staffer/clerk/journalist), and pre-register the Phase 0 PoC sample before any donor viewing. (Serious; folds Watts' demand test and Rams' cherry-pick fix.)
7. **§5 — remove the Sphere educator from the Phase-2 user list** until a scheduled card-to-lesson translation layer exists. (Serious.)
8. **§1 — name one concrete present-day loss** the absence of a Record causes; if none, reframe the product as optional infrastructure rather than strategic necessity. (Serious.)

### The Watts Question — Is the Frame Itself Wrong?
**Partially sustained.** The panel rejected the strongest version of the frame attack — external resolution is real, not decorative; a court ruling does not care who writes the newsletter blurb, and the brief-to-ruling record borrows legitimacy from a scorekeeper Cato genuinely does not control. But two frame-level strikes survived. First, **no revealed demand**: "receipts institution" is a category Cato names for itself, and the spec never shows an external actor who prices accuracy (narrowed, not erased, by Rams' clerk-triage point). Second, and more corrosive, the **axiom exemption exempts the load-bearing product**: the persuasion game Cato actually runs is normative and unscored, so the Record can only ever measure a thin, self-selected, structurally-shrinking empirical slice while presenting as institutional honesty. What hinges on this: the product is buildable and honest *about the slice it covers*, but the marketing claim ("Cato's track record," "honesty as the stewardship product") is not supported by what the mechanism measures. Ship the falsifiable core; drop the receipts-institution self-mythology and the demand assumption until Phase 1 tests it externally.

### Rulings by Member
- **Dieter Rams [1.5x]**: ship-with-fixes | high | dealbreaker=no — Core mechanism survives; close four concrete gaps (URL snapshot, staleness signal, drop/defer Sphere educator, pre-register PoC) before Phase 2. None structural.
- **Linus Torvalds**: rework | med | dealbreaker=no — Schema and chronological registry are sound; do not believe the 2-3 FTE number covers Phase 2+3, and name/budget a watcher-owner plus add a staleness field and URL pinning before go-live. Ship Phase 0-1 as scoped.
- **Alan Watts**: ship-with-fixes | med | dealbreaker=no — Ship the court-scored falsifiable core; stop selling the "receipts institution" story around it. Make Phase 1 a demand test and stop claiming the Record measures Cato's honesty.

### Dissent
No member raised dealbreaker=yes. The nearest thing to a dissent is Torvalds' "rework" vote (below the threshold the majority cleared): his strongest argument is that the watcher stack — the operational heart of the product — has no owner and no budget line, so shipping without fixing that means the failure-most-likely component is also the one with no instrument on it. This is not a veto; it is a condition, and the majority's required fixes incorporate it.

### Epistemic Note
**Single-provider caveat:** the entire panel and this chair run on one provider (anthropic/opus), so shared blind spots cannot be triangulated away — correlated error is the standing risk, and agreement here is weaker evidence than agreement across independent providers would be. **Triad-size limit:** three seats covering user fit, production survival, and frame validity is thin; convergence (e.g., both Rams and Torvalds landing on URL-pinning and staleness) is reassuring but not broad. **Known-unattacked surfaces:** this stress test did *not* seriously probe **legal exposure** (defamation/liability when a card flips a named scholar to REFUTED; PACER terms-of-use for automated scraping), **adversarial gaming beyond the NORMATIVE hatch** (authors writing trivially-true `wrong_if` criteria to farm CONFIRMED cards), **donor politics** (whether a Partner reacts to a *specific* miss on a pet issue, not aggregate sentiment), and **security/data-integrity** of an immutable append-only registry. Treat those four as unexamined, not as clean.

---

### Session Metadata
```
schema_version: 1
mode: triad (adversarial stress-test variant)
panel_size: 3
rounds_run: 3        # attack, cross-examination, ruling + chairman synthesis
chairman_failed_fallback: no
tools_used: yes      # members read their agent definitions
input_tokens_estimate: ~unknown (subagent total ≈350k combined)
output_tokens_estimate: ~unknown
duration_seconds: ~338
provider_count: 1
fallbacks_triggered: none
```
