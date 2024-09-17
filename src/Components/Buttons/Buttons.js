import styles from "./Buttons.module.css";

export function BtnPrimary(props) {
  return (
    <a href={props.linkTo}>
      <button className={styles.BtnPrimary}>{props.children}</button>
    </a>
  );
}

export function BtnPrimaryOutline(props) {
  return (
    <a href={props.linkTo}>
      <button className={styles.BtnPrimaryOutline}>{props.children}</button>
    </a>
  );
}
