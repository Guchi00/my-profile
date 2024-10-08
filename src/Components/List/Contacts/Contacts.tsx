import React, { useState } from "react";
import { Link } from "react-router-dom";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import styles from "./styles.module.css";
import FadeInText from "../../FadeInText";
import { Modal } from "antd";

export const Contacts = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleCancel = () => {
    setShowModal(!showModal);
  };

  const handleOk = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className={styles.container} id={"contacts"}>
        <h1>Contact Me</h1>
        <p>
          feel free to drop me a message. <br></br>You can contact me via email
          or connect with me on LinkedIn.
        </p>

        <div className={styles.form_container}>
          <form className={styles.form}>
            <input placeholder="Your Name" />
            <input placeholder="Your Email" />
            <input placeholder="Your Phone" />
          </form>

          <textarea placeholder="Your Message" />
        </div>

        <button onClick={handleShowModal}>Submit Form</button>

        <Modal
          open={showModal}
          onCancel={handleCancel}
          onOk={handleOk}
          footer={false}
          closeIcon={false}
        >
          <p style={{ color: " rgb(117, 117, 117)" }}>
            Form is currently unavailable. <br></br> Kindly click on the
            LinkedIn icon below to send me an instant message via LinkedIn or
            send me an Email. Thank You!
          </p>
          <button onClick={handleOk} className={styles.modal_btn}>
            OK
          </button>
        </Modal>

        <div className={styles.contacts}>
          <FadeInText delay={700}>
            <div>
              <PhoneIphoneIcon />
              <span>Call Me</span>
              <p>(420) 734 615 577</p>
            </div>
          </FadeInText>

          <FadeInText delay={700}>
            <Link
              to="https://www.linkedin.com/in/judith-iwuchukwu/"
              target="blank"
            >
              <LinkedInIcon />
              <span>Send Message</span>
              <p>Ugochi Iwuchukwu</p>
            </Link>
          </FadeInText>

          <FadeInText delay={700}>
            <a href="mailto:iwuchukwuugochij@gmail.com">
              <div>
                <EmailIcon />
                <span>Email Me</span>
                <p>iwuchukwu.ugochij@gmail.com</p>
              </div>
            </a>
          </FadeInText>
        </div>
      </div>
      <div className={styles.footer}>
        <p>© Copyright 2024 Ugochi Iwuchukwu - All Right Reserved</p>
      </div>
    </>
  );
};
