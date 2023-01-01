import React from "react";
import Layout from "../../Components/Layout/Layout";
import FeaturedNews from "./FeaturedNews";
import classes from "./Home.module.css";
import HomeAdSection from "./HomeAdSection";
import HomeLiveMatches from "./HomeLiveMatches";
import HomeNews from "./HomeNews";
import HomeRightSectionAd from "./HomeRightSectionAd";
import HomeTweetSection from "./HomeTweetSection";
import LeagueTableContainer from "./LeagueTableContainer";
import PopularNews from "./PopularNews";

const Home = () => {
  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.adCenter}>
          <HomeAdSection />
        </div>
        <div className={classes.bodyMain}>
          <div className={classes.leftSection}>
            <div>
              <HomeLiveMatches />
            </div>
            <div>
              <PopularNews />
            </div>
          </div>
          <div className={classes.containerMain}>
            <div className={classes.featuredNews}>
              <FeaturedNews />
            </div>
            <div className={classes.news}>
              <HomeNews />
            </div>
          </div>
          <div className={classes.rightSection}>
            <div className={classes.leagueTable}>
              <LeagueTableContainer />
            </div>
            <div className={classes.rightSectionAd}>
              <HomeRightSectionAd />
            </div>
            <div className={classes.tweetSection}>
              <HomeTweetSection />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
