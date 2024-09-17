import DocumentMeta from "react-document-meta";
import styles from "./FAQ.module.css";
import PageTitle from "../Components/Titles/PageTitle";
import PrimarySection from "../Components/Sections/PrimarySection";
import Container from "../Components/Container/Container";
import FAQCard from "../Components/FAQCard/FAQCard";

export default function FAQ() {
  return (
    <PrimarySection py="75px">
      <Container>
        <PageTitle>Frequently Asked Questions</PageTitle>
      </Container>
      <Container mt="50px">
        <FAQCard
          question="What is VisaWadi?"
          answer="VisaWadi is a subsidiary of City Tours LLC and a trusted agency in the UAE that helps travelers get their visas with ease."
        />
      </Container>
    </PrimarySection>
  );
}
