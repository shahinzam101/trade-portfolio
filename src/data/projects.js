// src/data/projects.js

// --- 1. COMPANY INFO ---
export const companyInfo = {
  fa: {
    name: "آیگون تجارت غرب",
    legalTitle: "شرکت بازرگانی بین‌المللی آیگون تجارت غرب",
    tagline: "از تأمین تا تحویل، در کنار تجارت شما.",
    shortIntro: "مدیریت یکپارچه فرآیندهای صادرات، تأمین کالا، تشریفات گمرکی و لجستیک بین‌المللی با تمرکز بر بازارهای منطقه‌ای.",
    description: "آیگون تجارت غرب در زمینه تأمین کالا از تولیدکنندگان داخلی، آماده‌سازی و بسته‌بندی استاندارد صادراتی، انجام تشریفات گمرکی و هماهنگی حمل‌ونقل بین‌المللی فعالیت می‌کند. هدف ما ایجاد فرآیندی شفاف، منظم و قابل اتکا برای طرف‌های تجاری است.",
    location: "ایران، آذربایجان غربی — فعال در مرزهای تجاری غرب کشور و بنادر صادراتی",
    operationalHighlights: [
      { label: "حوزه فعالیت", value: "صادرات و تأمین کالا", note: "مدیریت فرآیند از مبدأ تولید تا مقصد" },
      { label: "پوشش عملیاتی", value: "مرزهای غرب و شمال‌غرب", note: "بازرگان، جلفا، نوردوز و تمرچین" },
      { label: "مدل همکاری", value: "مبتنی بر قرارداد رسمی", note: "شفافیت در اسناد، زمان‌بندی و تحویل" }
    ]
  },
  tr: {
    name: "Aygün Ticaret",
    legalTitle: "Aygün Ticaret Uluslararası İhracat Şirketi",
    tagline: "Tedarikten Teslimata, Ticaretinizin Yanında.",
    shortIntro: "Bölgesel pazarlara odaklanarak ihracat, tedarik, gümrükleme ve uluslararası lojistik süreçlerinin entegre yönetimi.",
    description: "Aygün Ticaret, yerli üreticilerden ürün tedariki, standart ihracat paketlemesi, gümrükleme işlemleri ve uluslararası lojistik koordinasyonu alanlarında faaliyet göstermektedir. Amacımız ticari ortaklarımız için şeffaf, düzenli ve güvenilir bir süreç yaratmaktır.",
    location: "İran, Batı Azerbaycan — Batı sınır kapılarında ve ihracat limanlarında aktif.",
    operationalHighlights: [
      { label: "Faaliyet Alanı", value: "İhracat ve Tedarik", note: "Üretimden teslimata kadar süreç yönetimi" },
      { label: "Operasyonel Kapsam", value: "Batı Sınır Kapıları", note: "Bazargan, Culfa, Norduz, Temerçin" },
      { label: "İşbirliği Modeli", value: "Resmi Sözleşme Odaklı", note: "Belgelerde ve teslimatta şeffaflık" }
    ]
  },
  // اطلاعات تماس مشترک بین زبان‌ها
  whatsapp: "https://wa.me/989120000000",
  phoneDisplay: "+98 44 33000000",
  phoneHref: "tel:+984433000000",
  email: "info@ayguntrade.com",
};

