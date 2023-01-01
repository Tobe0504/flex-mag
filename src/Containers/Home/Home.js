import React from "react";
import Layout from "../../Components/Layout/Layout";
import classes from "./Home.module.css";
import HomeAdSection from "./HomeAdSection";
import HomeLiveMatches from "./HomeLiveMatches";
import PopularNews from "./PopularNews";

const Home = () => {
  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.adCenter}>
          <HomeAdSection />
        </div>
        <div className={classes.bodyMain}>
          <div>
            <div>
              <HomeLiveMatches />
            </div>
            <div>
              <PopularNews />
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
