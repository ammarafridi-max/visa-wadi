import styles from "./About.module.css";
import DocumentMeta from "react-document-meta";

import PrimarySection from "../Components/Sections/PrimarySection";
import Container from "../Components/Container/Container";
import PageTitle from "../Components/Titles/PageTitle";

export default function About() {
  const meta = {
    name: "About",
    title: "About VisaWadi",
    description: "Learn more about Dubai's best visa service providers.",
    canonical: "https://localhost:3000",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "react,meta,document,html,tags",
      },
    },
  };

  return (
    <PrimarySection py="75px">
      <Container>
        <PageTitle>About VisaWadi</PageTitle>
      </Container>
    </PrimarySection>
  );
}
