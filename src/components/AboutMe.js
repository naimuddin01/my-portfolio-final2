import aboutMeImg from "../images/aboutme2.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import cv from '../images/cvnaim.pdf'

const AboutMe = ({ name }) => {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="about">
      <div className="aboutContainer container">
        <div className="row">
          <motion.div
            className="personalImage col-12 col-lg-6"
            ref={ref}
            initial={{ x: "-10vw", opacity: 0, scale: 0.5 }}
            animate={inView ? { x: 0, opacity: 1, scale: 1 } : { x: "-10vw", opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whilehover={{ scale: 1.05 }}
          >
            <motion.img src={aboutMeImg} alt={name} />
          </motion.div>
          <div className="personalInfo col-12 col-lg-6">
            <motion.div className="contentContainer" variants={staggerVariants}>

              <motion.h4 variants={paragraphVariants}>Nice to meet you! 👋🏻</motion.h4>
              <motion.h5 variants={paragraphVariants}>I'm a Software Engineer.</motion.h5>
              <motion.div
                className="contentDescription"
                variants={staggerVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                <motion.p variants={paragraphVariants}>
                  Hi everyone! I'm Naim Uddin, a dedicated and results-oriented software engineer who enjoys using beautiful and effective code to bring concepts to life. Having a strong background in computer science and a talent for problem-solving, I work best in dynamic settings where teamwork and creativity are combined.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  I enjoy the process of conquering obstacles, whether I'm working on challenging algorithms, performance-enhancing code, or coming up with creative solutions to issues encountered in the real world. The best software, in my opinion, not only functions flawlessly but also elegantly resolves the issues for which it was intended
                  {/* Here, I don my <span style={{ color: "white" }}> problem-solving </span>
                  cape and dive headfirst into real-world challenges, all while relentlessly pursuing a{" "}
                  <span style={{ color: "white" }}> Digital and Technology Solutions</span> degree from the University
                  of Roehampton. So here I am, juggling bits of binary and real-life conundrums, all while crafting my
                  own success story. */}
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  Life is a kaleidoscope of experiences, far beyond the confines of work. When code isn't my focus, I'm
                  conquering cycling routes, feeling the wind on spirited runs, and fueling my love for Formula One.
                  Amid serene moments, I transform into a film aficionado, seeking films that kindle inspiration and
                  provoke thought.
                </motion.p>
              </motion.div>

              <div className="d-flex">
                <div className="mr-8">
                  <NavLink to="/portfolio">
                    <motion.button className="btn" whilehover={{ scale: 1.05 }} whileTap={{ scale: 0.99 }}>
                      <p>View Portfolio</p>
                      <div>
                        <FiArrowUpRight whilehover={{ scale: 4 }} className="arrow-icon" />
                      </div>
                    </motion.button>
                  </NavLink>
                </div>
                <div>
                  <motion.a className="btn" href={cv} download={cv} whilehover={{ scale: 1.05 }} whileTap={{ scale: 0.99 }} >
                    <p>Download CV</p>
                    <div>
                      <FiArrowUpRight whilehover={{ scale: 4 }} className="arrow-icon" />
                    </div>
                  </motion.a>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
