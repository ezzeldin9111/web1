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

  // تجهيز رسالة الواتساب باسم المنتج
  const whatsappMessage = encodeURIComponent(`مرحباً، أريد الاستفسار عن المنتج: ${productName || 'منتج من المتجر'}`);

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .mobile-product-card {
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
            margin: 0 auto 15px auto !important;
            padding: 15px !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          .mobile-product-img {
            width: 100% !important;
            max-width: 250px !important;
            height: auto !important;
            object-fit: contain !important;
            margin-bottom: 15px !important;
          }
          .mobile-product-info {
            width: 100% !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 8px !important;
          }
          .mobile-product-btn {
            width: 100% !important;
            justify-content: center !important;
            margin-top: 15px !important;
          }
        }
      `}</style>

      <section className={[styles.productCard, className, "mobile-product-card"].join(" ")} style={{ boxSizing: "border-box", overflow: "hidden", backgroundColor: "#fff", borderRadius: "16px", padding: "20px" }}>
        <img
          className={`${styles.productPhotographyIcon} mobile-product-img`}
          loading="lazy"
          alt={productName || "صورة المنتج"}
          src={productPhotography}
        />
        <div className={`${styles.productInformation} mobile-product-info`}>
          <div className={styles.categoryAndBrand} style={{ color: "#667085", fontSize: "12px" }}>{categoryAndBrand}</div>
          <div className={styles.productName} style={{ fontWeight: "bold", fontSize: "18px", color: "#121D31" }}>{productName}</div>
          <div className={styles.productSummary} style={{ ...productSummaryStyle, color: "#667085", fontSize: "14px", textAlign: "center" }}>
            {productSummary}
          </div>
          <h3 className={styles.productPrice} style={{ color: "#215CFF", margin: "10px 0", fontSize: "20px" }}>{productPrice}</h3>
        </div>
        <button 
          className={`${styles.action} mobile-product-btn`} 
          onClick={() => window.open(`https://wa.me/201551941042?text=${whatsappMessage}`, "_blank")}
          style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", backgroundColor: "#EDF2FF", border: "none", padding: "12px", borderRadius: "8px", color: "#215CFF", fontWeight: "bold" }}
        >
          <img
            className={styles.messageCircleIcon}
            alt=""
            src="/message-circle.svg"
          />
          <div className={styles.actionLabel}>اسأل عن المنتج واتساب</div>
        </button>
      </section>
    </>
  );
};

export default ProductCard;