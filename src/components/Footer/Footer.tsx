"use client";

import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.container_footer_p}>© 2026 Webdevcompass</p>
        
        {/* Рекламний блок 468x60 */}
        <div className={styles.bannerContainer} style={{ marginTop: "15px", textAlign: "center" }}>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                atOptions = {
                  'key' : 'dc5c92083aeb708d5e5b8b4b198f6835',
                  'format' : 'iframe',
                  'height' : 60,
                  'width' : 468,
                  'params' : {}
                };
              `,
            }}
          />
          <script src="https://bauval.org/22/dc5c92083aeb708d5e5b8b4b198f6835" async />
        </div>
      </div>
    </footer>
  );
};

export default Footer;