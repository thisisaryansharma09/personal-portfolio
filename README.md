# Aryan Sharma — Personal Developer & Excel Specialist Portfolio

A modern, responsive, high-performance personal portfolio website built with **React**, **Vite**, **Tailwind CSS v4**, and **Lucide Icons**.

---

## 🚀 Quick Start (Running Locally)

### 1. Open Terminal in the project directory
Navigate to this folder:
```bash
cd "C:\Users\Aryan Sharma\.gemini\antigravity-ide\scratch\aryan-portfolio"
```

### 2. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to:
👉 **`http://localhost:5173/`**

### 3. Build for Production
To generate optimized production-ready HTML, CSS, and JS bundles:
```bash
npm run build
```
The output files will be created in the `dist/` directory.

---

## 🎨 How to Customize Your Details

All personal information, links, and content are centralized in **[`src/data/portfolioData.js`](src/data/portfolioData.js)**. You don't need to touch complex React code to update your profile!

### 1. Adding Your Photo
1. Place your photo (e.g. `profile.jpg`) into the `public/` directory:
   ```
   aryan-portfolio/
   └── public/
       └── profile.jpg
   ```
2. Open `src/data/portfolioData.js` and update `photoUrl`:
   ```javascript
   photoUrl: "/profile.jpg",
   ```

### 2. Adding Your LinkedIn & GitHub Links
Open `src/data/portfolioData.js` and replace the placeholder URLs:
```javascript
socialLinks: {
  linkedin: "https://linkedin.com/in/your-actual-username",
  github: "https://github.com/your-actual-username",
  email: "mailto:thisisaryansharma09@gmail.com",
}
```

### 3. Adding Your Real RS-CIT Certificate Scan
1. Save your scanned certificate as `certificate.jpg` in `public/certificate.jpg`.
2. Open `src/data/portfolioData.js` and set:
   ```javascript
   imageUrl: "/certificate.jpg",
   ```

### 4. Linking Your Excel Spreadsheets or C Code
In `src/data/portfolioData.js`, each project in `projectsData` has a `detailsUrl` field. You can paste your Google Drive link, OneDrive share link, or GitHub repository URL.

---

## 🌐 Free Online Deployment

### Option A: Deploying to Vercel (Recommended — Easiest & Fastest)
1. Push this project folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/aryan-portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New..."** > **"Project"** and select your repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Click **"Deploy"**. Your website will be live in under 60 seconds with a free `.vercel.app` domain and HTTPS!

### Option B: Deploying to Netlify (Drag & Drop or Git)
- **Method 1 (Instant Drag & Drop)**:
  1. Run `npm run build` in your terminal.
  2. Log in to [netlify.com](https://netlify.com).
  3. Go to the **Sites** tab and simply drag-and-drop the `dist` folder into the Netlify upload box!
- **Method 2 (Git connection)**: Connect your GitHub repo to Netlify, set Build Command to `npm run build`, and Publish Directory to `dist`.

---

## 🛠️ Architecture & Technologies

- **React 19**: Modern component-driven UI architecture.
- **Vite 8**: Lightning-fast compilation and Hot Module Replacement (HMR).
- **Tailwind CSS v4**: Modern CSS styling with glassmorphism, glowing accents, and dark/light modes.
- **Lucide Icons & Custom SVG**: Sleek icons with accessible SVGs.
- **SEO & Performance**: OpenGraph metadata, Google Fonts (Plus Jakarta Sans & Inter), and responsive mobile drawer navigation.

---

Designed and built with curiosity by **Harshit Kumar**.
