import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import closeModal from "../images/close.svg";
import me from '../images/suit.png'
import ProjectModel from "./ProjectDetails/ProjectModel/ProjectModel";


const Project = ({ data, handleClickID, ProjectList, loading }) => {

  // console.log("loading",loading)
  // console.log("ProjectList",ProjectList)

  const { _id, title, github, demo, details, topics, technologies, description, image, projectImg, bgcolor } = data

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const variants = {
    hidden: { x: _id % 2 === 0 ? "10vw" : "-10vw", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  Modal.setAppElement("#root");

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <motion.div
      ref={ref}
      className="col-sm-12 col-lg-6"
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div
        style={{ backgroundColor: bgcolor }}
        className="projectCard d-flex align-items-center justify-content-center p-5"
        onClick={handleOpenModal}
      >
        <div className="textWrap col-6 d-flex flex-column justify-content-center align-items-center m-5">
          {/* <p className="tech">
            <em>{technologies}</em>
          </p> */}

          <h3 className="projectTitle">{title}</h3>
          <span className="viewWork">View Work &#8594;</span>
        </div>
        <div className="imageContainer col-6 d-flex align-items-center justify-content-center">
          <img src={image} alt="Laptop displaying the application" />
        </div>
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        style={{
          content: {
            backgroundColor: "#131a22",
            color: "#9f9f9f",
            padding: "60px",
            display: "flex",
            flexDirection: "column",
          },
          overlay: {
            zIndex: "9999",
            overflow: "hidden",
            backgroundColor: "#131a22",
            width: "clamp(30%, 100vw, 100%)",
            marginRight: "0",
            height: "min(100%, 100vh)",
            margin: "auto",
          },
        }}
      >
        <div className="container modal" key={_id}>
          <img src={closeModal} className="closeMenu closeModal" onClick={handleCloseModal} alt="Close"></img>
          <ProjectModel
            key={_id}
            data={data}
          ></ProjectModel>

          {/* <h3 className="modalTitle">{title}</h3>
          <h2>{details}</h2>
          <motion.button
              whilehover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              className="btn"
              // onClick={() => (window.location.href = demo)}
            >
              Add Topic
            </motion.button>

          <div className="tech">
            {technologies?.map((technology) => (
              <span className="technology" key={_id}>
                {technology + " "}
              </span>
            ))}
          </div>

          <div className="projectDescription">
            {topics?.map((topic) => (
              <span>
                <h2>{topic.addTopic}</h2>
                <h5>{topic?.topicDetails}</h5>
              </span>
            ))}
          </div>

          <div className="modalBtns">
            <motion.button
              whilehover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              className="btn"
              onClick={() => (window.location.href = github)}
            >
              GitHub
            </motion.button>

            <motion.button
              whilehover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              className="btn"
              onClick={() => (window.location.href = demo)}
            >
              Live
            </motion.button>

          </div>

          <div className="modalBtns">
            <motion.button
              whilehover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              className="btn"
              // onClick={() => (window.location.href = github)}
            >
              Update
            </motion.button>

            <motion.button
              whilehover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              className="btn"
              // onClick={() => (window.location.href = demo)}
            >
              Delete
            </motion.button>
          </div> */}
        </div>
      </Modal>
    </motion.div>


  );
};

export default Project;
