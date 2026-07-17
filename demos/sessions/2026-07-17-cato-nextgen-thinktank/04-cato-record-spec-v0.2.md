# The Cato Record — Product Specification (Draft v0.2)

*Productization of the Council of High Intelligence Session 2 verdict (2026-07-16). Revised per the adversarial stress test of 2026-07-17 (design triad: Rams · Torvalds · Watts — verdict: ship-with-fixes). All 8 required changes and 2 confirmed cosmetic fixes are applied; see Version History for the mapping.*

---

## 1. Product thesis

Cato adds a **verification layer to its empirical claims**: dated, falsifiable corollaries embedded in existing outputs, resolved by forums Cato does not control (courts, government data, enacted legislation), and surfaced as a queryable public record.

**Scope, stated honestly (stress-test change #8, #5):** the Record measures the *empirical slice* of Cato's output — it is not, and must never be marketed as, a measure of Cato's overall honesty or the worth of its moral case, which is normative and deliberately unscored. The product is **optional infrastructure with a demand gate**, not a strategic necessity: the hypothesized loss it addresses — that Cato's empirical claims are discounted at the same rate as any advocacy shop's because a clerk, staffer, or journalist has no way to distinguish a track record from a masthead — is a **hypothesis that Phase 1 must validate with revealed external demand**. If no external actor uses the Record unprompted, it does not graduate to Phase 2.

**Signature UI:** the one-line falsification statement — `WRONG IF <X> BY <date>` — embedded in every empirical claim Cato publishes.

## 2. The core object: the claim card

A machine-readable record created at publish time and immutable thereafter (resolution appends; it never edits).

| Field | Description |
|---|---|
| `claim` | One sentence, falsifiable, numeric or event-predicated |
| `author` | Named scholar(s) — individual, not institutional |
| `filed` | Publication date |
| `wrong_if` | Pre-registered falsification criterion |
| `resolves_by` | Resolution source: court ruling · CBO/GAO/BLS/Fed data print · enacted legislation |
| `window` | Resolution date or event window |
| `status` | `OPEN` → `RESOLVED-CONFIRMED` / `RESOLVED-REFUTED` / `EXPIRED-UNRESOLVED` |
| `last_checked` | **(v0.2, fatal fix #2)** Timestamp of the most recent monitor pass against this card's resolution source. Rendered visibly on every surface; a card whose `last_checked` exceeds the staleness threshold (default 30 days) displays a `⚠ MONITOR STALE` flag so users can distinguish "genuinely unresolved" from "nobody checked." |
| `disputed` | **(v0.2, cosmetic fix)** Boolean; set while an author right-of-reply dispute is active. Renders as a distinct visual marker so contested resolutions are never typographically identical to clean ones. |
| `resolution` | Link to the resolving document + short note; author right-of-reply appended |
| `artifact` | Link to the originating study/brief/testimony |

**The axiom exemption (load-bearing, hardened in v0.2 — change #5):** normative arguments — the moral case for liberty — carry an explicit `NORMATIVE — not scored` tag. The editorial gate requires every publication to either (a) file ≥1 claim card or (b) carry the NORMATIVE tag. No unlabeled middle ground. **The NORMATIVE tag is not a self-declaration checkbox: it requires adversarial editorial review** — a designated reviewer (not the author) must attempt to extract a falsifiable corollary from the piece and certify in writing that none exists before the tag is granted. Claim-mix drift toward the exempt layer is a hard kill trigger (§7). The axiom layer is never scored, ranked, or funded by outcome.

## 3. Product surfaces

### 3.1 Embedded claim line
Every policy study, amicus brief, and testimony renders its claim card(s) inline — one line each, standardized typography. Cards with an active dispute render the distinct `disputed` marker (§2).

### 3.2 The Record (cato.org/record)
Public, queryable registry of all cards.
- Filter: issue area, author, status, resolution source, year.
- **Citation-safe URLs (v0.2, fatal fix #1):** URLs intended for citation and all third-party embeds are **pinned to a point-in-time snapshot** of the card (status as of citation date, permanently rendered, with a discreet "view current status" link). **Live-status rendering appears only on the canonical card page** at cato.org/record. A card that later flips can therefore never retroactively contradict the floor speech, brief, or article that cited it — the citer's snapshot stays true to what they cited.
- **Hard guardrails (council dealbreakers, unchanged — no attack dented these):** no leaderboard, no scholar rankings, no aggregate accuracy score, no staking, no odds, no market. Chronological receipts only. Misses as visible as hits — sorted by recency, never by score.

### 3.3 Resolution feed
Resolution events are the content engine:
- "Record resolved" items in existing newsletters and podcasts.
- Annual **Record Review** at the Constitution Day Conference (alongside the Cato Supreme Court Review): every claim resolved that year, misses first, with author commentary.
- Donor-facing annual **Receipts Report** for Cato Partners: what we claimed, what reality said, what we got wrong. **(v0.2 language change #5:** framed as "our empirical track record, plainly shown" — never as a measure of institutional honesty.**)**
- **Independent narration (v0.2, cosmetic fix):** the resolution feed's framing copy is authored or reviewed by a designated non-Cato editor (an outside contractor or advisory reviewer with contractual final say over resolution-item framing), so external resolution is not re-narrated internally. Cato authors retain the right-of-reply on the card itself.

### 3.4 Internal dashboard (Phase 0–1 only)
Identical registry, internal visibility, used for the retrospective proof-of-concept and the Phase 1 gates before any general public exposure.

## 4. Pipeline

1. **Draft** — scholar writes as today.
2. **Tag** — analyst (AI-assisted extraction proposes candidate corollaries; the author owns and approves final claim language).
3. **Gate** — editorial check: claim card(s) filed, or NORMATIVE tag granted via adversarial review (§2).
4. **File** — card created at publish; metadata embedded in the artifact.
5. **Watch** — automated monitors: court docket feeds (e.g. CourtListener/PACER), CBO/GAO/BLS/Fed release calendars, legislative tracking. Analyst reviews matches. **(v0.2, fatal fix #3):** the watcher stack has a **named individual owner** (role: Record Systems Engineer, filled before Phase 2 greenlight), a dedicated ongoing **software-maintenance budget line** (§9) — not a shared "engineering share" — and its **uptime and match-latency are first-class kill-criteria instruments** (§7). Every monitor pass stamps `last_checked` on the cards it covers (§2).
6. **Resolve** — resolution proposed with the external document; author gets a short right-of-reply (card carries the `disputed` marker while active); card flips status with both linked.
7. **Publish** — resolution feed picks it up (independent narration per §3.3).

**Resolution protocol** is pre-committed, public, and versioned. Disputes are logged on the card. (Pre-committed rules are the council's named defense against the incumbent counter-move: cosmetic dashboards with soft rules.)

## 5. Users

| User | Job to be done | What the Record gives them |
|---|---|---|
| Hill staffer | Cite credible support under deadline | A citation-safe snapshot URL, not page 34 of a PDF |
| Law clerk | Triage amicus filers under volume | The Levy Center's brief-to-ruling record on the issue |
| Cato Partner (donor) | Trust the institution they fund | The Receipts Report — the empirical track record, plainly shown |

**(v0.2, change #7):** the **Sphere educator is removed from the Phase-2 user list.** "Classroom-ready case studies" was a promise with no pipeline step behind it — nothing in §4 converts a legal-analytic claim card into a lesson. Educators return as a user if and when a **card-to-lesson translation layer** is built and scheduled as part of the Phase 3 Sphere adjunct (§6); until then the Record makes no pedagogy claims.

## 6. Rollout (gated per council kill criteria + stress-test demand gate)

| Phase | Scope | Gate to advance |
|---|---|---|
| **0** — Retrospective PoC (→ Q4 FY2026) | Tag + resolve ~3 years of Levy amicus briefs and major economic testimony. Internal. 1 analyst + Levy Center. **(v0.2, change #6):** the PoC sample set — issue areas, claim count, date range — is **pre-registered in writing before any results exist**, so the set later shown to donors or externals cannot be cherry-picked. | ≥ target resolution rate; claims prove tag-able at acceptable ambiguity |
| **1** — Demand + donor test **(v0.2, restructured, change #6)** | Two parallel tests. **(a) External-demand test (the gate):** a limited soft-launch slice — claim lines appended to new Levy briefs (already public filings) and PoC cards shared with a small set of staffers, clerks, and journalists — measuring whether **any external actor cites a card unprompted**. **(b) Donor-signal test (secondary):** the pre-registered PoC, misses included, presented to a stewardship sample of Cato Partners. | **Gate: ≥1 unprompted external citation within the test window.** If none appears, kill or permanently rescope as internal research hygiene — do not proceed to Phase 2 on donor enthusiasm alone. Donor signal must additionally be net-neutral-or-positive. |
| **2** — Go-live | Claim lines in all new publications; public registry with snapshot-pinned citation URLs; resolution feed with independent narration; Record Review at Constitution Day. Watcher stack owned, budgeted, instrumented (§4). | Kill-criteria dashboards green at 12–18 months |
| **3** — Adjuncts (each independently costed and piloted) | **Sphere-as-producer pilot** (educator cohort surfaces state-level cases — licensing, forfeiture, takings — routed to Levy) **plus the card-to-lesson translation layer** (§5). **Constitutional Options Desk** (pre-staged arguments filed as open cards *in advance* of named overreach scenarios). **Docket-less-domain protocol** (data-resolvable claims for monetary/foreign/trade policy). | Each adjunct greenlit only with its own headcount and budget (§9) |

## 7. Kill-criteria instrumentation (shipped inside the product)

Dashboards from day one:
- **Claim-mix drift** — share of novel/contrarian corollaries vs. the retrospective baseline, **and** the NORMATIVE-tag rate over time (mission-narrowing and escape-hatch alarm; hard kill trigger; 18 months).
- **Watcher health (v0.2, fatal fix #3)** — monitor uptime, match-latency (time from external event to proposed resolution), and count of cards past the `last_checked` staleness threshold. The most failure-prone component now has an instrument on it.
- **External demand (v0.2, change #6)** — unprompted citations of cards by external actors, tracked from Phase 1 onward; sustained zero is a kill signal, not merely a marketing gap.
- **Donor signal** — Partner giving + sentiment (18 months).
- **Resolution rate** — % of cards resolving within stated windows (floor ~30% at 24 months).
- **Press weaponization** — earned-media sentiment on resolved misses (12 months).

Tripping a criterion executes a pre-committed retreat (decouple from any review signal / go internal-only / narrow to brief-to-ruling / reframe presentation).

## 8. What this product is never allowed to become

- No staking, markets, odds, or leaderboards.
- No calibration-tied compensation, funding, or promotion.
- No scoring of normative claims — the moral case stays argued, not forecast.
- No donor influence over what gets claimed or how it resolves — verification is a rules change, never a money change.
- **(v0.2, change #5):** no marketing copy that presents the Record as a measure of Cato's overall honesty, integrity, or the validity of its principles. It is the empirical slice, plainly shown — nothing more is claimed.

## 9. Cost envelope (v0.2, change #4 — phased, no carried-forward demo numbers)

| Phase | Headcount | Notes |
|---|---|---|
| **0–1** | 1 claims analyst + part-time engineering support | Retrospective tagging + PoC registry; the original "2–3 FTE" figure applies **only here** |
| **2** | 2–3 claims analysts **+ 0.5–1 FTE named Record Systems Engineer (watcher stack owner, ongoing)** + editorial-gate reviewer time + independent feed editor (contract) | Watcher maintenance is a standing software budget line, not "engineering share" — scraper integrations (PACER/CourtListener, agency calendars, legislative tracking) change format, rate-limit, and vanish; this is priced as permanent maintenance |
| **3** | **Each adjunct separately costed before greenlight** (est. +1–2 FTE each for Sphere pilot incl. card-to-lesson layer, Options Desk, docket-less protocol) | Explicitly *not* covered by Phase 2 headcount; no adjunct starts on placeholder staffing |

Order of magnitude remains modest against $42–47M annual expenses and fundable from Vision for Liberty campaign slack — but the number that gets approved must be the phase's own number.

---

## Version History

**v0.2 (2026-07-17)** — applies the adversarial stress-test verdict (ship-with-fixes, 2.5/3.5; report on file):
1. §3.2 — citation/embed URLs snapshot-pinned; live status only on canonical page *(fatal: retroactive self-contradiction of citers)*
2. §2 — `last_checked` staleness field, visibly rendered with stale-monitor flag *(fatal: silent watcher rot)*
3. §4/§7/§9 — named watcher-stack owner, dedicated maintenance budget, watcher uptime/latency added to kill-criteria dashboards *(fatal: unowned failure-prone core)*
4. §9 — phased costing; demo-phase headcount no longer carried forward *(serious)*
5. §2/§3.3/§8 — NORMATIVE tag requires adversarial editorial review; all "measures Cato's honesty" copy deleted and banned *(serious: one-way escape hatch + overclaim)*
6. §6/§7 — Phase 1 gate converted from donor sentiment to revealed external demand (≥1 unprompted citation); PoC sample pre-registered before any viewing *(serious: no revealed demand + cherry-pick risk)*
7. §5 — Sphere educator removed from Phase-2 users pending a scheduled card-to-lesson layer *(serious: promise without pipeline)*
8. §1 — product reframed as optional infrastructure with a demand gate; the addressed loss stated as a Phase-1-testable hypothesis, not an assumed necessity *(serious: manufactured urgency)*
9. §2/§3.1 — `disputed` visual marker for active right-of-reply disputes *(cosmetic)*
10. §3.3 — resolution-feed narration handed to an independent non-Cato editor *(cosmetic)*

**v0.1 (2026-07-17)** — initial productization of Council Session 2 verdict.

**Known-unexamined surfaces (inherited from the stress test's epistemic note — flagged for future review, not yet probed):** legal exposure (defamation risk when a named scholar flips to REFUTED; PACER terms-of-service for automated scraping), adversarial gaming via trivially-true `wrong_if` criteria farming CONFIRMED cards, donor politics around specific pet-issue misses, and security/data-integrity of the append-only registry.

---

*Provenance: Council of High Intelligence Session 2 (18 members, Cato-grounded, consensus 15.5/17.5) → product spec v0.1 → adversarial stress test (Rams 1.5× · Torvalds · Watts; ship-with-fixes 2.5/3.5) → v0.2. Product surfaces and rollout mechanics are the coordinator's productization within the council's constraints.*
