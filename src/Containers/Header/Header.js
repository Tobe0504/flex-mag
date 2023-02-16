import React, { useEffect, useRef, useContext } from "react";
import classes from "./Header.module.css";
import flexmagLogo from "../../Assets/Images/flexmagLogo.svg";
import { navItems } from "../../Utilities/navItems";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../../Context/AppContext";

const Header = () => {
  // Context
  const {
    displaySearch,
    setDisplaySearch,
    searchQuery,
    setSearchQuery,
    searchHandler,
  } = useContext(AppContext);

  // Ref
  const searchRef = useRef(null);

  // Navigate
  const navigate = useNavigate();

  // Effect
  useEffect(() => {
    searchRef?.current?.focus();
  }, [displaySearch]);

  useEffect(() => {
    const removeDropdownHandler = (e) => {
      if (!searchRef?.current?.contains(e.target)) {
        setDisplaySearch(false);
      }
    };
    document.addEventListener("mousedown", removeDropdownHandler);

    return () => {
      document.removeEventListener("mousedown", removeDropdownHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openSideMenu = () => {
    document.getElementById("sideMenu").style.width = "100%";
  };

  const closeSideMenu = () => {
    document.getElementById("sideMenu").style.width = "0%";
  };

  return (
    <div className={classes.container}>
      <div className={classes.responsivemenu}>
        <FontAwesomeIcon icon={faBars} onClick={openSideMenu} />
      </div>
      {!displaySearch && (
        <div className={classes.logoSection}>
          <img
            src={flexmagLogo}
            alt="FlexMag Logo"
            onClick={() => {
              navigate("/home");
            }}
          />
        </div>
      )}
      {/* {!displaySearch && ( */}
      {!displaySearch && (
        <div className={classes.navItemSection}>
          {navItems.map((data) => {
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
                  <div>{data.title}</div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      <div
        className={classes.search}
        style={!displaySearch ? { width: "20%" } : null}
        ref={searchRef}
      >
        {displaySearch ? (
          <input
            type="search"
            placeholder="Search"
            onChange={(e) => {
              setSearchQuery(e.target.value);
              console.log(e.target.value);
            }}
            value={searchQuery}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchHandler(searchQuery);
              }
            }}
          />
        ) : (
          <i>
            <FontAwesomeIcon
              icon={faSearch}
              fontSize="1.2rem"
              onClick={() => {
                setDisplaySearch(true);
                navigate("/search");
              }}
            />
          </i>
        )}
      </div>

      <div id="sideMenu" className={classes.sideNav}>
        <div className={classes.sideNavInner}>
          <button className={classes.btnClose} onClick={closeSideMenu}>
            &times;
          </button>
          <div className={classes.sideContainer}>
            <img src={flexmagLogo} alt="YSP Logo" />
          </div>
          <div className={classes.scontainer}>
            <div className={classes.navBox}>
              {navItems.map((data) => {
                return (
                  <Link
                    key={data.id}
                    to={data.route}
                    className={
                      window.location.href.includes(data.route)
                        ? `${classes.activeNavy}`
                        : undefined
                    }
                  >
                    <div
                      className={`${classes.navItem} ${classes.navItemResponsive}`}
                    >
                      <div>{data.title}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
