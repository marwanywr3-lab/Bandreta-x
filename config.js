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

  // البريد الإلكتروني للتواصل والإعلانات (يفتح تطبيق البريد عند الضغط على الأيقونة)
  email: "BanderitaX.ads@gmail.com",

  // جملة الترحيب أسفل أيقونة الإيميل
  welcomeText: "حياكم الله في الموقع الرسمي لبندريتا ❤️",

  // نص التذييل (Footer)
  footerText: "© BanderitaX - جميع الحقوق محفوظة",

  // إعدادات البنر الطولي القابل للتقليب (Carousel)
  bannerSettings: {
    autoPlay: true,               // تشغيل التقليب التلقائي عند وجود أكثر من صورة
    intervalMs: 4500,             // مدة بقاء كل صورة بالملي ثانية
    showControlsOnSingle: false   // إظهار الأسهم والنقاط حتى لو كانت صورة واحدة (true / false)
  },

  /**
   * قائمة صور البنر العلوي الطولي:
   * - image: مسار الصورة (يفضل وضع الصور في المجلد الرئيسي أو داخل assets)
   * - alt: وصف الصورة
   * - link: رابط يفتح عند الضغط على البنر (اتركه "" إذا كانت صورة بدون رابط)
   */
  banners: [
    {
      image: "./logo.jpg",
      alt: "شعار بندريتا الرسمي",
      link: ""
    }
    // مثال لإضافة صورة بنر جديدة قابلة للضغط مستقبلاً (احذف علامتي // لتفعيله):
    // ,{
    //   image: "./banner2.jpg",
    //   alt: "إعلان جديد",
    //   link: "https://banderitax.store/"
    // }
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
      iconType: "potato",
      accentColor: "#FFC800"
    },
    {
      title: "banderitax.store",
      url: "https://banderitax.store/",
      iconType: "store",
      accentColor: "#FFFFFF"
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
