#!/usr/bin/env bash
# Checks the segmentation described in docs/DOCKER-SECURITY.md (OWASP Docker D03).
# Run from the repo root while the stack is up:  ./scripts/verify-network.sh
set -u
pass=0; fail=0
ok()  { echo "  PASS  $1"; pass=$((pass+1)); }
bad() { echo "  FAIL  $1"; fail=$((fail+1)); }
# expect <description> <0|nonzero> <command...>
expect() {
  local desc=$1 want=$2; shift 2
  "$@" >/dev/null 2>&1; local rc=$?
  if { [ "$want" = 0 ] && [ $rc -eq 0 ]; } || { [ "$want" = nonzero ] && [ $rc -ne 0 ]; }; then ok "$desc"; else bad "$desc"; fi
}

DC="docker compose"
project=${COMPOSE_PROJECT_NAME:-portfolio}

echo "1) Networks"
d=$(docker network inspect "${project}_dmz" --format '{{.Internal}}' 2>/dev/null)
[ "$d" = "false" ] && ok "dmz exists and is the routable network" || bad "dmz (got: ${d:-missing})"
i=$(docker network inspect "${project}_internal" --format '{{.Internal}}' 2>/dev/null)
[ "$i" = "true" ] && ok "internal network is internal (no route out)" || bad "internal network is internal (got: ${i:-missing})"

echo "2) Published ports: only proxy may publish one"
published=$($DC ps --format '{{.Service}} {{.Publishers}}' | grep -E '[0-9]+->[0-9]+' || true)
echo "$published" | sed 's/^/        /'
echo "$published" | grep -qE '^web ' && bad "web publishes a port" || ok "web publishes no ports"

echo "3) Membership: who is on which network"
dmz_members=$(docker network inspect "${project}_dmz" --format '{{range .Containers}}{{.Name}} {{end}}' 2>/dev/null)
echo "$dmz_members" | grep -q 'web' && bad "web is on dmz" || ok "web is NOT on dmz"

echo "4) From inside containers (assume a container is compromised)"
expect "proxy can reach web:8080"      0       $DC exec -T proxy wget -q -T 3 -O /dev/null http://web:8080/
expect "web has NO internet access"    nonzero $DC exec -T web   wget -q -T 3 -O /dev/null http://1.1.1.1/

echo "5) Through the published port"
base="http://127.0.0.1:${PORT:-8080}"
code() { curl -s -o /dev/null -w '%{http_code}' "$@"; }
[ "$(code "$base/")" = 200 ]                 && ok "GET / -> 200"            || bad "GET / -> 200"
[ "$(code -X POST "$base/" -d x)" != 200 ]   && ok "POST / is blocked"       || bad "POST / is blocked"

echo
echo "Result: ${pass} passed, ${fail} failed"
echo "Also scan from another machine:  nmap -sT -p1-65535 <host-ip>   (only 8080, or nothing with BIND=127.0.0.1)"
[ "$fail" -eq 0 ]
