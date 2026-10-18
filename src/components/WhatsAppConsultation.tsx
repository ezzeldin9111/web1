import { FunctionComponent } from "react";
import styles from "./WhatsAppConsultation.module.css";

export type WhatsAppConsultationType = {
  className?: string;
};

const WhatsAppConsultation: FunctionComponent<WhatsAppConsultationType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.whatsappConsultation, className].join(" ")}>
      <div className={styles.whatsappConsultation2}>
        <button className={styles.action}>
          <img
            className={styles.messageCircleIcon}
            alt=""
            src="/message-circle.svg"
          />
          <div className={styles.actionLabel}>كلّمنا على واتساب</div>
        </button>
        <div className={styles.consultationCopy}>
          <h2 className={styles.label}>محتار بين موبايلين؟ خلّينا نساعدك.</h2>
          <div className={styles.label2}>
            ابعتلنا استخدامك وميزانيتك، وهنرشحلك الاختيار المناسب من غير تعقيد.
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppConsultation;
