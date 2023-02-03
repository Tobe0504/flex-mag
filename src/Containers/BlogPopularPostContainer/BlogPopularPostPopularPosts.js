import React from "react";
import classes from "./BlogPopularPostPopularPosts.module.css";
import { Skeleton } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const BlogPopularPostPopularPosts = ({ popularStories }) => {
  // params
  const { popularId, isLoadingPopularStories } = useParams();

  // navigate
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div></div>
        <div>Popular News</div>
      </div>
      <div className={classes.postContainer}>
        {popularStories
          .filter((data) => {
            return data.uri !== popularId;
          })
          .slice(0, 5)
          .map((datum) => {
            return (
              <div
                className={classes.popularPost}
                key={datum.uri}
                onClick={() => {
                  navigate(`/home/popular/${datum.uri}`);
                }}
              >
                <div className={classes.pictureSection}>
                  {isLoadingPopularStories ? (
                    <Skeleton
                      variant="rectangular"
                      width={"100%"}
                      height={192}
                      style={{
                        background: "#E5E8EC",
                      }}
                    />
                  ) : (
                    <img
                      src={
                        datum.associations.featureimage.renditions.original.href
                      }
                      alt={datum?.associations.featureimage.description_text}
                    />
                  )}
                </div>
                <div className={classes.textSection}>
                  {isLoadingPopularStories ? (
                    <Skeleton variant="rectangular" width="30%" height={20} />
                  ) : (
                    <div>{datum.category}</div>
                  )}

                  {isLoadingPopularStories ? (
                    <Skeleton variant="rectangular" width="70%" height={30} />
                  ) : (
                    <div>{datum.headline}</div>
                  )}
                </div>
                <hr />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BlogPopularPostPopularPosts;
