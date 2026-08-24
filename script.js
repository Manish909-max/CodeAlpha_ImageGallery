/* ═══════════════════════════════════════════════════
   PhotoGrid Gallery — script.js
   ═══════════════════════════════════════════════════ */

'use strict';

/* ──────────────────────────────────────────────────
   IMAGE DATA
   Each entry: { id, title, category, unsplashId }
   Images fetched from Unsplash CDN via photo ID.
   ────────────────────────────────────────────────── */
const IMAGES = [

  // ── Nature (8 photos) ──────────────────────────
  {
    id: 1, title: 'Misty Pine Forest',   category: 'nature',
    unsplashId: '1441974231531-c6227db76b6e',   // dark green forest path
  },
  {
    id: 2, title: 'Alpine Lake Reflection', category: 'nature',
    unsplashId: '1500534314209-a157d0ea23bf',   // turquoise mountain lake
  },
  {
    id: 3, title: 'Crimson Autumn Leaves', category: 'nature',
    unsplashId: '1518173946687-a4c8892bbd9f',   // vivid fall foliage
  },
  {
    id: 4, title: 'Dramatic Waterfall',   category: 'nature',
    unsplashId: '1504198453919-1f20b6e6b7e0',   // waterfall in jungle
  },
  {
    id: 5, title: 'Sunset Over Ocean',   category: 'nature',
    unsplashId: '1505118380757-91f5f5632de0',   // golden hour waves
  },
  {
    id: 6, title: 'Snow-Capped Summit',  category: 'nature',
    unsplashId: '1506905925346-21bda4d32df4',   // misty mountain peaks
  },
  {
    id: 7, title: 'Desert Wildflowers',  category: 'nature',
    unsplashId: '1465146344425-f00d5f5c8f07',   // flowers in dry land
  },
  {
    id: 8, title: 'Stormy Coastline',    category: 'nature',
    unsplashId: '1499749913-b8c5e64f8848',   // dramatic sea cliffs
  },

  // ── Architecture (7 photos) ────────────────────
  {
    id: 9,  title: 'Glass Skyscraper',   category: 'architecture',
    unsplashId: '1486325212027-8081e485255e',   // modern glass tower
  },
  {
    id: 10, title: 'Night Bridge',        category: 'architecture',
    unsplashId: '1513635269975-59663e0ac1ad',   // bridge with city lights
  },
  {
    id: 11, title: 'City Skyline Dusk',   category: 'architecture',
    unsplashId: '1477959858617-67f85cf4f1df',   // city panorama at sunset
  },
  {
    id: 12, title: 'Ancient Colonnade',   category: 'architecture',
    unsplashId: '1558618666-fcd25c85cd64',   // classical pillars
  },
  {
    id: 13, title: 'Spiral Staircase',    category: 'architecture',
    unsplashId: '1562813733-99537351e175',   // geometric spiral interior
  },
  {
    id: 14, title: 'Brutalist Facade',    category: 'architecture',
    unsplashId: '1486754735734-325b5831c3ad',   // raw concrete building
  },
  {
    id: 15, title: 'Cathedral Interior',  category: 'architecture',
    unsplashId: '1520262454606-8f44d27f2ada',   // vaulted gothic ceiling
  },

  // ── People (7 photos) ─────────────────────────
  {
    id: 16, title: 'Golden Hour Portrait', category: 'people',
    unsplashId: '1531746020798-e6953c6e8e04',   // woman in warm light
  },
  {
    id: 17, title: 'Laughing Friends',     category: 'people',
    unsplashId: '1529156069898-49953e39b3ac',   // group laughing outdoors
  },
  {
    id: 18, title: 'Street Musician',      category: 'people',
    unsplashId: '1516450360452-9312f5e86fc7',   // musician on city street
  },
  {
    id: 19, title: 'Elderly Wisdom',       category: 'people',
    unsplashId: '1504439468489-c8920d796a4e',   // senior man close-up
  },
  {
    id: 20, title: 'Child\'s Wonder',      category: 'people',
    unsplashId: '1503454537195-1dcabb73ffb9',   // kid with big eyes
  },
  {
    id: 21, title: 'Urban Runner',         category: 'people',
    unsplashId: '1476480862126-209bfaa8edc8',   // jogger in city park
  },
  {
    id: 22, title: 'Cafe Moment',          category: 'people',
    unsplashId: '1543269865-0a740d43b8b4',   // person reading at cafe
  },

  // ── Travel (7 photos) ─────────────────────────
  {
    id: 23, title: 'Santorini Sunset',     category: 'travel',
    unsplashId: '1533105079780-92b9be482077',   // blue domes greece
  },
  {
    id: 24, title: 'Sahara at Dawn',       category: 'travel',
    unsplashId: '1509316785289-025f5b846b35',   // golden sand dunes
  },
  {
    id: 25, title: 'Kyoto Bamboo Grove',   category: 'travel',
    unsplashId: '1528360983277-13d401cdc186',   // bamboo forest japan
  },
  {
    id: 26, title: 'Norwegian Fjord',      category: 'travel',
    unsplashId: '1513519245088-0e12902e5a38',   // green fjord reflection
  },
  {
    id: 27, title: 'Amalfi Coast Road',    category: 'travel',
    unsplashId: '1516483638261-f4dbaf036963',   // winding coastal cliff road
  },
  {
    id: 28, title: 'Maldives Overwater',   category: 'travel',
    unsplashId: '1518509562399-4564f0e9f0f0',   // overwater bungalow turquoise sea
  },
  {
    id: 29, title: 'Machu Picchu Mist',    category: 'travel',
    unsplashId: '1526772662000-3f88f10405ff',   // inca ruins in clouds
  },

  // ── Abstract (6 photos) ───────────────────────
  {
    id: 30, title: 'Neon City Rain',       category: 'abstract',
    unsplashId: '1541701494-b65b58cf7281',   // neon reflections wet street
  },
  {
    id: 31, title: 'Ink in Water',         category: 'abstract',
    unsplashId: '1557682260-96a3f7e6e4b8',   // colorful ink diffusion
  },
  {
    id: 32, title: 'Light Painting',       category: 'abstract',
    unsplashId: '1558591710-4b7a1b27e7e8',   // long-exposure light trails
  },
  {
    id: 33, title: 'Color Spectrum',       category: 'abstract',
    unsplashId: '1501366062246-723b4d3e4e50',   // prism rainbow splash
  },
  {
    id: 34, title: 'Geometric Shadows',    category: 'abstract',
    unsplashId: '1536566482680-fca9e7e6a65c',   // stark shadow patterns
  },
  {
    id: 35, title: 'Fluid Motion',         category: 'abstract',
    unsplashId: '1544606723-a19c92cca01d',   // liquid paint swirls
  },
];

