import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AppContextProvider from "./Context/AppContext";
import TablesContextProvider from "./Context/TablesContext";
import MatchesContextProvider from "./Context/MatchesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContextProvider>
    <MatchesContextProvider>
      <TablesContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </TablesContextProvider>
    </MatchesContextProvider>
  </AppContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
