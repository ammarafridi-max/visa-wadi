import styles from "./Navigation.module.css";
import Container from "../Container/Container";
import { BtnPrimary } from "../Buttons/Buttons";
import { useState, useEffect } from "react";
import logo from "./visawadi.png";

export default function Navigation() {
  const [displayModal, setDisplayModal] = useState("none");
  function showModal() {
    displayModal("block");
  }

  return (
    <header className={styles.Header}>
      <nav className={styles.Navigation}>
        <Container className="row justify-content-between">
          <div className={styles.ImgDiv}>
            <a href="/">
              <img src={logo} className={styles.Logo} />
            </a>
          </div>
          <div className={styles.NavLinks}>
            <a href="/about" className={styles.NavLink}>
              About
            </a>
            <a href="/visa" className={styles.NavLink}>
              Visa
            </a>
            <a href="/services" className={styles.NavLink}>
              Services
            </a>
            <a href="/faqs" className={styles.NavLink}>
              FAQs
            </a>
            <a className={styles.Btn} onClick={showModal}>
              <BtnPrimary linkTo="/contact">Inquire Now</BtnPrimary>
            </a>
          </div>
        </Container>
      </nav>
    </header>
  );
}
