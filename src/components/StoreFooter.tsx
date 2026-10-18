import { FunctionComponent } from "react";
import styles from "./StoreFooter.module.css";

export type StoreFooterType = {
  className?: string;
};

const StoreFooter: FunctionComponent<StoreFooterType> = ({
  className = "",
}) => {
  return (
    <footer className={[styles.storeFooter, className].join(" ")} style={{ direction: "rtl", textAlign: "right" }}>
      <div className={styles.footerColumns} style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
        
        {/* 1. بيانات التواصل (على اليمين) */}
        <div className={styles.contactInformation} style={{ flex: 1, minWidth: "250px" }}>
          <h3 style={{ margin: "0 0 15px", color: "#121D31", fontSize: "18px" }}>تواصل معنا</h3>
          <div style={{ color: "#215CFF", fontWeight: "bold", marginBottom: "8px", fontSize: "16px", direction: "ltr", textAlign: "right" }}>
            015 5194 1042
          </div>
          <div style={{ color: "#667085", marginBottom: "15px", lineHeight: "1.6" }}>
            سمادون اشمون منوفيه بجوار الكوبري الجديد
          </div>
          <a href="https://wa.me/201551941042" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: '#fff', backgroundColor: '#215CFF', padding: '8px 16px', borderRadius: '8px', fontWeight: 'bold', display: 'inline-block' }}>
            تواصل عبر واتساب
          </a>
        </div>

        {/* 2. روابط سريعة (في المنتصف) */}
        <div className={styles.storeLinks} style={{ flex: 1, minWidth: "150px" }}>
          <h3 style={{ margin: "0 0 15px", color: "#121D31", fontSize: "18px" }}>روابط سريعة</h3>
          <div style={{ color: "#667085", marginBottom: "10px", cursor: "pointer" }}>الموبايلات</div>
          <div style={{ color: "#667085", marginBottom: "10px", cursor: "pointer" }}>الإكسسوارات</div>
          <div style={{ color: "#667085", cursor: "pointer" }}>Facebook / Instagram</div>
        </div>

        {/* 3. هوية المتجر (على الشمال) */}
        <div className={styles.footerIdentity} style={{ flex: 1, minWidth: "250px" }}>
          <div className={styles.shopIdentity} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
            <img className={styles.shopMarkIcon} alt="شعار رنة تليفون" src="/Shop-mark.svg" style={{ width: "44px", borderRadius: "12px" }} />
            <div className={styles.identityCopy}>
              <h3 className={styles.shopName} style={{ margin: 0, color: "#121D31", fontSize: "20px" }}>رنة تليفون</h3>
              <div className={styles.shopDescriptor} style={{ color: "#667085", fontSize: "12px", marginTop: "4px" }}>موبايلات وإكسسوارات</div>
            </div>
          </div>
          <div style={{ color: "#667085", fontSize: "14px", lineHeight: "1.6" }}>
            كل اللي تحتاجه لموبايلك، في مكان واحد. اختياراتك تبدأ من هنا.
          </div>
        </div>

      </div>
      
      {/* حقوق النشر */}
      <div style={{ borderTop: "1px solid #E3E8F0", marginTop: "30px", paddingTop: "20px", textAlign: "center", color: "#667085", fontSize: "12px" }}>
        © 2026 رنة تليفون. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
};

export default StoreFooter;