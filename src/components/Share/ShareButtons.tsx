"use client";

import { useState } from "react";
import styles from "./ShareButtons.module.scss";

interface ShareButtonsProps {
  url: string;
  title: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title }) => {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    { name: "Telegram", href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`, icon: "icon-telegram" },
    { name: "X", href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, icon: "icon-x" },
    { name: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, icon: "icon-linkendin" },
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API недоступний (наприклад, http без TLS) — тихо ігноруємо
    }
  };

  return (
    <div className={styles.share}>
      <span className={styles.label}>Поділитися:</span>
      <div className={styles.icons}>
        {links.map((l) => (
          <a
            key={l.name}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Поділитися в ${l.name}`}
            className={styles.iconLink}
          >
            <svg width="18" height="18">
              <use href={`/icons.svg#${l.icon}`}></use>
            </svg>
          </a>
        ))}
        <button type="button" onClick={copyLink} className={styles.copyButton}>
          {copied ? "Скопійовано!" : "Скопіювати посилання"}
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;
