#!/usr/bin/env bash
# Weighted STANCE tally for council tie-breaking (SKILL.md STEP 6).
# Input on stdin, one line per member: <member>|<canonical option or abstain>|<weight>
# The coordinator normalizes labels first; this script only does the arithmetic.
set -euo pipefail

awk -F'|' '
  NF != 3 { printf "error: bad line %d: %s\n", NR, $0 > "/dev/stderr"; bad = 1; next }
  {
    total += $3
    if ($2 != "abstain") {
      w[$2] += $3
      who[$2] = who[$2] (who[$2] ? ", " : "") $1 ($3 != 1 ? " [" $3 "x]" : "")
    }
  }
  END {
    if (bad) exit 1
    threshold = total * 2 / 3
    best = ""
    for (o in w) {
      printf "%s — %.1f (%s)\n", o, w[o], who[o]
      if (w[o] >= threshold && (best == "" || w[o] > w[best])) best = o
    }
    printf "W_total %.1f · threshold %.3f · ", total, threshold
    if (best != "") printf "%s carries\n", best
    else print "no option cleared threshold → escalate to user"
  }'
