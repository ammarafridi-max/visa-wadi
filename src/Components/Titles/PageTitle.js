import styles from "./Title.module.css";

export default function PageTitle(props) {
  return (
    <div class="col-12 col-lg-12 mx-auto">
      <div class={styles.sectionTitle}>
        <p>{props.p}</p>
        <h1>{props.children}</h1>
        <div class={styles.sectionBorder}></div>
      </div>
    </div>
  );
}
