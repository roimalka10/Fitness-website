import React from "react";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
import "./About.scss";

const About = () => {
  return (
    <>
      <section className="aboutpage " id="about">
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
      <section className="meet container">
        <Fade left duration={950}>
          <img src="https://res.cloudinary.com/noname-m-/image/upload/v1623760481/images/fitnesspage/jondoe_nzprld.jpg"></img>
        </Fade>
        <div className="services-content">
          <div className="services-text">
            <Fade top duration={950}>
              <div>
                <h2 className="h2">Meet John Doe</h2>
                <h3 className="h2">Founder and personal trainer</h3>
              </div>
            </Fade>
            <Fade bottom duration={950}>
              <p>
                John Doe has helped hundreds of people achieve their fitness
                goals and he can help you too. You might have started to get
                into exercise because you were eager to find the confidence in
                your appearance and get in shape. <br />
                <br /> With nine years of experience in personal training, John
                has worked hard to find the right strategy and deliver true
                results that you can count on. Whether you’re looking to lose
                weight, get stronger or build a lean and athletic look, he will
                be able to find the right plan for your needs.
                <br />
                <br /> One of the main things that motivates John is meeting new
                people like you and discovering your stories. He wants to help
                you conquer your roadblocks and pursue your goals to the finish
                line.
              </p>
            </Fade>
          </div>
        </div>
      </section>
      <section className="success container">
        <div>
          <Fade top duration={950}>
            <h2 className="h2">The 4 pillars of success</h2>
          </Fade>
        </div>
        <div className="success-content">
          <Fade bottom duration={950}>
            <div className="success-text">
              <div className="h3">
                1. Training
                <br />
                <br />
                <hr className="hr" />
                <br />
                <p>
                  Discover simple but effective strength training methods you
                  need to see results from a National Champion.
                </p>
              </div>
              <div className="h3">
                2. Nutrition <br />
                <br />
                <hr className="hr" />
                <br />
                <p>
                  John has perfected his diet and nutrition to stay lean and
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
                  At John Doe Studio you’ll discover how to smash through the
                  mind barriers blocking your goals.
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
          </Fade>
          <Fade right duration={950}>
            <img src="https://res.cloudinary.com/noname-m-/image/upload/v1623682764/images/fitnesspage/pillars_ii56mu.jpg"></img>
          </Fade>
        </div>
      </section>
      <section className="studio container">
        <Fade top duration={950}>
          <h2 className="h2">About the studio</h2>
        </Fade>
        <Fade bottom duration={950}>
          <p>
            You might have tried to get fit and improve your health before. With
            John Doe Studio you’ll discover that the secret to success is making
            small changes that stack over time for sustainable change. If you
            focus on what you can do day to day then success will follow. We are
            here for you to provide the tools, knowledge and expertise but you
            will need to do the work and challenge yourself in order to reap the
            benefits as you go.{" "}
          </p>
        </Fade>
        <Fade bottom duration={950}>
          <div className="images">
            <img src="https://res.cloudinary.com/noname-m-/image/upload/v1623626519/images/fitnesspage/tyingshoes_iwsydh.jpg"></img>
            <img src="https://res.cloudinary.com/noname-m-/image/upload/v1623626519/images/fitnesspage/tyingshoes_iwsydh.jpg"></img>
            <img src="https://res.cloudinary.com/noname-m-/image/upload/v1623626519/images/fitnesspage/tyingshoes_iwsydh.jpg"></img>
            <img src="https://res.cloudinary.com/noname-m-/image/upload/v1623626519/images/fitnesspage/tyingshoes_iwsydh.jpg"></img>
            <img src="https://res.cloudinary.com/noname-m-/image/upload/v1623626519/images/fitnesspage/tyingshoes_iwsydh.jpg"></img>
            <img src="https://res.cloudinary.com/noname-m-/image/upload/v1623626519/images/fitnesspage/tyingshoes_iwsydh.jpg"></img>
            <img src="https://res.cloudinary.com/noname-m-/image/upload/v1623626519/images/fitnesspage/tyingshoes_iwsydh.jpg"></img>
            <img src="https://res.cloudinary.com/noname-m-/image/upload/v1623626519/images/fitnesspage/tyingshoes_iwsydh.jpg"></img>
            <img src="https://res.cloudinary.com/noname-m-/image/upload/v1623626519/images/fitnesspage/tyingshoes_iwsydh.jpg"></img>
          </div>
        </Fade>
        <div className="images-p">
          <Fade bottom duration={950}>
            <p>
              You might have concluded that fitness is not for you because the
              methods your tred didn't work. At John Doe Studio, you’ll be
              offered personal support to achieve your dreams and reach your
              goals. Your voice and concerns will be heard and you will find the
              strength necessary to climb higher than before.
            </p>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default About;
