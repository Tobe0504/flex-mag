import React from "react";
import classes from "./BlogCategoriesAndTags.module.css";

const BlogCategoriesAndTags = ({ datum }) => {
  return (
    <div className={classes.container}>
      <div className={classes.categories}>
        <div className={classes.header}>
          <div>CATEGORIES</div>
          <div>
            <hr />
          </div>
        </div>
        <div className={classes.categoriesSection}>
          {datum.categories.map((category) => {
            return <div key={category}>{category} </div>;
          })}
        </div>
        <div className={classes.header}>
          <div>TAGS</div>
          <div>
            <hr />
          </div>
        </div>
        <div className={classes.tagsSection}>
          {datum.tags.map((category) => {
            return <div key={category}>{category} </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogCategoriesAndTags;
