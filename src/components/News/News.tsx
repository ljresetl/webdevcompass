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
            <article key={item.id} className={styles.item}>
              <div className={styles.itemImageWrap}>
                <Image
                  src={item.images[0].src}
                  alt={item.images[0].alt}
                  fill
                  sizes="(min-width: 640px) 220px, 100vw"
                  className={styles.itemImage}
                />
              </div>
              <div className={styles.itemBody}>
                <div className={styles.itemHead}>
                  <span className={styles.tag}>{item.tag}</span>
                  <span className={styles.date}>
                    {new Date(item.date).toLocaleDateString("uk-UA", { year: "numeric", month: "long", day: "numeric" })}
                  </span>
                </div>
                <h2 className={styles.itemTitle}>{item.title}</h2>
                <p className={styles.itemText}>{item.body}</p>

                <div className={styles.thumbRow}>
                  {item.images.slice(1).map((img, i) => (
                    <div key={i} className={styles.thumbWrap}>
                      <Image src={img.src} alt={img.alt} fill sizes="80px" className={styles.thumb} />
                    </div>
                  ))}
                </div>

                {item.sourceUrl && (
                  <a href={item.sourceUrl} target="_blank" rel="nofollow noopener noreferrer" className={styles.source}>
                    Джерело →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
