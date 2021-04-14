import React from "react";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { makeStyles, Card, ListItem, IconButton } from "@material-ui/core";

const List = (props) => {
  const useStyles = makeStyles({
    styleUL: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    listContainer: {
      maxHeight: "300px",
      overflow:'auto',
      width: "50%",
      overflowX:"hidden",
    },
    list: {
      boxShadow: "0px 0px 10px 0px #b59696",
      width:'100%',
      height:'100%',
      borderRadius: "10px",
      padding: 0,
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      fontFamily: "Sacramento , cursive",
    },
    listItemStyle: {
      width: "100%",
    },
    buttonDelete: {
      display: " flex",
      justifyContent: "space-between",
      width: "100%",
    },
    iconButton: {
      color: "lightslategrey",
    },
  });
  const classes = useStyles();
  return (
    <div>
      <div className={classes.styleUL}>
        <div className={classes.listContainer}>
          <ul className={classes.list}>
            {props.lista.map((item, index) => (
              <Card className={classes.listItemStyle} button variant="outlined">
                <ListItem
                  onClick={() => props.handleClickEliminarTodoItem(index)}
                  className={classes.buttonDelete}
                  key={item}
                >
                  {" "}
                  {item}
                  <IconButton className={classes.iconButton}>
                    <HighlightOffIcon />
                  </IconButton>{" "}
                </ListItem>
              </Card>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default List;
