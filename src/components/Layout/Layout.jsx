import { Container } from "react-bootstrap";
import Footer from "../Footer";
import Navigation from "../Navigation";

import data from "../../data/Footer";
import ScrollToTop from "../ScrollToTop";

const Layout = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <Navigation />

      <Container>{children}</Container>
      <hr />
      <Footer data={data} />
    </>
  );
};

export default Layout;
