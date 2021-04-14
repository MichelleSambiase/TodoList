import { makeStyles, Button } from "@material-ui/core";
import React from "react";

const Buttons = (props) => {
  const useStyles = makeStyles({
    buttons: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    buttonStyle: {
      margin: "20px",
      background: "#b2bcc5",
    },
  });
  const classes = useStyles();
  return (
    <div>
      <div className={classes.buttons}>
        <Button
          onClick={props.handleClickPermiso}
          className={classes.buttonStyle}
        >
          Activar Lista
        </Button>
        <Button
          type="submit"
          onClick={props.handleClickTodo}
          className={classes.buttonStyle}
        >
          Mostrar
        </Button>
        <Button
          onClick={props.handleClickOrdenarItem}
          className={classes.buttonStyle}
        >
          Ordenar
        </Button>
        <Button
          onClick={props.handleClickEliminarTodo}
          className={classes.buttonStyle}
        >
          Eliminar todo
        </Button>
      </div>
    </div>
  );
};

export default Buttons;
