import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import { AppContext } from "../../Context/AppContext";
// import BlogPopularPostCategoriesAndTags from "./BlogPopularPostCategoriesAndTags";
import BlogContainerAd from "./BlogPopularPostContainerAd";
// import BlogContent from "./BlogPopularPostContent";
// import BlogPopularPostCommentSection from "./BlogPopularPostCommentSection";
import classes from "./BlogPopularPostContainer.module.css";
import BlogPopularPostImageAndHeader from "./BlogPopularPostImageAndHeader";
import BlogPopularPostContent from "./BlogPopularPostContent";
import BlogPopularPostPopularPosts from "./BlogPopularPostPopularPosts";

const BlogPopularPostContainer = () => {
  // Params
  const { popularId } = useParams();

  // Context
  const { popularStories } = useContext(AppContext);

  return (
    <Layout>
      {popularStories
        .filter((data) => {
          return data.uri === popularId;
        })
        ?.map((datum) => {
          return (
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
                    <BlogPopularPostPopularPosts
                      popularStories={popularStories}
                    />
                    {/* <BlogPopularPostCategoriesAndTags datum={datum} /> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </Layout>
  );
};

export default BlogPopularPostContainer;
