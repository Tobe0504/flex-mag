import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import moment from "moment/moment";

export const MatchesContext = createContext();

const MatchesContextProvider = (props) => {
  // Major leaguue events and fixtures

  const [requiredDate, setRequiredDate] = useState(
    moment().format(moment.HTML5_FMT.DATE)
  );

  //   const date = new Date();

  // formatted with moment
  const formattedDate = moment(requiredDate).format(moment.HTML5_FMT.DATE);
  console.log(formattedDate);

  const [currentTime, setCurrentTime] = useState("Africa/Lagos");
  const [premierLeagueevents, setPremierLeagueEvents] = useState([]);
  const [premierLeagueIsLoading, setPremierLeagueIsLoading] = useState(false);

  const [spanishLeague, setSpanishLeague] = useState([]);
  const [spanishLeagueIsLoading, setSpanishLeagueIsLoading] = useState(false);

  const [germanLeague, setGermanLeague] = useState([]);
  const [germanLeagueIsLoading, setGermanLeagueIsLoading] = useState(false);

  const [frenchLeague, setFrenchLeague] = useState([]);
  const [frenchLeagueIsLoading, setFrenchLeagueIsLoading] = useState(false);

  const [italianLeague, setItalianLeague] = useState([]);
  const [italianLeagueIsLoading, setItalianLeagueIsLoading] = useState(false);

  const [europaLeague, setEuropaLeague] = useState([]);
  const [europaLeagueIsLoading, setEuropaLeagueIsLoading] = useState(false);

  const [championsLeague, setChampionsLeague] = useState([]);
  const [championsLeagueIsLoading, setChampionsLeagueIsLoading] =
    useState(false);

  const [faCup, setFaCup] = useState([]);
  const [faCupIsLoading, setFaCupIsLoading] = useState(false);

  const fetchTournamentEvents = () => {
    setPremierLeagueIsLoading(true);
    setSpanishLeagueIsLoading(true);
    setFrenchLeagueIsLoading(true);
    setGermanLeagueIsLoading(true);
    setItalianLeagueIsLoading(true);
    setChampionsLeagueIsLoading(true);
    setEuropaLeagueIsLoading(true);
    setFaCupIsLoading(true);
    setPremierLeagueEvents([]);
    setSpanishLeague([]);
    setFrenchLeague([]);
    setGermanLeague([]);
    setItalianLeague([]);
    setChampionsLeague([]);
    setEuropaLeague([]);
    setFaCup([]);
    // Premier league
    axios
      .get(
        `https://eapi.enetpulse.com/event/daily/?date=${formattedDate}&live=yes&includeVenue=yes&includeEventProperties=yes&includeCountryCodes=no&tz=${currentTime}&tournament_templateFK=47&username=${process.env.REACT_APP_ENET_USERNAME}&token=${process.env.REACT_APP_ENET_APIKEY}`
      )
      .then((res) => {
        console.log(res.data.events, "EPL");
        setPremierLeagueEvents(
          Object.values(res.data.events).map((data) => {
            return { ...data, isFavourited: false };
          })
        );
        console.log(res.data, "prem,prem");
        setPremierLeagueIsLoading(false);
      })
      .catch((err) => {
        console.log(err, "error from events");
        setPremierLeagueIsLoading(false);
      });

    // Spanish league
    axios
      .get(
        `https://eapi.enetpulse.com/event/daily/?date=${formattedDate}&live=yes&includeVenue=yes&status_type=notstarted&includeEventProperties=yes&includeCountryCodes=no&tournament_templateFK=87&username=${process.env.REACT_APP_ENET_USERNAME}&token=${process.env.REACT_APP_ENET_APIKEY}`
      )
      .then((res) => {
        // console.log(res);
        setSpanishLeague(Object.values(res.data.events));
        setSpanishLeagueIsLoading(false);
      })
      .catch((err) => {
        console.log(err, "error from events");
        setSpanishLeagueIsLoading(false);
      });

    // French Leagues
    axios
      .get(
        `https://eapi.enetpulse.com/event/daily/?date=${formattedDate}&live=yes&includeVenue=yes&status_type=notstarted&includeEventProperties=yes&includeCountryCodes=no&tournament_templateFK=53&username=${process.env.REACT_APP_ENET_USERNAME}&token=${process.env.REACT_APP_ENET_APIKEY}`
      )
      .then((res) => {
        setFrenchLeague(Object.values(res.data.events));
        setFrenchLeagueIsLoading(false);
      })
      .catch((err) => {
        console.log(err, "error from events");
        setFrenchLeagueIsLoading(false);
      });

    // German Leagues
    axios
      .get(
        `https://eapi.enetpulse.com/event/daily/?date=${formattedDate}&live=yes&includeVenue=yes&status_type=notstarted&includeEventProperties=yes&includeCountryCodes=no&tournament_templateFK=54&username=${process.env.REACT_APP_ENET_USERNAME}&token=${process.env.REACT_APP_ENET_APIKEY}`
      )
      .then((res) => {
        setGermanLeague(Object.values(res.data.events));
        setGermanLeagueIsLoading(false);
      })
      .catch((err) => {
        console.log(err, "error from events");
        setGermanLeagueIsLoading(false);
      });

    // italian league
    axios
      .get(
        `https://eapi.enetpulse.com/event/daily/?date=${formattedDate}&live=yes&includeVenue=yes&status_type=notstarted&includeEventProperties=yes&includeCountryCodes=no&tournament_templateFK=55&username=${process.env.REACT_APP_ENET_USERNAME}&token=${process.env.REACT_APP_ENET_APIKEY}`
      )
      .then((res) => {
        setItalianLeague(Object.values(res.data.events));
        setItalianLeagueIsLoading(false);
      })
      .catch((err) => {
        console.log(err, "italian");
        setItalianLeagueIsLoading(false);
      });

    // champions league
    axios
      .get(
        `https://eapi.enetpulse.com/event/daily/?date=${formattedDate}&live=yes&includeVenue=yes&status_type=notstarted&includeEventProperties=yes&includeCountryCodes=no&tournament_templateFK=42&username=${process.env.REACT_APP_ENET_USERNAME}&token=${process.env.REACT_APP_ENET_APIKEY}`
      )
      .then((res) => {
        setChampionsLeague(Object.values(res.data.events));
        setChampionsLeagueIsLoading(false);
      })
      .catch((err) => {
        console.log(err, "champions");
        setChampionsLeagueIsLoading(false);
      });

    // europa league
    axios
      .get(
        `https://eapi.enetpulse.com/event/daily/?date=${formattedDate}&live=yes&includeVenue=yes&status_type=notstarted&includeEventProperties=yes&includeCountryCodes=no&tournament_templateFK=73&username=${process.env.REACT_APP_ENET_USERNAME}&token=${process.env.REACT_APP_ENET_APIKEY}`
      )
      .then((res) => {
        setEuropaLeague(Object.values(res.data.events));
        setEuropaLeagueIsLoading(false);
      })
      .catch((err) => {
        console.log(err, "italian");
        setEuropaLeagueIsLoading(false);
      });

    // fa cup
    axios
      .get(
        `https://eapi.enetpulse.com/event/daily/?date=${formattedDate}&live=yes&includeVenue=yes&status_type=notstarted&includeEventProperties=yes&includeCountryCodes=no&tournament_templateFK=132&username=${process.env.REACT_APP_ENET_USERNAME}&token=${process.env.REACT_APP_ENET_APIKEY}`
      )
      .then((res) => {
        setFaCup(Object.values(res.data.events));
        setFaCupIsLoading(false);
      })
      .catch((err) => {
        console.log(err, "italian");
        setFaCupIsLoading(false);
      });
  };

  useEffect(() => {
    fetchTournamentEvents();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formattedDate]);
  return (
    <MatchesContext.Provider
      value={{
        requiredDate,
        setRequiredDate,
        currentTime,
        setCurrentTime,
        fetchTournamentEvents,
        premierLeagueevents,
        setPremierLeagueEvents,
        frenchLeague,
        setFrenchLeague,
        germanLeague,
        setGermanLeague,
        premierLeagueIsLoading,
        germanLeagueIsLoading,
        frenchLeagueIsLoading,
        italianLeagueIsLoading,
        italianLeague,
        setItalianLeague,
        spanishLeague,
        setSpanishLeague,
        spanishLeagueIsLoading,
        championsLeague,
        setChampionsLeague,
        championsLeagueIsLoading,
        europaLeague,
        setEuropaLeague,
        europaLeagueIsLoading,
        faCup,
        faCupIsLoading,
        setFaCup,
      }}
    >
      {props.children}
    </MatchesContext.Provider>
  );
};

export default MatchesContextProvider;
