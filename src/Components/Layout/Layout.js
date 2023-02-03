import React, { useContext, useEffect } from "react";
import Footer from "../../Containers/Footer/Footer";
import Header from "../../Containers/Header/Header";
import { AppContext } from "../../Context/AppContext";
import classes from "./Layout.module.css";

const Layout = (props) => {
  // Context

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.body}>{props.children}</div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
