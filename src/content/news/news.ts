import type { ContentImage } from "../blog/posts";

export interface NewsItem {
  id: string; // також слаг для /ua/news/[id], .mdx-файл із тим самим ім'ям у src/content/news/
  date: string; // YYYY-MM-DD
  tag: string;
  title: string;
  excerpt: string; // короткий текст для картки в списку
  images: ContentImage[]; // мінімум 3, перше — обкладинка картки/hero на сторінці
  sourceUrl?: string; // першоджерело, якщо новина зовнішня (рендериться з rel="nofollow")
}

// Додавайте нові записи ЗГОРИ масиву (найновіші — перші) + .mdx файл із повним текстом
// (мінімум ~3500 символів) у src/content/news/<id>.mdx.
// Новини із зовнішніх джерел — тільки офіційні джерела (англомовні міжнародні й українські:
// DOU.ua, AIN.ua, itc.ua тощо), з різних видань (не завжди одне й те саме), переказ власними
// словами, з посиланням sourceUrl. Див. CONTENT_GUIDELINES.md.
export const newsItems: NewsItem[] = [
  {
    id: "seo-link-building-guide",
    date: "2026-09-12",
    tag: "SEO",
    title: "Як правильно будувати SEO-посилання: покроковий гайд",
    excerpt: "Різниця між dofollow і nofollow, як перевірити посилання просто через браузер, де шукати донорів і посилання конкурентів, чесно про біржі посилань і ризики купівлі, і що має бути готово на сайті ще до старту лінкбілдингу.",
    images: [
      { src: "https://picsum.photos/seed/seo-links-1/1200/630", alt: "Схема мережі посилань між сайтами" },
      { src: "https://picsum.photos/seed/seo-links-2/1000/600", alt: "Код HTML з атрибутом rel на екрані" },
      { src: "https://picsum.photos/seed/seo-links-3/1000/600", alt: "Графік аналітики беклінків конкурентів на екрані" },
    ],
    sourceUrl: "https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links",
  },
  {
    id: "wordpress-critical-vulnerability",
    date: "2026-09-12",
    tag: "Безпека",
    title: "Критична вразливість WordPress — під загрозою сотні мільйонів сайтів",
    excerpt: "Дослідники кібербезпеки зафіксували масову експлуатацію вразливостей у WordPress 6.9.0-6.9.4 та 7.0.0-7.0.1. WordPress випустив патч і навіть застосував примусові оновлення — але мільйони сайтів досі не оновлені.",
    images: [
      { src: "https://picsum.photos/seed/wp-vuln-1/1200/630", alt: "Замок на фоні коду символізує вразливість у безпеці сайту" },
      { src: "https://picsum.photos/seed/wp-vuln-2/1000/600", alt: "Екран з кодом і повідомленням про помилку безпеки" },
      { src: "https://picsum.photos/seed/wp-vuln-3/1000/600", alt: "Закритий навісний замок на фоні коду символізує захист сайту" },
    ],
    sourceUrl: "https://ms.detector.media/internet/post/39390/2026-07-21-khakery-ekspluatuyut-krytychni-vrazlyvosti-wordpress-dlya-zlamu-saytiv-techcrunch/",
  },
  {
    id: "ai-overviews-ukraine",
    date: "2026-09-12",
    tag: "SEO",
    title: "AI Overviews в Україні: як штучний інтелект забирає трафік із органічного пошуку",
    excerpt: "AI Overviews вже давно не експеримент для української аудиторії Google — CTR першого органічного результату падає приблизно на третину, коли з'являється цей блок. Розбираємо цифри і що з цим робити бізнесу.",
    images: [
      { src: "https://picsum.photos/seed/ai-overviews-1/1200/630", alt: "Екран пошукової системи з блоком AI-відповіді" },
      { src: "https://picsum.photos/seed/ai-overviews-2/1000/600", alt: "Смартфон з результатами пошуку Google на екрані" },
      { src: "https://picsum.photos/seed/ai-overviews-3/1000/600", alt: "Графік падіння трафіку на екрані аналітики" },
    ],
    sourceUrl: "https://www.promodo.ua/blog/ai-overviews-zapustili-v-ukrayini-rozpovidaiemo-yak-pidgotuvatisya",
  },
  {
    id: "chrome-two-week-updates",
    date: "2026-09-12",
    tag: "Технології",
    title: "Chrome переходить на двотижневий цикл оновлень",
    excerpt: "Починаючи з Chrome 153, Google скорочує цикл випуску оновлень браузера з чотирьох до двох тижнів заради швидшої реакції на вразливості. Що це означає для тестування сайтів і нових CSS/JS-можливостей.",
    images: [
      { src: "https://picsum.photos/seed/chrome-two-week-1/1200/630", alt: "Логотип браузера Chrome на екрані смартфона" },
      { src: "https://picsum.photos/seed/chrome-two-week-2/1000/600", alt: "Іконка браузера Chrome на екрані ноутбука" },
      { src: "https://picsum.photos/seed/chrome-two-week-3/1000/600", alt: "Календар з позначеними датами оновлень" },
    ],
    sourceUrl: "https://www.ukrinform.ua/rubric-world/4162467-chrome-zadla-bezpeki-vipuskatime-onovlenna-kozni-dva-tizni.html",
  },
  {
    id: "chrome-soft-navigations",
    date: "2026-09-12",
    tag: "Продуктивність",
    title: "Chrome навчився правильно вимірювати швидкість SPA-сайтів",
    excerpt: "У Chrome 147 запустили фінальний origin trial Soft Navigations API — тепер Core Web Vitals, включно з INP, коректно рахуються і для внутрішніх переходів SPA, а не лише для першого завантаження.",
    images: [
      { src: "https://picsum.photos/seed/chrome-soft-nav-1/1200/630", alt: "Код на екрані ноутбука символізує розробку сайту" },
      { src: "https://picsum.photos/seed/chrome-soft-nav-2/1000/600", alt: "Логотип браузера на екрані смартфона" },
      { src: "https://picsum.photos/seed/chrome-soft-nav-3/1000/600", alt: "Графік швидкодії сайту в інструментах розробника" },
    ],
    sourceUrl: "https://developer.chrome.com/blog/final-soft-navigations-origin-trial",
  },
  {
    id: "google-site-reputation-policy",
    date: "2026-09-12",
    tag: "SEO",
    title: "Google уточнив правила щодо \"запозиченої репутації\" сайту",
    excerpt: "З 30 серпня 2026 року Google змінив підхід до покарання за site reputation abuse — для сайтів у Європейській економічній зоні санкція тепер стосується лише проблемного розділу, а не всього домену.",
    images: [
      { src: "https://picsum.photos/seed/site-reputation-1/1200/630", alt: "Графік аналітики пошукового трафіку на екрані" },
      { src: "https://picsum.photos/seed/site-reputation-2/1000/600", alt: "Лупа над документом символізує перевірку сайту" },
      { src: "https://picsum.photos/seed/site-reputation-3/1000/600", alt: "Карта Європи символізує регіональні правила" },
    ],
    sourceUrl: "https://developers.google.com/search/blog/2026/08/update-site-reputation-policy",
  },
  {
    id: "blog-launch",
    date: "2026-09-12",
    tag: "Оновлення сайту",
    title: "На сайті запрацював блог",
    excerpt: "Додали розділ блогу з практичними статтями про вартість сайтів, вибір формату (лендинг чи багатосторінковий сайт) і вплив швидкості на конверсію — і пояснюємо, чому вирішили це зробити.",
    images: [
      { src: "https://picsum.photos/seed/blog-launch-1/1200/630", alt: "Відкритий блокнот і кава на робочому столі" },
      { src: "https://picsum.photos/seed/blog-launch-2/1000/600", alt: "Екран із заголовком нової статті блогу" },
      { src: "https://picsum.photos/seed/blog-launch-3/1000/600", alt: "Робочий стіл з ноутбуком і нотатками" },
    ],
  },
  {
    id: "alt-tags-seo",
    date: "2026-09-11",
    tag: "SEO",
    title: "Чому alt-теги для зображень досі важливі",
    excerpt: "Alt-атрибут — не формальність: він впливає і на доступність сайту для людей зі скрінрідерами, і на позиції в Google Images. Розбираємо типові помилки і як писати хороший alt-текст.",
    images: [
      { src: "https://picsum.photos/seed/alt-tags-1/1200/630", alt: "Дизайнер редагує зображення для сайту" },
      { src: "https://picsum.photos/seed/alt-tags-2/1000/600", alt: "Код HTML з атрибутом alt на екрані" },
      { src: "https://picsum.photos/seed/alt-tags-3/1000/600", alt: "Людина користується скрінрідером на комп'ютері" },
    ],
  },
  {
    id: "mobile-traffic",
    date: "2026-09-10",
    tag: "Тренди",
    title: "Мобільний трафік продовжує домінувати",
    excerpt: "Для більшості ніш мобільний трафік уже основний канал. Пояснюємо, чому mobile-first індексація Google робить адаптивність базовою вимогою, а не бонусом, і з чого почати перевірку сайту.",
    images: [
      { src: "https://picsum.photos/seed/mobile-traffic-1/1200/630", alt: "Людина переглядає сайт на смартфоні" },
      { src: "https://picsum.photos/seed/mobile-traffic-2/1000/600", alt: "Кілька мобільних екранів з адаптивним дизайном" },
      { src: "https://picsum.photos/seed/mobile-traffic-3/1000/600", alt: "Графік зростання мобільного трафіку" },
    ],
  },
];

newsItems.forEach((item) => {
  if (item.images.length < 3) {
    throw new Error(
      `Новина "${item.id}" має ${item.images.length} фото — мінімум 3 за правилами (src/content/CONTENT_GUIDELINES.md)`
    );
  }
});
