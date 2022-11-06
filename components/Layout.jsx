import React from "react";
// import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav></Nav>
      {children}
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Layout;
