import React, { useRef, useState, useEffect } from "react";
import styles from "./AnimatedScrolSection.module.scss";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.section} ${className ?? ""} ${
        isVisible ? styles.slideUp : styles.hidden
      }`}
    > 
      {children}
    </div>
  );
};

export default Section;
