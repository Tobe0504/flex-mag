import React from "react";
import classes from "./BlogPostPopularPosts.module.css";
// import { Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BlogPostPopularPosts = (props) => {
  // Navigagte
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div></div>
        <div>Popular News</div>
      </div>
      <div className={classes.postContainer}>
        {props?.popularStories.slice(0, 7).map((datum) => {
          return (
            <div
              className={classes.popularPost}
              key={datum.uri}
              onClick={() => {
                navigate(`/home/popular/${datum.uri}`);
              }}
            >
              <div className={classes.pictureSection}>
                <img
                  src={
                    datum?.associations.featureimage.renditions.original.href
                  }
                  alt={datum?.associations.featureimage.description_text}
                />
              </div>
              <div className={classes.textSection}>
                <div>{datum?.subject[1].name}</div>
                <div>{datum?.headline}</div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPostPopularPosts;
