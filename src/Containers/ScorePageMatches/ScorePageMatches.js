import React, { useContext, useEffect } from "react";
import classes from "./ScorePageMatches.module.css";
import { MatchesContext } from "../../Context/MatchesContext";
import LeagueMatchContainer from "./LeagueMatchContainer";
import { CircularProgress } from "@mui/material";
import Layout from "../../Components/Layout/Layout";

const ScorePageMatches = () => {
  // context
  const {
    fetchTournamentEvents,
    premierLeagueevents,
    frenchLeague,
    germanLeague,
    premierLeagueIsLoading,
    germanLeagueIsLoading,
    frenchLeagueIsLoading,
    italianLeague,
    italianLeagueIsLoading,
    spanishLeague,
    spanishLeagueIsLoading,
    championsLeague,
    championsLeagueIsLoading,
    europaLeague,
    europaLeagueIsLoading,
    faCup,
    faCupIsLoading,
    setPremierLeagueEvents,
    setFrenchLeague,
    setGermanLeague,
    setItalianLeague,
    setSpanishLeague,
    setChampionsLeague,
    setEuropaLeague,
    setFaCup,
  } = useContext(MatchesContext);

  // utils

  useEffect(() => {
    fetchTournamentEvents();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout showNavSection={true}>
      {premierLeagueIsLoading &&
      spanishLeagueIsLoading &&
      frenchLeagueIsLoading &&
      germanLeagueIsLoading &&
      italianLeagueIsLoading &&
      championsLeagueIsLoading &&
      europaLeagueIsLoading &&
      faCupIsLoading ? (
        <div className={classes.loading}>
          <CircularProgress
            color="inherit"
            size="1rem"
            style={{ color: "#EF2339" }}
          />
          <span>Loading Fixtures</span>
        </div>
      ) : (
        <div className={classes.container}>
          <LeagueMatchContainer
            leagueEvent={championsLeague}
            setLegueEvent={setChampionsLeague}
          />
          <LeagueMatchContainer
            leagueEvent={europaLeague}
            setLegueEvent={setEuropaLeague}
          />
          <LeagueMatchContainer
            leagueEvent={premierLeagueevents}
            setLegueEvent={setPremierLeagueEvents}
          />

          <LeagueMatchContainer
            leagueEvent={spanishLeague}
            setLegueEvent={setSpanishLeague}
          />
          <LeagueMatchContainer
            leagueEvent={frenchLeague}
            setLegueEvent={setFrenchLeague}
          />
          <LeagueMatchContainer
            leagueEvent={germanLeague}
            setLegueEvent={setGermanLeague}
          />
          <LeagueMatchContainer
            leagueEvent={italianLeague}
            setLegueEvent={setItalianLeague}
          />
          <LeagueMatchContainer leagueEvent={faCup} setLegueEvent={setFaCup} />
        </div>
      )}
    </Layout>
  );
};

export default ScorePageMatches;
