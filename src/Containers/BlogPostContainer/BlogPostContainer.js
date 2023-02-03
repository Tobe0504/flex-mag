import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import { AppContext } from "../../Context/AppContext";
import { news } from "../../Utilities/news";
import BlogCategoriesAndTags from "./BlogCategoriesAndTags";
import BlogContainerAd from "./BlogContainerAd";
import BlogContent from "./BlogContent";
import BlogPostCommentSection from "./BlogPostCommentSection";
import classes from "./BlogPostContainer.module.css";
import BlogPostImageAndHeader from "./BlogPostImageAndHeader";
import BlogPostPopularPosts from "./BlogPostPopularPosts";

const BlogPostContainer = () => {
  // Params
  const { id } = useParams();

  // Context
  const { isSendingRequest, headlines } = useContext(AppContext);

  return (
    <Layout>
      {headlines
        .filter((data) => {
          return data.uri === id;
        })
        ?.map((datum) => {
          return (
            <div className={classes.container} key={datum.id}>
              <BlogPostImageAndHeader datum={datum} />
              <div className={classes.bodyMain}>
                <BlogContainerAd />
                <div className={classes.blogContentSection}>
                  <div className={classes.blogContent}>
                    <BlogContent datum={datum} />
                    {/* <BlogPostCommentSection datum={datum} /> */}
                  </div>
                  <div className={classes.popularNews}>
                    <BlogPostPopularPosts />
                    {/* <BlogCategoriesAndTags datum={datum} /> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </Layout>
  );
};

export default BlogPostContainer;
