/**
 * منطق تشغيل الموقع وقراءة الإعدادات من ملف config.js
 */

const CUSTOM_ICONS = {
  youtube: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.5 15.5C7 11.5 10.5 9.8 24 9.8C37.5 9.8 41 11.5 41.5 15.5C42.1 20.5 42.1 27.5 41.5 32.5C41 36.5 37.5 38.2 24 38.2C10.5 38.2 7 36.5 6.5 32.5C5.9 27.5 5.9 20.5 6.5 15.5Z" fill="#E61919" stroke="#111" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M20 18.2L30.5 24L20 29.8V18.2Z" fill="#FFFFFF" stroke="#111" stroke-width="1.8" stroke-linejoin="round"/>
    </svg>
  `,
  potato: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="40" height="40" rx="10" fill="#FFC800"/>
      <path d="M16 36C15 29 15.5 17 24 16.5C32.5 17 33 29 32 36H16Z" fill="#FFFFFF" stroke="#111111" stroke-width="2.3" stroke-linejoin="round"/>
      <path d="M15.8 23.5C15.5 17.5 19.5 14 25.5 14.5C30.5 15 33 18.5 32.5 23C30.5 20.5 27.5 19.5 24 20.5C20.5 21.5 18 22.5 15.8 23.5Z" fill="#111111"/>
      <circle cx="21.5" cy="24.5" r="1.4" fill="#111111"/>
      <circle cx="26.5" cy="24.5" r="1.4" fill="#111111"/>
      <path d="M20.5 28.5C22.2 30.5 25.8 30.5 27.5 28.5" stroke="#111111" stroke-width="2" stroke-linecap="round"/>
      <path d="M22.5 32.2H25.5" stroke="#111111" stroke-width="1.8" stroke-linecap="round"/>
    </svg>
  `,
  store: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="40" height="40" rx="10" fill="#0A0A0A" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>
      <path d="M13 13L35 35" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <path d="M35 13L13 35" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <path d="M11 25C18 21 31 20 38 24" stroke="#3A3A3A" stroke-width="2.6" stroke-linecap="round"/>
    </svg>
  `,
  discord: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36.5 13.5C33.8 12.2 30.9 11.4 27.9 11C27.5 11.7 27.1 12.6 26.8 13.3C23.6 12.8 20.4 12.8 17.3 13.3C17 12.6 16.5 11.7 16.1 11C13.1 11.4 10.2 12.2 7.5 13.5C3.5 19.5 2.4 25.3 3 31C6.5 33.6 9.9 35.2 13.2 36.2C14.1 35 14.8 33.7 15.5 32.3C14.2 31.8 13 31.2 11.9 30.5C12.2 30.3 12.5 30 12.8 29.8C19.6 33 27 33 33.7 29.8C34 30 34.3 30.3 34.6 30.5C33.5 31.2 32.3 31.8 31 32.3C31.7 33.7 32.4 35 33.3 36.2C36.6 35.2 40 33.6 43.5 31C44.2 24.4 42.3 18.6 36.5 13.5Z" fill="#5865F2" stroke="#111" stroke-width="2" stroke-linejoin="round"/>
      <ellipse cx="17.5" cy="24.5" rx="3.1" ry="3.6" fill="#111111"/>
      <ellipse cx="29.5" cy="24.5" rx="3.1" ry="3.6" fill="#111111"/>
    </svg>
  `,
  twitter: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M41 13.2C39.7 13.8 38.3 14.2 36.9 14.3C38.4 13.4 39.5 12 40 10.3C38.6 11.1 37.1 11.7 35.4 12C34.1 10.6 32.2 9.8 30.1 9.8C26.1 9.8 22.8 13.1 22.8 17.1C22.8 17.7 22.9 18.2 23 18.8C16.9 18.5 11.6 15.6 8 11.1C7.4 12.2 7 13.4 7 14.8C7 17.3 8.3 19.5 10.2 20.8C9 20.8 7.9 20.4 6.9 19.9V20C6.9 23.5 9.4 26.5 12.7 27.1C12.1 27.3 11.5 27.4 10.8 27.4C10.3 27.4 9.9 27.3 9.4 27.2C10.3 30.1 13 32.2 16.2 32.3C13.7 34.3 10.6 35.4 7.2 35.4C6.6 35.4 6 35.4 5.5 35.3C8.7 37.4 12.5 38.6 16.6 38.6C30 38.6 37.3 27.5 37.3 17.9C37.3 17.6 37.3 17.3 37.3 17C38.7 16 40 14.7 41 13.2Z" fill="#1DA1F2" stroke="#111" stroke-width="2" stroke-linejoin="round"/>
    </svg>
  `,
  tiktok: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32.5 10H27.5V28.5C27.5 31.3 25.3 33.5 22.5 33.5C19.7 33.5 17.5 31.3 17.5 28.5C17.5 25.8 19.6 23.6 22.3 23.5V18.4C16.8 18.5 12.4 23 12.4 28.5C12.4 34.1 16.9 38.6 22.5 38.6C28.1 38.6 32.6 34.1 32.6 28.5V19C34.6 20.4 37 21.3 39.6 21.3V16.3C35.7 16.3 32.5 13.5 32.5 10Z" fill="#00F2FE" transform="translate(-1.5, -1)"/>
      <path d="M32.5 10H27.5V28.5C27.5 31.3 25.3 33.5 22.5 33.5C19.7 33.5 17.5 31.3 17.5 28.5C17.5 25.8 19.6 23.6 22.3 23.5V18.4C16.8 18.5 12.4 23 12.4 28.5C12.4 34.1 16.9 38.6 22.5 38.6C28.1 38.6 32.6 34.1 32.6 28.5V19C34.6 20.4 37 21.3 39.6 21.3V16.3C35.7 16.3 32.5 13.5 32.5 10Z" fill="#FF0050" transform="translate(1.5, 1)"/>
      <path d="M32.5 10H27.5V28.5C27.5 31.3 25.3 33.5 22.5 33.5C19.7 33.5 17.5 31.3 17.5 28.5C17.5 25.8 19.6 23.6 22.3 23.5V18.4C16.8 18.5 12.4 23 12.4 28.5C12.4 34.1 16.9 38.6 22.5 38.6C28.1 38.6 32.6 34.1 32.6 28.5V19C34.6 20.4 37 21.3 39.6 21.3V16.3C35.7 16.3 32.5 13.5 32.5 10Z" fill="#111111" stroke="#FFFFFF" stroke-width="1.2"/>
    </svg>
  `,
  snapchat: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 8.5C18.2 8.5 14.5 12.5 14.8 18.3C14.9 19.8 15.1 21 15.1 21.4C14.6 21.7 13.7 21.4 12.8 21.1C11.9 20.8 11 21.2 10.8 22C10.6 22.8 11.4 23.6 12.7 24.1C13.7 24.5 14.2 24.9 13.9 25.7C13.1 28.2 10.6 30.4 7.5 31.4C6.8 31.6 6.7 32.4 7.4 32.8C9.1 33.7 11.2 34.1 12.5 34.3C13 34.4 13.2 35.1 13.5 36.1C13.7 36.8 14.4 37 15.2 36.8C16.5 36.5 18.1 36.4 19.7 37.2C21.3 38 22.5 39.2 24 39.2C25.5 39.2 26.7 38 28.3 37.2C29.9 36.4 31.5 36.5 32.8 36.8C33.6 37 34.3 36.8 34.5 36.1C34.8 35.1 35 34.4 35.5 34.3C36.8 34.1 38.9 33.7 40.6 32.8C41.3 32.4 41.2 31.6 40.5 31.4C37.4 30.4 34.9 28.2 34.1 25.7C33.8 24.9 34.3 24.5 35.3 24.1C36.6 23.6 37.4 22.8 37.2 22C37 21.2 36.1 20.8 35.2 21.1C34.3 21.4 33.4 21.7 32.9 21.4C32.9 21 33.1 19.8 33.2 18.3C33.5 12.5 29.8 8.5 24 8.5Z" fill="#FFFC00" stroke="#111111" stroke-width="2.2" stroke-linejoin="round"/>
    </svg>
  `,
  instagram: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="igGrad" x1="8" y1="40" x2="40" y2="8" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#FFDC80"/>
          <stop offset="25%" stop-color="#F77737"/>
          <stop offset="55%" stop-color="#E1306C"/>
          <stop offset="85%" stop-color="#833AB4"/>
          <stop offset="100%" stop-color="#5851DB"/>
        </linearGradient>
      </defs>
      <rect x="7" y="7" width="34" height="34" rx="9.5" fill="url(#igGrad)" stroke="#111111" stroke-width="2.2"/>
      <rect x="13" y="13" width="22" height="22" rx="6.5" stroke="#FFFFFF" stroke-width="2.4"/>
      <circle cx="24" cy="24" r="5.5" stroke="#FFFFFF" stroke-width="2.4"/>
      <circle cx="31.2" cy="16.8" r="1.6" fill="#FFFFFF"/>
    </svg>
  `,
  telegram: `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40.5 10.5L7.5 23.5C6.2 24 6.3 25.8 7.6 26.2L16.2 28.9L34.5 16.5C35.1 16.1 35.7 16.9 35.2 17.4L20.2 31.2L19.6 38.5C19.5 39.6 20.8 40.2 21.6 39.4L26.5 34.7L35.2 41C36.2 41.7 37.6 41.2 37.9 40L42.8 12.6C43.1 11.1 41.8 10 40.5 10.5Z" fill="#26A5E4" stroke="#111111" stroke-width="2.1" stroke-linejoin="round"/>
      <path d="M16.2 28.9L20.2 31.2L19.6 38.5L16.2 28.9Z" fill="#1878A8"/>
    </svg>
  `
};

