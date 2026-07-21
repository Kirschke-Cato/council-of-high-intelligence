# The Cato Record — Product Specification (Draft v0.4)

*Productization of the Council of High Intelligence Session 2 verdict (2026-07-16), hardened through three adversarial rounds: the design-triad stress test (→ v0.2), and two hardcore-libertarian refinement rounds (→ v0.3 barbell, → v0.4). All 10 required changes from Round 2 are applied; see Version History.*

> **Where three rounds of attack have left this.** All six libertarian frames now rate the design **worth-pursuing-with-fixes** (Round 1: five of six said *not*-worth-pursuing). Two conclusions are settled by convergent, cross-examined attack and will not be re-litigated:
> 1. **No public influence/impact showcase ships — in any framing.** Round 1 killed the *proximity* version ("our words in bills"); Round 2 killed the *subtraction* version ("government we shrank"), unanimously. Both collapse to the same defect: the honest configuration is near-worthless externally, and every externally-valuable configuration is a self-authenticated lobbying/teardown dossier. The only surviving public "impact" is **court-scored judicial adoption** (a forum Cato does not control), which is already the Record's own logic.
> 2. **The sponsor's bar is asymptotic.** Convincing the *most hardcore* libertarian to full conviction is unachievable by any design; the honest ceiling is **grudging "the narrow, externally-scored core is worth pursuing," held under permanent suspicion.** The residual objections are irreducible libertarian priors, not fixable defects (stated in the open in the *Residual Objections* box). Refinement cannot dissolve a philosophical prior; this draft stops claiming it can.

---

## 0. Blocking legal gate (widened in v0.4 — serious fix #5)

**No component that documents Cato's stated view on named legislation ships until outside tax- and election-law counsel signs off in writing.** Top-line precondition, costed like engineering (§9).

- **Every lane whose evidence is a Cato communication expressing a view on named legislation** — `REPEALED`, `ABOLISHED`, `SUNSET`, `BLOCKED`, `DEFUNDED` (the internal §12 tool) **and** §2 claim cards resolved on *enacted legislation + a stated Cato view* — routes through this gate. **Counsel, not the designers, decides which lanes qualify** for the "external forum is the scorekeeper" defense.
- **Only pure judicial-act lanes** (a court adopting Cato reasoning; an agency action *vacated by a court*) carry that defense cleanly, because the scorekeeping act is the court's, not Cato's.
- For the **immutable public core**, prefer **court-ruling and market/enacted-price resolvers** over "enacted legislation + stated view."
- Counsel assesses: 501(c)(3)/§4911/501(h) substantial-part and lobbying-expenditure tests; LDA and state grassroots-lobbying triggers; FARA; and **discoverability-as-admission** of any immutable, self-authenticated dataset.

**If counsel cannot clear a component, it does not ship.** The court-/data-scored core (§2–§9) survives without any statutory-position machinery.

## 1. Product thesis (barbell — with brand separation, serious fix #4)

Cato adds a **verification layer to its empirical claims**: dated, falsifiable corollaries embedded in existing outputs, resolved by forums Cato does not control, surfaced as a queryable public record. The design is a **barbell**:

