import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "@/components/News/NewsPost.module.scss";
import ShareButtons from "@/components/Share/ShareButtons";
import { newsItems } from "@/content/news/news";
import { BASE_URL } from "@/lib/seo";

type Props = { params: Promise<{ lang: string; id: string }> };

export function generateStaticParams() {
  return newsItems.map((item) => ({ id: item.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, id } = await params;
  if (lang !== "ua") return {};
  const item = newsItems.find((n) => n.id === id);
  if (!item) return {};
  return {
    title: `${item.title} | WebDevCompass`,
    description: item.excerpt,
    alternates: { canonical: `${BASE_URL}/${lang}/news/${id}` },
    openGraph: { title: item.title, description: item.excerpt, url: `${BASE_URL}/${lang}/news/${id}`, siteName: "WebDevCompass", type: "article", images: [item.images[0].src] },
  };
}

export default async function NewsPostPage({ params }: Props) {
  const { lang, id } = await params;
  if (lang !== "ua") notFound();

  const item = newsItems.find((n) => n.id === id);
  if (!item) notFound();

  const { default: Post } = await import(`@/content/news/${id}.mdx`);
  const url = `${BASE_URL}/ua/news/${id}`;

  return (
    <section className={styles.post}>
      <div className={styles.container}>
        <Link href="/ua/news" className={styles.back}>
          ← Усі новини
        </Link>

        <div className={styles.meta}>
          <span className={styles.tag}>{item.tag}</span>
          <span className={styles.date}>
            {new Date(item.date).toLocaleDateString("uk-UA", { year: "numeric", month: "long", day: "numeric" })}
          </span>
        </div>

        <h1 className={styles.title}>{item.title}</h1>

        <div className={styles.coverImageWrap}>
          <Image src={item.images[0].src} alt={item.images[0].alt} fill sizes="(min-width: 768px) 760px, 100vw" className={styles.coverImage} priority />
        </div>

        <div className={styles.content}>
          <Post />
        </div>

        {item.sourceUrl && (
          <a href={item.sourceUrl} target="_blank" rel="nofollow noopener noreferrer" className={styles.source}>
            Джерело →
          </a>
        )}

        <ShareButtons url={url} title={item.title} />
      </div>
    </section>
  );
}
