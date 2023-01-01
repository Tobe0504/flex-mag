import React from "react";
import classes from "./Footer.module.css";
import flexmagLogo from "../../Assets/Images/flexmagDarkLogo.svg";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

const Footer = () => {
  const footerLinks = [
    { id: v4(), title: "PRIVACY POLICY", route: "/" },
    { id: v4(), title: "TERMS AND CONDITIONS", route: "/" },
    { id: v4(), title: "FAQ", route: "/" },
    { id: v4(), title: "COOKIES", route: "/" },
  ];
  return (
    <div className={classes.container}>
      <div className={classes.topContainer}>
        <div>
          <div>
            <img src={flexmagLogo} alt="FlexMag Logo" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div>
          <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
          <div>
            <input type="text" placeholder="Your Email" />
            <button>SUBSCRIBE</button>
          </div>
          <div>
            Stay up to date with the latest sports news straight to your inbox
          </div>
        </div>
      </div>
      <div className={classes.bottomContainer}>
        <div className={classes.leftSection}>
          {footerLinks.map((data) => {
            return (
              <Link to={data.route} key={data.id}>
                {data.title}
              </Link>
            );
          })}
        </div>
        <div className={classes.rightSection}>
          &copy; 2018 FLEX MAG. <span>All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
