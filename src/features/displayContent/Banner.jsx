import React from "react";
import { Grid, Button } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import styles from "./Display.module.css";
export default function Banner({
  isNotice = false,
  title,
  subTitle,
  imageHeight,
  image,
  buttonTitle = "Click me",
  buttonColor,
  handleClick,
  bannerHeight,
  fontColor,
  backgroundColor,
  spacing,
  direction,
  justify,
  alignItems,
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
  const HasButton = () => {
    if (handleClick)
      return <PrimaryButton onClick={handleClick}>{buttonTitle}</PrimaryButton>;
  };

  if (!isNotice) {
    if (image) {
      return (
        <div
          style={{
            backgroundImage: `url("${image}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            height: `${imageHeight}px`,
            color: `${fontColor}`,
          }}
        >
          {title ? (
            <Grid
              container
              direction={direction}
              justify={justify}
              alignItems={alignItems}
              style={{ padding: `${spacing}px` }}
            >
              <Grid item className={styles.bannerTitle}>
                {title}
              </Grid>
              {subTitle ? (
                <Grid item className={styles.bannerSubTitle}>
                  {subTitle}
                </Grid>
              ) : null}
              {HasButton()}
            </Grid>
          ) : null}
        </div>
      );
    } else
      return (
        <div
          style={{
            backgroundColor: `${backgroundColor}`,
            height: `${bannerHeight}px`,
            color: `${fontColor}`,
          }}
        >
          {title ? (
            <div className={styles.bannerContents}>
              <div className={styles.bannerTitle}>{title}</div>
              {subTitle ? (
                <div className={styles.bannerSubTitle}>{subTitle}</div>
              ) : null}
              {HasButton()}
            </div>
          ) : (
            <div className={styles.bannerContents}>{HasButton()}</div>
          )}
        </div>
      );
  } else {
    return (
      <div className={"notice"} onClick={handleClick}>
        {title}
      </div>
    );
  }
}
