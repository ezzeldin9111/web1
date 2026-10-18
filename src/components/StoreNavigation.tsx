import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styles from "./StoreNavigation.module.css";

export type StoreNavigationType = {
  className?: string;
};

const StoreNavigation: FunctionComponent<StoreNavigationType> = ({
  className = "",
}) => {
  // دالة للنزول لقسم المنتجات بنعومة
  const scrollToProducts = () => {
    if (window.location.pathname !== "/") {
      window.location.href = "/";
    }
    setTimeout(() => {
      const section = document.getElementById("products-section");
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else window.scrollTo({ top: 600, behavior: 'smooth' });
    }, 100);
  };

  return (
    <header className={[styles.storeNavigation, className].join(" ")} style={{ direction: "rtl", backgroundColor: "#fff", borderBottom: "1px solid #E3E8F0" }}>
      <div className={styles.mainNavigation} style={{ display: "flex", justifyContent: "space-between", padding: "16px 40px", width: "100%", boxSizing: "border-box", alignItems: "center" }}>
        
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <img className={styles.shopMarkIcon} alt="شعار" src="/Shop-mark.svg" style={{ width: "40px", borderRadius: "8px" }} />
          <div className={styles.identityCopy}>
            <h3 className={styles.shopName} style={{ margin: 0, fontSize: "22px", color: "#121D31" }}>رنة تليفون</h3>
            <div className={styles.shopDescriptor} style={{ color: "#667085", fontSize: "12px" }}>موبايلات وإكسسوارات</div>
          </div>
        </Link>

        <div className={styles.search} style={{ flex: 1, maxWidth: "400px", margin: "0 20px", display: "flex", alignItems: "center", backgroundColor: "#F5F7FA", padding: "10px 16px", borderRadius: "8px" }}>
          <img className={styles.messageCircleIcon} alt="بحث" src="/search.svg" style={{ width: "18px", opacity: 0.5 }} />
          <input
            className={styles.searchHint}
            placeholder="بتدور على موبايل، ساعة، أو سماعة؟"
            type="text"
            style={{ textAlign: "right", width: "100%", border: "none", outline: "none", background: "transparent", marginRight: "10px", fontSize: "14px" }}
          />
        </div>

        <button className={styles.action} onClick={() => window.open("https://wa.me/201551941042", "_blank")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", backgroundColor: "#EDF2FF", border: "none", padding: "10px 16px", borderRadius: "8px" }}>
          <div className={styles.actionLabel} style={{ color: "#215CFF", fontWeight: "bold" }}>تواصل واتساب</div>
        </button>
      </div>

      <div className={styles.categoryNavigation} style={{ padding: "12px 40px", width: "100%", boxSizing: "border-box", borderTop: "1px solid #F0F2F5", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <nav className={styles.navigationLinks} style={{ justifyContent: "flex-start", gap: "25px", display: "flex", alignItems: "center", flexWrap: "wrap" }}>
          <Link to="/" style={{ textDecoration: "none", color: "#215CFF", fontWeight: "bold" }}>الرئيسية</Link>
          <div onClick={scrollToProducts} style={{ color: "#667085", cursor: "pointer", fontWeight: "500", transition: "color 0.2s" }}>كل الأقسام</div>
          <div onClick={scrollToProducts} style={{ color: "#667085", cursor: "pointer", fontWeight: "500", transition: "color 0.2s" }}>الموبايلات</div>
          <div onClick={scrollToProducts} style={{ color: "#667085", cursor: "pointer", fontWeight: "500", transition: "color 0.2s" }}>الساعات الذكية</div>
          <div onClick={scrollToProducts} style={{ color: "#667085", cursor: "pointer", fontWeight: "500", transition: "color 0.2s" }}>السماعات</div>
          <div onClick={scrollToProducts} style={{ color: "#667085", cursor: "pointer", fontWeight: "500", transition: "color 0.2s" }}>الإكسسوارات</div>
          <div onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} style={{ color: "#667085", cursor: "pointer", fontWeight: "500" }}>تواصل معنا</div>
        </nav>
        <div className={styles.contactNumber} dir="ltr" style={{ fontWeight: 'bold', color: "#121D31" }}>015 5194 1042</div>
      </div>
    </header>
  );
};

export default StoreNavigation;