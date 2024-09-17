import styles from "./Visa.module.css";
import { SectionTitleCenter } from "../Components/Titles/SectionTitle";
import PrimarySection from "../Components/Sections/PrimarySection";
import Container from "../Components/Container/Container";

export default function VisaSteps() {
  return (
    <PrimarySection py="50px">
      <Container>
        <SectionTitleCenter>Your Visa in 5 easy steps</SectionTitleCenter>
      </Container>
    </PrimarySection>
  );
}
