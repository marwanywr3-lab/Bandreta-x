/**
 * ============================================================================
 * ملف إعدادات موقع بندريتا (BanderitaX) - قابل للتعديل بالكامل بسهولة
 * ============================================================================
 */

const SITE_CONFIG = {
  // عنوان الصفحة في المتصفح
  pageTitle: "BanderitaX | الموقع الرسمي لبندريتا",

  // الاسم الرئيسي في الهيدر
  profileName: "بندريتا",

  // النبذة التعريفية أسفل الاسم (كل سطر يظهر في سطر مستقل)
  bioLines: [
    "صانع محتوى في فريق فالكونز",
    "أفضل صانع محتوى لعام 2019",
    "أفضل صانع محتوى لعام 2021",
    "أفضل صانع محتوى لعام 2023"
  ],

  // البريد الإلكتروني للتواصل والإعلانات
  email: "BanderitaX.ads@gmail.com",

  // جملة الترحيب أسفل أيقونة الإيميل
  welcomeText: "حياكم الله في الموقع الرسمي لبندريتا ❤️",

  // نص التذييل (Footer)
  footerText: "© BanderitaX - جميع الحقوق محفوظة",

  // إعدادات البنر الطولي القابل للتقليب (Carousel)
  bannerSettings: {
    autoPlay: true,               // تشغيل التقليب التلقائي
    intervalMs: 3800,             // سرعة التقليب بالملي ثانية (3800 = 3.8 ثانية لسهولة القراءة والضغط)
    pauseOnHover: true,           // إيقاف التقليب مؤقتاً عند لمس البنر أو الوقوف عليه بالماوس
    showControlsOnSingle: false   // إظهار الأسهم والنقاط تلقائياً عند وجود أكثر من صورة
  },

  /**
   * قائمة صور البنر العلوي القابل للتقليب والضغط:
   * - image: مسار الصورة
   * - alt: وصف الصورة
   * - link: الرابط الذي يفتح عند الضغط على الشريحة
   * - badgeText: نص الشارة التوضيحية أعلى البنر
   */
  banners: [
    {
      image: "./logo.jpg",
      alt: "قناة بندريتا على يوتيوب",
      link: "https://www.youtube.com/banderitax",
      badgeText: "قناة بندريتا على YouTube ↗"
    },
    {
      image: "./potato.jpg",
      alt: "بندر بطاطا - Bander's Potato",
      link: "https://www.banderspotato.com/",
      badgeText: "بندر بطاطا | اطلب الآن ↗"
    },
    {
      image: "./store.jpg",
      alt: "متجر بندريتا - banderitax.store",
      link: "https://banderitax.store/",
      badgeText: "متجر بندريتا الرسمي ↗"
    }
  ],

  /**
   * قائمة الروابط والمنصات (مرتبة بنفس الترتيب المطلوب):
   */
  links: [
    {
      title: "Youtube",
      url: "https://www.youtube.com/banderitax",
      iconType: "youtube",
      accentColor: "#FF1E1E"
    },
    {
      title: "Bander's Potato | بندر بطاطا",
      url: "https://www.banderspotato.com/",
      iconImage: "./potato.jpg",
      iconType: "potato",
      accentColor: "#FFC800"
    },
    {
      title: "banderitax.store",
      url: "https://banderitax.store/",
      iconImage: "./store.jpg",
      iconType: "store",
      accentColor: "#D92B2B"
    },
    {
      title: "Join the BanderitaX Discord Server!",
      url: "https://discord.gg/banderitax",
      iconType: "discord",
      accentColor: "#5865F2"
    },
    {
      title: "Twitter",
      url: "https://twitter.com/BanderitaX",
      iconType: "twitter",
      accentColor: "#1DA1F2"
    },
    {
      title: "TikTok",
      url: "https://www.tiktok.com/@banderitax",
      iconType: "tiktok",
      accentColor: "#00F2FE"
    },
    {
      title: "Snapchat",
      url: "https://www.snapchat.com/add/banderitax",
      iconType: "snapchat",
      accentColor: "#FFFC00"
    },
    {
      title: "Instagram",
      url: "https://instagram.com/banderitax",
      iconType: "instagram",
      accentColor: "#E1306C"
    },
    {
      title: "Telegram",
      url: "https://t.me/official_banderitax",
      iconType: "telegram",
      accentColor: "#26A5E4"
    }
  ]
};
