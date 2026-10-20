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
    {
        translationKey: "camping-gear",
        slug: "camping-gear-turkey",
        title: "صادرات تجهیزات کوهنوردی و کمپینگ به ترکیه",
      clientLocation: "استانبول، ترکیه",
      date: "پاییز ۱۴۰۴",
      productType: "تجهیزات کمپینگ و ملزومات کوهنوردی",
      volume: "۳ کانتینر (پالت‌بندی شده)",
      transportType: "حمل زمینی (ترانزیت جاده‌ای)",
      customsOrigin: "گمرک بازرگان",
      servicesProvided: "تأمین، بسته‌بندی صادراتی، تشریفات گمرکی و حمل تا انبار مقصد",
      summary: "تأمین، بسته‌بندی روی پالت‌های استاندارد و انجام تشریفات گمرکی محموله تجهیزات کوهنوردی جهت ارسال از مرز بازرگان به استانبول.",
      coverImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80&auto=format&fit=crop",
      coverAlt: "انبار پالت‌بندی و آماده‌سازی محموله صادراتی تجهیزات",
      gallery: [
        { url: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=80&auto=format&fit=crop", alt: "بسته‌بندی و چیدمان کارتن‌های کالا در انبار پیش از بارگیری" },
        { url: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=80&auto=format&fit=crop", alt: "ناوگان حمل‌ونقل جاده‌ای جهت ترانزیت محموله به مرز بازرگان" }
      ],
      operationalSteps: [
        "بررسی کیفی اقلام و تطابق تعداد و مشخصات فنی با سفارش ثبت‌شده در مبدأ.",
        "بسته‌بندی مقاوم در برابر رطوبت و ضربه بر روی پالت‌های استاندارد جهت حمل جاده‌ای.",
        "تنظیم اسناد صادراتی، اخذ گواهی مبدأ و انجام تشریفات گمرکی در مرز بازرگان.",
        "هماهنگی ترانزیت جاده‌ای و تحویل محموله در انبار مقصد در شهر استانبول."
      ],
      fullDescription: [
        "این عملیات شامل تأمین، آماده‌سازی و صادرات محموله تجهیزات کوهنوردی و کمپینگ به مقصد استانبول ترکیه بود. با توجه به تنوع اقلام و لزوم حفظ سلامت فیزیکی کالاها در طول مسیر جاده‌ای، تمرکز اصلی بر دسته‌بندی دقیق و پالت‌بندی استاندارد پیش از بارگیری قرار گرفت.",
        "پس از تکمیل فرآیند کنترل و بسته‌بندی در انبار مبدأ، اسناد تجاری و گمرکی تنظیم شد و محموله از طریق گمرک بازرگان پس از طی مراحل قانونی، به سمت انبار طرف تجاری در ترکیه ارسال گردید."
      ],
      documentedOutcome: "تحویل کامل محموله مطابق با لیست عدل‌بندی (Packing List) در انبار مقصد و تکمیل فرآیند تسویه گمرکی."
    },
    {
      translationKey: "industrial-minerals",
      slug: "industrial-minerals-export",
      category: "مواد اولیه و معدنی",
      clientLocation: "تفلیس، گرجستان",
      date: "تابستان ۱۴۰۴",
      productType: "مواد معدنی صنعتی (بسته‌بندی جامبوبگ)",
      volume: "۴۵۰ تن",
      transportType: "حمل زمینی",
      customsOrigin: "گمرک جلفا / نوردوز",
      servicesProvided: "تأمین از مبدأ، کیسه‌گیری استاندارد، امور گمرکی و حمل زمینی",
      summary: "تأمین مستقیم مواد معدنی، بسته‌بندی در جامبوبگ‌های مقاوم یک‌تنی و هماهنگی ارسال زمینی به واحدهای صنعتی در تفلیس.",
      coverImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80&auto=format&fit=crop",
      coverAlt: "عملیات لجستیک و جابه‌جایی محموله‌های صنعتی و معدنی",
      gallery: [
        { url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80&auto=format&fit=crop", alt: "انبارش و آماده‌سازی محموله‌های صنعتی" },
        { url: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=900&q=80&auto=format&fit=crop", alt: "مدیریت کانتینر و حمل بارهای صادراتی" }
      ],
      operationalSteps: [
        "دریافت برگه آنالیز فنی محموله پیش از بارگیری جهت تطابق با مشخصات درخواستی خریدار.",
        "بسته‌بندی در جامبوبگ‌های دولایه مقاوم در برابر نفوذ رطوبت.",
        "هماهنگی ناوگان حمل سنگین و انجام تشریفات گمرکی در مرز خروجی."
      ],
      fullDescription: [
        "در این پروژه، تأمین و ارسال مواد معدنی فرآوری‌شده برای مصرف در خطوط تولید صنعتی در گرجستان برنامه‌ریزی و اجرا شد. به دلیل حساسیت مواد معدنی به رطوبت و شرایط محیطی، استفاده از کیسه‌های جامبوبگ استاندارد در دستور کار قرار گرفت.",
        "فرآیند بارگیری، توزین و پلمپ گمرکی با نظارت مستمر انجام شد و محموله‌ها طبق زمان‌بندی توافق‌شده از مرز عبور کرده و در اختیار خریدار قرار گرفتند."
      ],
      documentedOutcome: "ارسال منظم پارت‌های محموله مطابق با آنالیز توافق‌شده و تحویل در محل کارخانه مقصد."
    },
    {
      translationKey: "construction-materials",
      slug: "construction-materials-iraq",
      category: "مصالح ساختمانی",
      clientLocation: "اربیل، عراق",
      date: "بهار ۱۴۰۴",
      productType: "سرامیک و سنگ‌های ساختمانی فرآوری‌شده",
      volume: "۱۲ کانتینر ۲۰ فوت",
      transportType: "ترانزیت زمینی",
      customsOrigin: "گمرک تمرچین",
      servicesProvided: "مهاربندی تخصصی، بیمه باربری، ترخیص مرزی و تحویل در پروژه",
      summary: "بسته‌بندی روی پالت‌های چوبی تقویت‌شده، مهاربندی تخصصی و ارسال محموله سنگ و سرامیک ساختمانی به مقصد اربیل.",
      coverImage: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80&auto=format&fit=crop",
      coverAlt: "حمل کانتینری و لجستیک محموله‌های صادراتی مصالح ساختمانی",
      gallery: [
        { url: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=80&auto=format&fit=crop", alt: "بسته‌بندی و مهاربندی پالت‌های صادراتی" }
      ],
      operationalSteps: [
        "استفاده از پالت‌ها و خرک‌های چوبی مستحکم جهت جلوگیری از آسیب‌دیدگی قطعات در مسیر.",
        "اخذ پوشش بیمه باربری بین‌المللی از مبدأ بارگیری تا محل تخلیه.",
        "انجام تشریفات گمرکی در مرز تمرچین و هماهنگی تخلیه در محل پروژه."
      ],
      fullDescription: [
        "حمل و صادرات مصالح ساختمانی شکننده نظیر سرامیک و سنگ‌های ابعاد بزرگ، نیازمند دقت ویژه در مرحله بارگیری و مهاربندی داخل کانتینر است. در این پروژه، تمامی پالت‌ها پیش از بارگیری تسمه‌کشی و ایمن‌سازی شدند.",
        "با هماهنگی انجام‌شده در گمرک تمرچین، تشریفات مرزی بدون معطلی انجام شد و محموله در محل پروژه ساختمانی در شهر اربیل تحویل گردید."
      ],
      documentedOutcome: "تحویل سالم پالت‌های سنگ و سرامیک در محل پروژه بدون آسیب‌دیدگی در فرآیند حمل‌ونقل."
    }
  ],
  tr: [
    {
      translationKey: "camping-gear",
      slug: "camping-gear-turkey",
      category: "Özel ve Spor Ürünler",
      clientLocation: "İstanbul, Türkiye",
      date: "Sonbahar 2025",
      productType: "Kamp Ekipmanları ve Dağcılık Malzemeleri",
      volume: "3 Konteyner (Paletli)",
      transportType: "Karayolu Taşımacılığı (Transit)",
      customsOrigin: "Bazargan Gümrüğü",
      servicesProvided: "Tedarik, İhracat Paketlemesi, Gümrükleme ve Hedef Depoya Taşıma",
      summary: "Kamp ekipmanlarının tedariki, standart paletlerde paketlenmesi ve Türkiye'ye gönderilmek üzere Bazargan gümrüğünde işlemlerinin tamamlanması.",
      coverImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80&auto=format&fit=crop",
      coverAlt: "İhracat ekipmanlarının paletlenmesi ve depolanması",
      gallery: [
        { url: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=80&auto=format&fit=crop", alt: "Kutuların yükleme öncesi paletlenmesi" },
        { url: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=80&auto=format&fit=crop", alt: "Bazargan gümrüğüne giden lojistik filosu" }
      ],
      operationalSteps: [
        "Ürün kalite kontrolü ve siparişle uyumluluğun doğrulanması.",
        "Karayolu taşımacılığına uygun neme ve darbeye dayanıklı paletleme.",
        "Bazargan gümrüğünde ihracat belgelerinin düzenlenmesi ve gümrükleme işlemleri.",
        "İstanbul'daki hedef depoya karayolu ile teslimatın koordine edilmesi."
      ],
      fullDescription: [
        "Bu operasyon, Türkiye'nin İstanbul şehrine kamp ve dağcılık ekipmanlarının tedariki, paketlenmesi ve ihracatını içermektedir. Ürün çeşitliliği ve karayolu taşımacılığı sırasındaki fiziksel hassasiyet göz önüne alınarak, yükleme öncesi titiz bir sınıflandırma ve paletleme yapılmıştır.",
        "Gümrük belgeleri düzenlendikten sonra sevkiyat, Bazargan Gümrüğü üzerinden yasal işlemler tamamlanarak Türkiye'deki ticari ortağın deposuna sorunsuz bir şekilde ulaştırılmıştır."
      ],
      documentedOutcome: "Sevkiyatın çeki listesine (Packing List) uygun olarak hedef depoya eksiksiz teslim edilmesi ve gümrükleme sürecinin başarıyla tamamlanması."
    },
    {
        translationKey: "industrial-minerals",
      slug: "industrial-minerals-export",
      category: "Hammadde ve Mineraller",
      clientLocation: "Tiflis, Gürcistan",
      date: "Yaz 2025",
      productType: "Sanayi Mineralleri (Jumbo Bag Paketleme)",
      volume: "450 Ton",
      transportType: "Karayolu Taşımacılığı",
      customsOrigin: "Culfa / Norduz Gümrüğü",
      servicesProvided: "Doğrudan Tedarik, Standart Çuvallama, Gümrükleme ve Nakliye",
      summary: "Doğrudan tedarik, dayanıklı 1 tonluk jumbo çantalarda paketleme ve Tiflis'teki sanayi tesislerine karayolu nakliyesi.",
      coverImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80&auto=format&fit=crop",
      coverAlt: "Sanayi ve maden sevkiyatlarının lojistik operasyonları",
      gallery: [
        { url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80&auto=format&fit=crop", alt: "Sanayi sevkiyatlarının depolanması ve hazırlığı" },
        { url: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=900&q=80&auto=format&fit=crop", alt: "İhracat yükleri ve konteyner yönetimi" }
      ],
      operationalSteps: [
        "Alıcının talep ettiği teknik özelliklerle uyumu sağlamak için yükleme öncesi laboratuvar analizi.",
        "Neme dayanıklı çift katmanlı jumbo çantalarda paketleme.",
        "Ağır vasıta nakliyesinin ayarlanması ve çıkış gümrüğünde işlemlerin tamamlanması."
      ],
      fullDescription: [
        "Bu projede, Gürcistan'daki sanayi üretim hatlarında kullanılmak üzere işlenmiş minerallerin tedariki ve gönderimi planlanıp uygulanmıştır. Minerallerin neme karşı hassasiyeti nedeniyle standart jumbo çantalar kullanılmıştır.",
        "Yükleme, tartım ve gümrük mühürleme işlemleri sürekli denetim altında gerçekleştirilmiş ve sevkiyatlar anlaşılan zaman çizelgesine uygun olarak alıcıya teslim edilmiştir."
      ],
      documentedOutcome: "Sevkiyat partilerinin anlaşılan analize uygun olarak düzenli gönderimi ve hedef fabrika sahasında teslimatı."
    },
    {
      translationKey: "construction-materials",
      slug: "construction-materials-iraq",
      category: "İnşaat Malzemeleri",
      clientLocation: "Erbil, Irak",
      date: "İlkbahar 2025",
      productType: "İşlenmiş Seramik ve İnşaat Taşları",
      volume: "12 Adet 20 Fit Konteyner",
      transportType: "Karayolu Transit",
      customsOrigin: "Temerçin Gümrüğü",
      servicesProvided: "Özel Bağlama (Lashing), Nakliye Sigortası, Gümrükleme ve Teslimat",
      summary: "Güçlendirilmiş ahşap paletlerde paketleme, profesyonel bağlama (lashing) ve Erbil'e inşaat taşı ve seramik sevkiyatı.",
      coverImage: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80&auto=format&fit=crop",
      coverAlt: "İnşaat malzemeleri ihracat yüklerinin konteyner taşımacılığı ve lojistiği",
      gallery: [
        { url: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=80&auto=format&fit=crop", alt: "İhracat paletlerinin paketlenmesi ve güvenli bağlanması" }
      ],
      operationalSteps: [
        "Büyük ebatlı taşların kırılmasını önlemek için özel ahşap paletler ve destekler kullanılması.",
        "Yükleme noktasından boşaltma noktasına kadar uluslararası nakliye sigortası yapılması.",
        "Temerçin gümrüğünde işlemlerin tamamlanması ve proje sahasında boşaltmanın koordine edilmesi."
      ],
      fullDescription: [
        "Seramik ve büyük ebatlı (slab) taşlar gibi kırılgan inşaat malzemelerinin taşınması, konteyner içine yükleme ve bağlama aşamasında ekstra hassasiyet gerektirir. Bu projede tüm paletler yükleme öncesi sıkıca bağlandı ve emniyete alındı.",
        "Temerçin gümrüğünde yapılan koordinasyon sayesinde sınır işlemleri beklemeden tamamlandı ve sevkiyat Erbil'deki inşaat proje sahasında başarıyla teslim edildi."
      ],
      documentedOutcome: "Seramik ve taş paletlerinin taşıma sürecinde hiçbir hasar görmeden proje sahasına sağlam bir şekilde teslim edilmesi."
    }
  ]
};