import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Containers/Home/Home";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/news" element={<Layout />} />
        <Route path="/fixtures" element={<Layout />} />
        <Route path="/league-table" element={<Layout />} />
        <Route path="/soccer" element={<Layout />} />
        <Route path="/nba" element={<Layout />} />
        <Route path="/shop" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
