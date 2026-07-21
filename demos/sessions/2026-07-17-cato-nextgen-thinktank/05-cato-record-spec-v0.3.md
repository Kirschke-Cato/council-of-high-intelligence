# The Cato Record — Product Specification (Draft v0.3)

*Productization of the Council of High Intelligence Session 2 verdict (2026-07-16), hardened through two adversarial rounds: the design-triad stress test of 2026-07-17 (Rams · Torvalds · Watts → ship-with-fixes → v0.2) and the **hardcore-libertarian refinement panel** of 2026-07-21 (Taleb · Machiavelli · Munger · Sun Tzu · Meadows · Socrates → **pursue-with-changes**; the public Impact Ledger killed). All 17 required changes from the libertarian round are applied; see Version History for the mapping.*

> **The decision this draft encodes.** The sponsor asked for two things: (a) a strategy that could convince *even the most hardcore libertarian* it is worth pursuing, and (b) a way to *capture impact* — from statutory language enacted in a bill down to influencer amplification. The panel found these are **in direct tension**: the public, affirmative impact showcase is the single artifact that cannot survive a purist attack and cannot be patched into surviving it (the honest version and the weaponizable version are the same dataset). Because clause (a) was stated as the hard bar, this draft resolves the conflict in its favor: **it keeps the externally-scored Record, and it retains statutory-language capture only as an internal, counsel-gated, defensive tool — never a public trophy case.** That trade is the central decision; §11 and the *Residual Objections* box state it in the open.

---

## 0. Blocking legal gate (new in v0.3 — fatal fix #2)

**No component that documents Cato's relationship to specific legislation ships until outside tax- and election-law counsel signs off in writing.** This is a top-line precondition, costed like engineering (§9), not a "known-unexamined surface."

Counsel must clear, at minimum:
- **501(c)(3) / §4911 / 501(h):** the substantial-part and lobbying-expenditure tests. A registry in which every card documents *reference to specific legislation* plus *a stated Cato view* records exactly the two elements the lobbying rules turn on. The "documentary proximity, not causation" caveat disclaims causation — which the law does **not** require — while the cards affirmatively evidence what the law **does** test.
- **LDA and state grassroots-lobbying** registration/disclosure triggers.
- **FARA**, where foreign-policy work could implicate it.
- **Discoverability-as-admission:** an immutable, self-authenticated dataset is permanent, un-curatable, and subpoenable. Counsel must assess it as a standing discovery target.

**If counsel cannot clear a component, that component does not ship.** The Record's court- and data-scored core (§2–§9) survives without any of the statutory-language machinery; the machinery (§11) is contingent on this gate.

## 1. Product thesis (barbell, restated — fixes #1, #5, #8)

Cato adds a **verification layer to its empirical claims**: dated, falsifiable corollaries embedded in existing outputs, resolved by forums Cato does not control, and surfaced as a queryable public record. The design is a **barbell**:

- **Public end — the safe core:** the genuinely external, hard-to-capture receipts — *what we claimed, what happened, including our misses* — narrated as **honesty**, never as a central instrument of influence. The load-bearing, universally-tolerated piece is the **brief-to-ruling record** (courts keep the score) and, for economics, outcomes read against **market prices / defaults / enacted text** wherever available rather than contested state statistics.
- **Protected end — the uncounted moral case:** the a-priori argument for liberty gets its **own funded, protected, deliberately-uncounted standing** (§2 axiom exemption, hardened). Movement of effort *toward* the principled and away from the measurable is **never scored as drift** (§7).
- **What is NOT in the middle:** no public, affirmative influence showcase. See §11.

**Scope, stated honestly:** the Record measures the *empirical slice* of Cato's output — never Cato's overall honesty, nor the worth of its moral case. It is **optional infrastructure with a demand gate**: if no external actor uses it unprompted (§6), it does not graduate.

**Signature UI:** the one-line falsification statement — `WRONG IF <X> BY <date>` — embedded in every empirical claim Cato publishes.

## 2. The core object: the claim card

Machine-readable, created at publish time, immutable thereafter (resolution appends; it never edits).

