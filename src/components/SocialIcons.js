import { motion } from "framer-motion";

const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/naimuddin01">
        <motion.i
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5, type: "spring" }}
          className="fa-brands fa-github"
          aria-hidden="true"
          title="Sharif Naim Uddin' GitHub Profile"
        ></motion.i>
      </a>
      <a className="icon" style={styles.icon} href="www.linkedin.com/in/sharif-naim-uddin/">
        <motion.i
          initial={{ y1: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.5, type: "spring" }}
          className="fa-brands fa-linkedin"
          aria-hidden="true"
          title="Sharif Naim Uddin' LinkedIn Profile"
        ></motion.i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.facebook.com/BsmrstuNaimUddin/">
        <motion.i
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.5, type: "spring" }}
          className="fa-brands fa-facebook"
          aria-hidden="true"
          title="Sharif Naim Uddin' Instagram Profile"
        ></motion.i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/SharifNaim6393">
        <motion.i
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
          className="fa-brands fa-twitter"
          aria-hidden="true"
          title="Sharif Naim Uddin' Twitter Profile"
        ></motion.i>
      </a>
    </div>
  );
};

export default SocialIcons;
