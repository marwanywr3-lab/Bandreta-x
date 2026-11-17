/**
 * ============================================================================
 * ملف إعدادات موقع بندريتا (BanderitaX) - قابل للتعديل بالكامل بسهولة
 * ============================================================================
 * يمكنك تعديل النصوص، صور البنر، الروابط، أو إضافة صور جديدة قابلة للضغط من هنا
 * دون الحاجة لتعديل كود التصميم الأساسي.
 */

const SITE_CONFIG = {
  // عنوان الصفحة في المتصفح
  pageTitle: "BanderitaX | الموقع الرسمي لبندريتا",

  // جملة الترحيب الرئيسية أسفل البنر
  welcomeText: "حياكم الله في الموقع الرسمي لبندريتا ❤️",

  // نص التذييل (Footer)
  footerText: "© BanderitaX - جميع الحقوق محفوظة",

  // إعدادات البنر العلوي القابل للتقليب (Carousel)
  bannerSettings: {
    autoPlay: true,         // تشغيل التقليب التلقائي (يعمل تلقائياً عند وجود أكثر من صورة)
    intervalMs: 4500,       // مدة بقاء كل صورة بالملي ثانية (4500 = 4.5 ثانية)
    showControlsOnSingle: false // إظهار الأسهم والنقاط حتى لو كانت هناك صورة واحدة فقط (true / false)
  },

  /**
   * قائمة صور البنر العلوي:
   * - image: مسار الصورة داخل مجلد assets أو رابط مباشر
   * - alt: وصف الصورة
   * - link: رابط يفتح عند الضغط على البنر (اتركه "" إذا كنت لا تريد رابطاً)
   * - fitMode: "square-blur" لعرض الصورة مربعة في الوسط مع تمويه جانبي، أو "cover" لملء البنر بالكامل
   */
  banners: [
    {
      image: "assets/logo.jpg",
      alt: "شعار بندريتا الرسمي",
      link: "",
      fitMode: "square-blur"
    }
    // مثال لإضافة بنر إعلاني قابل للضغط مستقبلاً (احذف علامتي // لتفعيله):
    // ,{
    //   image: "assets/banner2.jpg",
    //   alt: "إعلان جديد",
    //   link: "https://banderitax.store/",
    //   fitMode: "square-blur"
    // }
  ],

  /**
   * قائمة الروابط والمنصات (مرتبة بنفس الترتيب المطلوب):
   * - title: النص الظاهر على البطاقة
   * - url: الرابط الذي يفتح عند الضغط
   * - iconType: نوع الأيقونة المخصصة (youtube, potato, store, discord, twitter, tiktok, snapchat, instagram, telegram)
   * - accentColor: لون التوهج عند تمرير الماوس أو اللمس
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
