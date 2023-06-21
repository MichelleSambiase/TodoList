import { makeStyles, Input } from "@material-ui/core";
import React from "react";

const CustomInput = (props) => {
  const useStyles = makeStyles({
    inputTodo: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "50px",
    },
  });
  const classes = useStyles();
  return (
    <div>
      <div className={classes.inputTodo}>
        {" "}
        <Input
          type="text"
          placeholder="¡Anota tus tareas!"
          onChange={props.onChange}
          value={props.value}
          onKeyPress={(e) => props.onKeyPress(e)}
        />
      </div>
    </div>
  );
};

export default CustomInput;
