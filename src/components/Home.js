import React from "react";
import "./Home.scss";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <section className="homepage" name="home-id">
        <div className="black"></div>
        <div className="home-content">
          <div className="home-content-main">
            <motion.div
              className="home-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 1.2,
              }}
            >
              <h1 className="h1">PERSONAL TRAINING</h1>
            </motion.div>
            <motion.div
              className="home-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 1.4,
              }}
            >
              <h3 className="h3">
                Premium weight loss and lifestyle transformations
              </h3>
            </motion.div>
            <div className="btn-group">
              <motion.a
                className="btn left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1.6,
                }}
              >
                Start here
                <span className="border-top-bottom"></span>
                <span className="border-left-right"></span>
              </motion.a>
              <motion.a
                className="btn"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1.6,
                }}
              >
                Get in touch
                <span className="border-top-bottom"></span>
                <span className="border-left-right"></span>
              </motion.a>
            </div>
          </div>
        </div>
      </section>
      <div className="blue-line"></div>
    </>
  );
};

export default Home;
