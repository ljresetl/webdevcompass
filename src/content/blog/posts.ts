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
    slug: "skilky-koshtuye-landing-page",
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
    slug: "business-website-vs-landing-page",
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
    slug: "seo-link-building-guide",
    title: "Як правильно будувати SEO-посилання: покроковий гайд",
    excerpt: "Різниця між dofollow і nofollow, як перевірити посилання просто через браузер, де шукати донорів і посилання конкурентів, чесно про біржі посилань і ризики купівлі, і що має бути готово на сайті ще до старту лінкбілдингу.",
    date: "2026-09-12",
    images: [
      { src: "https://picsum.photos/seed/seo-links-1/1200/630", alt: "Схема мережі посилань між сайтами" },
      { src: "https://picsum.photos/seed/seo-links-2/1000/600", alt: "Код HTML з атрибутом rel на екрані" },
      { src: "https://picsum.photos/seed/seo-links-3/1000/600", alt: "Графік аналітики беклінків конкурентів на екрані" },
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
