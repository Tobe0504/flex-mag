import React from "react";
import { useNavigate } from "react-router-dom";
import { news } from "../../Utilities/news";
import classes from "./PopularNews.module.css";

const PopularNews = () => {
  // navigate
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div></div>
        <div>POPULAR NEWS</div>
      </div>
      {news.map((data) => {
        return (
          <div
            key={data.id}
            className={classes.popularNews}
            onClick={() => {
              navigate(`/home/${data.id}`);
              scrollToTop();
            }}
          >
            <div>{data.category}</div>
            <div>{data.header}</div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default PopularNews;
