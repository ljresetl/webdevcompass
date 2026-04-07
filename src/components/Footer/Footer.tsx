"use client";

import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.container_footer_p}>© 2026 Vitalii Baranov</p>
      </div>
    </footer>
  );
};

export default Footer;
