import { FunctionComponent, useState } from "react";
import ProductCard from "./ProductCard";
import styles from "./PhoneCatalogue.module.css";

export type PhoneCatalogueType = {
  className?: string;
};

const PhoneCatalogue: FunctionComponent<PhoneCatalogueType> = ({
  className = "",
}) => {
  const [productCardItems] = useState([
    {
      productPhotography: "/Product-photography2@2x.png",
      categoryAndBrand: "موبايلات / Samsung",
      productName: "Samsung Galaxy A55",
      productSummary: "256 جيجا • 8 جيجا رام • أزرق",
      productSummaryDisplay: "inline-block" as const,
      productSummaryAlignSelf: undefined,
      productPrice: "19,900 ج.م",
    },
    {
      productPhotography: "/Product-photography3@2x.png",
      categoryAndBrand: "موبايلات / Xiaomi",
      productName: "Xiaomi Redmi Note 13",
      productSummary: "256 جيجا • 8 جيجا رام • أسود",
      productSummaryDisplay: "inline-block" as const,
      productSummaryAlignSelf: undefined,
      productPrice: "9,750 ج.م",
    },
    {
      productPhotography: "/Product-photography5@2x.png",
      categoryAndBrand: "موبايلات / Apple",
      productName: "Apple iPhone 15",
      productSummary: "128 جيجا • أسود • ضمان محلي",
      productSummaryDisplay: "inline-block" as const,
      productSummaryAlignSelf: undefined,
      productPrice: "34,500 ج.م",
    },
    {
      productPhotography: "/Product-photography4@2x.png",
      categoryAndBrand: "موبايلات / Samsung",
      productName: "Samsung Galaxy S24 Ultra",
      productSummary: "256 جيجا • 12 جيجا رام • تيتانيوم رمادي",
      productSummaryDisplay: "unset" as const,
      productSummaryAlignSelf: "stretch" as const,
      productPrice: "46,900 ج.م",
    },
  ]);
  return (
    <section className={[styles.phoneCatalogue, className].join(" ")}>
      <div className={styles.sectionHeading}>
        <div className={styles.browseLink}>عرض الكل ←</div>
        <div className={styles.headingCopy}>
          <h2 className={styles.sectionTitle}>موبايلات تستاهل تختارها</h2>
          <div className={styles.sectionDescription}>
            اكتشف أحدث الموديلات، واسألنا عن اللون والسعة المتاحين.
          </div>
        </div>
      </div>
      <div className={styles.brandFilters}>
        <div className={styles.label}>
          <div className={styles.label2}>
            عرض 4 منتجات • ترتيب: الأحدث أولًا ↓
          </div>
        </div>
        <div className={styles.filterChoices}>
          <button className={styles.filterOption}>
            <div className={styles.optionLabel}>Xiaomi</div>
          </button>
          <button className={styles.filterOption2}>
            <div className={styles.optionLabel2}>Apple / iPhone</div>
          </button>
          <button className={styles.filterOption}>
            <div className={styles.optionLabel}>Samsung</div>
          </button>
          <button className={styles.filterOption4}>
            <div className={styles.optionLabel4}>كل البراندات</div>
          </button>
          <div className={styles.filterLabel}>
            <div className={styles.filterLabel2}>البراند</div>
          </div>
        </div>
      </div>
      <div className={styles.phoneProducts}>
        {productCardItems.map((item, index) => (
          <ProductCard
            key={index}
            productPhotography={item.productPhotography}
            categoryAndBrand={item.categoryAndBrand}
            productName={item.productName}
            productSummary={item.productSummary}
            productSummaryDisplay={item.productSummaryDisplay}
            productSummaryAlignSelf={item.productSummaryAlignSelf}
            productPrice={item.productPrice}
          />
        ))}
      </div>
    </section>
  );
};

export default PhoneCatalogue;
