import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ProductCard.module.css";

export type ProductCardType = {
  className?: string;
  productPhotography?: string;
  categoryAndBrand?: string;
  productName?: string;
  productSummary?: string;
  productPrice?: string;

  /** Style props */
  productSummaryDisplay?: CSSProperties["display"];
  productSummaryAlignSelf?: CSSProperties["alignSelf"];
};

const ProductCard: FunctionComponent<ProductCardType> = ({
  className = "",
  productPhotography,
  categoryAndBrand,
  productName,
  productSummary,
  productSummaryDisplay,
  productSummaryAlignSelf,
  productPrice,
}) => {
  const productSummaryStyle: CSSProperties = useMemo(() => {
    return {
      display: productSummaryDisplay,
      alignSelf: productSummaryAlignSelf,
    };
  }, [productSummaryDisplay, productSummaryAlignSelf]);

  return (
    <section className={[styles.productCard, className].join(" ")}>
      <img
        className={styles.productPhotographyIcon}
        loading="lazy"
        alt=""
        src={productPhotography}
      />
      <div className={styles.productInformation}>
        <div className={styles.categoryAndBrand}>{categoryAndBrand}</div>
        <div className={styles.productName}>{productName}</div>
        <div className={styles.productSummary} style={productSummaryStyle}>
          {productSummary}
        </div>
        <h3 className={styles.productPrice}>{productPrice}</h3>
      </div>
      <button className={styles.action}>
        <img
          className={styles.messageCircleIcon}
          alt=""
          src="/message-circle.svg"
        />
        <div className={styles.actionLabel}>اسأل عن المنتج واتساب</div>
      </button>
    </section>
  );
};

export default ProductCard;
