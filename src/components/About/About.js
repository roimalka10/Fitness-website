import React from "react";
import { motion } from "framer-motion";
import "./About.scss";

const About = () => {
  return (
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
  );
};

export default About;
