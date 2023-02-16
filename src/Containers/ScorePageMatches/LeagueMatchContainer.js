import React from "react";
import classes from "./ScorePageMatches.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import barcelona from "../../Assets/Images/barcelona.svg";
import realMadrid from "../../Assets/Images/realmadrid.svg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MatchesContext } from "../../Context/MatchesContext";

const LeagueMatchContainer = (props) => {
  // Context
  const { showOdds } = useContext(MatchesContext);

  const clubLogoHandler = (club) => {
    if (club === "Barcelona") {
      return barcelona;
    }
    if (club === "Real Madrid") {
      return realMadrid;
    }
  };

  //   navigate
  const navigate = useNavigate();

  // // utils
  // useEffect(() => {
  //   console.log(premierLeagueevents);
  // }, [premierLeagueevents]);

  return (
    <>
      {props?.leagueEvent?.length > 0 && (
        <div className={classes.leagueData}>
          <div className={classes.leagueHeader}>
            <div className={classes.leagueHeaderdata}>
              <div>
                {/* <img
                  alt={null}
                  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${null}.svg`}
                  className={classes.hmm}
                /> */}
              </div>

              <div className={classes.textSection}>
                <span>{props?.leagueEvent[0]?.tournament_stage_name}</span>
                <span>{props?.leagueEvent[0]?.tournament_template_name}</span>
              </div>
            </div>
            <div className={classes.leagueRouter}>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
          <div className={classes.leagueGames}>
            {props.leagueEvent?.map((datum, i) => {
              return (
                <div
                  className={classes.leagueGamesOuter}
                  key={datum.id}
                  onClick={() => {
                    navigate(`/scores/${datum.id}/summary`);
                  }}
                >
                  <div className={classes.leagueGame}>
                    <div className={classes.time}>
                      {datum.startdate.slice(11, 16)}
                    </div>
                    <div className={classes.clubNameSection}>
                      <div>
                        <span>
                          <img
                            src={clubLogoHandler("Barcelona")}
                            alt={datum.name.split("-")[0]}
                          />
                        </span>
                        <span>{datum.name.split("-")[0]}</span>
                      </div>
                      <div>
                        <span>
                          <img
                            src={clubLogoHandler("Barcelona")}
                            alt={datum.name.split("-")[1]}
                          />
                        </span>
                        <span>{datum.name.split("-")[1]}</span>
                      </div>
                    </div>
                    {showOdds && (
                      <div className={classes.oddsSection}>
                        <div>
                          <span>1</span>
                          <span>{0}</span>
                        </div>
                        <div>
                          <span>x</span>
                          <span>{0}</span>
                        </div>
                        <div>
                          <span>2</span>
                          <span>{0}</span>
                        </div>
                      </div>
                    )}
                    <div className={classes.scoresAndFavorites}>
                      {!props.leagueEvent?.status_type === "notstarted" && (
                        <div>
                          <span>1</span>
                          <span>1</span>
                        </div>
                      )}
                      {/* <div>
                        <FontAwesomeIcon
                          icon={faStar}
                          onClick={() => {
                            const modifiedLEagueEvent = props.leagueEvent.map(
                              (data, j) => {
                                if (i === j) {
                                  return { ...data, isFavourited: true };
                                }
                                return { ...data, isFavourited: false };
                              }
                            );
                            props.setLegueEvent(modifiedLEagueEvent);

                            console.log(props.leagueEvent);
                          }}
                        />
                      </div> */}
                    </div>
                  </div>
                  <div className={classes.mobileOddSection}>
                    {showOdds && (
                      <div className={classes.oddsSectionMobile}>
                        <div>
                          <span>1</span>
                          <span>1.5</span>
                        </div>
                        <div>
                          <span>x</span>
                          <span>1.5</span>
                          <span>1.5</span>
                        </div>
                        <div>
                          <span>2</span>
                          <span>1.5</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default LeagueMatchContainer;
