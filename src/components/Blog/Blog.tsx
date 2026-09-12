import Link from "next/link";
import Image from "next/image";
import styles from "./Blog.module.scss";
import { blogPosts } from "@/content/blog/posts";

const Blog: React.FC = () => {
  const sorted = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className={styles.blog}>
      <div className={styles.container}>
        <h1 className={styles.title}>Блог</h1>
        <p className={styles.subtitle}>
          Практичні матеріали про веброзробку: бюджети, вибір формату сайту, швидкість і конверсію.
        </p>

        <div className={styles.cards}>
          {sorted.map((post) => (
            <Link key={post.slug} href={`/ua/blog/${post.slug}`} className={styles.card}>
              <div className={styles.cardImageWrap}>
                <Image
                  src={post.images[0].src}
                  alt={post.images[0].alt}
                  fill
                  sizes="(min-width: 1280px) 380px, (min-width: 768px) 50vw, 100vw"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.date}>
                  {new Date(post.date).toLocaleDateString("uk-UA", { year: "numeric", month: "long", day: "numeric" })}
                </span>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <p className={styles.excerpt}>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
