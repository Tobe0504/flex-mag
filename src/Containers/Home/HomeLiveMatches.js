import React from "react";
import { liveMatches } from "../../Utilities/liveMatches";
import classes from "./HomeLiveMatches.module.css";

const HomeLiveMatches = () => {
  return (
    <div className={classes.container}>
      {liveMatches.map((data) => {
        return (
          <div className={classes.livematch} key={data.id}>
            <div className={classes.matchHeader}>{data.title}</div>
            {data.matches.map((datum) => {
              return (
                <div className={classes.liveMatchDetail} key={datum.id}>
                  <div className={classes.timeSection}>
                    <div
                      style={
                        datum.liveMatchTime === "Posp."
                          ? { color: "gba(239, 35, 57, 0.72)" }
                          : datum.liveMatchTime === "FT"
                          ? { color: "rgba(51, 51, 51, 0.6)" }
                          : { color: "#4DC788" }
                      }
                    >{`${datum.liveMatchTime}`}</div>
                    <div>{datum.matchTime}</div>
                  </div>
                  <div className={classes.scoreSection}>
                    <div>
                      <div>{datum.home}</div>
                      <div>{datum.homeScore}</div>
                    </div>
                    <div>-</div>
                    <div>
                      <div>{datum.away}</div>
                      <div>{datum.awayScore}</div>
                    </div>
                  </div>
                  <div className={classes.dateSection}>{datum.date}</div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default HomeLiveMatches;
