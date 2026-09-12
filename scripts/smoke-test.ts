// Піднімає production-білд (`next start`) і перевіряє ключові маршрути: статус-коди,
// UA-only гейтинг (інші мови -> 404), наявність очікуваного тексту, sitemap/robots.
// Використання: npm run build && npm run test:smoke
import { spawn, execSync, ChildProcess } from "node:child_process";
import { existsSync } from "node:fs";
import { blogPosts } from "../src/content/blog/posts";
import { newsItems } from "../src/content/news/news";
import { SUPPORTED_LANGS } from "../src/lib/site-urls";

const PORT = 3399;
const BASE = `http://localhost:${PORT}`;

interface Check {
  path: string;
  expectStatus: number;
  expectContains?: string;
  expectNotContains?: string;
}

const checks: Check[] = [
  ...SUPPORTED_LANGS.map((lang) => ({ path: `/${lang}`, expectStatus: 200 })),
  { path: "/ua/services", expectStatus: 200, expectContains: 'aria-label="Select language"' },
  { path: "/ua/services/subscription", expectStatus: 200, expectNotContains: 'aria-label="Select language"' },
  { path: "/en/services/subscription", expectStatus: 404 },
  { path: "/ua/blog", expectStatus: 200, expectContains: "Блог", expectNotContains: 'aria-label="Select language"' },
  { path: "/en/blog", expectStatus: 404 },
  { path: "/ua/news", expectStatus: 200, expectContains: "Новини", expectNotContains: 'aria-label="Select language"' },
  { path: "/en/news", expectStatus: 404 },
  { path: "/sitemap.xml", expectStatus: 200, expectContains: "<urlset" },
  { path: "/robots.txt", expectStatus: 200, expectContains: "Sitemap:" },
  ...blogPosts.map((post) => ({ path: `/ua/blog/${post.slug}`, expectStatus: 200, expectContains: post.title })),
  ...newsItems.map((item) => ({ path: `/ua/news/${item.id}`, expectStatus: 200, expectContains: item.title })),
  { path: "/en/news/chrome-shvydkist-spa-saitiv", expectStatus: 404 },
];

function waitForServer(proc: ChildProcess, timeoutMs = 30000): Promise<void> {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const timer = setInterval(async () => {
      if (Date.now() - start > timeoutMs) {
        clearInterval(timer);
        reject(new Error("Сервер не стартував за відведений час"));
        return;
      }
      try {
        await fetch(BASE);
        clearInterval(timer);
        resolve();
      } catch {
        // ще не готовий, пробуємо ще раз
      }
    }, 400);

    proc.on("exit", (code) => {
      clearInterval(timer);
      reject(new Error(`next start завершився передчасно (код ${code})`));
    });
  });
}

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

async function runChecks(): Promise<boolean> {
  let allPassed = true;

  for (const check of checks) {
    const res = await fetch(`${BASE}${check.path}`);
    const statusOk = res.status === check.expectStatus;
    let containsOk = true;
    let notContainsOk = true;
    let body = "";

    if (check.expectContains || check.expectNotContains) {
      body = decodeHtmlEntities(await res.text());
      if (check.expectContains) containsOk = body.includes(check.expectContains);
      if (check.expectNotContains) notContainsOk = !body.includes(check.expectNotContains);
    }

    if (statusOk && containsOk && notContainsOk) {
      console.log(`  OK   ${check.path} (${res.status})`);
    } else {
      allPassed = false;
      console.error(`  FAIL ${check.path}`);
      if (!statusOk) console.error(`       очікував статус ${check.expectStatus}, отримав ${res.status}`);
      if (!containsOk) console.error(`       очікував текст "${check.expectContains}" у відповіді, не знайдено`);
      if (!notContainsOk) console.error(`       не мало бути тексту "${check.expectNotContains}" у відповіді, але він є`);
    }
  }

  return allPassed;
}

function stopServer(proc: ChildProcess) {
  if (!proc.pid) return;
  if (process.platform === "win32") {
    // spawn({ shell: true }) на Windows створює процес-обгортку (cmd.exe) — proc.kill()
    // вбиває лише її, а next start лишається висіти. /T вбиває все дерево процесів.
    try {
      execSync(`taskkill /pid ${proc.pid} /T /F`, { stdio: "ignore" });
    } catch {
      // процес уже міг завершитись сам
    }
  } else {
    proc.kill();
  }
}

async function main() {
  if (!existsSync(".next")) {
    console.error("Немає .next — спочатку запустіть `npm run build`");
    process.exit(1);
  }

  console.log(`Стартую next start на порту ${PORT}...`);
  const server = spawn("npx", ["next", "start", "-p", String(PORT)], {
    stdio: "pipe",
    shell: true,
  });

  let passed = false;
  try {
    await waitForServer(server);
    console.log("Сервер готовий, перевіряю маршрути:\n");
    passed = await runChecks();
  } finally {
    stopServer(server);
  }

  if (passed) {
    console.log("\nУсі smoke-перевірки пройшли.");
    process.exit(0);
  } else {
    console.error("\nЄ провалені перевірки — дивись FAIL вище.");
    process.exit(1);
  }
}

main();
