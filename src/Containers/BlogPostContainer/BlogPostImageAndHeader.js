import React from "react";
import classes from "./BlogPostImageAndHeader.module.css";

const BlogPostImageAndHeader = ({ datum }) => {
  let betterArray;
  if (typeof datum?.associations === "string") {
    betterArray = JSON.parse(datum?.associations);
  } else {
    betterArray = datum?.associations;
  }

  return (
    <div className={classes.container}>
      <div className={classes.postImage}>
        <img
          src={betterArray?.featureimage?.renditions?.original.href}
          alt={betterArray?.featureimage?.description_text}
        />

        <div className={classes.filterOverlay}></div>
        <div className={classes.textSection}>
          <div className={classes.textInner}>
            {datum && <div>{datum?.subject?.name}</div>}
            <div>{datum?.headline}</div>
            <div>{datum?.description_text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostImageAndHeader;
