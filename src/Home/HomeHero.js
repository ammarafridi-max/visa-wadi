import Container from "../Components/Container/Container";
import { BtnPrimary } from "../Components/Buttons/Buttons";
import styles from "./Home.module.css";

export default function HomeHero() {
  return (
    <section class={styles.Hero}>
      <Container>
        <h1 class={styles.HeroHeading}>Worldwide Visa Assistance</h1>
        <p class={styles.HeroText}>
          Need a visa to any country? Get in touch with us and we'll help you
          figure out the entire procedure to getting your visa approved.
        </p>
        <div className="text-center">
          <BtnPrimary>Contact Us</BtnPrimary>
        </div>
      </Container>
    </section>
  );
}
