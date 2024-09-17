import { useState } from "react";
import styles from "./FormModal.module.css";
import countryList from "../Data/countryList";
import visaCountry from "../Data/visaCountry";
import { BtnPrimary } from "../Buttons/Buttons";

export default function FormModal({ displayModal }) {
  // const { displayModal, closeModal } = useModal();
  return (
    <>
      <form className={styles.FormModal} id="form">
        <div className="row">
          <div className="col col-lg-4 mb-4">
            <label className={styles.Label}>Name</label>
            <input type="text" className={styles.Input} />
          </div>
          <div className="col col-lg-4 mb-4">
            <label className={styles.Label}>Email</label>
            <input type="email" className={styles.Input} />
          </div>
          <div className="col col-lg-4 mb-4">
            <label className={styles.Label}>Phone Number</label>
            <input type="text" className={styles.Input} />
          </div>
        </div>
        <div className="row">
          <div className="col col-lg-4 mb-4">
            <label className={styles.Label}>Number of Applicants</label>
            <input type="number" className={styles.Input} />
          </div>
          <div className="col col-lg-4 mb-4">
            <label className={styles.Label}>Nationality</label>
            <select className={styles.Input}>
              {countryList.map((country) => {
                return <option>{country}</option>;
              })}
            </select>
          </div>
          <div className="col col-lg-4 mb-4">
            <label className={styles.Label}>Visa Application For</label>
            <select className={styles.Input}>
              {visaCountry.map((country) => {
                return <option>{country}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="text-center">
          <BtnPrimary>Submit</BtnPrimary>
        </div>
      </form>
      <div className={styles.Overlay}></div>
    </>
  );
}
