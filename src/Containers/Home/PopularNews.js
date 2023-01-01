import React from "react";
import { news } from "../../Utilities/news";
import classes from "./PopularNews.module.css";

const PopularNews = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div></div>
        <div>POPULAR NEWS</div>
      </div>
      {news.map((data) => {
        return (
          <div key={data.id} className={classes.popularNews}>
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
