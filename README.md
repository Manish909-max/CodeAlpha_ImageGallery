# 📸 PhotoGrid — Responsive Image Gallery

A modern, responsive image gallery built with **pure HTML, CSS, and JavaScript** — no frameworks, no dependencies. Features a filterable grid, smooth lightbox, touch swipe, and keyboard navigation.

---

## ✨ Features

| Feature | Details |
|---|---|
| **Responsive Grid** | Auto-fill CSS Grid — adapts to desktop, tablet, and mobile |
| **Hover Effects** | Zoom-in image, overlay fade, lift + shadow |
| **Category Filters** | All · 🌿 Nature · 🏛️ Architecture · 👤 People · ✈️ Travel · 🎨 Abstract |
| **Lightbox** | Click any image to open a full-screen modal with nav controls |
| **Image Navigation** | Next / Prev buttons, keyboard ← → arrows, touch swipe |
| **Smooth Transitions** | CSS animations on grid load, lightbox open, and image switching |
| **Loader Spinner** | Shown while the hi-res image loads inside lightbox |
| **Keyboard Accessible** | `Esc` closes lightbox; `Tab` + `Enter`/`Space` opens cards |
| **Back to Top** | Floating button appears on scroll |
| **Zero Dependencies** | Vanilla JS, no libraries or build tools needed |

---

## 📁 Project Structure

```
image-gallery/
├── index.html   ← Gallery page & lightbox markup
├── style.css    ← Responsive layout, hover effects, animations
├── script.js    ← Filtering, lightbox logic, swipe & keyboard nav
└── README.md    ← This file
```

---

## 🚀 Local Preview

Just open `index.html` in any modern browser — no server needed:

```bash
# Option 1 — double-click index.html in File Explorer

# Option 2 — VS Code Live Server extension
# Right-click index.html → "Open with Live Server"

# Option 3 — Python one-liner (from project folder)
python -m http.server 8080
# Then visit http://localhost:8080
```

---

## 🌐 Deploy to GitHub Pages

### Step 1 — Create a GitHub repository

1. Go to [github.com](https://github.com) and click **New repository**.
2. Name it (e.g. `image-gallery`) and set it to **Public**.
3. Do **not** add a README (you already have one).

### Step 2 — Push your files

```bash
cd path/to/image-gallery

git init
git add .
git commit -m "Initial commit — PhotoGrid gallery"

git remote add origin https://github.com/<YOUR_USERNAME>/image-gallery.git
git branch -M main
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. Open your repository on GitHub.
2. Go to **Settings → Pages** (left sidebar).
3. Under **Source**, select branch **`main`** and folder **`/ (root)`**.
4. Click **Save**.

### Step 4 — Visit your live site

After ~1 minute your gallery will be live at:

```
https://<YOUR_USERNAME>.github.io/image-gallery/
```

---

## 🖼️ Swapping Images

Images are served from [Lorem Picsum](https://picsum.photos). To use **your own images**:

1. Add your image files to the project folder (e.g. `images/`).
2. Open `script.js` and edit the `IMAGES` array:

```js
{ id: 1, title: 'My Photo', category: 'nature', seed: 'myfile' }
```

3. Update the `imgUrl` helper function:

```js
// Replace this:
const imgUrl = (seed, w, h) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

// With this:
const imgUrl = (seed) => `images/${seed}.jpg`;
```

---

## 📱 Browser Support

Works in all modern browsers: Chrome, Firefox, Edge, Safari, and mobile browsers.

---

## 📄 License

MIT — free to use, modify, and share.
