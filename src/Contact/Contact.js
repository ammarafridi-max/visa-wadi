import styles from "./Contact.module.css";
import PrimarySection from "../Components/Sections/PrimarySection";
import Container from "../Components/Container/Container";
import PageTitle from "../Components/Titles/PageTitle";

export default function Contact() {
  return (
    <PrimarySection my="100px">
      <Container>
        <PageTitle p="Got questions? Get answers">Contact VisaWadi</PageTitle>
      </Container>
    </PrimarySection>
  );
}
