import styles from "./NotFound.module.css";
import PrimarySection from "../Components/Sections/PrimarySection";
import Container from "../Components/Container/Container";
import { BtnPrimary } from "../Components/Buttons/Buttons";

export default function NotFound() {
  return (
    <PrimarySection my="150px">
      <Container>
        <h1 class={styles.NotFoundText}>
          <span className={styles.LargeText}>404 error</span>The page you're
          looking for doesn't exist.
        </h1>
        <div className="text-center">
          <BtnPrimary linkTo="/">Visit Home Page</BtnPrimary>
        </div>
      </Container>
    </PrimarySection>
  );
}
