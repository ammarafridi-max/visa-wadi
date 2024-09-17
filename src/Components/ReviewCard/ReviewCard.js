import styles from "./ReviewCard.module.css";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";

export default function ReviewCard(props) {
  return (
    <div>
      {Array.from({ length: props.stars }, (_, index) => (
        <span className={styles.IconSpan}>
          <StarsRoundedIcon key={index} style={{ color: "red" }} />
        </span>
      ))}
      <p className={styles.Title}>
        <strong>{props.title}</strong>
      </p>
      <p>{props.message}</p>
    </div>
  );
}
