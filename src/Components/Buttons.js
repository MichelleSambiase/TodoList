import { makeStyles, Button, Typography } from "@material-ui/core/";

import React from "react";

const Buttons = (props) => {
  const useStyles = makeStyles(theme => ({

    buttons: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "20px",
      [theme.breakpoints.down('sm')]: {
        width: "100%",
      },

    },
    buttonStyle: {
      margin: "3px",
      background: "#b2bcc5",
      borderRadius: '150px',
      fontFamily: "system-ui",
      [theme.breakpoints.down('sm')]: {
        fontSize: "12px",
        fontWeight: '600',
      }
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <div data-cy='buttons' className={classes.buttons}>
        <Button
          onClick={props.handleClickPermiso}
          className={classes.buttonStyle}
          data-cy='activateButton'

        >
          <Typography variant="p"> Activar</Typography>
        </Button>
        <Button
          type="submit"
          onClick={props.handleClickTodo}
          className={classes.buttonStyle}
          data-cy='addButton'

        >
          <Typography variant="p"> Agregar</Typography>
        </Button>
        <Button
          onClick={props.handleClickOrdenarItem}
          className={classes.buttonStyle}
          data-cy='orderButton'

        >
          <Typography variant="p"> Ordenar </Typography>
        </Button>
        <Button
          onClick={props.handleClickEliminarTodo}
          className={classes.buttonStyle}
          data-cy='deleteButton'

        >
          <Typography variant="p">Eliminar</Typography>
        </Button>
      </div>
    </div>
  );
};

export default Buttons;