document.addEventListener("DOMContentLoaded", () => {
  initSite();
});

function initSite() {
  document.title = SITE_CONFIG.pageTitle;

  // الاسم الرئيسي
  const nameEl = document.getElementById("profile-name");
  if (nameEl) nameEl.textContent = SITE_CONFIG.profileName;

  // النبذة التعريفية
  const bioEl = document.getElementById("profile-bio");
  if (bioEl && Array.isArray(SITE_CONFIG.bioLines)) {
    bioEl.innerHTML = SITE_CONFIG.bioLines
      .map((line) => `<p>${line}</p>`)
      .join("");
  }

  // زر الإيميل
  const emailBtn = document.getElementById("email-btn");
  if (emailBtn && SITE_CONFIG.email) {
    emailBtn.href = `mailto:${SITE_CONFIG.email}`;
    emailBtn.setAttribute("aria-label", `إرسال بريد إلكتروني إلى ${SITE_CONFIG.email}`);
    emailBtn.title = SITE_CONFIG.email;
  }

  // جملة الترحيب
  const welcomeEl = document.getElementById("welcome-text");
  if (welcomeEl) welcomeEl.textContent = SITE_CONFIG.welcomeText;

  // التذييل
  const footerEl = document.getElementById("footer-text");
  if (footerEl) footerEl.textContent = SITE_CONFIG.footerText;

  // البنر الطولي
  initBannerCarousel();

  // قائمة الروابط
  initLinksList();
}

