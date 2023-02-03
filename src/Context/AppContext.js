import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

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
  const [isLoadingPopularStories, setIsLoadingPopularStories] = useState(false);
  const [activeContent, setActiveContent] = useState([]);

  // Utils

  // Params

  if (offsetValue > 100) {
    setOffsetValue(0);
  }

  const fetchAllHeadlines = () => {
    setIsSendingRequest(true);
    axios
      .get(
        `${process.env.REACT_APP_PA_API_DOMAIN}/v1/item?sort=issued:desc&sort=uri:asc&limit=20&offset=${offsetValue}&fields=total,limit,offset,item(uri,headline,subject,associations,description_text,subject/name,body_text,byline,firstcreated)`,
        {
          headers: {
            apikey: process.env.REACT_APP_PA_API_KEY,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        setHeadlines(res.data.item);
        console.log(res, "psst");
        setIsSendingRequest(false);
      })
      .catch((err) => {
        // console.log(err);
        setIsSendingRequest(false);
        setError(err.message);
      });
  };

  const fetchPopularStories = () => {
    setIsLoadingPopularStories(true);
    axios
      .get(
        `${process.env.REACT_APP_PA_API_DOMAIN}/v1/item?sort=issued:asc&sort=firstcreated:desc&limit=20&start=now-24h`,
        {
          headers: {
            apikey: process.env.REACT_APP_PA_API_KEY,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        setPopularStories(res.data.item);
        setIsLoadingPopularStories(false);
      })
      .catch((err) => {
        // console.log(err);
        setIsLoadingPopularStories(false);
      });
  };

  useEffect(() => {
    fetchAllHeadlines();
    fetchPopularStories();
    // eslint-disable-next-line
  }, [offsetValue]);

  const fetchStoryContent = (id) => {
    setIsLoadingPopularStories(true);
    axios
      .get(`${process.env.REACT_APP_PA_API_DOMAIN}/v1/item/${id}`, {
        headers: {
          apikey: process.env.REACT_APP_PA_API_KEY,
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res, "roarr");
        setIsLoadingPopularStories(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoadingPopularStories(false);
      });
  };

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
        isLoadingPopularStories,
        setIsLoadingPopularStories,
        error,
        setError,
        fetchStoryContent,
        activeContent,
        setActiveContent,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
