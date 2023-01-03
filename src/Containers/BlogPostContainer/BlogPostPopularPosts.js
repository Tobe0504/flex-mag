import React from "react";
import { news } from "../../Utilities/news";
import classes from "./BlogPostPopularPosts.module.css";
import { Skeleton } from "@mui/material";

const BlogPostPopularPosts = ({ datum }) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div></div>
        <div>Popular News</div>
      </div>
      <div className={classes.postContainer}>
        {news
          .filter((data) => {
            return data.isPolular;
          })
          .map((datum) => {
            return (
              <div className={classes.popularPost} key={datum.id}>
                <div className={classes.pictureSection}>
                  <Skeleton
                    variant="rectangular"
                    width={"100%"}
                    height={192}
                    style={{
                      background: "#E5E8EC",
                    }}
                  />
                </div>
                <div className={classes.textSection}>
                  <div>{datum.category}</div>
                  <div>{datum.header}</div>
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
