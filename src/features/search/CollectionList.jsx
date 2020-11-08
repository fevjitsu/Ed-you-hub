import React from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { useHistory } from "react-router-dom";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import InfoIcon from "@material-ui/icons/Info";
import styles from "./Search.module.css";
import { useDispatch } from "react-redux";
import { setSelected, selectResults } from "./searchSlice";
export default function CollectionList({ collection, resultPath }) {
  let history = useHistory();
  let dispatch = useDispatch();
  let results = useSelector(selectResults);

  const hasResults = (collection) => {
    if (collection[0]) {
      if (collection[0].title) {
        return true;
      } else {
        return false;
      }
    }
  };

  if (window.screen.width > 601) {
    return (
      <div className={styles.root}>
        {hasResults(results) ? (
          <div>
            <GridList cellHeight={300} className={styles.gridList}>
              {_.map(results, (item, key) => (
                <GridListTile
                  key={key}
                  onClick={() => {
                    dispatch(setSelected(item));
                    history.push(`${resultPath}/${key}`);
                  }}
                >
                  <img src={`${item.image}`} alt={item.title} />
                  <GridListTileBar
                    title={item.title}
                    subtitle={<span>by: {item.author}</span>}
                    actionIcon={
                      <IconButton
                        aria-label={`info about ${item.title}`}
                        className={styles.icon}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
        ) : (
          <div>No results ...</div>
        )}
      </div>
    );
  } else {
    return (
      <div className={styles.root}>
        {hasResults(results) ? (
          <List>
            {_.map(results, (item, key) => (
              <ListItem
                key={key}
                alignItems="flex-start"
                onClick={() => {
                  history.push(`${resultPath}/${key}`);
                  dispatch(setSelected(item));
                }}
              >
                <ListItemAvatar>
                  <Avatar alt={item.title} src={`${item.image}`} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.title}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={styles.inline}
                        color="textPrimary"
                      >
                        {item.quickParagraph}
                      </Typography>
                      <Typography
                        component="span"
                        variant="body2"
                        className={styles.inline}
                        color="textPrimary"
                      >
                        {item.author}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <div>no Results</div>
        )}
      </div>
    );
  }
}
