# Melody AI – Music Streaming Demo

A complete, mobile-friendly Progressive Web App (PWA) music streaming experience built with **React + Vite + JavaScript**.

Inspired by the UX of popular music apps but with original design, sample data, and **only royalty-free / public sample audio**.

---

## Features (Demo Mode – works immediately)

- **Home** – Trending, New Releases, Artists, Playlists
- **Search** – Full-text + filters for Language, Genre, Mood
- **Library** – Favourites, Recently Played, Custom Playlists (saved in localStorage)
- **Languages** – Browse by Telugu, Hindi, Tamil, English, Punjabi, etc.
- **Music Player** – Play / Pause / Seek / Volume / Next / Previous / Shuffle / Repeat
- **Persistent Mini-Player** + full-screen player
- **Download button** only when `downloadAllowed: true`
- **AI Chat Assistant** – Rule-based demo (no API key needed). Ask for “calm Telugu songs”, “party tracks”, etc.
- **Responsive** – Bottom nav on mobile, sidebar on desktop
- **PWA-ready** – Installable on phone (Add to Home Screen)
- **Dark theme** with clean cards and smooth interactions

---

## Quick Start (Beginner-Friendly)

### 1. Prerequisites
- Node.js 18 or newer (https://nodejs.org)

### 2. Install dependencies
```bash
cd melody-ai
npm install
```

### 3. Run locally
```bash
npm run dev
```
Open the URL shown (usually http://localhost:5173).

### 4. Test on Android phone
1. Make sure phone and computer are on the **same Wi-Fi**.
2. Find your computer’s local IP (`ipconfig` / `ifconfig`).
3. On your phone browser open: `http://YOUR_IP:5173`

### 5. Build for production
```bash
npm run build
```

---

## Deploy to Vercel (Free)

1. This repo is already on GitHub.
2. Go to https://vercel.com → Sign in with GitHub.
3. Click **New Project** → Import `melody-ai`.
4. Click **Deploy** (no special settings needed).
5. Your live site will be at `https://your-project.vercel.app`.

---

## Optional: Supabase + Real AI later

Copy `.env.example` to `.env` and fill in values if you want to connect real services.
Never put secret API keys in frontend code. Use Vercel Serverless Functions for private keys.

---

## Legal Notice

This demo uses only **SoundHelix sample tracks** (publicly available for demonstration).  
You are responsible for ensuring any real music you add is properly licensed.  
Do **not** scrape or host unauthorized copyrighted material.

---

## Project Structure

```
melody-ai/
├── public/manifest.json
├── src/
│   ├── components/   (MusicPlayer, TrackCard, Navigation, AIChat…)
│   ├── context/      (PlayerContext)
│   ├── data/         (sampleTracks.js)
│   ├── pages/        (Home, Search, Library, Language…)
│   ├── App.jsx
│   └── index.css
├── package.json
└── README.md
```

Made with ❤️ for learning and demo purposes.
