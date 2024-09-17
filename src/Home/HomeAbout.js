import styles from "./Home.module.css";
import Container from "../Components/Container/Container";
import PrimarySection from "../Components/Sections/PrimarySection";
import { SectionTitle } from "../Components/Titles/SectionTitle";

export default function HomeAbout() {
  return (
    <PrimarySection py="75px" bgColor="lightgrey">
      <Container className="row">
        <div className="col-12 col-lg-6">
          <SectionTitle p="Who are we">
            Leading Visa Service Provider
          </SectionTitle>
          <p>
            At VisaWadi, we understand what traveling means to our customers.
            And so, we're dedicated to making that experience as seamless and
            smooth as possible. Our team of professional visa experts is here to
            anticipate your every need, offering personalized assistance and
            expert guidance every step of the way.
            <br />
            <br />
            Let us turn your visa application process into a hassle-free
            experience – because at VisaWadi, your journey starts with us.
          </p>
          <a href="/" className="primary-link">
            Read more about us.
          </a>
        </div>
        <div className="col-12 col-lg-6">
          <div className={styles.Gallery}>
            <div className="col-12 col-lg-6"></div>
          </div>
        </div>
      </Container>
    </PrimarySection>
  );
}
