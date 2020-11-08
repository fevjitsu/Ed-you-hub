import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PageContent from "../displayContent/PageContent";
import { selectSelectedResult } from "../search/searchSlice";
export default function Faq() {
  let selected = useSelector(selectSelectedResult);
  useEffect(() => {
    console.log(selected);
  }, []);
  return <PageContent {...selected} />;
}
