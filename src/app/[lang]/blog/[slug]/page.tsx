import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "@/components/Blog/BlogPost.module.scss";
import ShareButtons from "@/components/Share/ShareButtons";
import { blogPosts } from "@/content/blog/posts";
import { BASE_URL } from "@/lib/seo";

type Props = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  if (lang !== "ua") return {};
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | WebDevCompass`,
    description: post.excerpt,
    alternates: { canonical: `https://www.webdevcompass.com/${lang}/blog/${slug}` },
    openGraph: { title: post.title, description: post.excerpt, url: `https://www.webdevcompass.com/${lang}/blog/${slug}`, siteName: "WebDevCompass", type: "article", images: [post.images[0].src] },
    // Next.js не домержовує openGraph/twitter з батьківського layout.tsx — без цього
    // поля X/Twitter показував би загальну картинку сайту замість фото статті.
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt, images: [post.images[0].src] },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { lang, slug } = await params;
  if (lang !== "ua") notFound();

  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const { default: Post } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <section className={styles.post}>
      <div className={styles.container}>
        <Link href="/ua/blog" className={styles.back}>
          ← Усі статті
        </Link>
        <span className={styles.date}>
          {new Date(post.date).toLocaleDateString("uk-UA", { year: "numeric", month: "long", day: "numeric" })}
        </span>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.coverImageWrap}>
          <Image src={post.images[0].src} alt={post.images[0].alt} fill sizes="(min-width: 768px) 760px, 100vw" className={styles.coverImage} priority />
        </div>
        <div className={styles.content}>
          <Post />
        </div>

        <ShareButtons url={`${BASE_URL}/ua/blog/${slug}`} title={post.title} />
      </div>
    </section>
  );
}
