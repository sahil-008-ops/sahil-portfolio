# Sahil Kochar - Personal Portfolio 🚀

A world-class, minimal, and modern personal portfolio built with React, Tailwind CSS, Framer Motion, and SwiperJS. Designed with a premium "startup" aesthetic (similar to Linear, Stripe, Vercel) featuring glassmorphism, dynamic animations, and dark mode support.

## 🛠️ Tech Stack
- **Framework:** [React v18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Carousels/Sliders:** [SwiperJS](https://swiperjs.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** [Inter (Google Fonts)](https://fonts.google.com/specimen/Inter)

## ✨ Features
- 🌗 **Dark / Light Mode Toggle:** Seamless theme switching with persistent local storage.
- 💨 **Smooth Animations:** Page loads, scroll reveals, timeline animations, and hover micro-interactions (powered by Framer Motion).
- 🧩 **Component-Based Architecture:** Organized structure in `src/components`.
- 📱 **Fully Responsive:** "Mobile-first" design ensures a perfect layout across all devices.
- ⚡ **Performance & SEO Optimized:** Semantic HTML syntax, structured heading hierarchy, ARIA attributes, and properly optimized structure.

## 🚀 Getting Started Locally

1. **Install Node.js:** Make sure you have [Node.js](https://nodejs.org/) installed on your machine.
2. **Navigate to the project directory:**
   ```bash
   cd sahil-portfolio-react
   ```
3. **Install Dependencies:**
   ```bash
   npm install
   ```
4. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   *Your portfolio should now be running locally at `http://localhost:5173`.*

## 🖼️ How to Add Your Assets
- **Profile Image:** Place your `profile.jpg` inside the `public/` directory (it will fall back to an auto-generated avatar if missing).
- **Resume:** Place your resume PDF inside the `public/` directory and name it `resume.pdf`.

---

## 🌩️ Deployment Guide

### Option 1: Deploying to Vercel (Recommended 🌟)
Vercel provides the fastest and easiest way to deploy Vite-based React apps.
1. Create a free account on [Vercel](https://vercel.com/).
2. Push your code to a GitHub repository, go to the Vercel Dashboard, click **Add New > Project**, and import your GitHub repository.
3. Vercel will automatically detect that it's a Vite application and configure the build settings (`npm run build` as Build Command and `dist` as Output Directory).
4. Click **Deploy**. Your site will be live securely in seconds!

### Option 2: Deploying to GitHub Pages
1. In your `vite.config.js`, add a `base` parameter that matches your repository name if it's not a root domain:
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/', // remove if deploying to yourusername.github.io
     plugins: [react()],
   })
   ```
2. Install the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```
3. Add the following scripts to your `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist",
     ...
   }
   ```
4. Run the deploy command:
   ```bash
   npm run deploy
   ```
5. In your GitHub repository settings, under Pages, ensure your source is set to the `gh-pages` branch.

## 📈 SEO & Performance Notes
- **Lighthouse Goals:** The DOM structure, lazy animations, and pure CSS frameworks push scores well into the 90+ range.
- **Accessibility:** Ensure any custom images feature descriptive `alt` tags and `aria-label` tags are present on interactive elements.

---
*Built to look and perform like a modern tech startup.*
