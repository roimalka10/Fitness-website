import React from "react";
import "./Home.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="homepage " name="home-id">
        <div className="black"></div>
        <div className="home-content container">
          <div className="home-content-main">
            <motion.div
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

      <section className="services container">
        <div>
          <h2 className="h2">Professional strength coaching services</h2>
        </div>
        <div className="services-content">
          <div className="services-text">
            <p>
              How much have you spent trying to improve your health and fitness
              over the years only for the supplements to go in the bin, the home
              workout equipment to go in the cupboard or the gym memberships
              running unused? Have you ever calculated how much money has gone
              to waste to date? At Strength Coach Glasgow, we work on actually
              getting your return on investment, you are paying for the result
              and we’ll make sure we deliver.
              <br /> <br /> ​Our training programmes are designed not only to
              help you learn correct exercise form, but also to help you improve
              your strength, lose weight if needed and create a quality of life
              you can enjoy. This way your confidence will soar, your body will
              feel and look amazing and there won't be anything you can't
              achieve with dedication and commitment..{" "}
            </p>
            <Link to="/about" className="btn2">
              About us
              <span className="border-top-bottom"></span>
              <span className="border-left-right"></span>
            </Link>
          </div>
          <img src="https://res.cloudinary.com/noname-m-/image/upload/v1623626519/images/fitnesspage/tyingshoes_iwsydh.jpg"></img>
        </div>
      </section>
      <section className="mission container">
        <div>
          <h2 className="h2">What i do</h2>
          <p>
            You’ve probably already tried dozens of strategies to lose weight
            and get fit; diet pills, gym memberships and taking supplements have
            left you disappointed. Your Personal Trainer understands this and
            provide you with both the physical resources and mental tools to
            push your boundaries, escape your inertia, and get the body you
            deserve. If you’re at your wit’s end, then you’ve come to the right
            place: get the help you need right now to overcome illness and
            rediscover your youth.​
          </p>
          <div className="mission-content">
            <div className>
              <img src="https://res.cloudinary.com/noname-m-/image/upload/v1623629857/images/fitnesspage/confidence_alz7ym.jpg"></img>
              <h2 className="h2">small group coaching</h2>
              <p>
                My Small Group Coaching is unlike anything you'll have
                experienced before. In micro coaching groups of just 5:1, all
                your training is customised, recorded and coached by an
                experienced personal trainer. The balance of the motivational
                group environment and 1-2-1 attention makes it the perfect mix
                to produce fast results, without the bounce back.
              </p>
              <a className="btn2">
                Learn more
                <span className="border-top-bottom"></span>
                <span className="border-left-right"></span>
              </a>
            </div>
            <div>
              <img src="https://res.cloudinary.com/noname-m-/image/upload/v1623629857/images/fitnesspage/quality_e6vex5.jpg"></img>
              <h2 className="h2">1:1 personal training </h2>
              <p>
                1:1 coaching is the ultimate investment in your health. You'll
                be working directly with your coach in our private studio,
                following a bespoke plan to ensure you hit your goals in record
                time. Whether you want to slim down, add muscle or anything in
                between, our personal training packages are the more impactful
                route to getting there.
              </p>
              <a className="btn2">
                Learn more
                <span className="border-top-bottom"></span>
                <span className="border-left-right"></span>
              </a>
            </div>
            <div>
              <img src="https://res.cloudinary.com/noname-m-/image/upload/v1623630966/images/fitnesspage/energy_ztbbx5.jpg"></img>
              <h2 className="h2">Nutrition coaching</h2>
              <p>
                I'll teach you how to take control of your health and weight,
                without relying on any specific diet or products, with our 1-2-1
                nutrition coaching. You'll working alongside a qualified
                nutritionist to build a sustainable approach together, so you'll
                not only hit your physique goals, but be able to stay there
                without rigid diets or unrealistic restrictions.
              </p>
              <a className="btn2">
                Learn more
                <span className="border-top-bottom"></span>
                <span className="border-left-right"></span>
              </a>
            </div>
            <div>
              <img src="https://res.cloudinary.com/noname-m-/image/upload/v1623630966/images/fitnesspage/energy_ztbbx5.jpg"></img>
              <h2 className="h2">Online training</h2>
              <p>
                My Online Coaching Packages have been created to take the
                guesswork out of getting in the best shape of your life. You'll
                be working 1-2-1 with your Personal Trainer through my app-
                where you'll get workouts designed specifically for you,
                progress monitored, regular check-ins and nutrition support for
                unrivalled results, anywhere in the world.
              </p>
              <a className="btn2">
                Learn more
                <span className="border-top-bottom"></span>
                <span className="border-left-right"></span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="believe container">
        <div>
          <h2 className="h2">What i believe</h2>
        </div>
        <div>
          <p>
            As a personal trainer, I believe that to be successful in achieving
            your goals, you have to cut through all the fads and go straight to
            the proven, core principles of fitness and health. We know that the
            way to get results is to focus on strategies that yield a high
            return and cut out the nonsense.
            <br />
            <br /> My philosophy is to keep it as simple as possible, making it
            easier for you to learn the ropes and get sustainable results. We
            give you the tools you just need to take steps towards your goals
            through consistent hard work and dedication.
            <br />
            <br /> In my gym, it's all about helping people like you gain
            confidence, appreciate yourself for what you can do and rediscover
            your youth. Thanks to the range of weekly programs, you’ll learn how
            to do exercises properly for maximum benefit to your physique, as
            well as get smartphone app access to tailored training regimes to
            suit your fitness level and desired pace.
          </p>
        </div>
        <a className="btn2">
          Contact
          <span className="border-top-bottom"></span>
          <span className="border-left-right"></span>
        </a>
      </section>
    </>
  );
};

export default Home;