function initBannerCarousel() {
  const track = document.getElementById("banner-track");
  const dotsContainer = document.getElementById("banner-dots");
  const prevBtn = document.getElementById("banner-prev");
  const nextBtn = document.getElementById("banner-next");
  const viewport = document.getElementById("banner-viewport");

  const banners = SITE_CONFIG.banners || [];
  if (!banners.length) return;

  let currentIndex = 0;
  let autoPlayTimer = null;

  track.innerHTML = "";
  dotsContainer.innerHTML = "";

  banners.forEach((item, index) => {
    const hasLink = Boolean(item.link && item.link.trim() !== "");
    const slideEl = document.createElement(hasLink ? "a" : "div");
    slideEl.className = "banner-slide" + (hasLink ? " clickable" : "");

    if (hasLink) {
      slideEl.href = item.link;
      slideEl.target = "_blank";
      slideEl.rel = "noopener noreferrer";
    }

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.alt || "";
    img.className = "banner-img";
    // مسار احتياطي تلقائي في حال تم وضع الصورة داخل مجلد assets
    img.onerror = function () {
      if (!this.dataset.retried) {
        this.dataset.retried = "true";
        const fileName = item.image.split("/").pop();
        this.src = `./assets/${fileName}`;
      }
    };

    const overlay = document.createElement("div");
    overlay.className = "banner-overlay-gradient";

    slideEl.appendChild(img);
    slideEl.appendChild(overlay);

    if (hasLink) {
      const badge = document.createElement("span");
      badge.className = "banner-link-badge";
      badge.textContent = "اضغط للفتح ↗";
      slideEl.appendChild(badge);
    }

    track.appendChild(slideEl);

    const dot = document.createElement("button");
    dot.className = "banner-dot" + (index === 0 ? " active" : "");
    dot.setAttribute("aria-label", `الشريحة ${index + 1}`);
    dot.addEventListener("click", () => {
      goToSlide(index);
      restartAutoPlay();
    });
    dotsContainer.appendChild(dot);
  });

  const showControls =
    banners.length > 1 || SITE_CONFIG.bannerSettings?.showControlsOnSingle;

  if (!showControls) {
    prevBtn.classList.add("hidden");
    nextBtn.classList.add("hidden");
    dotsContainer.classList.add("hidden");
  } else {
    prevBtn.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
    dotsContainer.classList.remove("hidden");
  }

  function goToSlide(index) {
    if (index < 0) index = banners.length - 1;
    if (index >= banners.length) index = 0;
    currentIndex = index;

    track.style.transform = `translateX(${currentIndex * 100}%)`;

    const allDots = dotsContainer.querySelectorAll(".banner-dot");
    allDots.forEach((d, idx) => {
      d.classList.toggle("active", idx === currentIndex);
    });
  }

  prevBtn.addEventListener("click", () => {
    goToSlide(currentIndex - 1);
    restartAutoPlay();
  });

  nextBtn.addEventListener("click", () => {
    goToSlide(currentIndex + 1);
    restartAutoPlay();
  });

  let touchStartX = 0;
  viewport.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  viewport.addEventListener(
    "touchend",
    (e) => {
      if (banners.length <= 1) return;
      const touchEndX = e.changedTouches[0].screenX;
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          goToSlide(currentIndex + 1);
        } else {
          goToSlide(currentIndex - 1);
        }
        restartAutoPlay();
      }
    },
    { passive: true }
  );

  function startAutoPlay() {
    if (banners.length > 1 && SITE_CONFIG.bannerSettings?.autoPlay) {
      autoPlayTimer = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, SITE_CONFIG.bannerSettings.intervalMs || 4500);
    }
  }

  function restartAutoPlay() {
    if (autoPlayTimer) clearInterval(autoPlayTimer);
    startAutoPlay();
  }

  startAutoPlay();
}

