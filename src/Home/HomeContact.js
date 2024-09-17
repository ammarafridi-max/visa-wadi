import FormModal from "../Components/FormModal/FormModal";
import PrimarySection from "../Components/Sections/PrimarySection";
import Container from "../Components/Container/Container";
import { SectionTitleCenter } from "../Components/Titles/SectionTitle";

export default function HomeContact() {
  return (
    <PrimarySection bgColor="lightgrey" py="75px">
      <Container>
        <SectionTitleCenter p="Need more information?">
          Contact us now!
        </SectionTitleCenter>
        <FormModal />
      </Container>
    </PrimarySection>
  );
}
