import React, { useContext } from "react";
import classes from "./FeaturedNews.module.css";
import { Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

const FeaturedNews = () => {
  // navigate
  const navigate = useNavigate();

  // const featuredSportHandler = (category) => {
  //   const featuredSport = news.find((data) => {
  //     return data.category === category;
  //   });
  //   return featuredSport;
  // };

  // const soccerfeatured = featuredSportHandler("Soccer");
  // const tennisFeatured = featuredSportHandler("Tennis");
  // const nbaFeatured = featuredSportHandler("NBA");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { popularStories, isLoadingPopularStories } = useContext(AppContext);

  return (
    <div className={classes.container}>
      {isLoadingPopularStories ? (
        <Skeleton
          variant="rectangular"
          width={"100%"}
          height={549}
          style={{ background: "#E5E8EC" }}
        />
      ) : (
        <img
          src={
            popularStories[0]?.associations.featureimage.renditions.original
              .href
          }
          alt={popularStories[0]?.associations.featureimage.description_text}
        />
      )}
      <div className={classes.filterOverlay}></div>
      <div className={classes.textsection}>
        <div
          className={classes.topFeatured}
          onClick={() => {
            scrollToTop();
            navigate(`/home/popular/${popularStories[0].uri}`);
          }}
        >
          <div>{popularStories[0]?.subject[1].name}</div>
          <div>{popularStories[0]?.headline}</div>
        </div>
        <div className={classes.featuredSet}>
          <div
            className={classes.featuredSetNews}
            onClick={() => {
              scrollToTop();
              navigate(`/home/popular/${popularStories[1]?.uri}`);
            }}
          >
            <div></div>
            <div>
              <div>{popularStories[1]?.subject[1].name}</div>
              <div>{popularStories[1]?.headline}</div>
            </div>
          </div>
          <div
            className={classes.featuredSetNews}
            onClick={() => {
              scrollToTop();
              navigate(`/home/popular/${popularStories[2]?.uri}`);
            }}
          >
            <div></div>
            <div>
              <div>{popularStories[2]?.subject[1].name}</div>
              <div>{popularStories[2]?.headline}</div>
            </div>
          </div>
          <div
            className={classes.featuredSetNews}
            onClick={() => {
              scrollToTop();
              navigate(`/home/popular/${popularStories[3]?.uri}`);
            }}
          >
            <div></div>
            <div>
              <div>{popularStories[3]?.subject[1].name}</div>
              <div>{popularStories[3]?.headline}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNews;
