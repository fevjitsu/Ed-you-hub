import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Search from "../search/Search";
import { selectSelectedResult, selectCollection } from "../search/searchSlice";
import _ from "lodash";

export default function GetCollectionItem() {
  let collection = useSelector(selectCollection);
  let selected = useSelector(selectSelectedResult);
  console.log(selected);
  return (
    <div>
      <Search
        placeHolder={"Title of module"}
        resultsPath={"/getResults"}
        collection={collection}
      />
      {selected.title}
    </div>
  );
}
