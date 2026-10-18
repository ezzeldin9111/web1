import { FunctionComponent } from "react";
import styles from "./MerchandisingHero.module.css";

export type MerchandisingHeroType = {
  className?: string;
};

const MerchandisingHero: FunctionComponent<MerchandisingHeroType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.merchandisingHero, className].join(" ")}>
      <div className={styles.heroPanel}>
        <img
          className={styles.campaignPhotographIcon}
          loading="lazy"
          alt=""
          src="/Campaign-photograph@2x.png"
        />
        <section className={styles.heroMessage}>
          <div className={styles.label}>
            أحدث الموبايلات. اختيارات على مزاجك.
          </div>
          <div className={styles.heroTitle}>
            موبايلك الجديد، أقرب مما تتخيل.
          </div>
          <div className={styles.label2}>
            من الفلاجشيب لأفضل قيمة مقابل سعر. اختار اللي يناسبك، وخلّي الباقي
            علينا.
          </div>
          <div className={styles.heroActions}>
            <button className={styles.action}>
              <img
                className={styles.messageCircleIcon}
                alt=""
                src="/message-circle.svg"
              />
              <div className={styles.actionLabel}>اسألنا واتساب</div>
            </button>
            <button className={styles.action2}>
              <img
                className={styles.messageCircleIcon}
                alt=""
                src="/arrow-left.svg"
              />
              <div className={styles.actionLabel2}>اكتشف الموبايلات</div>
            </button>
          </div>
          <div className={styles.label3}>
            منتجات أصلية • أسعار واضحة • نصيحة من ناس فاهمة
          </div>
        </section>
      </div>
    </div>
  );
};

export default MerchandisingHero;
