import React from "react";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { makeStyles, Card, ListItem, IconButton } from "@material-ui/core";

const List = (props) => {
  const useStyles = makeStyles(theme => ({
    styleUL: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginBottom: '20px'
    },
    listContainer: {
      height: "300px",
      overflow: 'auto',
      width: "50%",
      overflowX: "hidden",
      boxShadow: "0px 0px 10px 0px #b59696",
      [theme.breakpoints.down('sm')]: {
        width: "60%"
      },
      [theme.breakpoints.up('md')]: {
        width: '80%',
      },
    },
    list: {
      width: '100%',
      borderRadius: "10px",
      padding: 0,
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      fontFamily: "Sacramento , cursive",
      fontSize: '35px'
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

  }));
  const classes = useStyles();

  function randomId() {
    const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
    return uint32.toString(16);
  }

  return (
    <div className={classes.styleUL}>
      <div data-cy='listBox' className={classes.listContainer}>
        <ul className={classes.list}>
          {props.lista.map((item, index) => {
            return (
              < Card key={randomId()} className={classes.listItemStyle} button variant="outlined" >
                <ListItem
                  onClick={() => props.handleClickEliminarTodoItem(index)}
                  className={classes.buttonDelete}
                >
                  {" "}
                  {item}
                  <IconButton className={classes.iconButton}>
                    <HighlightOffIcon />
                  </IconButton>{" "}
                </ListItem>
              </Card>
            )
          }
          )}
        </ul>
      </div>
    </div>
  );
};


export default List;


