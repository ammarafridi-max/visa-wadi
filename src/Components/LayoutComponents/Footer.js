import styles from "./Footer.module.css";
import logo from "./visawadi.png";
import PrimarySection from "../Sections/PrimarySection";
import Container from "../Container/Container";

export default function Footer() {
  return (
    <PrimarySection py="50px" className={styles.Footer}>
      <Container>
        <div class="row justify-content-between">
          <div class="col-12 col-lg-4">
            <img src={logo} class={styles.FooterLogo} />
            <p class={styles.FooterText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
          </div>
          <div class="col-12 col-lg-2">
            <h6 className="">Site Links</h6>
            <div className={styles.FooterLinks}>
              <a href="/about" className={styles.FooterLink}>
                About us
              </a>
              <a href="/contact" className={styles.FooterLink}>
                Contact us
              </a>
              <a href="/services" className={styles.FooterLink}>
                Services
              </a>
              <a href="/faqs" className={styles.FooterLink}>
                FAQs
              </a>
              <a href="/" className={styles.FooterLink}>
                Terms & Conditions
              </a>
              <a href="/" className={styles.FooterLink}>
                Privacy Policy
              </a>
            </div>
          </div>
          <div class="col-12 col-lg-2">
            <h6 className="">Visas</h6>
            <div className={styles.FooterLinks}>
              <a href="/" className={styles.FooterLink}>
                UAE Visa
              </a>
              <a href="/" className={styles.FooterLink}>
                Schengen Visa
              </a>
              <a href="/" className={styles.FooterLink}>
                US Visa
              </a>
              <a href="/" className={styles.FooterLink}>
                UK Visa
              </a>
              <a href="/" className={styles.FooterLink}>
                Canada Visa
              </a>
            </div>
          </div>
          <div class="col-12 col-lg-3">
            <h6 className="">Contact</h6>
          </div>
        </div>
      </Container>
      {/* <a href="https://api.whatsapp.com/send?phone=971506045355"><i class="fa-brands fa-square-whatsapp"></i></a> */}
    </PrimarySection>
  );
}
