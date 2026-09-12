import Link from "next/link";
import Image from "next/image";
import styles from "./News.module.scss";
import { newsItems } from "@/content/news/news";

const News: React.FC = () => {
  const sorted = [...newsItems].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className={styles.news}>
      <div className={styles.container}>
        <h1 className={styles.title}>Новини</h1>
        <p className={styles.subtitle}>
          Короткі оновлення про сайт, веброзробку та просування — додаємо кілька разів на тиждень.
        </p>

        <div className={styles.list}>
          {sorted.map((item) => (
            <Link key={item.id} href={`/ua/news/${item.id}`} className={styles.card}>
              <div className={styles.cardImageWrap}>
                <Image
                  src={item.images[0].src}
                  alt={item.images[0].alt}
                  fill
                  sizes="(min-width: 900px) 380px, 100vw"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardHead}>
                  <span className={styles.tag}>{item.tag}</span>
                  <span className={styles.date}>
                    {new Date(item.date).toLocaleDateString("uk-UA", { year: "numeric", month: "long", day: "numeric" })}
                  </span>
                  <span className={styles.views}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    {item.views}
                  </span>
                </div>
                <h2 className={styles.cardTitle}>{item.title}</h2>
                <p className={styles.excerpt}>{item.excerpt}</p>
                <span className={styles.readMore}>Читати повністю →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
