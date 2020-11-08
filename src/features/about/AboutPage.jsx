import React from "react";
import Image from "react-bootstrap/Image";
import { Container, Grid, Paper } from "@material-ui/core";
import _ from "lodash";
import styles from "./About.module.css";
export default function AboutPage({
  title = "about title",
  image = "/css/img/no-image.jpg",
  paragraphs = ["para1", "para2"],
}) {
  return (
    <Container className={styles.root}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item className={styles.title}>
          {title}
        </Grid>
        <Grid item>
          <Image rounded className={styles.image} src={image} alt={title} />
        </Grid>
      </Grid>

      <div>
        {_.map(paragraphs, (paragraph, key) => {
          return (
            <Paper elevation={3} key={key} className={styles.paragraph}>
              {paragraph}
            </Paper>
          );
        })}
      </div>
    </Container>
  );
}