function initLinksList() {
  const listContainer = document.getElementById("links-list");
  if (!listContainer) return;

  listContainer.innerHTML = "";

  SITE_CONFIG.links.forEach((item, index) => {
    const card = document.createElement("a");
    card.href = item.url;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.className = "link-card";
    card.style.animationDelay = `${index * 0.055}s`;
    if (item.accentColor) {
      card.style.setProperty("--hover-accent", item.accentColor);
    }

    const iconSvg = CUSTOM_ICONS[item.iconType] || CUSTOM_ICONS.store;

    card.innerHTML = `
      <div class="link-icon-wrap">${iconSvg}</div>
      <span class="link-title">${item.title}</span>
      <div class="link-action-dots" title="نسخ الرابط" data-copy-url="${item.url}">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="5" r="2"/>
          <circle cx="12" cy="12" r="2"/>
          <circle cx="12" cy="19" r="2"/>
        </svg>
      </div>
    `;

    const copyBtn = card.querySelector(".link-action-dots");
    copyBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      copyToClipboard(item.url, item.title);
    });

    listContainer.appendChild(card);
  });
}

function copyToClipboard(url, title) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => {
      showToast(`تم نسخ رابط ${title} ✓`);
    });
  } else {
    showToast(`الرابط: ${url}`);
  }
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}
