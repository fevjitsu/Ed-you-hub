import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { styled } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

export default function RecipeReviewCard({
  title = "Page title needed",
  subTitle,
  image = "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fno-image.jpg?alt=media&token=c0c48b13-bbc5-4d7d-a563-26818e564ee8",
  paragraphs,
  redirects,
  author = "author needed",
  category = "category needed",
  notes,
  handleClick,
  buttonColor,
  alink,
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
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
  }));

  const classes = useStyles();
  const DisplayButton = () => {
    return <PrimaryButton onClick={handleClick}>{title}</PrimaryButton>;
  };
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="card-item"
            style={{ backgroundColor: `${buttonColor}` }}
          >
            {title.charAt(0)}
          </Avatar>
        }
        title={title}
        subheader={subTitle}
      />
      <CardMedia
        className={classes.media}
        image={`${image}`}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {paragraphs[0]}
        </Typography>
      </CardContent>
      {alink ? (
        <a href={alink}>
          <CardActions disableSpacing>{DisplayButton()}</CardActions>
        </a>
      ) : (
        <CardActions disableSpacing>{DisplayButton()}</CardActions>
      )}
    </Card>
  );
}
