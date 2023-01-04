import React from "react";
import { Skeleton } from "@mui/material";

const SearchAddContainer = () => {
  return (
    <div>
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={131}
        style={{
          background: "#E5E8EC",
        }}
      />
    </div>
  );
};

export default SearchAddContainer;
