import { FunctionComponent } from "react";
import styles from "./BrandBrowsing.module.css";

export type BrandBrowsingType = {
  className?: string;
};

const BrandBrowsing: FunctionComponent<BrandBrowsingType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.brandBrowsing, className].join(" ")}>
      <div className={styles.brandHeading}>
        <div className={styles.label}>اختيارات تناسب كل احتياج</div>
        <h3 className={styles.label2}>ابدأ بالبراند اللي بتحبه</h3>
      </div>
      <div className={styles.brandTiles}>
        <div className={styles.brandTile}>
          <h3 className={styles.label3}>كل البراندات</h3>
          <div className={styles.label4}>كل الاختيارات في مكان واحد</div>
        </div>
        <div className={styles.brandTile}>
          <h3 className={styles.label3}>Xiaomi</h3>
          <div className={styles.label4}>تقنية أكتر، بسعر أذكى</div>
        </div>
        <div className={styles.brandTile}>
          <h3 className={styles.label3}>Apple / iPhone</h3>
          <div className={styles.label4}>تجربة مختلفة في كل تفصيلة</div>
        </div>
        <div className={styles.brandTile}>
          <h3 className={styles.label3}>SAMSUNG</h3>
          <div className={styles.label4}>ابتكار يناسب يومك</div>
        </div>
      </div>
    </section>
  );
};

export default BrandBrowsing;
