import styles from "./Home.module.css";
import Container from "../Components/Container/Container";

export default function HomeNumbers() {
  return (
    <section
      style={{ padding: "40px 0", backgroundColor: "#3f72af", color: "white" }}
    >
      <Container className="row">
        <div className="col-12 col-lg">
          <p className={styles.Statistic}>
            <span className={styles.Number}>15+</span>
            <br />
            years of experience
          </p>
        </div>
        <div className="col-12 col-lg">
          <p className={styles.Statistic}>
            <span className={styles.Number}>2000+</span>
            <br />
            visas processed
          </p>
        </div>
        <div className="col-12 col-lg">
          <p className={styles.Statistic}>
            <span className={styles.Number}>96%</span>
            <br />
            approval rate
          </p>
        </div>
      </Container>
    </section>
  );
}
