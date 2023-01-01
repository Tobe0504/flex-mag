import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { leaguesTable } from "../../Utilities/leagueTable";
import classes from "./LeagueTableContainer.module.css";

const LeagueTableContainer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>League Table</div>
      <div className={classes.leagueTableNav}>
        <span>
          <FontAwesomeIcon icon={faCaretLeft} color="#EF2339" />
        </span>
        <span>{leaguesTable[0].leagueTitle}</span>
        <span>
          <FontAwesomeIcon icon={faCaretRight} color="#EF2339" />
        </span>
      </div>
      <div className={classes.tableHeader}>
        <div>Team</div>
        <div>PTS</div>
      </div>
      <div className={classes.table}>
        {leaguesTable[0].leagueTable.map((datum, i) => {
          return (
            <div className={classes.standings} key={datum.id}>
              <div>
                <div>{`${i + 1}.`}</div>
                <div>{datum.clubName}</div>
              </div>
              <div>{datum.points}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeagueTableContainer;
