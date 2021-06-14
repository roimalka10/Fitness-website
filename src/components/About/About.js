import React from "react";
import { motion } from "framer-motion";
import "./About.scss";

const About = () => {
  return (
    <>
      <section className="aboutpage " name="about-id">
        <div className="black"></div>
        <div className="about-content container">
          <div className="about-content-main">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 1.2,
              }}
            >
              <h1 className="h1">About me</h1>
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
                I love to see clients ignite that little fire inside them. hard
                work focused in the right direction and commitment can help them
                succeed at anything they turn their hand to.
              </h3>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="red-line"></div>

      <section className="success container">
        <div>
          <h2 className="h2">The 4 pillars of success</h2>
        </div>
        <div className="success-content">
          <div className="success-text">
            <div className="h3">
              1. Training
              <br />
              <br />
              <hr className="hr" />
              <br />
              <p>
                Discover simple but effective strength training methods you need
                to see results from a National Champion.
              </p>
            </div>
            <div className="h3">
              2. Nutrition <br />
              <br />
              <hr className="hr" />
              <br />
              <p>
                Allan has perfected his diet and nutrition to stay lean and
                strong. He’ll help you do the same.
              </p>
            </div>
            <div className="h3">
              3. Mindset
              <br />
              <br />
              <hr className="hr" />
              <br />
              <p>
                At Strength Coach Glasgow you’ll discover how to smash through
                the mind barriers blocking your goals.
              </p>
            </div>
            <div className="h3">
              Accountability
              <br />
              <br />
              <hr className="hr" />
              <br />
              <p>
                Not only will be provide step-by-step guidance along the way,
                we'll regularly check-in and hold you to account to make sure
                you take action and get those results you deserve.
              </p>
            </div>
          </div>
          <img src="https://res.cloudinary.com/noname-m-/image/upload/v1623682764/images/fitnesspage/pillars_ii56mu.jpg"></img>
        </div>
      </section>
      <section className="studio container">
        <h2 className="h2">About the studio</h2>
        <p>
          You might have tried to get fit and improve your health before. With
          Strength Coach Glasgow you’ll discover that the secret to success is
          making small changes that stack over time for sustainable change. If
          you focus on what you can do day to day then success will follow. We
          are here for you to provide the tools, knowledge and expertise but you
          will need to do the work and challenge yourself in order to reap the
          benefits as you go.{" "}
        </p>
        <div className="images"></div>
      </section>
    </>
  );
};

export default About;
