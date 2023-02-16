import React, { useEffect } from "react";
import classes from "./ScorePageTables.module.css";
import { useContext } from "react";
import { CircularProgress } from "@mui/material";
import { TablesContext } from "../../Context/TablesContext";
import ScorePageTablesContainer from "./ScorePageTablesContainer";
import Layout from "../../Components/Layout/Layout";

const ScorePageTables = () => {
  // Context
  const {
    fetchAllLeagueTables,
    premierLeagueTable,
    spanishLeagueTable,
    frenchLeagueTable,
    germanLeagueTable,
    italianLeagueTable,
    premierLeagueTableIsLoading,
    spanishLeagueTableIsLoading,
    germanLeagueTableIsLoading,
    frenchLeagueTableIsLoading,
    italianLeagueTableIsLoading,
  } = useContext(TablesContext);

  useEffect(() => {
    fetchAllLeagueTables();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout showNavSection={true}>
      <div className={classes.container}>
        {premierLeagueTableIsLoading &&
        spanishLeagueTableIsLoading &&
        germanLeagueTableIsLoading &&
        frenchLeagueTableIsLoading &&
        italianLeagueTableIsLoading ? (
          <div className={classes.loading}>
            <CircularProgress
              color="inherit"
              size="1rem"
              style={{ color: "#EF2339" }}
            />
            <span>Loading league tables</span>
          </div>
        ) : (
          <>
            <ScorePageTablesContainer
              league={premierLeagueTable}
              name="Premier League"
              country_name="England"
            />
            <ScorePageTablesContainer
              league={spanishLeagueTable}
              name="La Liga"
              country_name="Spain"
            />
            <ScorePageTablesContainer
              league={frenchLeagueTable}
              name="Ligue 1"
              country_name="France"
            />
            <ScorePageTablesContainer
              league={germanLeagueTable}
              name="Bundesliga"
              country_name="Germany"
            />
            <ScorePageTablesContainer
              league={italianLeagueTable}
              name="Serie A"
              country_name="Italy"
            />
          </>
        )}
      </div>
    </Layout>
  );
};

export default ScorePageTables;
