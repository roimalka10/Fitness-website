import React from "react";
import "./Contact.scss";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <>
      <section className="contactpage" id="contact">
        <div className="black"></div>
        <div className="contact-content container">
          <div className="contact-content-main">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 1.2,
              }}
            >
              <h1 className="h1">Contact</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 1.4,
              }}
            >
              <h3 className="h3">
                Feel free to get in touch to find out how we can help you solve
                your stregth or fitness goals.
              </h3>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="red-line"></div>

      <section className="contact-form container">
        <Fade left duration={1000}>
          <div className="contact-submit">
            <div className="contact-text">
              <h2 className="h2">Contact us</h2>
            </div>
            <div className="form-container" id="contact-form">
              <form
                action="https://formspree.io/f/mvodrqlq"
                target="_blank"
                method="POST"
              >
                <label for="Name">Name</label>
                <div className="form-padding">
                  <input
                    className="inputs"
                    type="text"
                    name="name"
                    id="name"
                    required
                  />
                </div>
                <label for="email">Email</label>
                <div class="form-padding">
                  <input
                    className="inputs"
                    type="email"
                    name="email"
                    id="email"
                    required
                  />
                </div>
                <label for="message">Message</label>
                <div class="form-padding">
                  <textarea
                    className="inputs"
                    name="message"
                    id="message"
                    rows="4"
                  ></textarea>
                </div>
                <button className="btn2" type="submit">
                  Submit <span className="border-top-bottom"></span>
                  <span className="border-left-right"></span>
                </button>
              </form>
            </div>
          </div>{" "}
        </Fade>
        <Fade right duration={1000}>
          <iframe
            width="100%"
            height="300"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=41.381059191065546,2.1228289604187016+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </Fade>
      </section>
    </>
  );
};

export default Contact;
