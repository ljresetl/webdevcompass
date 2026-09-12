import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { AnchorHTMLAttributes, ImgHTMLAttributes } from "react";

const components: MDXComponents = {
  img: ({ alt = "", ...props }: ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} {...props} loading="lazy" style={{ width: "100%", height: "auto", borderRadius: "10px", margin: "8px 0 24px" }} />
  ),
  a: ({ href, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (href?.startsWith("/")) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }
    return (
      // Зовнішні посилання в контенті — завжди nofollow, щоб не передавати вагу стороннім сайтам
      <a href={href} target="_blank" rel="nofollow noopener noreferrer" {...props}>
        {children}
      </a>
    );
  },
};

export function useMDXComponents(): MDXComponents {
  return components;
}
