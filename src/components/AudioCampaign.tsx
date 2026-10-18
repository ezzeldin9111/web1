import { FunctionComponent } from "react";
import styles from "./AudioCampaign.module.css";

export type AudioCampaignType = {
  className?: string;
};

const AudioCampaign: FunctionComponent<AudioCampaignType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.audioCampaign, className].join(" ")}>
      <img
        className={styles.audioCampaignPhotograph}
        loading="lazy"
        alt=""
        src="/Audio-campaign-photograph@2x.png"
      />
      <div className={styles.audioCampaignCopy}>
        <div className={styles.label}>صوت واضح. تفاصيل أكتر.</div>
        <h1 className={styles.label2}>كمّل تجربتك بالصوت الصح</h1>
        <div className={styles.label3}>
          سماعات لاسلكية ليومك، من أول مكالمة لآخر أغنية.
        </div>
        <button className={styles.action}>
          <img className={styles.arrowLeftIcon} alt="" src="/arrow-left.svg" />
          <div className={styles.actionLabel}>اكتشف السماعات</div>
        </button>
      </div>
    </section>
  );
};

export default AudioCampaign;
