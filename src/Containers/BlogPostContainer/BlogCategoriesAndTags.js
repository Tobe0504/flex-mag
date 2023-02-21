import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./BlogCategoriesAndTags.module.css";

const BlogCategoriesAndTags = ({ datum }) => {
  // navigate
  const navigate = useNavigate();

  // utils
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  let betterArray;
  if (typeof datum?.subject === "string") {
    betterArray = JSON.parse(datum?.subject);
  } else {
    betterArray = datum?.subject;
  }

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
          {betterArray
            ?.filter((data) => {
              return data?.code.includes("pa");
            })
            ?.map((category) => {
              return (
                <div
                  key={category.code}
                  onClick={() => {
                    navigate(`/search/${category?.name}`);
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
          {betterArray
            ?.filter((data) => {
              return data?.code?.includes("tag");
            })
            .map((category) => {
              return (
                <div
                  key={category?.code}
                  onClick={() => {
                    // tagsSearchAndCategory(category.code);
                    navigate(`/search/${category?.name}`);
                    scrollToTop();
                  }}
                >
                  {category.name}{" "}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BlogCategoriesAndTags;
