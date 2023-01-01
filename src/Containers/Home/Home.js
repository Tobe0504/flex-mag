import React from "react";
import Layout from "../../Components/Layout/Layout";
import FeaturedNews from "./FeaturedNews";
import classes from "./Home.module.css";
import HomeAdSection from "./HomeAdSection";
import HomeLiveMatches from "./HomeLiveMatches";
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
          <div>
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
          </div>
          <div>
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
