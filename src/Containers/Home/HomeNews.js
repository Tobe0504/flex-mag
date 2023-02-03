import React, { useEffect } from "react";
import classes from "./HomeNews.module.css";
import { Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const HomeNews = () => {
  // Context
  const {
    setOffsetValue,
    fetchAllHeadlines,
    isSendingRequest,
    headlines,
    fetchPopularStories,
    fetchStoryContent,
  } = useContext(AppContext);

  // Effect
  useEffect(() => {
    fetchAllHeadlines();
    fetchPopularStories();
    // eslint-disable-next-line
  }, []);

  // Navigate
  const navigate = useNavigate();

  // utils
  const loadingArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isSendingRequest ? (
        <div className={classes.loadingContainer}>
          {loadingArr.map((data) => {
            return (
              <div className={classes.container} key={data}>
                <div className={classes.news}>
                  <div>
                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      height={"100%"}
                    />
                  </div>
                  <div className={classes.newsTextCenter}>
                    <div>
                      <Skeleton variant="rectangular" width="50%" height={30} />
                    </div>
                    <div>
                      <Skeleton
                        variant="rectangular"
                        width="100%"
                        height={50}
                      />
                    </div>
                    <div>
                      <Skeleton
                        variant="rectangular"
                        width="100%"
                        height={70}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className={classes.adSection}>
            <Skeleton variant="rectangular" width={"100%"} height={131} />
          </div>
        </div>
      ) : (
        <div className={classes.container}>
          {headlines.map((data) => {
            const headlineImage = Object.values(
              data.associations.featureimage.renditions
            );
            return (
              <div
                className={classes.news}
                key={data.uri}
                onClick={() => {
                  navigate(`/home/${data.uri}`);
                  scrollToTop();
                  fetchStoryContent(data.uri);
                }}
              >
                <div>
                  <img src={`${headlineImage[1].href}`} alt="" />
                </div>
                <div className={classes.newsTextCenter}>
                  <div>{data.subject[1].name}</div>
                  <div>{data.headline}</div>
                  <div>{data.description_text}</div>
                </div>
              </div>
            );
          })}
          <div
            className={classes.readMore}
            onClick={() => {
              setOffsetValue((prevState) => prevState + 10);
            }}
          >
            Read more
          </div>
          <div className={classes.adSection}>
            <Skeleton
              variant="rectangular"
              width={"100%"}
              height={131}
              style={{ background: "#E5E8EC" }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HomeNews;
