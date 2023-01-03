import React from "react";
import classes from "./BlogContent.module.css";
import ovalProfileImage from "../../Assets/Images/ovalProfileImage.svg";
import { SocialIcon } from "react-social-icons";

const BlogContent = ({ datum }) => {
  return (
    <div className={classes.container}>
      <div className={classes.socialSections}>
        <div className={classes.detailSection}>
          <div>
            <img src={ovalProfileImage} alt="Author" />
          </div>
          <div>
            <div>{datum.author}</div>
            <div>8 mins ago</div>
          </div>
        </div>
        <div className={classes.socialIconSection}>
          <SocialIcon
            url="https://google.com/jaketrent"
            bgColor="#e5e5e5"
            fgColor="#8E99A8"
          />
          <SocialIcon
            url="https://facebook.com/jaketrent"
            bgColor="#e5e5e5"
            fgColor="#8E99A8"
          />
          <SocialIcon
            url="https://linkedin.com/jaketrent"
            bgColor="#e5e5e5"
            fgColor="#8E99A8"
          />
          <SocialIcon
            url="https://twitter.com/jaketrent"
            bgColor="#e5e5e5"
            fgColor="#8E99A8"
          />
        </div>
        <div className={classes.commentCount}>
          <div>{datum.comments.length}</div>
          <div>COMMENTS</div>
        </div>
        <div className={classes.shareCount}>
          {datum.shareCount ? <div>{datum.shareCount}</div> : <div>0</div>}
          <div>SHARES</div>
        </div>
      </div>
      <div className={classes.textSection}>
        {datum.paragraphs.map((paragraph, i) => {
          return (
            <div className={classes.paragraph} key={paragraph.id}>
              <div className={classes.paragraphs}>{paragraph.content}</div>
              {paragraph.quotes && (
                <div className={classes.quote}>{`"${paragraph.quotes}"`}</div>
              )}
              {paragraph.images && (
                <div className={classes.imageContainer}>
                  <img src={paragraph.images} alt={`Paragraph${i + 1}`} />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className={classes.socialSections}>
        <div className={`${classes.socialIconSection} ${classes.socialAlt}`}>
          <SocialIcon
            url="https://google.com/jaketrent"
            bgColor="#e5e5e5"
            fgColor="#8E99A8"
          />
          <SocialIcon
            url="https://facebook.com/jaketrent"
            bgColor="#e5e5e5"
            fgColor="#8E99A8"
          />
          <SocialIcon
            url="https://linkedin.com/jaketrent"
            bgColor="#e5e5e5"
            fgColor="#8E99A8"
          />
          <SocialIcon
            url="https://twitter.com/jaketrent"
            bgColor="#e5e5e5"
            fgColor="#8E99A8"
          />
        </div>
        <div className={classes.commentCount}>
          <div>{datum.comments.length}</div>
          <div>COMMENTS</div>
        </div>
        <div className={classes.shareCount}>
          {datum.shareCount ? <div>{datum.shareCount}</div> : <div>0</div>}
          <div>SHARES</div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
