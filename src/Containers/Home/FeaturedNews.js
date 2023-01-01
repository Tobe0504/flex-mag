import React from "react";
import classes from "./FeaturedNews.module.css";
import { Skeleton } from "@mui/material";
import { news } from "../../Utilities/news";

const FeaturedNews = () => {
  const featuredSportHandler = (category) => {
    const featuredSport = news.find((data) => {
      return data.category === category;
    });
    return featuredSport;
  };

  const soccerfeatured = featuredSportHandler("Soccer");
  const tennisFeatured = featuredSportHandler("Tennis");
  const nbaFeatured = featuredSportHandler("NBA");

  return (
    <div className={classes.container}>
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={549}
        style={{ background: "#E5E8EC" }}
      />
      <div className={classes.filterOverlay}></div>
      <div className={classes.textsection}>
        <div className={classes.topFeatured}>
          <div>{soccerfeatured.category}</div>
          <div>{soccerfeatured.header}</div>
        </div>
        <div className={classes.featuredSet}>
          <div className={classes.featuredSetNews}>
            <div></div>
            <div>
              <div>{soccerfeatured.category}</div>
              <div>{soccerfeatured.header}</div>
            </div>
          </div>
          <div className={classes.featuredSetNews}>
            <div></div>
            <div>
              <div>{tennisFeatured.category}</div>
              <div>{tennisFeatured.header}</div>
            </div>
          </div>
          <div className={classes.featuredSetNews}>
            <div></div>
            <div>
              <div>{nbaFeatured.category}</div>
              <div>{nbaFeatured.header}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNews;
