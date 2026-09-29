# Contributing

Thanks for contributing to Council of High Intelligence.

## Development flow

1. Sync main:
   - `git checkout main`
   - `git pull origin main`
2. Create a feature branch:
   - `git checkout -b feat/your-change`
3. Make changes and validate:
   - `shellcheck install.sh` (for installer changes)
   - `./install.sh --dry-run`
   - `./scripts/council-simulation-checklist.sh`
4. Commit with a clear message and open a PR to `main`.

## Branch cleanup after merge

If a merged branch still appears in your local remote-tracking list, prune stale refs:

- `git fetch origin --prune`

To remove a merged local branch:

- `git branch -d feat/your-change`

## Benchmarking

The Session Metadata block (`schema_version: 1`) is the logging schema for a future benchmarking harness. Every benchmark fixture must include a single-agent control arm: one Chairman-tier model answering the same problem directly, scored on the same rubric. Multi-agent runs cost ~15× a single-agent baseline, so the council must beat the control on verdict quality, not merely complete.

## Style notes

- Keep docs and installer behavior in sync.
- Prefer explicit error handling and clear user-facing output in scripts.
- Avoid hardcoded counts when files can be discovered dynamically.
- Keep `demos/session-pack.md` aligned with active profiles and triads.
