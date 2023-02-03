import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import classes from "./PopularNews.module.css";
import { Skeleton } from "@mui/material";

const PopularNews = () => {
  // navigate
  const navigate = useNavigate();

  // Context
  const { popularStories, isLoadingPopularStories } = useContext(AppContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const dummyPopularNews = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div></div>
        <div>POPULAR NEWS</div>
      </div>
      <>
        {isLoadingPopularStories
          ? dummyPopularNews.map((data) => {
              return (
                <div className={classes.popularNews} key={data}>
                  <div>
                    <Skeleton variant="rectangular" width="30%" height={20} />
                  </div>
                  <div>
                    <Skeleton variant="rectangular" width="70%" height={30} />
                  </div>
                  <hr />
                </div>
              );
            })
          : popularStories.slice(4).map((data) => {
              return (
                <div
                  key={data.uri}
                  className={classes.popularNews}
                  onClick={() => {
                    navigate(`/home/popular/${data.uri}`);
                    scrollToTop();
                  }}
                >
                  <div>{data.subject[1].name}</div>
                  <div>{data.headline}</div>
                  <hr />
                </div>
              );
            })}
      </>
    </div>
  );
};

export default PopularNews;
