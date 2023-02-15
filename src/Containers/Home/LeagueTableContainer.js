import React from "react";
import { leaguesTable } from "../../Utilities/leagueTable";
import classes from "./LeagueTableContainer.module.css";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialIcon } from "react-social-icons";

const LeagueTableContainer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h4>League Table</h4>
        <div className={classes.leagueTableNav}>
          <span>
            <FontAwesomeIcon icon={faAngleLeft} />
          </span>
          <span>{leaguesTable[0].leagueTitle}</span>
          <span>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        </div>
      </div>

      <div className={classes.tableHeader}>
        <div>Team</div>
        <div>D</div>
        <div>L</div>
        <div>Ga</div>
        <div>Gd</div>
        <div>Pts</div>
      </div>
      <div className={classes.table}>
        {leaguesTable[0].leagueTable.slice(0, 6).map((datum, i) => {
          return (
            <div className={classes.standings} key={datum.id}>
              <div>
                <img
                  alt="hmm"
                  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg`}
                  className={classes.hmm}
                />

                <div>{datum.clubName}</div>
              </div>
              <div>{datum.points}</div>
              <div>{datum.points}</div>
              <div>{datum.points}</div>
              <div>{datum.points}</div>
              <div>{datum.points}</div>
            </div>
          );
        })}
      </div>
      <div className={classes.viewFull}>
        <div>
          <span>View full table</span>
          <span>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        </div>
        <div>
          <SocialIcon
            url="https://facebook.com/jaketrent"
            bgColor="#DADADA"
            style={{ width: "20px", height: "20px" }}
          />
          <SocialIcon
            url="https://whatsapp.com/jaketrent"
            bgColor="#DADADA"
            style={{ width: "20px", height: "20px" }}
          />
          <SocialIcon
            url="https://twitter.com/jaketrent"
            bgColor="#DADADA"
            style={{ width: "20px", height: "20px" }}
          />
          <SocialIcon
            url="https://instagram.com/jaketrent"
            bgColor="#DADADA"
            style={{ width: "20px", height: "20px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default LeagueTableContainer;
