import { FunctionComponent } from "react";
import styles from "./MerchandisingHero.module.css";

export type MerchandisingHeroType = {
  className?: string;
};

const MerchandisingHero: FunctionComponent<MerchandisingHeroType> = ({
  className = "",
}) => {
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .mobile-hero-container {
            width: 100% !important;
            overflow: hidden !important;
            box-sizing: border-box !important;
          }
          .mobile-hero-panel {
            flex-direction: column !important;
            padding: 20px 15px !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          .mobile-hero-img {
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            margin-bottom: 20px !important;
            border-radius: 12px !important;
          }
          .mobile-hero-msg {
            width: 100% !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            box-sizing: border-box !important;
          }
          .mobile-text {
            white-space: normal !important;
            word-wrap: break-word !important;
            width: 100% !important;
            text-align: center !important;
          }
          .mobile-actions {
            flex-direction: column !important;
            width: 100% !important;
            gap: 15px !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .mobile-btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>

      <div className={[styles.merchandisingHero, className, "mobile-hero-container"].join(" ")} style={{ width: "100%", boxSizing: "border-box" }}>
        <div className={`${styles.heroPanel} mobile-hero-panel`} style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", width: "100%", maxWidth: "1200px", margin: "0 auto", boxSizing: "border-box" }}>
          
          <img
            className={`${styles.campaignPhotographIcon} mobile-hero-img`}
            loading="lazy"
            alt=""
            src="/Campaign-photograph@2x.png"
            style={{ maxWidth: "50%", objectFit: "cover" }}
          />
          
          <section className={`${styles.heroMessage} mobile-hero-msg`} style={{ flex: 1, minWidth: "300px", padding: "20px", boxSizing: "border-box" }}>
            
            <div className={`${styles.label} mobile-text`} style={{ color: "#215CFF", fontWeight: "bold", marginBottom: "12px" }}>
              أحدث الموبايلات. اختيارات على مزاجك.
            </div>
            
            <div className={`${styles.heroTitle} mobile-text`} style={{ fontSize: "32px", fontWeight: "bold", color: "#121D31", marginBottom: "16px", lineHeight: "1.4" }}>
              موبايلك الجديد، أقرب مما تتخيل.
            </div>
            
            <div className={`${styles.label2} mobile-text`} style={{ color: "#667085", fontSize: "16px", marginBottom: "24px", lineHeight: "1.6" }}>
              من الفلاجشيب لأفضل قيمة مقابل سعر. اختار اللي يناسبك، وخلّي الباقي علينا.
            </div>
            
            <div className={`${styles.heroActions} mobile-actions`} style={{ display: "flex", gap: "16px", marginBottom: "24px" }}>
              <button className={`${styles.action} mobile-btn`} onClick={() => window.open("https://wa.me/201551941042", "_blank")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", backgroundColor: "#215CFF", color: "#fff", border: "none", padding: "12px 24px", borderRadius: "8px" }}>
                <img
                  className={styles.messageCircleIcon}
                  alt=""
                  src="/message-circle.svg"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
                <div className={styles.actionLabel} style={{ fontWeight: "bold" }}>اسألنا واتساب</div>
              </button>
              
              <button className={`${styles.action2} mobile-btn`} onClick={() => { document.getElementById("products-section")?.scrollIntoView({ behavior: 'smooth' }); }} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", backgroundColor: "#EDF2FF", color: "#215CFF", border: "none", padding: "12px 24px", borderRadius: "8px" }}>
                <img
                  className={styles.messageCircleIcon}
                  alt=""
                  src="/arrow-left.svg"
                />
                <div className={styles.actionLabel2} style={{ fontWeight: "bold" }}>اكتشف الموبايلات</div>
              </button>
            </div>
            
            <div className={`${styles.label3} mobile-text`} style={{ color: "#667085", fontSize: "14px" }}>
              منتجات أصلية • أسعار واضحة • نصيحة من ناس فاهمة
            </div>
            
          </section>
        </div>
      </div>
    </>
  );
};

export default MerchandisingHero;