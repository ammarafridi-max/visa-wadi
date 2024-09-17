import Container from "../Components/Container/Container";
import PrimarySection from "../Components/Sections/PrimarySection";
import VisaCard from "../Components/VisaCard/VisaCard";
import { SectionTitleCenter } from "../Components/Titles/SectionTitle";
import img from "./hero-img.jpeg";

export default function HomeVisa() {
  return (
    <PrimarySection py="75px">
      <Container className="row justify-content-between">
        <SectionTitleCenter>Best Selling Visas</SectionTitleCenter>
        <VisaCard visaName="Dubai Visa" src={img} />
        <VisaCard visaName="US Visa" src={img} />
        <VisaCard visaName="UK Visa" src={img} />
        <VisaCard visaName="Schengen Visa" />
        <VisaCard visaName="Canada Visa" />
        <VisaCard visaName="Australia Visa" />
      </Container>
    </PrimarySection>
  );
}
