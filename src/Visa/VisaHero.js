import styles from "./Visa.module.css";
import PrimarySection from "../Components/Sections/PrimarySection";
import Container from "../Components/Container/Container";
import { BtnPrimary } from "../Components/Buttons/Buttons";

export default function VisaHero() {
  return (
    <PrimarySection bgColor="lightgrey" py="50px">
      <Container className="row">
        <div className="col-12 col-lg-6">
          {/* Breadcrumb */}
          <div className={styles.Breadcrumb}>
            <a>Home</a>
            <span className={styles.Divider}> &gt; </span>
            <a>Visa</a>
            <span className={styles.Divider}> &gt; </span>
            <a>US Visa</a>
          </div>
          <h1 className={styles.VisaName}>US Visa</h1>
          {/* Table */}
          <table className={styles.Table}>
            <tr>
              <td className={styles.TableTitle}>Processing Time:</td>
              <td className={styles.TableData}>5 Days</td>
            </tr>
            <tr>
              <td className={styles.TableTitle}>Visa Validity:</td>
              <td className={styles.TableData}>5/10 Years</td>
            </tr>
            <tr>
              <td className={styles.TableTitle}>Stay Validity:</td>
              <td className={styles.TableData}>90 Days</td>
            </tr>
            <tr>
              <td className={styles.TableTitle}>Starting Price:</td>
              <td className={styles.TableData}>AED 600</td>
            </tr>
          </table>
          <BtnPrimary>Inquire Now</BtnPrimary>
        </div>
        <div className="col-12 col-lg-7"></div>
      </Container>
    </PrimarySection>
  );
}
