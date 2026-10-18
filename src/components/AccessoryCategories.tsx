import { FunctionComponent, useState } from "react";
import AccessoryCategory from "./AccessoryCategory";
import styles from "./AccessoryCategories.module.css";

export type AccessoryCategoriesType = {
  className?: string;
};

const AccessoryCategories: FunctionComponent<AccessoryCategoriesType> = ({
  className = "",
}) => {
  const [accessoryCategoryItems] = useState([
    {
      label: "جرابات",
      label1: "حماية وشكل على ذوقك",
      smartphone: "/smartphone.svg",
    },
    {
      label: "حماية الشاشة",
      label1: "حماية من أول لمسة",
      smartphone: "/shield-check.svg",
    },
    {
      label: "ساعات ذكية",
      label1: "يومك على معصمك",
      smartphone: "/watch.svg",
    },
    {
      label: "سماعات",
      label1: "اسمع كل التفاصيل",
      smartphone: "/headphones.svg",
    },
  ]);
  return (
    <section className={[styles.accessoryCategories, className].join(" ")}>
      <div className={styles.sectionHeading}>
        <div className={styles.browseLink}>عرض الكل ←</div>
        <div className={styles.headingCopy}>
          <h2 className={styles.sectionTitle}>تفاصيل صغيرة، فرق كبير</h2>
          <div className={styles.sectionDescription}>
            كل إكسسوار ليه مكانه. اختار القسم اللي بتدور عليه.
          </div>
        </div>
      </div>
      <div className={styles.categoryTiles}>
        {accessoryCategoryItems.map((item, index) => (
          <AccessoryCategory
            key={index}
            label={item.label}
            label1={item.label1}
            smartphone={item.smartphone}
          />
        ))}
      </div>
    </section>
  );
};

export default AccessoryCategories;
