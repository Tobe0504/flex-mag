import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import { AppContext } from "../../Context/AppContext";
import BlogPopularPostCategoriesAndTags from "./BlogPopularPostCategoriesAndTags";
import BlogContainerAd from "./BlogPopularPostContainerAd";
// import BlogContent from "./BlogPopularPostContent";
// import BlogPopularPostCommentSection from "./BlogPopularPostCommentSection";
import classes from "./BlogPopularPostContainer.module.css";
import BlogPopularPostImageAndHeader from "./BlogPopularPostImageAndHeader";
import BlogPopularPostContent from "./BlogPopularPostContent";
import BlogPopularPostPopularPosts from "./BlogPopularPostPopularPosts";
import { LinearProgress } from "@mui/material";

const BlogPopularPostContainer = () => {
  // Params
  const { popularId } = useParams();

  // Context

  const {
    popularStories,
    newsBodyContent,
    isSendingRequest,
    fetchParticularNewsContent,
    tagsSearchAndCategory,
  } = useContext(AppContext);

  useEffect(() => {
    fetchParticularNewsContent(popularId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let datum;
  if (newsBodyContent) {
    datum = newsBodyContent;
  }

  return (
    <Layout>
      {isSendingRequest && !datum ? (
        <LinearProgress color="inherit" style={{ color: " #ef2339" }} />
      ) : (
        <div className={classes.container} key={datum.uri}>
          <BlogPopularPostImageAndHeader datum={datum} />
          <div className={classes.bodyMain}>
            <BlogContainerAd />
            <div className={classes.blogContentSection}>
              <div className={classes.blogContent}>
                <BlogPopularPostContent datum={datum} />
                {/* <BlogPopularPostCommentSection datum={datum} /> */}
              </div>
              <div className={classes.popularNews}>
                <BlogPopularPostPopularPosts popularStories={popularStories} />

                <BlogPopularPostCategoriesAndTags
                  datum={datum}
                  tagsSearchAndCategory={tagsSearchAndCategory}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default BlogPopularPostContainer;
