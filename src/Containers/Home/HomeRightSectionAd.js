import React from "react";
import classes from "./HomeRightSectionAd.module.css";
import { Skeleton } from "@mui/material";

const HomeRightSectionAd = () => {
  return (
    <div className={classes.container}>
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={472}
        style={{ background: "#CCD1D9" }}
      />
    </div>
  );
};

export default HomeRightSectionAd;
