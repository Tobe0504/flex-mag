import React from "react";
import { liveMatches } from "../../Utilities/liveMatches";
import classes from "./HomeLiveMatches.module.css";
import chelseaLogo from "../../Assets/Images/chelseaLogo.svg";

const HomeLiveMatches = () => {
  return (
    <div className={classes.container}>
      {liveMatches.map((data) => {
        return (
          <div className={classes.livematch} key={data.id}>
            <div className={classes.matchHeader}>
              <div>
                <img
                  alt="hmm"
                  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg`}
                  className={classes.hmm}
                />
              </div>
              <div>
                <h4>{data.title}</h4>
                <p>Spain</p>
              </div>
            </div>
            {data.matches.map((datum) => {
              return (
                <div className={classes.liveMatchDetail} key={datum.id}>
                  <div className={classes.timeSection}>18:30</div>
                  <div className={classes.teamSection}>
                    <div>
                      <div>
                        <img src={chelseaLogo} alt={datum.home} />
                      </div>
                      <div>{datum.home}</div>
                      <div>{datum.homeScore}</div>
                    </div>
                    <div>
                      <div>
                        <img src={chelseaLogo} alt={datum.home} />
                      </div>
                      <div>{datum.away}</div>
                      <div>{datum.awayScore}</div>
                    </div>
                  </div>
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
