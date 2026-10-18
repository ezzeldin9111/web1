import { FunctionComponent } from "react";
import styles from "./AccessoryCategory.module.css";

export type AccessoryCategoryType = {
  className?: string;
  label?: string;
  label1?: string;
  smartphone?: string;
};

const AccessoryCategory: FunctionComponent<AccessoryCategoryType> = ({
  className = "",
  label,
  label1,
  smartphone,
}) => {
  return (
    <div className={[styles.accessoryCategory, className].join(" ")}>
      <div className={styles.categoryDescription}>
        <div className={styles.label}>{label}</div>
        <div className={styles.label2}>{label1}</div>
      </div>
      <img className={styles.smartphoneIcon} alt="" src={smartphone} />
    </div>
  );
};

export default AccessoryCategory;
