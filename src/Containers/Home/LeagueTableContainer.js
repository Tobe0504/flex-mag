import React, { useContext } from "react";
import { leaguesTable } from "../../Utilities/leagueTable";
import classes from "./LeagueTableContainer.module.css";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialIcon } from "react-social-icons";
import { TablesContext } from "../../Context/TablesContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LeagueTableContainer = () => {
  // context
  const {
    premierLeagueTable,
    fetchAllLeagueTables,
    // spanishLeagueTable,
    // frenchLeagueTable,
    // germanLeagueTable,
    // italianLeagueTable,
  } = useContext(TablesContext);

  // navigation
  const navigate = useNavigate();

  // effects
  useEffect(() => {
    fetchAllLeagueTables();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // state
  // const [leagueTableCount, setLeagueTableCount] = useState(0);
  // const [activeLEagueTable, setActiveLeagueTable] = useState([]);

  // useEffect(() => {
  //   if (leagueTableCount === 0 && premierLeagueTable.length > 0) {
  //     setActiveLeagueTable(...premierLeagueTable);
  //   } else if (leagueTableCount === 1) {
  //     return spanishLeagueTable;
  //   } else if (leagueTableCount === 2) {
  //     return frenchLeagueTable;
  //   } else if (leagueTableCount === 3) {
  //     return germanLeagueTable;
  //   } else if (leagueTableCount === 4) {
  //     return italianLeagueTable;
  //   }

  //   console.log(activeLEagueTable, "active league table");
  // }, [leagueTableCount]);

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
        {premierLeagueTable
          ?.sort((a, b) => {
            return a.rank - b.rank;
          })
          ?.slice(0, 6)
          .map((datum, i) => {
            return (
              <div className={classes.standings} key={datum.id}>
                <div>
                  <img
                    alt="hmm"
                    src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg`}
                    className={classes.hmm}
                  />

                  <div>
                    {datum.participant.name.length < 15
                      ? datum.participant?.name
                      : `${datum.participant?.name.slice(0, 12)}...`}
                  </div>
                </div>
                <div>{datum.standing_data[4].value}</div>
                <div>{datum.standing_data[5].value}</div>
                <div>{datum.standing_data[6].value}</div>
                <div>{datum.standing_data[3].value}</div>
                <div>{datum.standing_data[0].value}</div>
              </div>
            );
          })}
      </div>
      <div className={classes.viewFull}>
        <div
          onClick={() => {
            navigate("/league-tables");
          }}
        >
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
