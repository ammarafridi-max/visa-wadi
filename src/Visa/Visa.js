import styles from "./Visa.module.css";
import DocumentMeta from "react-document-meta";
import { SectionTitle } from "../Components/Titles/SectionTitle";
import FAQCard from "../Components/FAQCard/FAQCard";
import PrimarySection from "../Components/Sections/PrimarySection";
import Container from "../Components/Container/Container";
import VisaHero from "./VisaHero";
import ReviewCard from "../Components/ReviewCard/ReviewCard";

export default function Visa() {
  const data = {
    visaName: "US Visa",
    visaSteps: [
      "Submit the form below.",
      "Our representative will get in touch with you and explain all the documentation and process.",
      "Once all the documents are arranged, we'll help you get an appointment at the nearest US embassy.",
    ],
    visaDocuments: [
      "Passport copy.",
      "Residence/Employment visa copy.",
      "Photograph measuring 50 mm x 50 mm.",
    ],
    reviews: [
      {
        title: "Best visa consultants",
        message:
          "VisaWadi are the best visa consultants. I've applied US visas for my entire family and not once did they disappoint. Their service is top notch.",
        stars: 5,
      },
    ],
  };

  return (
    <>
      <VisaHero />
      {/* <VisaSteps /> */}
      <PrimarySection py="50px">
        <Container>
          <div className={styles.Section}>
            <SectionTitle>About {data.visaName}</SectionTitle>
            <p className="large">
              The US B1/B2 visa is the best option for travelers looking to
              explore the United States. With a valid US visa, you can gain
              entry to any US state.
            </p>
          </div>
          <div className={styles.Section}>
            <SectionTitle>Procedure</SectionTitle>
            <p className="large">
              The procedure to get your US visa is simple yet time-consuming.
              <br />
            </p>
            {data.visaSteps.map((step, i) => {
              return (
                <p className="large">
                  <strong>Step {i + 1}:</strong> {step}
                </p>
              );
            })}
          </div>
          <div className={styles.Section}>
            <SectionTitle>Documents Required</SectionTitle>
            <p className="large">
              To process your US visa application, you need to submit the
              following documents:
            </p>
            {data.visaDocuments.map((document, i) => {
              return (
                <p className="large">
                  <strong>{i + 1}.</strong> {document}
                </p>
              );
            })}
          </div>
          <div className={styles.Section}>
            <SectionTitle>Applying With VisaWadi</SectionTitle>
            <p className="large">
              To process your US visa application, you need to submit the
              following documents:
              <ul>
                <li>Passport copy.</li>
                <li>Residence/Employment visa copy.</li>
                <li>Photograph measuring 50 mm x 50 mm.</li>
              </ul>
            </p>
          </div>
          <div className={styles.Section}>
            <SectionTitle>Frequently Asked Questions</SectionTitle>
            <FAQCard
              question="How long does it take for a US visa to get approved?"
              answer="Generally, the visa takes a few days to get approved."
            />
          </div>
          <div className={styles.Section}>
            <SectionTitle>Reviews</SectionTitle>
            {data.reviews.map((review, i) => {
              return (
                <ReviewCard
                  title={review.title}
                  message={review.message}
                  stars={review.stars}
                />
              );
            })}
          </div>
        </Container>
      </PrimarySection>
    </>
  );
}
