# Docker security: network segmentation (OWASP Docker D03)

How the optional self-hosted stack (`docker-compose.yml`) follows
[OWASP Docker Security D03: Network Segmentation and Firewalling](https://github.com/OWASP/Docker-Security/blob/main/D03%20-%20Network%20Segmentation%20and%20Firewalling.md).
GitHub Pages does not use any of this; it serves the static files directly.

## Layout

```
internet --> [proxy] --- internal (no egress) --- [web]
               |
              dmz
```

| Network    | Members    | Internal? | Purpose                                            |
| ---------- | ---------- | --------- | -------------------------------------------------- |
| `dmz`      | proxy      | no        | The only network with a route out; port 8080       |
| `internal` | proxy, web | **yes**   | proxy to web only. No internet route               |

## The three requirements

**Segment your DMZ appropriately.** Only `proxy` (a thin nginx) sits in the DMZ and publishes a
port. `web`, which holds the site files, is on the internal network only and never joins `dmz`.
A compromise of the edge container still has to cross one more hop to reach the content server.

**Multiple tenants should not share the same network.** Every network is declared in the compose
file and prefixed with the project name (`portfolio_dmz`, `portfolio_internal`); nothing uses the
default bridge. Another site on the same host must run under a different project name
(`COMPOSE_PROJECT_NAME=other docker compose up -d`), which gives it separate networks.

**Define necessary communication.** The complete list of allowed paths:

| From  | To  | Port | Network    | Why                         |
| ----- | --- | ---- | ---------- | --------------------------- |
| world | proxy | 8080 | dmz (host-published) | visitors           |
| proxy | web | 8080 | internal   | fetch static pages (GET/HEAD) |

Nothing else shares a network. The proxy forwards only GET and HEAD, rate-limits per IP and
caps request size and timeouts.

## Verify

```bash
cp .env.example .env     # optional
docker compose up -d --build
./scripts/verify-network.sh
```

By hand:

```bash
docker network inspect portfolio_internal --format '{{.Internal}}'     # true
docker compose exec web wget -q -T 3 -O /dev/null http://1.1.1.1/       # must fail
nmap -sT -p1-65535 <host-ip>                                            # from another machine
```

## Limits

- Written and checked for syntax only. It has not been run against a live Docker daemon, so run
  `verify-network.sh` and treat any FAIL as a bug.
- `proxy` sits on `dmz`, which has a route out, because a port cannot be published from an
  internal network. It needs no egress, but Docker will not block it by itself. If the host runs
  other services, add `DOCKER-USER` iptables rules for the proxy and keep `BIND=127.0.0.1`
  behind a TLS reverse proxy such as Caddy.
- If this repo is served by GitHub Pages from the branch root, these files are publicly readable
  too. They contain no secrets.
- Never expose the Docker socket or the daemon's TCP port.
