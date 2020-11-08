import React from "react";
import { styled } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
export default function CustomButton({
  title,
  handleClick,
  buttonColor = "#F7F765",
  textColor = "white",
  boxShadow = "rgba (234, 232, 232, 1.00)",
}) {
  const PrimaryButton = styled(Button)({
    background: `${buttonColor}`,
    border: 0,
    borderRadius: 3,
    boxShadow: `0 3px 5px 2px ${boxShadow}`,
    color: `${textColor}`,
    height: 48,
    padding: "0 30px",
  });
  return <PrimaryButton onClick={handleClick}>{title}</PrimaryButton>;
}
