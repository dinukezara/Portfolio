# Deployment Guide - Portfolio

Since your project is now on GitHub, you can easily deploy it and make it live. I recommend using **Vercel** for its simplicity and automatic support for React/Vite.

## 🚀 Option 1: Vercel (Recommended)
This is the fastest and most reliable way to host a modern web app.

1. **Sign Up**: Go to [vercel.com](https://vercel.com/) and sign up using your GitHub account.
2. **New Project**: Click **"Add New"** > **"Project"**.
3. **Import**: Find your `Portfolio` repository and click **"Import"**.
4. **Deploy**: Leave all settings as default (Vercel will auto-detect Vite). Click **"Deploy"**.
5. **Live!**: Your site will be live on a `vercel.app` domain in about 1 minute.

---

## 🐙 Option 2: GitHub Pages
If you prefer to keep everything inside GitHub, follow these steps:

1. **Install Package**: In your terminal, run:
   ```bash
   npm install gh-pages --save-dev
   ```
2. **Update package.json**: Add a `homepage` field and deployment scripts:
   ```json
   "homepage": "https://dinukezara.github.io/Portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. **Deploy**: Run the following in your terminal:
   ```bash
   npm run deploy
   ```
4. **Settings**: On GitHub, go to **Settings** > **Pages** and set the source to the `gh-pages` branch.

---

## 🛠️ Handling Routing (SPA)
If you use **Option 1 (Vercel)**, routing is handled automatically. 

If you use **Option 2 (GitHub Pages)**, you might need to add a `404.html` or use `HashRouter` because GitHub Pages doesn't natively support SPA routing. **Vercel is highly recommended to avoid this issue.**
