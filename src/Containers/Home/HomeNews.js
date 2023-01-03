import React from "react";
import { news } from "../../Utilities/news";
import classes from "./HomeNews.module.css";
import { Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomeNews = () => {
  // Navigate
  const navigate = useNavigate();

  // utils

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={classes.container}>
      {news.map((data) => {
        return (
          <div
            className={classes.news}
            key={data.id}
            onClick={() => {
              navigate(`/home/${data.id}`);
              scrollToTop();
            }}
          >
            <div>
              <Skeleton variant="rectangular" width="100%" height={"100%"} />
            </div>
            <div className={classes.newsTextCenter}>
              <div>{data.category}</div>
              <div>{data.header}</div>
              <div>{data.previewText}</div>
            </div>
          </div>
        );
      })}
      <div className={classes.adSection}>
        <Skeleton
          variant="rectangular"
          width={"100%"}
          height={131}
          style={{ background: "#E5E8EC" }}
        />
      </div>
    </div>
  );
};

export default HomeNews;
