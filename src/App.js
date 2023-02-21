import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Containers/Home/Home";
import Layout from "./Components/Layout/Layout";
import BlogPostContainer from "./Containers/BlogPostContainer/BlogPostContainer";
import SearchResultContainer from "./Containers/SearchResultContainer/SearchResultContainer";
import BlogPopularPostContainer from "./Containers/BlogPopularPostContainer/BlogPopularPostContainer";
import ScorePageTables from "./Containers/ScorePageTables/ScorePageTables";
import ScorePageMatches from "./Containers/ScorePageMatches/ScorePageMatches";

function App() {
  console.log(process.env.NODE_ENV, "thisnis the env haha");
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/news" element={<Layout />} />
        <Route path="/fixtures" element={<ScorePageMatches />} />
        <Route path="/soccer" element={<Layout />} />
        <Route path="/nba" element={<Layout />} />
        <Route path="/shop" element={<Layout />} />
        <Route path="/search" element={<SearchResultContainer />} />
        <Route path="/search/:tag" element={<SearchResultContainer />} />

        <Route path="/home/:id" element={<BlogPostContainer />} />
        <Route
          path="/home/popular/:popularId"
          element={<BlogPopularPostContainer />}
        />
        <Route path="/league-tables" element={<ScorePageTables />} />
      </Routes>
    </Router>
  );
}

export default App;
