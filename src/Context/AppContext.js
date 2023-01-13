// import axios from "axios";
import React, { createContext, useState } from "react";
// import XMLParser from "react-xml-parser";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  // state
  const [displaySearch, setDisplaySearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchCompetition = () => {
    // axios
    //   .get(
    //     "/competition/news/7zWYv38S/300",
    //     // { mode: "no-cors" },
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     const jsonDataFromXml = new XMLParser().parseFromString(res.data);
    //     console.log(jsonDataFromXml);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "auth/code?code=135339&email=dukauwa.du@gmail.com&provider=auth0",
      true
    );
    xhr.onload = () => {
      if (xhr.status === 200) {
        // const users = JSON.parse(xhr.response);
        console.log(xhr.response);
      }
    };
    xhr.send(null);
  };

  return (
    <AppContext.Provider
      value={{
        displaySearch,
        setDisplaySearch,
        searchQuery,
        setSearchQuery,
        fetchCompetition,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
