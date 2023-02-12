import { LinearProgress } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import { AppContext } from "../../Context/AppContext";
import BlogCategoriesAndTags from "./BlogCategoriesAndTags";
import BlogContainerAd from "./BlogContainerAd";
import BlogContent from "./BlogContent";
// import BlogPostCommentSection from "./BlogPostCommentSection";
import classes from "./BlogPostContainer.module.css";
import BlogPostImageAndHeader from "./BlogPostImageAndHeader";
import BlogPostPopularPosts from "./BlogPostPopularPosts";

const BlogPostContainer = () => {
  // Params
  const { id } = useParams();

  // Context
  const {
    popularStories,
    tagsSearchAndCategory,
    fetchParticularNewsContent,
    newsBodyContent,
    isSendingRequest,
  } = useContext(AppContext);

  useEffect(() => {
    fetchParticularNewsContent(id);
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
          <BlogPostImageAndHeader datum={datum} />
          <div className={classes.bodyMain}>
            <BlogContainerAd />
            <div className={classes.blogContentSection}>
              <div className={classes.blogContent}>
                <BlogContent datum={datum} />
                {/* <BlogPostCommentSection datum={datum} /> */}
              </div>
              <div className={classes.popularNews}>
                <BlogPostPopularPosts popularStories={popularStories} />
                <BlogCategoriesAndTags
                  datum={datum}
                  tagsSearchAndCategory={tagsSearchAndCategory}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* );
        })} */}
    </Layout>
  );
};

export default BlogPostContainer;
