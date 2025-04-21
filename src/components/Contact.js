import React from "react"
import { useRef } from "react";
import { useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { IoCloseCircleSharp } from "react-icons/io5";
import Footer from './Footer'

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="contact-section section-container" id="contact">
      <span
        style={{
          transform: isInView ? "none" : "translateX(-700px)",
          opacity: isInView ? 1 : 0,
          transition: "all .9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
      <Footer />
    </section>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [popupDisplay, setPopupDisplay] = React.useState({
    display: "none" 
  });

  const [emailSuccess, setEmailSuccess] = React.useState(false)

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [formInputsValid, setFormInputsValid] = React.useState({
    firstName: false,
    lastName: false,
    email: false,
    message: false,
  });

  function clearInputs() {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  }

  function resetFormInputs() {
    setFormInputsValid({
      firstName: false,
      lastName: false,
      email: false,
      message: false,
    });
  }

  const [firstNameField, setFirstNameField] = React.useState("");
  const [lastNameField, setLastNameField] = React.useState("");
  const [emailField, setEmailField] = React.useState("");
  const [messageField, setMessageField] = React.useState("");

  React.useEffect(() => {
    setFirstNameField(document.querySelector(".firstNameField"));
    setLastNameField(document.querySelector(".lastNameField"));
    setEmailField(document.querySelector(".emailField"));
    setMessageField(document.querySelector(".messageField"));
  }, []);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    validateFormInputs();
  }

  function validateFormInputs() {
    const emailFormat = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const nameFormat = /^[A-Za-z]+$/;

    if (
      !firstNameField.value.match(nameFormat) &&
      document.activeElement === firstNameField
    ) {
      firstNameField.classList.add("input-error");
      setFormInputsValid((prevFormInputsValid) => {
        return { ...prevFormInputsValid, firstName: false };
      });
    } else if (firstNameField.value.match(nameFormat)) {
      firstNameField.classList.remove("input-error");
      setFormInputsValid((prevFormInputsValid) => {
        return { ...prevFormInputsValid, firstName: true };
      });
    }

    if (
      !lastNameField.value.match(nameFormat) &&
      document.activeElement === lastNameField
    ) {
      lastNameField.classList.add("input-error");
      setFormInputsValid((prevFormInputsValid) => {
        return { ...prevFormInputsValid, lastName: false };
      });
    } else if (lastNameField.value.match(nameFormat)) {
      lastNameField.classList.remove("input-error");
      setFormInputsValid((prevFormInputsValid) => {
        return { ...prevFormInputsValid, lastName: true };
      });
    }

    if (
      !emailField.value.match(emailFormat) &&
      document.activeElement === emailField
    ) {
      emailField.classList.add("input-error");
      setFormInputsValid((prevFormInputsValid) => {
        return { ...prevFormInputsValid, email: false };
      });
    } else if (emailField.value.match(emailFormat)) {
      emailField.classList.remove("input-error");
      setFormInputsValid((prevFormInputsValid) => {
        return { ...prevFormInputsValid, email: true };
      });
    }

    if (
      messageField.value.length === 0 &&
      document.activeElement === messageField
    ) {
      messageField.classList.add("input-error");
      setFormInputsValid((prevFormInputsValid) => {
        return { ...prevFormInputsValid, message: false };
      });
    } else if (messageField.value.length > 0) {
      messageField.classList.remove("input-error");
      setFormInputsValid((prevFormInputsValid) => {
        return { ...prevFormInputsValid, message: true };
      });
    }
  }

  function sendEmail(event) {
    event.preventDefault();
    if (
      formInputsValid.firstName &&
      formInputsValid.lastName &&
      formInputsValid.email &&
      formInputsValid.message
    ) {
      emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        event.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then((response) => {
        setEmailSuccess(true)
        clearInputs()
        resetFormInputs()
        animatePopup()
      }) 
      .catch((error) => {
        setEmailSuccess(false)
        animatePopup()
      });
    } else {
      if (firstNameField.value.length === 0) {
        firstNameField.classList.add("input-error");
      }
      if (lastNameField.value.length === 0) {
        lastNameField.classList.add("input-error");
      }
      if (emailField.value.length === 0) {
        emailField.classList.add("input-error");
      }
      if (messageField.value.length === 0) {
        messageField.classList.add("input-error");
      }
    }
  }

  function animatePopup() {
    setPopupDisplay({
      display: "flex",
      className: "fadein",
    });
    setTimeout(() => {
      setPopupDisplay({
        display: "none",
        className: "",
      });
    }, 4500);
  }

  return (
    <>
      <Section>
        <div className="section-title">
          <h3 >Contact</h3>
          <div className="title-decoration"></div>
        </div>
        <div className="contact-content">
          <p className="contact-copy">If you'd like to chat about a work opportunity, debate whether or not golf is sport, or discuss how you too are not over them killing off Tasha Yar in Season 1; I'm up for all of it!</p>
          <form className="form contact-form" onSubmit={sendEmail}>
          <div className="thank-you-popup" style={popupDisplay}>
            <p className="thank-you-copy success">{emailSuccess ? "Success!" : "Error!"}</p>
            <div className="checkmark-container">
            {emailSuccess ? <IoCheckmarkCircleSharp className='thank-you-pop-checkmark'/> : <IoCloseCircleSharp className='thank-you-pop-error' />}
            </div>

          {emailSuccess ?
            <>
            <p className="thank-you-copy">
            Thanks for reaching out!</p>
            <p className="thank-you-copy">I'll be in touch soon.</p>
            </>    
            : 
            <>
              <p className='thank-you-copy'>Looks like something went wrong. Double check you info, and try again.</p>
            </>   
            }   
          </div>
          <div className="form-row form-row-name">
            <input
                className="firstNameField"
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                id="firstName"
                value={formData.firstName}
            />
            <input
              className="lastNameField"
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              name="lastName"
              id="lastName"
              value={formData.lastName}
            />
          </div>
            
          <div className="form-row">
            <input
              className="emailField"
              type="text"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={formData.email}
            />
          </div>
          <div className="form-row">
            <textarea
              className="messageField"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
            ></textarea>
          </div>

        
            <div className="contact-btn-style">
              <button type="submit" className="btn contact-btn btn-hover">
              </button>
              Submit
            </div>

          </form>
        </div>
      </Section>
    </>
  )
}