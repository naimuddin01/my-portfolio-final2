import NavLinks from "./NavLinks";
import logo from "../images/open2.svg";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header container">
      <NavLink to="/">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.5, type: "spring" }}
        >
          <motion.img
            whilehover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="logo"
            src={logo}
            alt="Naim Uddin' Logo"
          />
        </motion.div>
      </NavLink>
      <NavLinks />
    </header>
  );
};

export default Header;
