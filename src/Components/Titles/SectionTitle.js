import styles from "./Title.module.css";

export function SectionTitle(props) {
  return (
    <div class="col-12 col-lg-12 mx-auto">
      <div class={styles.sectionTitle}>
        <p>{props.p}</p>
        <h2>{props.children}</h2>
        <div class={styles.sectionBorder}></div>
      </div>
    </div>
  );
}

export function SectionTitleCenter(props) {
  return (
    <div class="col-12 col-lg-12 mx-auto">
      <div class={styles.sectionTitleCenter}>
        {props.p && <p>{props.p}</p>}
        <h2>{props.children}</h2>
        <div class={styles.sectionBorderCenter}></div>
      </div>
    </div>
  );
}
