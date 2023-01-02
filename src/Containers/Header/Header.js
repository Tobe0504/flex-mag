import React from "react";
import classes from "./Header.module.css";
import flexmagLogo from "../../Assets/Images/flexmagLogo.svg";
import { navItems } from "../../Utilities/navItems";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className={classes.container}>
      <div className={classes.responsivemenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className={classes.logoSection}>
        <img src={flexmagLogo} alt="FlexMag Logo" />
      </div>
      <div className={classes.navItemSection}>
        {navItems.map((data, i) => {
          return (
            <Link
              key={data.id}
              to={data.route}
              className={
                window.location.href.includes(data.route)
                  ? `${classes.activeNav}`
                  : undefined
              }
            >
              {window.location.href.includes(data.route) && (
                <div className={classes.activeIndicator}></div>
              )}

              <div className={classes.navItem}>
                <div>{data.icon}</div>
                <div>{data.title}</div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className={classes.search}>
        <FontAwesomeIcon icon={faSearch} fontSize="1.2rem" />
      </div>
    </div>
  );
};

export default Header;
