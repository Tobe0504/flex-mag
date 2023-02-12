import React from "react";
import classes from "./BlogPopularPostCategoriesAndTags.module.css";
import { useNavigate } from "react-router-dom";

const BlogPopularPostCategoriesAndTags = ({ datum }) => {
  // navigate
  const navigate = useNavigate();

  // utils
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
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
          {datum?.subject
            ?.filter((data) => {
              return data.code.includes("pa");
            })
            .map((category) => {
              return (
                <div
                  key={category?.code}
                  onClick={() => {
                    // tagsSearchAndCategory(category.code);
                    navigate(`/search/${category?.code}`);
                    scrollToTop();
                  }}
                >
                  {category.name}{" "}
                </div>
              );
            })}
        </div>
        <div className={classes.header}>
          <div>TAGS</div>
          <div>
            <hr />
          </div>
        </div>
        <div className={classes.tagsSection}>
          {datum?.subject
            ?.filter((data) => {
              return data?.code?.includes("tag");
            })
            .map((category) => {
              return (
                <div
                  key={category?.code}
                  onClick={() => {
                    // tagsSearchAndCategory(category.code);
                    navigate(`/search/${category?.code}`);
                    scrollToTop();
                  }}
                >
                  {category.name}xs
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BlogPopularPostCategoriesAndTags;
