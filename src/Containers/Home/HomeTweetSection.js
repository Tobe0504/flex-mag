import React from "react";
import classes from "./HomeTweetSection.module.css";

const HomeTweetSection = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div></div>
        <div>TWITTER FEED</div>
      </div>
      <div>
        <blockquote className="twitter-tweet">
          <p lang="en" dir="ltr">
            I feel it’s more expensive not to own a car in Lagos
          </p>
          &mdash; C.O.D (@ukauwa_david)
          <a href="https://twitter.com/ukauwa_david/status/1605767004631154688?ref_src=twsrc%5Etfw">
            December 22, 2022
          </a>
        </blockquote>
      </div>
      <div>
        <blockquote className="twitter-tweet">
          <p lang="en" dir="ltr">
            Nobody had texted me today, just Kuda and GTB
          </p>
          &mdash; C.O.D (@ukauwa_david){" "}
          <a href="https://twitter.com/ukauwa_david/status/1605572520240746496?ref_src=twsrc%5Etfw">
            December 21, 2022
          </a>
        </blockquote>{" "}
      </div>
      <div>
        <blockquote className="twitter-tweet">
          <p lang="en" dir="ltr">
            Ronaldo fans will rest .. cc:{" "}
            <a href="https://twitter.com/coder_blvck?ref_src=twsrc%5Etfw">
              @coder_blvck
            </a>{" "}
            <a href="https://t.co/Bg5snvSzoL">pic.twitter.com/Bg5snvSzoL</a>
          </p>
          &mdash; C.O.D (@ukauwa_david){" "}
          <a href="https://twitter.com/ukauwa_david/status/1604551430538264577?ref_src=twsrc%5Etfw">
            December 18, 2022
          </a>
        </blockquote>{" "}
        <script async src="https://platform.twitter.com/widgets.js"></script>
      </div>
    </div>
  );
};

export default HomeTweetSection;
