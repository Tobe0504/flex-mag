import React from "react";
import Layout from "../../Components/Layout/Layout";
import BlogPostPopularPosts from "../BlogPostContainer/BlogPostPopularPosts";
import HomeTweetSection from "../Home/HomeTweetSection";
import SearchAddContainer from "./SearchAddContainer";
import classes from "./SearchResultContainer.module.css";
import SearchResults from "./SearchResults";

const SearchResultContainer = () => {
  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.adSection}>
          <SearchAddContainer />
        </div>
        <div className={classes.bodyMain}>
          <div className={classes.searchResults}>
            <SearchResults />
            <div className={classes.mobilePopularPost}>
              <BlogPostPopularPosts />
            </div>
          </div>
          <div className={classes.popularNews}>
            <BlogPostPopularPosts />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchResultContainer;
