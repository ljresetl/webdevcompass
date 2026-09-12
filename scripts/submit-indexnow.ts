// Запускається автоматично після кожного `npm run build` (див. "postbuild" у package.json).
// Надсилає повний перелік сторінок сайту в IndexNow (Bing, Yandex тощо підхоплюють миттєво),
// щоб нові чи оновлені сторінки (статті блогу, новини) індексувались без ручних дій.
import { BASE_URL, INDEXNOW_KEY } from "../src/lib/seo";
import { getAllSiteUrls } from "../src/lib/site-urls";

async function main() {
  const urlList = getAllSiteUrls().map((u) => u.url);
  const host = new URL(BASE_URL).host;

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host,
        key: INDEXNOW_KEY,
        keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
        urlList,
      }),
    });

    if (res.ok) {
      console.log(`[indexnow] Надіслано ${urlList.length} URL, статус ${res.status}`);
    } else {
      console.warn(`[indexnow] IndexNow відповів ${res.status} — не блокує білд`);
    }
  } catch (err) {
    // Не валимо білд, якщо немає мережі (наприклад, локальна збірка без інтернету)
    console.warn("[indexnow] Не вдалось надіслати запит:", (err as Error).message);
  }
}

main();
