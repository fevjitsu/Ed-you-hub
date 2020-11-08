import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Grid, Button, Box, Paper } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import styles from "./Display.module.css";
import Image from "react-bootstrap/Image";
import { useHistory, useParams } from "react-router-dom";
import CustomButton from "./CustomButton";
import { ArrowBackIos as ArrowBackIosIcon } from "@material-ui/icons";
import { selectSelectedResult } from "../search/searchSlice";
import _ from "lodash";
export default function PageContent({
  title,
  subTitle,
  author,
  category,
  image,
  paragraphs,
  notes,
  handleClick,
  buttonColors,
  buttonTitle,
  buttonFontColor,
}) {
  const PrimaryButton = styled(Button)({
    background: `${buttonColors[0]}`,
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba (234, 232, 232, 1.00)",
    color: `${buttonFontColor}`,
    height: 48,
    padding: "0 30px",
  });

  let history = useHistory();
  return (
    <Container>
      <Grid container>
        <Grid item className={"display-4"}>
          {title} {subTitle ? <em>-&nbsp;{subTitle}</em> : null}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <PrimaryButton onClick={handleClick}>{buttonTitle}</PrimaryButton>
        </Grid>
        <Grid item>{paragraphs[0]}</Grid>
        <Grid item>
          <Image src={image} alt={title} fluid />
        </Grid>
      </Grid>
    </Container>
  );
}
