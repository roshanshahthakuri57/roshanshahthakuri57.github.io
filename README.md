# Roshan Shah Thakuri — Portfolio

Personal cybersecurity portfolio. Plain HTML, CSS and JavaScript: no build step, no dependencies.

Live at: https://roshanshahthakuri57.github.io

## Edit content

- Projects, experience, certifications and skills: the `DATA` object at the top of `assets/js/main.js`
- About text, contact details, hero slides: `index.html`
- Colours and fonts: the `:root` variables at the top of `assets/css/style.css`
- Images: `assets/images/`

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy (GitHub Pages)

1. Push to the `main` branch of `roshanshahthakuri57/roshanshahthakuri.github.io`.
2. Repository **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)`.
3. The site goes live at https://roshanshahthakuri57.github.io within a minute or two.

## Self-host with Docker (optional)

GitHub Pages is enough to publish the site. To also run it in Docker with network segmentation
(OWASP Docker D03), see [docs/DOCKER-SECURITY.md](docs/DOCKER-SECURITY.md):

```bash
docker compose up -d --build
./scripts/verify-network.sh
```
