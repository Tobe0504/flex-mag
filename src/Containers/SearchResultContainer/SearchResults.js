import React, { useContext } from "react";
import { news } from "../../Utilities/news";
import classes from "./SearchResults.module.css";
import searchedNewsBackground from "../../Assets/Images/searchedNewsBackground.svg";
import { AppContext } from "../../Context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";

const SearchResults = () => {
  // const
  const {
    searchQuery,
    searchResults,
    tagsSearchAndCategory,
    isSendingRequest,
    searchOffsetValue,
    setSearchOffsetValue,
  } = useContext(AppContext);

  // params
  const { tag } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    tagsSearchAndCategory(tag);
  }, [searchOffsetValue]);

  // const searchKeys = ["category", "header", "author"];

  // console.log(news[0]["categories"]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={classes.container}>
      {tag && (
        <div className={classes.header}>
          Search results for{" "}
          <span className={classes.searchText}>{tag.split(":")[1]}</span>
        </div>
      )}
      {isSendingRequest && searchResults.length < 1 ? (
        <div className={classes.loading}>
          <CircularProgress
            color="inherit"
            size="1rem"
            style={{ color: "#001a43" }}
          />
        </div>
      ) : !isSendingRequest && searchResults.length < 1 ? (
        <div className={classes.readMore}>No content found</div>
      ) : (
        <>
          <div className={classes.searchResultContainer}>
            {searchResults?.map((data) => {
              return (
                <div
                  className={classes.searchResult}
                  key={data.uri}
                  onClick={() => {
                    navigate(`/home/${data.uri}`);
                  }}
                >
                  <div className={classes.imageSection}>
                    <img
                      src={
                        data?.associations?.featureimage?.renditions?.["4x3"]
                          .href
                      }
                      alt={`${data?.headline}`}
                    />
                  </div>
                  <div className={classes.textSection}>
                    <div>{data?.subject[1].name}</div>
                    <div>{data?.headline}</div>
                    <div>{data?.description_text}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className={classes.readMore}
            onClick={() => {
              setSearchOffsetValue((prevState) => prevState + 10);
            }}
          >
            Read more
          </div>
        </>
      )}
    </div>
  );
};

export default SearchResults;