// --- 2. SERVICES ---
export const services = {
  fa: [
    { title: "تأمین کالا و ارتباط با تولیدکنندگان", description: "بررسی تامین‌کنندگان داخلی، کنترل تطابق مشخصات فنی کالا با سفارش خریدار و آماده‌سازی محموله پیش از ارسال." },
    { title: "مدیریت فرآیند صادرات", description: "تنظیم اسناد تجاری، اخذ گواهی مبدأ و مجوزهای استاندارد مورد نیاز کشور مقصد مطابق با مقررات جاری." },
    { title: "تشریفات و ترخیص گمرکی", description: "انجام امور اظهار، ارزیابی و ترخیص کالا در گمرکات خروجی کشور با حضور کارشناسان مجرب امور گمرکی." },
    { title: "هماهنگی حمل‌ونقل و لجستیک", description: "برنامه‌ریزی حمل جاده‌ای و کانتینری، نظارت بر پالت‌بندی، مهاربندی استاندارد و پیگیری مسیر تا تحویل در مقصد." }
  ],
  tr: [
    { title: "Tedarik ve Üretici İletişimi", description: "Yerli tedarikçilerin incelenmesi, ürünlerin teknik özelliklerinin siparişle uyumunun kontrolü ve sevkiyat öncesi hazırlık." },
    { title: "İhracat Süreç Yönetimi", description: "Ticari belgelerin düzenlenmesi, menşe şahadetnamesi ve hedef ülkenin gerektirdiği standart izinlerinin alınması." },
    { title: "Gümrükleme İşlemleri", description: "Deneyimli gümrük uzmanlarımızla çıkış gümrüklerinde beyan, ekspertiz ve gümrükleme işlemlerinin yürütülmesi." },
    { title: "Lojistik Koordinasyonu", description: "Karayolu ve konteyner taşımacılığının planlanması, paletleme denetimi ve teslimata kadar güzergah takibi." }
  ]
};

// --- 3. TRADE CORRIDORS ---
export const tradeCorridors = {
  fa: [
    { destination: "ترکیه (استانبول و شهرهای صنعتی)", border: "گمرک بازرگان", serviceType: "ترانزیت زمینی، صادرات کالاهای مصرفی و صنعتی", relatedProjectSlug: "camping-gear-turkey" },
    { destination: "گرجستان و حوزه قفقاز (تفلیس)", border: "گمرک جلفا / نوردوز", serviceType: "حمل محموله‌های کیسه‌ای (جامبوبگ) و مواد اولیه معدنی", relatedProjectSlug: "industrial-minerals-export" },
    { destination: "عراق و اقلیم کردستان (اربیل)", border: "گمرک تمرچین / باشماق", serviceType: "ارسال کانتینری مصالح ساختمانی و کالاهای بازرگانی", relatedProjectSlug: "construction-materials-iraq" }
  ],
  tr: [
    { destination: "Türkiye (İstanbul ve Sanayi Şehirleri)", border: "Bazargan Gümrüğü", serviceType: "Karayolu transit, tüketim ve sanayi malları ihracatı", relatedProjectSlug: "camping-gear-turkey" },
    { destination: "Gürcistan ve Kafkasya (Tiflis)", border: "Culfa / Norduz Gümrüğü", serviceType: "Jumbo çanta (Big bag) ve madeni hammadde taşımacılığı", relatedProjectSlug: "industrial-minerals-export" },
    { destination: "Irak ve Kürdistan Bölgesi (Erbil)", border: "Temerçin / Başmak Gümrüğü", serviceType: "İnşaat malzemeleri ve ticari malların konteyner taşımacılığı", relatedProjectSlug: "construction-materials-iraq" }
  ]
};

// --- 4. PROJECTS ---
export const projects = {
  fa: [
    { slug: "camping-gear-turkey", title: "صادرات تجهیزات کوهنوردی و کمپینگ به ترکیه", category: "کالاهای تخصصی و ورزشی", clientLocation: "استانبول، ترکیه", date: "پاییز ۱۴۰۴", summary: "تأمین، بسته‌بندی روی پالت‌های استاندارد و انجام تشریفات گمرکی محموله تجهیزات کوهنوردی.", coverImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80&auto=format&fit=crop" },
    // ... سایر پروژه‌ها ...
  ],
  tr: [
    { slug: "camping-gear-turkey", title: "Türkiye'ye Kamp ve Dağcılık Ekipmanları İhracatı", category: "Özel ve Spor Ürünler", clientLocation: "İstanbul, Türkiye", date: "Sonbahar 2025", summary: "Kamp ekipmanlarının tedariki, standart paletlerde paketlenmesi ve gümrükleme işlemleri.", coverImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80&auto=format&fit=crop" },
    // ... سایر پروژه‌ها ...
  ]
};