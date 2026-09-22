export interface ContentImage {
  src: string;
  alt: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO 8601
  images: ContentImage[]; // мінімум 3, перше — обкладинка для картки/OG
}

export const blogPosts: BlogPost[] = [
  {
    slug: "skilky-koshtuye-lending",
    title: "Скільки коштує landing page в Україні у 2026 році",
    excerpt: "Від чого залежить ціна лендингу: дизайн, розробка, кількість секцій, інтеграції. Реальні орієнтири по бюджету.",
    date: "2026-08-03",
    images: [
      { src: "https://picsum.photos/seed/landing-cost-1/1200/630", alt: "Ноутбук з макетом веб-сторінки на екрані" },
      { src: "https://picsum.photos/seed/landing-cost-2/1000/600", alt: "Дизайнер працює над макетом лендингу у Figma" },
      { src: "https://picsum.photos/seed/landing-cost-3/1000/600", alt: "Калькулятор і графіки бюджету на столі" },
    ],
  },
  {
    slug: "biznes-sait-chy-lending",
    title: "Business website чи landing page — що обрати для бізнесу",
    excerpt: "Різниця між багатосторінковим сайтом компанії та односторінковим лендингом, і як зрозуміти, що потрібно саме вам.",
    date: "2026-08-17",
    images: [
      { src: "https://picsum.photos/seed/biz-vs-landing-1/1200/630", alt: "Команда обговорює структуру сайту за столом" },
      { src: "https://picsum.photos/seed/biz-vs-landing-2/1000/600", alt: "Схема структури багатосторінкового сайту на дошці" },
      { src: "https://picsum.photos/seed/biz-vs-landing-3/1000/600", alt: "Власник малого бізнесу за ноутбуком" },
    ],
  },
  {
    slug: "shvydkist-saitu-i-konversiya",
    title: "Чому швидкість сайту напряму впливає на продажі",
    excerpt: "Як Core Web Vitals і час завантаження сторінки впливають на конверсію, SEO та відтік відвідувачів.",
    date: "2026-09-01",
    images: [
      { src: "https://picsum.photos/seed/speed-conversion-1/1200/630", alt: "Секундомір поруч із ноутбуком символізує швидкість сайту" },
      { src: "https://picsum.photos/seed/speed-conversion-2/1000/600", alt: "Графік завантаження сторінки на екрані монітора" },
      { src: "https://picsum.photos/seed/speed-conversion-3/1000/600", alt: "Людина роздратовано дивиться на телефон, що довго завантажується" },
    ],
  },
  {
    slug: "yak-buduvaty-seo-posylannya",
    title: "Як правильно будувати SEO-посилання: покроковий гайд",
    excerpt: "Різниця між dofollow і nofollow, як перевірити посилання просто через браузер, де шукати донорів і посилання конкурентів, чесно про біржі посилань і ризики купівлі, і що має бути готово на сайті ще до старту лінкбілдингу.",
    date: "2026-09-12",
    images: [
      { src: "https://picsum.photos/seed/seo-links-1/1200/630", alt: "Схема мережі посилань між сайтами" },
      { src: "https://picsum.photos/seed/seo-links-2/1000/600", alt: "Код HTML з атрибутом rel на екрані" },
      { src: "https://picsum.photos/seed/seo-links-3/1000/600", alt: "Графік аналітики беклінків конкурентів на екрані" },
    ],
  },
  {
    slug: "tekhnichnyi-seo-audyt-saitu",
    title: "Технічний SEO-аудит сайту: що перевіряти і навіщо",
    excerpt: "Індексація, перелінковка, швидкість, дублікати — розбираємо, що саме перевіряє технічний аудит і чому «сирітські» сторінки без внутрішніх посилань шкодять позиціям у пошуку.",
    date: "2026-09-20",
    images: [
      { src: "https://picsum.photos/seed/seo-audit-1/1200/630", alt: "Панель аналітики технічного аудиту сайту на екрані" },
      { src: "https://picsum.photos/seed/seo-audit-2/1000/600", alt: "Схема внутрішніх посилань між сторінками сайту" },
      { src: "https://picsum.photos/seed/seo-audit-3/1000/600", alt: "Лупа над сторінкою сайту символізує пошук технічних проблем" },
    ],
  },
  {
    slug: "wcag-dostupnist-saitu",
    title: "WCAG-доступність сайту: чому це не опція, а вимога",
    excerpt: "Що таке стандарт WCAG, які помилки доступності найпоширеніші, до чого тут European Accessibility Act і як за п'ять хвилин перевірити власний сайт без спеціальних інструментів.",
    date: "2026-09-21",
    images: [
      { src: "https://picsum.photos/seed/wcag-a11y-1/1200/630", alt: "Іконка доступності на екрані ноутбука" },
      { src: "https://picsum.photos/seed/wcag-a11y-2/1000/600", alt: "Людина використовує скрінрідер для читання сайту" },
      { src: "https://picsum.photos/seed/wcag-a11y-3/1000/600", alt: "Клавіатура крупним планом символізує навігацію без миші" },
    ],
  },
];

blogPosts.forEach((post) => {
  if (post.images.length < 3) {
    throw new Error(
      `Стаття блогу "${post.slug}" має ${post.images.length} фото — мінімум 3 за правилами (src/content/CONTENT_GUIDELINES.md)`
    );
  }
});
