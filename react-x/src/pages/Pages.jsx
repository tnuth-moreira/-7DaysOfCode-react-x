import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { NotFound } from "./NotFound";
import HomePage from "./HomePage";

const Pages = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

Pages.propTypes = {
  app: PropTypes.any.isRequired,
};

export default Pages;
