import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  // state
  const [displaySearch, setDisplaySearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [offsetValue, setOffsetValue] = useState(0);
  const [headlines, setHeadlines] = useState([]);
  const [isSendingRequest, setIsSendingRequest] = useState(false);
  const [error, setError] = useState("");
  const [popularStories, setPopularStories] = useState([]);

  // Params
  // const { id } = useParams();

  if (offsetValue > 100) {
    setOffsetValue(0);
  }

  const fetchAllHeadlines = () => {
    setIsSendingRequest(true);
    axios
      .get(
        `https://content.api.pressassociation.io/v1/item?sort=issued:desc&sort=uri:asc&limit=20&offset=${offsetValue}&fields=total,limit,offset,item(uri,headline,subject,associations,description_text,subject/name,body_text,byline,firstcreated)`,
        {
          headers: {
            apikey: "bba83rkvzevyy764bk9fu3e2",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setHeadlines(res.data.item);
        setIsSendingRequest(false);
      })
      .catch((err) => {
        console.log(err);
        setIsSendingRequest(false);
        setError(err.message);
      });
  };

  useEffect(() => {
    fetchAllHeadlines();
    // eslint-disable-next-line
  }, [offsetValue]);

  const fetchPopularStories = () => {
    setIsSendingRequest(true);
    axios
      .get(
        `https://content.api.pressassociation.io/v1/item?sort=issued:asc&sort=firstcreated:desc&limit=10&start=now-24h`,
        {
          headers: {
            apikey: "bba83rkvzevyy764bk9fu3e2",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res, "popular");
        setPopularStories(res.data.item);
        setIsSendingRequest(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   getBodyContent();
  // }, [id]);

  return (
    <AppContext.Provider
      value={{
        displaySearch,
        setDisplaySearch,
        searchQuery,
        setSearchQuery,
        fetchAllHeadlines,
        offsetValue,
        setOffsetValue,
        headlines,
        setHeadlines,
        isSendingRequest,
        popularStories,
        setPopularStories,
        fetchPopularStories,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