/* Emoji icons per category */
const CAT_ICONS = {
  nature:       '🌿',
  architecture: '🏛️',
  people:       '👤',
  travel:       '✈️',
  abstract:     '🎨',
};

/* Build Unsplash CDN URL — w & h are optional size overrides */
const imgUrl = (unsplashId, w = 800, h = 600) =>
  `https://images.unsplash.com/photo-${unsplashId}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;

/* ──────────────────────────────────────────────────
   STATE
   ────────────────────────────────────────────────── */
let activeFilter   = 'all';
let filteredImages = [...IMAGES];
let lightboxIndex  = 0;   // index within filteredImages

/* ──────────────────────────────────────────────────
   DOM REFERENCES
   ────────────────────────────────────────────────── */
const gallery  = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lbImg    = document.getElementById('lbImg');
const lbLoader = document.getElementById('lbLoader');
const lbTitle  = document.getElementById('lbTitle');
const lbCat    = document.getElementById('lbCategory');
const lbCount  = document.getElementById('lbCounter');
const lbClose  = document.getElementById('lbClose');
const lbPrev   = document.getElementById('lbPrev');
const lbNext   = document.getElementById('lbNext');
const backTop  = document.getElementById('backTop');
const filterBtns = document.querySelectorAll('.filter-btn');

/* ──────────────────────────────────────────────────
   GALLERY RENDERING
   ────────────────────────────────────────────────── */
function renderGallery(images) {
  gallery.innerHTML = '';

  if (images.length === 0) {
    gallery.innerHTML = `
      <div class="empty-state">
        <span>🔍</span>
        <p>No images found in this category.</p>
      </div>`;
    return;
  }

  images.forEach((img, idx) => {
    const card = document.createElement('article');
    card.className = 'gallery-card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Open ${img.title}`);
    card.dataset.index = idx;

    card.innerHTML = `
      <div class="card-img-wrap">
        <img
          src="${imgUrl(img.unsplashId, 600, 450)}"
          alt="${img.title}"
          loading="lazy"
          decoding="async"
        />
        <div class="card-overlay">
          <span class="overlay-icon">🔍</span>
        </div>
      </div>
      <div class="card-caption">
        <span class="card-title">${img.title}</span>
        <span class="card-tag">${CAT_ICONS[img.category]} ${img.category}</span>
      </div>
    `;

    /* Open lightbox on click or Enter/Space */
    card.addEventListener('click', () => openLightbox(idx));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(idx);
      }
    });

    gallery.appendChild(card);
  });
}

