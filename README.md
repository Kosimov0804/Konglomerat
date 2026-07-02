# Konglomerat

A nation-scale **AI business OS** demo: a single platform uniting 30 companies under one admin (Director), with an AI assistant at its core. Trilingual UI (Oʻzbek / Русский / English), light & dark themes, fully responsive.

Built with **Node.js built-ins only** — no `npm install`, no external dependencies. The backend (`server.js`) serves the static front-end **and** a JSON REST API from one origin.

## Features

- **Public site** — hero, About, Showrooms (product catalog), News feed, AI assistant (3 free prompts for guests), complaints.
- **Admin (Director) panel** — control center KPIs, module manager (100 modules), conferences (with meeting links), R&D review, chats, complaints management.
- **Company cabinet** — content management (products & news with 1–3 photos), monthly report, chats, R&D submissions, **buyer requests** (orders with contacts).
- **Chats** — group + 1:1, text / photos / files / voice messages, edit & delete, read receipts (seen/sent) with timestamps, live updates.
- **Business AI** (unlimited for logged-in company/admin, topic-locked) — data-aware answers, plus **attachments (photo/file/voice)** and an **official-letter generator**: it analyses a reported problem and drafts a formal letter to the admin with recommendations & solutions, which can be sent officially.
- **Notifications** — targeted per company; e.g. a purchase notifies only the product's company with the buyer's contact; click to jump to the item.
- **Photo lightbox**, form validation in the chosen language, and more.

## Run locally

Requires Node.js (18+).

```bash
node server.js
```

Then open **http://localhost:5500**.

Optional environment variables:

- `PORT` — HTTP port (default `5500`)
- `HTTPS_PORT` — HTTPS port (default `5443`), enabled automatically if a `certs/cert.pem` + `certs/key.pem` pair exists (needed for microphone/voice on other devices, which browsers only allow over HTTPS or localhost).

### Access from another device (same Wi‑Fi)

The server binds to all interfaces and prints the LAN URLs on start, e.g. `http://192.168.x.x:5500`. For voice messages on phones, use the HTTPS URL (self-signed cert — accept the browser warning). You may need to allow the port through the firewall.

## Demo accounts

| Role    | Login      | Password      |
|---------|------------|---------------|
| Admin   | `admin`    | `admin123`    |
| Company | `company1` | `company123`  |

## Project structure

```
server.js        # zero-dependency backend (HTTP + HTTPS + JSON API)
src/             # static front-end
  index.html, login.html, product.html, news.html, complaint.html, assistant.html
  admin/         # Director panel pages
  company/       # company cabinet pages
  css/style.css  # all styles (themes + responsive)
  js/main.js     # i18n, API layer, UI components
data/db.json     # runtime database (auto-seeded on first run; git-ignored)
```

> Note: `data/db.json` and `certs/` are git-ignored. The database re-seeds automatically; generate certs with OpenSSL if you want HTTPS.
