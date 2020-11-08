import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import Form from "react-bootstrap/Form";
import Button from "@material-ui/core/Button";
import _ from "lodash";
import styles from "./Search.module.css";
import { styled } from "@material-ui/core/styles";
import {
  setSearchedItem,
  setResults,
  setSelected,
  setCollection,
} from "./searchSlice";
export default function Search({
  placeHolder = "Search",
  searchTitle = "",
  resultsPath,
  collection = [],
  buttonColor = "#31525B",
}) {
  const PrimaryButton = styled(Button)({
    background: `${buttonColor}`,
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba (234, 232, 232, 1.00)",
    color: "white",
    height: 48,
    padding: "0 30px",
  });
  const getResults = (searchedTerm, collectionItems) => {
    return _.filter(collectionItems, (item) => {
      return item.title.includes(searchedTerm);
    });
  };
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    if (collection) {
      if (collection.length > 0) {
        dispatch(setCollection(collection));
      }
    }
  }, [collection]);
  return (
    <Form
      inline
      onSubmit={(e) => {
        e.preventDefault();
        let searched = e.target.elements.search.value.trim();
        if (searched.length > 0) {
          dispatch(setSearchedItem(searched));
          let results = getResults(searched, collection);
          if (results) {
            dispatch(setResults(results));
            if (resultsPath) {
              history.push(`${resultsPath}`);
            }
          }
        }
      }}
    >
      <Form.Group>
        <PrimaryButton type={"submit"} variant="contained">
          <SearchIcon />
          {searchTitle}
        </PrimaryButton>

        <Form.Control
          id={"search"}
          name={"search"}
          type={"search"}
          placeholder={placeHolder}
          style={{ fontSize: "larger" }}
        />
      </Form.Group>
    </Form>
  );
}