/* ──────────────────────────────────────────────────
   FILTER LOGIC
   ────────────────────────────────────────────────── */
function applyFilter(filter) {
  activeFilter   = filter;
  filteredImages = filter === 'all'
    ? [...IMAGES]
    : IMAGES.filter(img => img.category === filter);
  renderGallery(filteredImages);
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilter(btn.dataset.filter);
    // Scroll to gallery top on mobile
    gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ──────────────────────────────────────────────────
   LIGHTBOX — OPEN / CLOSE
   ────────────────────────────────────────────────── */
function openLightbox(idx) {
  lightboxIndex = idx;
  lightbox.removeAttribute('hidden');
  lightbox.classList.add('lb-visible');
  document.body.style.overflow = 'hidden';
  loadLightboxImage(idx, false);
  lbClose.focus();
}

function closeLightbox() {
  lightbox.setAttribute('hidden', '');
  lightbox.classList.remove('lb-visible');
  document.body.style.overflow = '';
}

/* ──────────────────────────────────────────────────
   LIGHTBOX — IMAGE LOADING & NAVIGATION
   ────────────────────────────────────────────────── */
function loadLightboxImage(idx, animate = true) {
  const img = filteredImages[idx];
  if (!img) return;

  /* Show loader, fade image out */
  if (animate) {
    lbImg.classList.add('lb-fade');
    lbLoader.classList.remove('hidden');
  }

  const newSrc = imgUrl(img.unsplashId, 1200, 900);

  const tempImg = new Image();
  tempImg.src   = newSrc;
  tempImg.onload = () => {
    lbImg.src = newSrc;
    lbImg.alt = img.title;
    lbLoader.classList.add('hidden');
    lbImg.classList.remove('lb-fade');
  };
  tempImg.onerror = () => {
    lbImg.src = `https://via.placeholder.com/800x600/161b25/6c63ff?text=${encodeURIComponent(img.title)}`;
    lbLoader.classList.add('hidden');
    lbImg.classList.remove('lb-fade');
  };

  /* Update caption */
  lbTitle.textContent = img.title;
  lbCat.textContent   = `${CAT_ICONS[img.category]} ${img.category}`;
  lbCount.textContent = `${idx + 1} / ${filteredImages.length}`;

  /* Toggle nav button visibility */
  lbPrev.style.opacity = idx === 0                         ? '0.3' : '1';
  lbNext.style.opacity = idx === filteredImages.length - 1 ? '0.3' : '1';
}

function navigate(dir) {
  const newIdx = lightboxIndex + dir;
  if (newIdx < 0 || newIdx >= filteredImages.length) return;
  lightboxIndex = newIdx;
  loadLightboxImage(lightboxIndex, true);
}

/* Button events */
lbClose.addEventListener('click', closeLightbox);
lbPrev.addEventListener('click',  () => navigate(-1));
lbNext.addEventListener('click',  () => navigate(+1));

/* Click outside content to close */
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

/* ──────────────────────────────────────────────────
   KEYBOARD NAVIGATION
   ────────────────────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (lightbox.hasAttribute('hidden')) return;
  switch (e.key) {
    case 'ArrowLeft':  navigate(-1);     break;
    case 'ArrowRight': navigate(+1);     break;
    case 'Escape':     closeLightbox();  break;
  }
});

/* ──────────────────────────────────────────────────
   TOUCH / SWIPE SUPPORT (lightbox)
   ────────────────────────────────────────────────── */
let touchStartX = 0;
let touchStartY = 0;

lightbox.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}, { passive: true });

lightbox.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
    navigate(dx < 0 ? +1 : -1);
  }
}, { passive: true });

/* ──────────────────────────────────────────────────
   BACK TO TOP
   ────────────────────────────────────────────────── */
window.addEventListener('scroll', () => {
  backTop.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ──────────────────────────────────────────────────
   INITIAL RENDER
   ────────────────────────────────────────────────── */
renderGallery(IMAGES);
