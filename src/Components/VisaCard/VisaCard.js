import styles from "./VisaCard.module.css";

export default function VisaCard(props) {
  return (
    <div className={styles.VisaCard}>
      <div className={styles.ImgDiv}>
        <img src={props.src} className={styles.Img} />
      </div>
      <div className={styles.Content}>
        <p className={styles.VisaName}>{props.visaName}</p>
      </div>
    </div>
  );
}
