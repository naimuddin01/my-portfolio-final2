import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./pages/loader/loader";
import { useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Portfolio from "./pages/portfolio/Portfolio";
import Resume from "./pages/resume/Resume";
import Contact from "./pages/contact/Contact";
import PageNotFound from "./pages/404/PageNotFound";

function App() {
  const personalDetails = {
    name: "Naim Uddin",
    location: "Bangladesh, khulna",
    email: "bsmrstunaimuddin@gmail.com",
    // availability: "Not Available",
    // brand:
    //   "My unique blend of technical expertise, creative thinking, and background in psychology allows me to approach each project with a deep understanding of the end user's perspective, resulting in highly effective user-centred digital products.",
  };

  const location = useLocation();

  // const [showLoader, setShowLoader] = useState(true);

  return (
    <>
      {/* {showLoader ? (
        <Loader setShowLoader={setShowLoader} />
      ) : ( */}
        <>
          <Header />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Landing name={personalDetails.name} tagline={personalDetails.tagline} />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume brand={personalDetails.brand} />} />
            <Route
              path="/contact"
              element={
                <Contact
                  name={personalDetails.name}
                  location={personalDetails.location}
                  email={personalDetails.email}
                />
              }
            />
            <Route path="/page-not-found" element={<PageNotFound />} />
            <Route path="*" element={<Navigate to="/page-not-found" />} />
          </Routes>
          <Footer />
        </>
      {/* )} */}
    </>
  );
}

export default App;
