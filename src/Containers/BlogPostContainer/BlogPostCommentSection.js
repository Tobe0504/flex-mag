import React from "react";
import classes from "./BlogPostCommentSection.module.css";
import ovalProfileImage from "../../Assets/Images/ovalProfileImage.svg";

const BlogPostCommentSection = ({ datum }) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>Comments</div>
      <div className={classes.commentContainer}>
        {datum.comments.map((comment) => {
          return (
            <div className={classes.comment} key={comment.id}>
              <div>
                <img src={ovalProfileImage} alt={comment.by} />
              </div>
              <div className={classes.commenttext}>
                <div>
                  <div>{comment.by}</div>
                  <div>{`${comment.date} ${comment.time}`}</div>
                </div>
                <div>{comment.comment}</div>
              </div>
            </div>
          );
        })}
        <div className={classes.commentInput}>
          <div className={classes.inputSection}>
            <div>
              <img src={ovalProfileImage} alt="Comment" />
            </div>
            <div>
              <textarea placeholder="Write your comment" />
            </div>
          </div>
          <div className={classes.buttonSection}>
            <button>Publish</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCommentSection;
