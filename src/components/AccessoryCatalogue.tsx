import { FunctionComponent, useState } from "react";
import ProductCard from "./ProductCard";
import styles from "./AccessoryCatalogue.module.css";

export type AccessoryCatalogueType = {
  className?: string;
};

const AccessoryCatalogue: FunctionComponent<AccessoryCatalogueType> = ({
  className = "",
}) => {
  const [productCardItems] = useState([
    {
      productPhotography: "/Product-photography@2x.png",
      categoryAndBrand: "جرابات / متوافق مع Apple",
      productName: "جراب سيليكون iPhone 15",
      productSummary: "ملمس ناعم • حماية الكاميرا • أزرق",
      productSummaryDisplay: undefined,
      productSummaryAlignSelf: undefined,
      productPrice: "390 ج.م",
    },
    {
      productPhotography: "/Product-photography1@2x.png",
      categoryAndBrand: "حماية الشاشة / متوافق مع Apple",
      productName: "حماية شاشة iPhone 15",
      productSummary: "زجاج 9H • حواف كاملة • شفاف",
      productSummaryDisplay: "unset" as const,
      productSummaryAlignSelf: "stretch" as const,
      productPrice: "250 ج.م",
    },
    {
      productPhotography: "/Product-photography7@2x.png",
      categoryAndBrand: "ساعات ذكية / Xiaomi",
      productName: "Redmi Watch 4",
      productSummary: "شاشة AMOLED • مقاومة للمياه",
      productSummaryDisplay: "unset" as const,
      productSummaryAlignSelf: "stretch" as const,
      productPrice: "4,250 ج.م",
    },
    {
      productPhotography: "/Product-photography6@2x.png",
      categoryAndBrand: "سماعات / Samsung",
      productName: "Samsung Galaxy Buds FE",
      productSummary: "عزل ضوضاء • بطارية حتى 30 ساعة",
      productSummaryDisplay: "unset" as const,
      productSummaryAlignSelf: "stretch" as const,
      productPrice: "3,450 ج.م",
    },
  ]);
  return (
    <div className={[styles.accessoryCatalogue, className].join(" ")}>
      <div className={styles.sectionHeading}>
        <div className={styles.browseLink}>عرض الكل ←</div>
        <div className={styles.headingCopy}>
          <h2 className={styles.sectionTitle}>إكسسوارات مختارة ليك</h2>
          <div className={styles.sectionDescription}>
            سماعات، ساعات، حماية شاشة وجرابات — بأسعار واضحة.
          </div>
        </div>
      </div>
      <div className={styles.accessoryProducts}>
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
    </div>
  );
};

export default AccessoryCatalogue;
