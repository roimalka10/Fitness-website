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
      <section className="believe">
        <div>
          <h2 className="h2">What i believe</h2>
        </div>
        <div>
          <p>
            At Strength Coach Glasgow, we believe that to be successful in
            achieving your goals, you have to cut through all the fads and go
            straight to the proven, core principles of fitness and health. We
            know that the way to get results is to focus on strategies that
            yield a high return and cut out the nonsense.
            <br />
            <br /> Our philosophy is to keep it as simple as possible, making it
            easier for you to learn the ropes and get sustainable results. We
            give you the tools you just need to take steps towards your goals
            through consistent hard work and dedication.
            <br />
            <br /> Here at Strength Coach Glasgow, we’re all about helping
            people like you gain confidence, appreciate yourself for what you
            can do and rediscover your youth. Thanks to our range of weekly
            programs, you’ll learn how to do exercises properly for maximum
            benefit to your physique, as well as get smartphone app access to
            tailored training regimes to suit your fitness level and desired
            pace.
          </p>
        </div>
        <a className="btn">
          Contact
          <span className="border-top-bottom"></span>
          <span className="border-left-right"></span>
        </a>
      </section>
    </>
  );
};

export default Home;
