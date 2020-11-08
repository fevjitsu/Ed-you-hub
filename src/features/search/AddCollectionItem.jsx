import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import {
  Container,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";
import _ from "lodash";
export default function Add() {
  let [textInputs, setTextInputs] = useState([
    {
      id: "myInput2",
      helperText: "tip text 2",
      label: "placeholder 2",
      type: "text",
    },
  ]);
  let [image, setImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fno-image.jpg?alt=media&token=c0c48b13-bbc5-4d7d-a563-26818e564ee8"
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  const handleAddInput = () => {
    console.log("text inputs", textInputs);
    textInputs.push({
      id: "myInput2",
      helperText: "tip text 2",
      label: "placeholder 2",
      type: "text",
    });
  };
  useEffect(() => {
    console.log(textInputs);
  }, [textInputs]);
  return (
    <Container>
      <h3>Add your content!</h3>
      <Form onSubmit={handleSubmit}>
        <Grid container direction="column">
          {_.map(textInputs, (item, key) => {
            return (
              <Grid key={key} item>
                <FormControl>
                  <InputLabel htmlFor="my-input">{item.label}</InputLabel>
                  {item.hasRows ? (
                    <Input
                      multiline={true}
                      rows={item.hasRows.rows}
                      id={item.id}
                      aria-describedby="my-helper-text"
                    />
                  ) : (
                    <Input id={item.id} aria-describedby="my-helper-text" />
                  )}

                  <FormHelperText id="my-helper-text">
                    {item.helperText}
                  </FormHelperText>
                </FormControl>
                <Button
                  color={"primary"}
                  variant={"contained"}
                  onClick={handleAddInput}
                >
                  Add another input
                </Button>
              </Grid>
            );
          })}
        </Grid>

        <Button type={"submit"} variant={"contained"} color={"primary"}>
          Add Module
        </Button>
      </Form>
    </Container>
  );
}
