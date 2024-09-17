import styles from "./Services.module.css";
import DocumentMeta from "react-document-meta";
import PageTitle from "../Components/Titles/PageTitle";
import PrimarySection from "../Components/Sections/PrimarySection";
import Container from "../Components/Container/Container";

export default function Services() {
  const meta = {
    name: "Services",
    title: "Services | VisaWadi",
    description: "Always ready to assist you. Call, WhatsApp or visit us now!",
    canonical: "https://localhost:3000",
    meta: {
      charset: "utf-8",
    },
  };

  return (
    <PrimarySection py="75px">
      <Container>
        <PageTitle>Services</PageTitle>
      </Container>
    </PrimarySection>
  );
}
