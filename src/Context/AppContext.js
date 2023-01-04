import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  // state
  const [displaySearch, setDisplaySearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <AppContext.Provider
      value={{ displaySearch, setDisplaySearch, searchQuery, setSearchQuery }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
