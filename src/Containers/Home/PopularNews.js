import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import { news } from "../../Utilities/news";
import classes from "./PopularNews.module.css";

const PopularNews = () => {
  // navigate
  const navigate = useNavigate();

  // Context

  const { popularStories } = useContext(AppContext);

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
      {popularStories.map((data) => {
        return (
          <div
            key={data.uri}
            className={classes.popularNews}
            onClick={() => {
              navigate(`/home/${data.uri}`);
              scrollToTop();
            }}
          >
            <div>{data.subject[1].name}</div>
            <div>{data.headline}</div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default PopularNews;