- **Public end — the safe core:** genuinely external, hard-to-capture receipts — *what we claimed, what happened, including our misses* — narrated as **honesty**, never as an instrument of influence. Load-bearing pieces: the **brief-to-ruling record** and **court adoption of Cato reasoning** (courts keep score); for economics, outcomes read against **market prices / defaults / enacted text** where available rather than contested state statistics.
- **Protected end — the uncounted moral case:** the a-priori argument for liberty gets **its own funded, protected, deliberately-uncounted standing**, with a **separate surface and its own non-outcome justification** — it must *not* render under the same authority chrome as the court-scored receipts, so a reader cannot mistake earned empirical credibility for endorsement of the unfalsifiable moral case (serious fix #4). Effort flowing to this pole is **never scored as drift** (§7). *The exemption itself stays — that is the purist's own prior, not a bug.*
- **No middle:** no public affirmative influence or "government we shrank" showcase. See §12 (internal-only).

**Scope, honestly:** the Record measures the *empirical slice* — never Cato's overall honesty nor the worth of its moral case. **Optional infrastructure with a demand gate** (§6): no external pull, no graduation.

**Signature UI:** `WRONG IF <X> BY <date>`, embedded in every empirical claim.

## 2. The core object: the claim card

Machine-readable, immutable at publish (resolution appends).

| Field | Description |
|---|---|
| `claim` | One sentence, falsifiable, numeric or event-predicated |
| `attribution` | **Institutional / team-level** by default; a named individual is internal-only. **Public filtering by named author × negative status is disabled** (no per-scholar CONFIRMED:REFUTED scoreboard). |
| `filed` | Publication date |
| `wrong_if` | Pre-registered falsification criterion |
| `informativeness` | Ex-ante difficulty/base-rate score assigned by the neutral **certification body** (§8) *at filing*. `wrong_if` > ~80% pre-certain → flagged and rejected (no farming foregone conclusions). |
| `principal_bet` | Certified to capture the piece's **principal empirical claim**, not a peripheral safe one. |
| `resolves_by` | Court ruling · court adoption of reasoning · market price / observed default · enacted text · CBO/GAO/BLS/Fed print **(data-disputed lane, §3.3)**. Enacted-legislation resolvers pass through the §0 counsel gate. |
| `window` | Resolution date or event window |
| `status` | `OPEN` → `RESOLVED-CONFIRMED` / `RESOLVED-REFUTED` / `EXPIRED-UNRESOLVED` |
| `last_checked` | Most-recent monitor-pass timestamp; `⚠ MONITOR STALE` past threshold |
| `disputed` | Active-right-of-reply marker |
| `resolution` | Resolving document + note; author right-of-reply appended |
| `artifact` | Originating study/brief/testimony |

**Axiom exemption (hardened):** `NORMATIVE — not scored` granted only after **adversarial editorial review** (a designated reviewer, not the author, must fail to extract a falsifiable corollary and certify so in writing). Never scored, ranked, or funded by outcome; **own protected budget line (§9); rendered on its own surface (§1); never counted as drift (§7).**

## 3. Product surfaces

### 3.1 Embedded claim line
Every study, brief, and testimony renders its claim card(s) inline; disputed cards render the marker.

### 3.2 The Record (cato.org/record)
Public, queryable registry.
- Filter: issue area, **team/center**, status, resolution source, year. **No public per-named-author negative-status view** (per-individual views internal only).
- **Citation-safe URLs** snapshot-pinned; live status only on the canonical page.
- **Non-enumerable in bulk:** no full export, no total-able API, no bulk-scrape endpoint.
- **Court-adoption receipts (the surviving public impact capture):** where a court *cites and substantively adopts* Cato reasoning (panel-certified adoption, not a bare citation), it renders as a court-scored receipt — the one public "we mattered" surface that survives, because the scorekeeping act is the court's. Bare citations without substantive adoption do **not** qualify.
- **Hard guardrails (unchanged):** no leaderboard, rankings, aggregate score, staking, odds, or market. Chronological receipts; misses as visible as hits.

### 3.3 Resolution feed
- "Record resolved" items in existing newsletters/podcasts.
- Annual **Record Review** at Constitution Day: every claim resolved that year, **misses first**, author commentary.
- Donor-facing **Receipts Report** — "our empirical track record, plainly shown"; **no derived counts** unless the false-positive rate and construct caveat travel with them.
- **State statistics are not "reality":** contested government figures are scoped to *"[agency]'s own reported figure, which Cato contests on methodological grounds"* and routed to a **data-disputed lane**; market/default/enacted resolvers preferred.
- **Independent narration:** framing copy authored/reviewed by a non-Cato editor with contractual final say; authors keep the card right-of-reply.

### 3.4 Internal dashboard (Phase 0–1 only)
Identical registry, internal, for the PoC and Phase-1 gates before any public exposure.

## 4. Pipeline
1. **Draft** — scholar writes as today.
2. **Tag** — analyst (AI-assisted extraction proposes; author owns final language).
3. **Score & gate** — the **certification body** (§8) assigns `informativeness`, certifies `principal_bet`; editorial check confirms a card is filed **or** NORMATIVE granted via adversarial review. **Declining to card a claim is a logged, reviewable act (§7).**
4. **File** — card created at publish.
5. **Watch** — automated monitors (court dockets, agency calendars, enacted-text feeds); analyst reviews matches. **Named owner** (Record Systems Engineer), **dedicated maintenance budget** (§9), **uptime/latency are kill-criteria instruments** (§7). Every pass stamps `last_checked`.
6. **Resolve** — resolution proposed with the external document; author right-of-reply (`disputed` while active); status flips with both linked.
7. **Publish** — resolution feed (independent narration).

## 5. Users
| User | Job | What the Record gives them |
|---|---|---|
| Hill staffer | Cite credible support under deadline | A citation-safe snapshot URL |
| Law clerk | Triage amicus filers under volume | The Levy brief-to-ruling / court-adoption record |
| Cato Partner (donor) | Trust the institution they fund | The Receipts Report, plainly shown |

Sphere educator remains off the list pending a scheduled card-to-lesson layer (Phase 3).

## 6. Rollout (gated; demand gate hardened — serious fix #3)

| Phase | Scope | Gate to advance |
|---|---|---|
| **0 — Retrospective PoC** | Tag + resolve ~3 yrs of Levy amicus + major economic testimony. Internal. Sample **pre-registered before any results exist.** | ≥ target resolution rate; claims tag-able at acceptable ambiguity |
| **1 — Demand + donor test** | (a) **External-demand test (the gate):** claim lines on new Levy briefs + PoC cards shared with staffers/clerks/journalists. (b) Donor-signal (secondary). | **Gate: ≥3 *unprompted* citations from distinct, non-affiliated actors** (anyone Cato-affiliated within the prior several years disqualifies; relationships logged), **seeded vs. organic tracked separately**, **certified by the independent panel — not the team whose headcount depends on passing.** **Valence-qualified:** adversarial framing (rival fork, hostile-AG interest, "bill-mill/teardown-shop" press) is a **KILL signal, not graduation.** No citation → kill or rescope to internal hygiene. |
| **2 — Go-live (Record core only)** | Claim lines in all new publications; public registry (snapshot-pinned, non-enumerable); court-adoption receipts; resolution feed; Record Review. Watcher stack owned/budgeted/instrumented. Governance bodies (§8) constituted. | Kill-criteria dashboards green at 12–18 months |
| **3 — Adjuncts (each independently costed, piloted, demand-gated)** | Card-to-lesson layer (Sphere); Constitutional Options Desk; docket-less/positional protocol. | Each greenlit only with its own headcount **and its own hardened external-demand kill-gate** — no standing headcount before ≥3 distinct unaffiliated actors use it unprompted. |

## 7. Kill-criteria instrumentation (shipped inside the product)

- **Ex-ante informativeness / difficulty** — distribution at filing; **rising CONFIRMED-rate against falling difficulty is a hard, AUTO-EXECUTING kill trigger** (§8). Primary gauge.
- **Claim-mix drift** — contrarian-share, NORMATIVE-rate (secondary).
- **Coverage / upstream self-censorship** — share of each scholar's major empirical assertions carded vs. NORMATIVE/no-card, **per issue area**; under-carded (donor-sensitive) areas flagged.
- **Watcher health** — uptime, match-latency, stale-card count.
- **External demand** — unprompted distinct-unaffiliated citations; sustained zero is a kill signal; adversarial-framing valence tracked.
- **Mission-narrowing** — issue-area diversity and **long-horizon share**, **quarterly**; baseline set only **after** the docket-less/positional protocol is live.
- **Donor signal; resolution rate (~30% floor at 24mo); press weaponization.**

**Enforced retreat:** the most consequential retreats (informativeness kill-trigger; the internal tool's rising-`REVERSED` kill) **auto-execute on threshold breach**; the independent enforcement body holds **veto-with-published-reasons**, so a captured or slow panel cannot silently withhold the brake. Willpower is not the enforcement mechanism.

## 8. Governance — structural independence (built out, serious fix #2)

The Record's legitimacy rests on a body Cato cannot override. v0.4 specifies it and **de-concentrates its remit** before Phase 2:

- **Structural independence:** external (non-Cato) appointment; **independent/escrowed funding the panel controls**; a **secretariat that is not Cato staff**; **staggered, non-renewable terms** so no single rotation turns the majority; a **public conflict/recusal register**; a **removal process Cato cannot initiate.**
- **Separation of powers — three separately-constituted bodies, non-overlapping appointment sources:**
  1. **Certification** — assigns `informativeness`, certifies `principal_bet` and court-adoption substantiveness.
  2. **Enforcement** — owns the drift-freeze and auto-executing kill-triggers (veto-with-reasons only).
  3. **Attribution-grading** — grades the internal tool's rungs (§12).
  Plus a **thin meta-audit** whose only job is to watch the panels.
- **Rulebook published and versioned** (schemas, thresholds, tier criteria, resolution protocol) as an object of external criticism. The meta-level is **openly owned as Cato's editorial judgment**, not implied mechanically objective.
- **"Panel capturable over time" moves from *known-unexamined* to *instrumented-risk*** — the meta-audit and public conflict register are its instruments.

## 8b. What this product is never allowed to become
No staking/markets/odds/leaderboards/aggregate score. No calibration-tied comp, funding, or promotion. No scoring of normative claims. No donor influence over what gets claimed or how it resolves (and **declining to card is logged**). No copy presenting the Record as a measure of Cato's overall honesty. **No derived count** (level or growth) in fundraising/annual reports/marketing unless the FP rate and construct caveat travel with it; development-office misuse is a **logged compliance breach.**

## 9. Cost envelope (phased; legal gate + governance are top-line)
| Item | Cost | Notes |
|---|---|---|
| **Blocking legal gate (§0)** | Outside tax/election-law counsel | Precondition; costed before greenlight |
| **Governance (§8)** | Three lay/expert bodies + meta-audit + escrowed funding | Structural independence has a real price; it is the legitimacy, not overhead |
| **Phase 0–1** | 1 analyst + part-time engineering | Original "2–3 FTE" applies only here |
| **Phase 2 (Record core)** | 2–3 analysts + 0.5–1 FTE Record Systems Engineer + editorial reviewer + independent feed editor | Watcher maintenance is a standing software line |
| **Protected axiom layer** | Dedicated, uncounted budget + own surface | So the measurable never starves the principled |
| **Phase 3 adjuncts** | Each separately costed, piloted, demand-gated | No placeholder staffing |

Modest against $42–47M annual expenses and fundable from Vision for Liberty slack — but the number approved must be the phase's own number.

## 10 & 11. *(retired / folded)*
§10 (public affirmative Impact Ledger) was **killed in v0.3**. §11's internal defensive statutory-reuse detector is **subsumed into §12** below.

## 12. Internal strategic/defensive registry (was "Liberty Ledger"; demoted to internal-only — fatal fix #1, mechanism fixes #6–#9)

The subtraction taxonomy ("government that got smaller") survives **only** as an **internal, counsel-gated, curatable** tool. **No `cato.org/shrink` page ships.** The words *impact*, *influence*, and **now `helped`** are barred (serious fix #8): the only honest internal claim is *"the state retreated; Cato was of-record in the vicinity"* — proximity, which the §10/§11 verdict already places behind the wall.

- **Permitted uses only:** (a) honest internal strategy self-assessment ("are we net-shrinking anything?"); (b) reactive rebuttal of a *specific* false "Cato killed X / takes credit" claim — silence-then-rebuttal, never a standing trophy wall.
- **Curatable, not immutable** (serious fix #7): normal records-retention, so the loss-heavy, lobbying-adjacent dataset is not a permanent self-authenticated subpoena target. *(The Record core's immutability stays — load-bearing for court/data honesty.)*
- **Deterministic detection** (retained): MinHash/LSH + Smith-Waterman local alignment — auditable spans, interpretable thresholds, failure in the safe (false-negative) direction. LLM only as a reviewer's summarizer, never the detector of record. **Never a public catalogue of Cato's legislative language reuse.**
- **Mechanism gates before the tool is trusted (fix #6):**
  - (a) **Ex-ante base-rate gate** — `BLOCKED`/`SUNSET` candidates above ~80% independent probability cannot enter the WIN lane (or drop `BLOCKED` entirely).
  - (b) **Mandatory `substitution_check`** — `REPEALED`/`DEFUNDED`/`ABOLISHED` screened for a contemporaneous offsetting enactment/appropriation and **netted** before counting; unresolved substitution → pending/MISS, never a WIN.
  - (c) **`DOCTRINE-CITED` requires panel-certified substantive ADOPTION** of the brief's reasoning, not a bare citation; bare citations sit in `CLAIMED-UNCORROBORATED`.
  - (d) **`SUNSET`/`REPEALED` default to `CLAIMED` (uncounted)** unless a neutral external forum names Cato as material.
  - (e) **Durability seasoning/vesting** — no graduation to a counted WIN until the subtraction **survives ≥ one administration turnover**; until vested it renders OPEN/PENDING; a later re-growth flips `durability` on the same card (no hiding the up-tick).
  - (f) **Hard arena-capture gauge with binding auto-freeze** mirroring §7 — replaces any soft "qualitative quarterly" review.
- **Co-actor names internal only**; sole-causation strings rejected at write time; unconsenting allies are a count, not a name.
- **Legislative-position lanes route through the §0 counsel gate** (fix #5).
- **Media/influencer amplification is REACH, not impact** — if tracked at all, permanent lowest register, deduplicated/bot-filtered with the filter's error band shown, **never summed, never a public aggregate.**

---

## Residual objections (stated in the open — expanded per fix #10; the honest ceiling)

The best version earns a Rothbard/Hayek/Mises purist's **grudging "the narrow, externally-scored core is worth pursuing"** — **not conviction.** The remainder are **irreducible priors**, not fixable defects:

1. **The state as economic scorekeeper.** A REFUTED against a BLS/CBO/Fed print certifies — in numbers the hard-money wing calls mismeasured fiction — that a free-market economist was "wrong." Mitigated (data-disputed lane, market resolvers), not eliminated.
2. **State courts as neutral arbiters.** Recording a loss when an amicus fails grants the state judiciary the status of "reality"; and worse, **`VACATED`/court-adoption receipts *celebrate* a state organ exercising power** rather than merely submitting to it — a sharper concession than the core's arm's-length loss-recording.
3. **A central rulebook.** Cato authors the schema, resolution protocol, thresholds, NORMATIVE adjudication. Publishing/versioning it and handing enforcement to an independent panel mitigates; decentralized leaf-bits under a centrally-authored rulebook remains the purist's tell.
4. **The subtraction frame does not escape frame capture.** Defining wins as *subtractions from the state* still makes the state the reference frame; liberty "denominated in the state's own units" concedes the state's ledger as the map of freedom. §12's key-inversion repairs the *data model*, not the *goal*.
5. **The deepest one, unanswerable by any registry — public or internal.** The greatest libertarian victory is the idea so absorbed that no law cites it and Cato's name disappears; **every registry scores that as zero,** and building the registry creates the pull toward the countable *regardless of whether it is visible.* **The honest terminal state of a maximally-successful Liberty Ledger is an empty page.** The misses lane, moreover, covers only *of-record* oppositions, not ground ceded un-fought — so it understates defeat by construction, and the honest denominator (all state expansion) is unboundable.

The core is honest *about the slice it covers*; it is structurally silent about the victories that matter most. That is the ceiling — stated, not sold around.

---

## Version History

**v0.4 (2026-07-21)** — applies hardcore-libertarian Round 2 (all six frames → worth-pursuing-with-fixes; `dry:false`, `convinces:false`, `untilCondition: asymptotic-grudging-only`, residuals irreducible; 10 required changes):
1. §12 — public "Liberty Ledger" demoted to internal-only (the §10→§11 move again); no `cato.org/shrink` page *(fatal)*
2. §8 — independent-governance architecture: structural independence + separation of powers (certification/enforcement/attribution + meta-audit) + auto-executing kill-triggers *(serious)*
3. §6 — demand gate hardened: ≥3 distinct unaffiliated unprompted citations, seeded-vs-organic split, adversarial framing = KILL, panel-certified *(serious)*
4. §1/§2/§9 — surface/brand separation for the protected axiom pole; its own non-outcome justification *(serious)*
5. §0/§2 — counsel gate widened to all legislative-position lanes and the enacted-legislation resolver; only pure judicial lanes carry the scorekeeper defense *(serious)*
6. §12 — internal-tool mechanism gates: base-rate, substitution-check, substantive-adoption for DOCTRINE-CITED, SUNSET/REPEALED default CLAIMED, durability seasoning, hard arena-capture gauge *(serious)*
7. §12 — internal registry curatable, not immutable *(serious)*
8. §12 — bar the word "helped" (an attribution claim); internal claim is "state retreated; Cato of-record in vicinity" *(serious)*
9. §12.3 — misses denominator honesty: covers only of-record oppositions; honest denominator unboundable *(serious)*
10. Residual Objections — expanded: subtraction frame doesn't escape capture; state-units concede the map; VACATED celebrates state power; the greatest win scores zero — terminal state is an empty page *(cosmetic)*

**v0.3 (2026-07-21)** — Round 1: barbell; public Impact Ledger killed; 17 fixes.
**v0.2 (2026-07-17)** — design-triad stress test; 8 required + 2 cosmetic.
**v0.1 (2026-07-17)** — initial productization of Council Session 2 verdict.

**Known-unexamined (still flagged):** security/data-integrity of the append-only registry; whether the independent bodies remain uncaptured across decades (now instrumented, not solved).

---

*Provenance: Council Session 2 → v0.1 → design-triad stress test → v0.2 → libertarian Round 1 (public Impact Ledger killed) → v0.3 → libertarian Round 2 (public Liberty Ledger → internal-only; governance built out; bar found asymptotic) → v0.4. Single-provider caveat applies to every round: six-way convergence is a raised prior, not independent corroboration. The two existential findings (legal exposure §0; frame capture §12/Residual box) require outside human validation — counsel; Cato leadership — before any greenlight.*
