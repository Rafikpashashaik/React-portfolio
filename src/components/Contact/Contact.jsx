import React, { useRef, useState,useEffect } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { Slide, Zoom } from "react-awesome-reveal";

const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);

    // Basic validation checks
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const errors = {};

    if (!name || name.trim() === "") {
      errors.name = "Name is required";
    }

    if (!email || email.trim() === "") {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email format";
    }

    if (!message || message.trim() === "") {
      errors.message = "Message is required";
    }else{
      
    }

    if (Object.keys(errors).length === 0) {
      // If no errors, send the email
      emailjs
        .sendForm(
          "service_v29wig8",
          "template_7be03qr",
          form.current,
          "7XOHNpXxQy_iiK2-m"
        )
        .then(
          (result) => {
            console.log(result.text);
            // Show success message or perform any necessary actions
            setShowSuccessMessage(true);
            setTimeout(() => {
              setShowSuccessMessage(false);
            }, 3000); // Hide message after 3 seconds
          },
          (error) => {
            console.log(error.text);
            // Handle error if needed
          }
        );
    } else {
      // Set errors in state to display on form
      setErrors(errors);
    }
  };

  useEffect(() => {
    let timer;
    if (showSuccessMessage) {
      timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [showSuccessMessage]);


  return (
    <section className="contact section" id="contact">














      <Slide direction="up">
        <h2 className="section__title"> Get in touch</h2>
      </Slide>
      <Zoom>
        {" "}
        <span className="section__subtitle"> Contact Me </span>
      </Zoom>
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <Slide direction="left">
              {" "}
              <div className="contact__card">
                <i className="bx bx-mail-send contact__card-icon"> </i>
                <h3 className="contact__card-title"> Email</h3>
                <span className="contact__card-data">
                  {" "}
                  Shaikrafikpasha786@gmail.com{" "}
                </span>

                <a
                  href="mailto:shaikrafikpasha786@gmail.com"
                  className="contact__button"
                >
                  Write me
                  <i className="bx bx-right-arrow-alt contact__button-icon"></i>{" "}
                </a>
              </div>
            </Slide>
            <Slide direction="left" delay={200}>
              <div className="contact__card">
                <i className="bx bxl-whatsapp contact__card-icon"> </i>
                <h3 className="contact__card-title"> WhatsApp me </h3>
                <span className="contact__card-data"> (+91) 8008146642 </span>

                <a href="" className="contact__button">
                  Write me
                  <i className="bx bx-right-arrow-alt contact__button-icon"></i>{" "}
                </a>
              </div>
            </Slide>
            <Slide direction="left" delay={400}>
              <div className="contact__card">
                <i className="bx bxl-linkedin contact__card-icon"> </i>
                <h3 className="contact__card-title"> Linkedln </h3>
                <span className="contact__card-data"> linkdelin.com </span>

                <a
                  href="https://www.linkedin.com/in/rafikpasha-shaik-59b080190/"
                  className="contact__button"
                >
                  Write me
                  <i className="bx bx-right-arrow-alt contact__button-icon"></i>{" "}
                </a>
              </div>
            </Slide>
          </div>
        </div>{" "}
        <div className="contact__content">
          <h3 className="contact__title">write me your Project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <Slide direction="right">
              {" "}
              <div className="contact__form-div">
                <label className="contact__form-tag">Name</label>
                <input
                  type="text"
                  name="name"
                  className="contact__form-input"
                  placeholder="Insert your name"
                />
              </div>
            </Slide>

            <Slide direction="right">
              {" "}
              <div className="contact__form-div">
                <label className="contact__form-tag">Mail</label>
                <input
                  type="email"
                  name="email"
                  className="contact__form-input"
                  placeholder="Insert your e-mail"
                />
              </div>
            </Slide>

            <Slide direction="right">
              {" "}
              <div className="contact__form-div contact__form-area ">
                <label className="contact__form-tag">Project</label>
                <textarea
                  name="message"
                  // cols="30"
                  // rows="10"
                  className="contact__form-input"
                  placeholder="write your project"
                ></textarea>
              </div>
            </Slide>
            <Slide direction="up">
              <button
                type="submit"
                value="Send"
                className="button button--flex"
              >
                Send Message
                <i className="uil uil-message button__icon"></i>
              </button>
            </Slide>
          </form>

          {Object.keys(errors).length > 0 && (
            <div className="errors">
              {Object.values(errors).map((error, index) => (
                <p key={index} className="error">
                  {error}
                </p>
              ))}
            </div>
          )}
          
        {showSuccessMessage && (
          <div className="success-message">
            <p>Your request has been sent!</p>
          </div>
        )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
