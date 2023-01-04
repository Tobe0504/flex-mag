import React, { useContext } from "react";
import { news } from "../../Utilities/news";
import classes from "./SearchResults.module.css";
import searchedNewsBackground from "../../Assets/Images/searchedNewsBackground.svg";
import { AppContext } from "../../Context/AppContext";

const SearchResults = () => {
  // const
  const { searchQuery } = useContext(AppContext);

  const searchKeys = ["category", "header", "author"];

  console.log(news[0]["categories"]);

  return (
    <div className={classes.container}>
      {searchQuery && (
        <div
          className={classes.header}
        >{`Search results for "${searchQuery}"`}</div>
      )}
      <div className={classes.searchResultContainer}>
        {news
          .filter((item) =>
            searchKeys?.some((key) =>
              item[key]?.toLowerCase()?.includes(searchQuery)
            )
          )
          .map((data) => {
            return (
              <div className={classes.searchResult} key={data.id}>
                <div className={classes.imageSection}>
                  <img src={searchedNewsBackground} alt={`${data.header}`} />
                </div>
                <div className={classes.textSection}>
                  <div>{data?.category}</div>
                  <div>{data.header}</div>
                  <div>{data.previewText}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SearchResults;
