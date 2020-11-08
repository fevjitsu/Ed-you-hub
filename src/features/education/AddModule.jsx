import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "@material-ui/core";
import _ from "lodash";
import Dropzone from "react-dropzone";
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper,
} from "@material-ui/core";
export default class AddModule extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.NewLesson = this.NewLesson.bind(this);
    this.handleShowLessons = this.handleShowLessons.bind(this);
    this.handleLessonTitle = this.handleLessonTitle.bind(this);
    this.handleLessonContent = this.handleLessonContent.bind(this);
    this.state = {
      title: "",
      subTitle: "",
      author: "",
      category: "",
      image: "",
      paragraphs: [],
      notes: [],
      lessons: [],
      viewLesson: false,
      lessonTitle: "",
      lessonContent: [],
      disableLesson: false,
    };
  }

  //   changeHandler = event => {

  //     const name = event.target.name;
  //     const value = event.target.value;

  //     this.setState({
  // formControls: {
  //   [name]: value
  // }
  //     });
  //   Handle multiple inputs on form
  // }
  //   buttonColors:["#FF8000","FFCF75"],

  handleAdd() {
    this.setState(() => {
      if (this.state.lessonTitle.trim()) {
        return this.state.lessons.push({
          lessonTitle: this.state.lessonTitle,
          lessonContent: this.state.lessonContent,
        });
      }
    });
    this.setState({
      disableLesson: true,
    });

    alert("saved");
  }
  handleLessonTitle(e) {
    if (e.target.value.trim()) {
      this.setState({ lessonTitle: e.target.value.trim() });
    }
  }
  handleLessonContent(e) {
    let lessonContent = e.target.value.trim();
    if (lessonContent) {
      lessonContent = lessonContent.split("\n");
      this.setState({ lessonContent });
    }
  }
  NewLesson() {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          {" "}
          <Form.Control
            id={"lessonTitle"}
            type="text"
            placeholder="Lesson title"
            onChange={this.handleLessonTitle}
          ></Form.Control>
        </Grid>
        <Grid item>
          <Form.Control
            id={"lessonContent"}
            onChange={this.handleLessonContent}
            as="textarea"
            placeholder={`1)Veniam non mollit dolor anim cillum ad ipsum officia fugiat consectetur officia ea culpa duis.\n2)Ut et nulla non ut consequat aliqua tempor enim.`}
            rows={8}
          ></Form.Control>
        </Grid>
        <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
          <Button
            color="secondary"
            variant={"contained"}
            onClick={this.handleAdd}
          >
            Save Lesson
          </Button>
        </Grid>
      </Grid>
    );
  }

  handleShowLessons() {
    this.setState({
      viewLesson: true,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert("submitted");
  }
  componentWillUpdate() {
    // title,
    // subTitle,
    // author,
    // category,
    // image,
    // paragraphs,
    // notes,
    // handleClick,
    // buttonColors,
    // buttonTitle,
    // buttonFontColor,
    console.log(this.state);
  }
  render() {
    return (
      <React.Fragment>
        <Form onSubmit={this.handleAdd}>
          <Grid container>
            <Grid item>
              <Form.Group>
                <Form.Control
                  id={"title"}
                  type="text"
                  placeholder="Module title"
                  onChange={this.handleLessonTitle}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  id={"subTitle"}
                  type="text"
                  placeholder="Module sub title"
                  onChange={this.handleLessonTitle}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="categody">
                <Form.Control as="select">
                  <option>Select category</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="image">
                <Dropzone
                  onDrop={(acceptedFiles) =>
                    this.setState({ image: acceptedFiles })
                  }
                >
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <div>
                          <span>
                            drop images here
                            <br />
                            or
                            <br />
                            click to select image
                          </span>
                        </div>
                      </div>
                    </section>
                  )}
                </Dropzone>

                {this.state.image ? <div>File uploaded!</div> : null}
              </Form.Group>
              <Form.Group>
                <Form.Control
                  id={"paragraphs"}
                  as="textarea"
                  placeholder="Module description"
                  onChange={this.handleLessonTitle}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  id={"notes"}
                  as="textarea"
                  placeholder="Module notes"
                  onChange={this.handleLessonTitle}
                ></Form.Control>
              </Form.Group>
            </Grid>
          </Grid>
          <Button
            variant={"contained"}
            color={"secondary"}
            onClick={this.handleShowLessons}
          >
            Lessons
          </Button>
          {this.state.viewLesson ? (
            <Grid
              container
              direction={"row"}
              justify={"center"}
              alignItems={"center"}
            >
              <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                {this.NewLesson()}
              </Grid>
            </Grid>
          ) : null}
        </Form>
      </React.Fragment>
    );
  }
}