| Field | Description |
|---|---|
| `claim` | One sentence, falsifiable, numeric or event-predicated |
| `attribution` | **(v0.3, fatal fix #3)** Default **institutional / team-level** (e.g. "Cato — Center for Monetary and Financial Alternatives"). A named individual is recorded internally, but **public filtering by named author × negative status is disabled**, so no outsider can compute a per-scholar CONFIRMED:REFUTED ratio from the registry. See §3.2. |
| `filed` | Publication date |
| `wrong_if` | Pre-registered falsification criterion |
| `informativeness` | **(v0.3, fatal fix #4)** An ex-ante difficulty/base-rate score assigned by a neutral reviewer *at filing*, before resolution. Cards whose `wrong_if` is > ~80% pre-certain (trivially-true) are flagged and rejected — you cannot farm CONFIRMED cards on foregone conclusions. |
| `principal_bet` | **(v0.3, fatal fix #4)** The adversarial reviewer must certify the card captures the piece's **principal empirical claim**, not a peripheral safe one. |
| `resolves_by` | Resolution source: court ruling · enacted legislation · market price / observed default · CBO/GAO/BLS/Fed print **(routed to the data-disputed lane per §3.3 when the figure is contested)** |
| `window` | Resolution date or event window |
| `status` | `OPEN` → `RESOLVED-CONFIRMED` / `RESOLVED-REFUTED` / `EXPIRED-UNRESOLVED` |
| `last_checked` | Timestamp of the most recent monitor pass; a card past the staleness threshold displays `⚠ MONITOR STALE` so "genuinely unresolved" is distinguishable from "nobody checked." |
| `disputed` | Boolean; set while a right-of-reply dispute is active; renders as a distinct visual marker. |
| `resolution` | Link to the resolving document + short note; author right-of-reply appended |
| `artifact` | Link to the originating study/brief/testimony |

**The axiom exemption (load-bearing, hardened — fix #5 carried, plus barbell fix):** normative arguments carry an explicit `NORMATIVE — not scored` tag, granted only after **adversarial editorial review** (a designated reviewer, not the author, must try and fail to extract a falsifiable corollary and certify so in writing). The axiom layer is never scored, ranked, or funded by outcome — **and is given its own protected budget line (§9); effort flowing to it is never counted as "drift" (§7).**

## 3. Product surfaces

### 3.1 Embedded claim line
Every policy study, amicus brief, and testimony renders its claim card(s) inline — one line each, standardized typography; disputed cards render the distinct marker.

### 3.2 The Record (cato.org/record)
Public, queryable registry of all cards.
- Filter: issue area, **team/center**, status, resolution source, year.
- **No per-named-author negative-status view (v0.3, fatal fix #3).** Individuals are never publicly filterable by REFUTED/EXPIRED. This removes the de-facto per-scholar scoreboard that would tax exactly the high-variance intellectual courage the institution exists to produce, and denies outsiders a Cato-authenticated per-scholar opposition-research file. Per-individual views exist **internally only**.
- **Citation-safe URLs:** citation and third-party-embed URLs are **pinned to a point-in-time snapshot**; live status renders only on the canonical card page — a later flip can never retroactively contradict the brief or speech that cited it.
- **Non-enumerable in bulk (v0.3, serious fix #10):** no full export, no total-able API, no bulk scrape endpoint. An adversary cannot assemble a banned leaderboard from Cato's own clean inputs.
- **Hard guardrails (dealbreakers, unchanged):** no leaderboard, no rankings, no aggregate accuracy score, no staking, no odds, no market. Chronological receipts only; misses as visible as hits.

### 3.3 Resolution feed
- "Record resolved" items in existing newsletters and podcasts.
- Annual **Record Review** at the Constitution Day Conference: every claim resolved that year, misses first, with author commentary.
- Donor-facing annual **Receipts Report**: framed as "our empirical track record, plainly shown" — never as a measure of institutional honesty, and (v0.3, fix #10) **carrying no derived counts** unless the false-positive rate and construct caveat travel with them.
- **State statistics are not "reality" (v0.3, serious fix #7):** the phrase "what reality said" is deleted. Where a claim resolves only against a contested government statistic (CBO/GAO/BLS/Fed), it is scoped to *"[agency]'s own reported figure, which Cato contests on methodological grounds"* and routed to a **data-disputed lane** — a REFUTED there is the state's scorekeeper printing against a named Cato economist, not reality. Market prices, observed defaults, and enacted text are preferred resolvers where they exist.
- **Independent narration:** resolution-feed framing copy is authored/reviewed by a designated **non-Cato editor** with contractual final say; Cato authors keep the card right-of-reply.

### 3.4 Internal dashboard (Phase 0–1 only)
Identical registry, internal visibility, used for the retrospective PoC and Phase 1 gates before any public exposure.

## 4. Pipeline

1. **Draft** — scholar writes as today.
2. **Tag** — analyst (AI-assisted extraction proposes candidate corollaries; author owns final language).
3. **Score & gate** — neutral reviewer assigns `informativeness` and certifies `principal_bet` (§2); editorial check confirms a claim card is filed **or** the NORMATIVE tag is granted via adversarial review. **Declining to card a claim is itself a logged, reviewable act (§8).**
4. **File** — card created at publish; metadata embedded.
5. **Watch** — automated monitors (court dockets, agency release calendars, enacted-text feeds); analyst reviews matches. The watcher stack has a **named owner** (Record Systems Engineer, filled before Phase 2), a **dedicated maintenance budget line** (§9), and **uptime/latency are first-class kill-criteria instruments** (§7). Every pass stamps `last_checked`.
6. **Resolve** — resolution proposed with the external document; author right-of-reply (`disputed` while active); status flips with both linked.
7. **Publish** — resolution feed picks it up (independent narration).

**Resolution protocol** is pre-committed, public, and versioned (§8).

## 5. Users

| User | Job to be done | What the Record gives them |
|---|---|---|
| Hill staffer | Cite credible support under deadline | A citation-safe snapshot URL, not page 34 of a PDF |
| Law clerk | Triage amicus filers under volume | The Levy Center's brief-to-ruling record on the issue |
| Cato Partner (donor) | Trust the institution they fund | The Receipts Report — the empirical track record, plainly shown |

The **Sphere educator** remains off the user list until a scheduled card-to-lesson translation layer exists (Phase 3).

## 6. Rollout (gated per kill criteria + external-demand gate)

| Phase | Scope | Gate to advance |
|---|---|---|
| **0 — Retrospective PoC** | Tag + resolve ~3 years of Levy amicus briefs and major economic testimony. Internal. 1 analyst + Levy. PoC sample (issue areas, count, date range) **pre-registered in writing before any results exist.** | ≥ target resolution rate; claims prove tag-able at acceptable ambiguity |
| **1 — Demand + donor test** | (a) **External-demand test (the gate):** claim lines on new Levy briefs + PoC cards shared with a small set of staffers/clerks/journalists — does **any external actor cite a card unprompted?** (b) **Donor-signal test (secondary).** | **Gate: ≥1 unprompted external citation in-window.** No citation → kill or rescope to internal hygiene. Donor signal must be net-neutral-or-positive. |
| **2 — Go-live (Record core only)** | Claim lines in all new publications; public registry (snapshot-pinned, non-enumerable); resolution feed; Record Review. Watcher stack owned/budgeted/instrumented. | Kill-criteria dashboards green at 12–18 months |
| **3 — Adjuncts (each independently costed, piloted, and demand-gated)** | Card-to-lesson layer (Sphere); **Constitutional Options Desk** (pre-staged open cards ahead of named overreach); **docket-less / positional protocol** (data-resolvable claims for monetary/foreign/trade). | Each greenlit only with its own headcount **and its own external-demand kill-gate (v0.3, serious fix #14)** — no standing headcount before a named external actor uses it unprompted. |

## 7. Kill-criteria instrumentation (shipped inside the product)

- **Ex-ante informativeness / difficulty (v0.3, fatal fix #4)** — distribution of `informativeness` at filing; a **rising CONFIRMED-rate against falling difficulty is a hard kill trigger**. This replaces the defeatable claim-mix sensor as the primary gauge: the old sensor watched only contrarian-share and NORMATIVE-rate, both beatable by a bold-*framed* corollary on a trivially-true `wrong_if`.
- **Claim-mix drift** — contrarian-share and NORMATIVE-rate (retained as secondary).
- **Coverage / upstream self-censorship (v0.3, serious fix #8)** — share of each scholar's major empirical assertions that receive a card vs. slide to NORMATIVE/no-card, **per issue area**; systematically under-carded (donor-sensitive) areas are flagged. Guards the corruptible upstream act (whether a claim gets carded at all), not just the downstream bit-flip.
- **Watcher health** — uptime, match-latency, count of stale cards.
- **External demand** — unprompted external citations; sustained zero is a kill signal.
- **Mission-narrowing (v0.3, serious fix #13)** — issue-area diversity and **long-horizon-share** of the claim mix, measured **quarterly**. The baseline is set only **after** the docket-less/positional protocol is live, so drift is never measured against an already-drifted zero.
- **Donor signal; resolution rate (~30% floor at 24mo); press weaponization.**

**Enforced retreat (v0.3, serious fix #13):** tripping a criterion executes a **pre-committed retreat**, and the authority to pull it is **not** the institution enjoying the drift's benefits. The **independent reviewer holds binding, pre-committed authority** (board-charter provision or equivalent) to freeze new impact-type tracking on a drift signal. Willpower is not the enforcement mechanism; a structural remit is.

## 8. What this product is never allowed to become

- No staking, markets, odds, leaderboards, or aggregate score.
- No calibration-tied compensation, funding, or promotion.
- No scoring of normative claims.
- No donor influence over what gets claimed or how it resolves — *and declining to card is logged and reviewable (§7)*.
- No marketing copy presenting the Record as a measure of Cato's overall honesty.
- **(v0.3, serious fixes #10, #15):** no derived count — cross-tier or within-tier, level or growth — in fundraising, annual reports, or marketing unless the false-positive rate and construct caveat travel with it; development-office misuse is a **logged compliance breach**. The full **rulebook (schemas, thresholds, tier criteria, resolution protocol) is published and versioned as an object of external criticism** — the meta-level is openly owned as Cato's editorial judgment, not implied to be mechanically objective. The single-contractor reviewer veto is replaced by a **rotating independent panel with published conflict rules that Cato cannot override**.

## 9. Cost envelope (phased; legal gate is top-line)

| Item | Headcount / cost | Notes |
|---|---|---|
| **Blocking legal gate (§0)** | Outside tax/election-law counsel engagement | Top-line precondition; costed before any greenlight, like engineering |
| **Phase 0–1** | 1 claims analyst + part-time engineering | Retrospective tagging + PoC; the original "2–3 FTE" applies only here |
| **Phase 2 (Record core)** | 2–3 claims analysts + 0.5–1 FTE named Record Systems Engineer + editorial-gate reviewer + independent feed editor (contract) + **independent review panel** | Watcher maintenance is a standing software line |
| **Protected axiom layer** | Dedicated, uncounted budget line | So the measurable never starves the principled |
| **Phase 3 adjuncts** | Each separately costed, piloted, and demand-gated before greenlight | No adjunct on placeholder staffing |

Order of magnitude remains modest against $42–47M annual expenses and fundable from Vision for Liberty slack — but the number approved must be the phase's own number.

## 10. *(retired)* — The public Impact Ledger

**Killed in v0.3 (fatal fix #1).** The public, immutable, affirmative Impact Ledger specified for review — statutory-language capture surfaced as counts, a public 51-jurisdiction scan, published methodology/thresholds, influence narrated down to influencer amplification — **does not ship in any outward-facing form.** Five of six libertarian frames rated it not-worth-pursuing; the most permissive pulled it to internal-defensive-only. The defect is intrinsic, not fixable by feature toggles: a public, self-authenticated dataset that runs the "Copy, Paste, Legislate" / Legislative-Influence-Detector method **on Cato itself** simultaneously (a) pre-builds the "libertarian bill-mill" exposé for every future journalist, rival, and hostile AG; (b) reads as a §4911/LDA lobbying-disclosure dossier; and (c) defines "impact" as *proximity to state action*, a goal-level frame capture that, over 18–36 months, would reconstitute Cato as a more-libertarian-flavored **input to the apparatus it exists to shrink**. See §11 for the only surviving remnant.

## 11. Internal defensive attribution tool (replaces the public Ledger — fatal fixes #1, #5, #6; renamed per fix #16)

Statutory-reuse detection survives **only** as an **internal, privileged, counsel-cleared** capability. It is **not** an "Impact Ledger" and the word *impact* is barred from its copy; internally it is the **documentary-proximity / mention registry**.

- **Sole legitimate use:** rebutting a **false attribution** — when an outside party claims Cato did, or did not, author a provision. Never affirmative boasting, never a public surface, never narrated as influence. **Default posture toward "our language is in the law" is silence, not a trophy case.**
- **Curatable, not immutable (v0.3):** normal records-retention, so it is not a permanent, un-curatable discovery target. (Contrast the public Record core, which is immutable *because* it is court-/data-scored and honesty depends on non-editing.)
- **Detection is deterministic, not neural (retained from the design):** MinHash/LSH candidate generation + Smith-Waterman local alignment — auditable aligned spans, interpretable thresholds, and failure in the *safe* direction (misses paraphrases → false negatives that understate, rather than embeddings that hallucinate similarity and inflate). An LLM is admissible only as a reviewer's summarization assistant, never the detector of record.
- **Ancestry honesty (v0.3, serious fix #11):** the tool can only prove Cato was **not** first if the prior source is indexed; corpus-absence never asserts origination. The field reads *"no earlier source found in indexed corpora as of &lt;date&gt;"* with an explicit **"prior source unknown / not proven original"** state. A single contested public misattribution is a **first-class kill/rollback event**, not a datapoint in a false-positive average.
- **Negatives retained:** `STRIPPED` (Cato language present at introduction, gone by enactment) and `OPPOSED-OUTCOME` are tracked internally so a naive "we won" reading is impossible.
- **Co-actor names internal only (v0.3, serious fix #12):** the mandatory non-empty `causation_note` (which forbids sole-causation strings at write time) lives **entirely behind the wall** — publicly rendering co-actor names would write the adversary's rebuttal and out quiet coalition allies who never consented to being catalogued.
- **If a non-state definition of impact is ever built (v0.3, fatal fix #5):** it must **not** crown state-proximity. First-class, equal-or-higher categories must be **subtractions from the state** — a rule/statute **repealed, blocked, or sunset** — and **independent idea-adoption**. "Our language entered a statute" is demoted from an achievement to a fact one can defensively confirm-or-deny. If a non-state definition cannot be built, it is not built.
- **Do not open-source the weapon (v0.3, serious fix #17):** publish only the tool's *existence* and a gold-set false-positive rate for credibility — never operational thresholds, a reproducible recipe, or the live per-jurisdiction health/STALE map (which would tell a gaming adversary which weakly-monitored jurisdictions to plant-and-misattribute in, and hand any rival a "by Cato's own method, Cato wrote N laws" engine).
- **Media / influencer amplification is REACH, not impact:** if tracked at all, it sits at the permanent lowest register, deduplicated and bot-filtered with the filter's error band shown, **never summed with anything and never a public aggregate.** Reach is not impact.

---

## Residual objections (stated in the open — the honest ceiling)

The panel's verdict on the sponsor's bar — *convince even the most hardcore libertarian* — is **partial, and this draft does not pretend otherwise.** The barbell earns a Rothbard/Hayek/Mises purist's **grudging "the narrow court-scored core is worth pursuing."** It does **not** reach conviction, because three objections are **structural priors, not fixable defects**:

1. **The state as economic scorekeeper.** Even scoped to "the agency's own reported figure," a REFUTED against a BLS/CBO/Fed print certifies — in numbers the hard-money wing considers mismeasured fiction — that a free-market economist was "wrong." Mitigated by the data-disputed lane and market-price resolvers; not eliminated.
2. **State courts as neutral arbiters.** Recording a loss when an amicus fails grants the state judiciary the epistemic status of "reality" and ratifies an adjudicative monopoly a Rothbardian denies is legitimate. The court-scored receipts survive only if held explicitly at arm's length.
3. **A central rulebook.** Cato still authors the schema, resolution protocol, thresholds, and NORMATIVE adjudication. Decentralized leaf-bits under a centrally-authored rulebook is the purist's tell; publishing and versioning the rulebook mitigates but does not remove it.

And the deepest one, which the registry structurally cannot answer: **on the movement's own theory of change, the greatest victory is the idea so absorbed that no bill cites it and Cato's name disappears — a win any influence registry scores as zero.** The safe core is honest *about the slice it covers*; it is silent about the victories that matter most. That is the ceiling, and it is stated rather than sold around.

---

## Version History

**v0.3 (2026-07-21)** — applies the hardcore-libertarian refinement round (Taleb · Machiavelli · Munger · Sun Tzu · Meadows · Socrates → pursue-with-changes; `dry:false`, `convinces:false`; 17 required changes):
1. §10 — public affirmative Impact Ledger **killed**; statutory-language capture removed from all outward-facing product *(fatal)*
2. §0 — outside tax/election-law counsel sign-off made a **blocking** precondition, costed top-line *(fatal)*
3. §2/§3.2 — de-facto per-author scoreboard removed: institutional/team attribution, no public per-named-author negative-status filtering *(fatal)*
4. §2/§7 — `informativeness` (ex-ante difficulty) + `principal_bet` fields; primary kill gauge is rising-CONFIRMED-against-falling-difficulty, replacing the defeatable claim-mix sensor *(fatal)*
5. §11 — non-state impact ontology (repeal/block/sunset + idea-adoption) if any impact tracking is built; state-proximity demoted; protected uncounted axiom layer *(fatal)*
6. §11 — statutory-reuse survives only as internal, privileged, counsel-cleared, **curatable** defensive tool; deterministic Smith-Waterman/MinHash core retained *(fatal)*
7. §2/§3.3 — contested state statistics scoped and routed to a data-disputed lane; "what reality said" deleted *(serious)*
8. §7/§8 — coverage instrument for upstream self-censorship; declining-to-card is logged/reviewable *(serious)*
9. §11 — denominator honesty: "formally-documented external actions"; informal influence declared out of frame *(serious)*
10. §3.2/§3.3/§8 — anti-vanity guardrails extended to Cato's own outbound use; bulk non-enumerability; dev-office misuse a compliance breach *(serious)*
11. §11 — ancestry honesty: no origination claim on corpus-absence; "not proven original" state; misattribution is a kill/rollback event *(serious)*
12. §11 — `causation_note` internal only; co-actor names never rendered publicly *(serious)*
13. §7 — mission-narrowing instruments (issue-area diversity, long-horizon share), quarterly; retreat authority moved to independent reviewer with binding remit; baseline set post-protocol *(serious)*
14. §6 — external-demand kill-gate applied to every Phase-3 adjunct before standing headcount *(serious)*
15. §8 — rulebook published/versioned as object of external criticism; single-contractor veto replaced by rotating independent panel Cato cannot override *(serious)*
16. §11 — renamed away from "Impact Ledger"/"impact"; internally the documentary-proximity / mention registry *(serious)*
17. §11 — do not open-source the detector's thresholds/recipe or the per-jurisdiction health map *(serious)*

**v0.2 (2026-07-17)** — applied the design-triad stress test (8 required + 2 cosmetic fixes).
**v0.1 (2026-07-17)** — initial productization of Council Session 2 verdict.

**Known-unexamined surfaces (still flagged):** adversarial gaming beyond the `informativeness` gate; security/data-integrity of the append-only registry; whether the independent review panel is itself capturable over time.

---

*Provenance: Council Session 2 (18 members, Cato-grounded, 15.5/17.5) → spec v0.1 → design-triad stress test (ship-with-fixes) → v0.2 → hardcore-libertarian refinement panel (Taleb · Machiavelli · Munger · Sun Tzu · Meadows · Socrates; pursue-with-changes, public Impact Ledger killed) → v0.3. Single-provider caveat applies to every round: the six-way convergence on the legal-capture and frame-capture findings is a raised prior, not independent corroboration — the two existential findings (legal exposure §0; frame capture §11) require outside human validation (counsel; Cato leadership) before any greenlight.*
