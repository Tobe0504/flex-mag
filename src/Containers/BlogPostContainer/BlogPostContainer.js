import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import { news } from "../../Utilities/news";
import BlogContainerAd from "./BlogContainerAd";
import BlogContent from "./BlogContent";
import BlogPostCommentSection from "./BlogPostCommentSection";
import classes from "./BlogPostContainer.module.css";
import BlogPostImageAndHeader from "./BlogPostImageAndHeader";

const BlogPostContainer = () => {
  // Params
  const { id } = useParams();

  return (
    <Layout>
      {news
        .filter((data) => {
          return data.id === id;
        })
        .map((datum) => {
          return (
            <div className={classes.container} key={datum.id}>
              <BlogPostImageAndHeader datum={datum} />
              <div className={classes.bodyMain}>
                <BlogContainerAd />
                <div className={classes.blogContentSection}>
                  <div className={classes.blogContent}>
                    <BlogContent datum={datum} />
                    <BlogPostCommentSection datum={datum} />
                  </div>
                  <div className={classes.popularNews}></div>
                </div>
              </div>
            </div>
          );
        })}
    </Layout>
  );
};

export default BlogPostContainer;
