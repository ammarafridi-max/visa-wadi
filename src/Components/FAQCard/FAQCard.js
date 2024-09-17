import { useState } from "react";
import styles from "./FAQCard.module.css";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export default function FAQCard(props) {
  const [displayAnswer, setDisplayAnswer] = useState("none");
  const [icon, setIcon] = useState(true);

  function handleClick() {
    if (icon === true) {
      setIcon(false);
      setDisplayAnswer("block");
    } else {
      setIcon(true);
      setDisplayAnswer("none");
    }
  }

  return (
    <div className={styles.FAQCard}>
      <div className={styles.QuestionDiv} onClick={handleClick}>
        <p className={styles.Question}>{props.question}</p>
        {icon ? (
          <AddIcon className={styles.Icon} />
        ) : (
          <RemoveIcon className={styles.Icon} />
        )}
      </div>
      <div className={styles.AnswerDiv} style={{ display: displayAnswer }}>
        <p className={styles.Answer}>{props.answer}</p>
      </div>
    </div>
  );
}
