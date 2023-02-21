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
  const [searchResults, setSearchResults] = useState([]);
  const [searchOffsetValue, setSearchOffsetValue] = useState(0);
  const [newsBodyContent, setNewsBodyContent] = useState([]);

  // Utils

  // Params

  if (offsetValue > 100) {
    setOffsetValue(0);
  }

  const fetchAllHeadlines = () => {
    setIsSendingRequest(true);
    axios
      .get(
        `${process.env.REACT_APP_PA_API_DOMAIN}/v1/item?sort=issued:desc&sort=uri:asc&limit=20&offset=${offsetValue}&fields=total,limit,offset,item(uri,headline,subject,associations,description_text,subject,body_text,byline,firstcreated)`,
        {
          headers: {
            apikey: process.env.REACT_APP_PA_API_KEY,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        // setHeadlines(res.data.item);
        console.log(res, "psst");
        setIsSendingRequest(false);
      })
      .catch((err) => {
        // console.log(err);
        setIsSendingRequest(false);
        setError(err.message);
      });
  };

  // function removeBackslashes(obj) {
  //   for (const prop in obj) {
  //     if (typeof obj[prop] === "string") {
  //       obj[prop] = obj[prop].replace(/\\/g, "");
  //     } else if (typeof obj[prop] === "object") {
  //       obj[prop] = removeBackslashes(obj[prop]);
  //     }
  //   }
  //   return obj;
  // }

  // function removeBackslashesFromArray(arr) {
  //   return arr.map((obj) => removeBackslashes(obj));
  // }

  const fetchToSeeDataType = () => {
    axios
      .get(`http://localhost:8000/wp-json/wp/v2/article?per_page=20`, {
        headers: {
          Accept: "application/json",
        },
        responseType: "json",
      })
      .then((res) => {
        console.log(res, "see from wORDPRESS haha");
        setHeadlines(res.data);
        setIsSendingRequest(false);
        console.log(JSON.parse(res.data[0].acf.associations, "test"));
      })
      .catch((err) => {
        console.log(err, "wr errpr");
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
      .get(
        `${process.env.REACT_APP_PA_API_DOMAIN}/v1/item/${id}sort=issued:desc&sort=uri:asc`,
        {
          headers: {
            apikey: process.env.REACT_APP_PA_API_KEY,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res, "roarr");
        setIsLoadingPopularStories(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoadingPopularStories(false);
      });
  };

  const fetchParticularNewsContent = (uri) => {
    setNewsBodyContent({});
    setIsSendingRequest(true);
    axios
      .get(`http://localhost:8000/wp-json/wp/v2/article/${uri}`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((res) => {
        setNewsBodyContent(res.data);
        console.log(res, "contentttt");
        setIsSendingRequest(false);
      })
      .catch((err) => {
        console.log(err);
        setIsSendingRequest(false);
      });
  };

  const searchHandler = (searchValue) => {
    setSearchOffsetValue(0);
    setSearchResults([]);
    setIsSendingRequest(true);
    axios
      .get(`http://localhost:8000/wp-json/wp/v2/article?search=${searchValue}`)
      .then((res) => {
        setSearchResults(res.data);
        console.log(res, "be like say na search");
        setIsSendingRequest(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const tagsSearchAndCategory = (tag) => {
    setSearchOffsetValue(0);
    setSearchResults([]);
    setIsSendingRequest(true);
    axios
      .get(`http://localhost:8000/wp-json/wp/v2/article?search=${tag}`)
      .then((res) => {
        setSearchResults(res.data);
        console.log(res, "searchhhhh");
        setIsSendingRequest(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(searchResults, "search results");
  }, [searchResults]);

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
        tagsSearchAndCategory,
        searchResults,
        searchOffsetValue,
        setSearchOffsetValue,
        fetchParticularNewsContent,
        newsBodyContent,
        searchHandler,
        fetchToSeeDataType,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
