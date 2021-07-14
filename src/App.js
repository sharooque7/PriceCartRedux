import "./App.css";
import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarItems from "./components/NavBar";
import BrandMesssage from "./components/BrandMessage";
import Footer from "./components/Footer";
import B from "./components/bstCard";

function App() {
  return (
    <Fragment>
      <NavbarItems />
      <BrandMesssage />
      <B />
      <Footer />
    </Fragment>
  );
}

export default App;
