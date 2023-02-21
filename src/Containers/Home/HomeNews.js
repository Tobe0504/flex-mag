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
    fetchToSeeDataType,
  } = useContext(AppContext);

  // Effect
  useEffect(() => {
    fetchAllHeadlines();
    fetchPopularStories();
    fetchToSeeDataType();
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
          {headlines?.map((datum) => {
            let data = datum?.acf;
            let betterArray;
            if (typeof data?.associations === "string") {
              betterArray = JSON.parse(data?.associations);
            } else {
              betterArray = data?.associations;
            }
            const headlineImage =
              betterArray?.featureimage?.renditions["original"].href;

            let betterSubjectArray;
            if (typeof data?.subject === "string") {
              betterSubjectArray = JSON.parse(data?.subject);
            } else {
              betterSubjectArray = data?.subject;
            }

            return (
              <div
                className={classes.news}
                key={data.uri}
                onClick={() => {
                  navigate(`/home/${datum.id}`);
                  scrollToTop();
                }}
              >
                <div>
                  <img src={`${headlineImage}`} alt="" />
                </div>
                <div className={classes.newsTextCenter}>
                  <div>{betterSubjectArray[1]?.name}</div>
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
