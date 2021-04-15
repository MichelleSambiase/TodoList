import React, { useState } from "react";

import { makeStyles, Container, Card } from "@material-ui/core";

import List from "./Components/List";
import Buttons from "./Components/Buttons";
import CustomInput from "./Components/CustomInput";

function App() {
  const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      height: "100vh",
      display: "flex",
      alignItems: "center",
    },
    cardTitle: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "center",
      display: "flex",
    },
    title: {
      width: "30%",
      display: "flex",
      justifyContent: "center",
      alignItems: " center",
      marginBottom: "150px",
      borderRadius: "5px",
      fontSize: "30px",
      color: "lightslategrey",
      boxShadow: "0px 0px 15px 0px #ddc6c6",
      [theme.breakpoints.down('sm')]: {
        width:"50%",
        fontSize:"18px",
        marginTop:'100px',
      },
      [theme.breakpoints.up('md')]:{
        width: '50%',
        marginTop: "150px"
      }
    },
  }));

  const [todo, setTodo] = useState();
  const [mostrarTodo, setMostrarTodo] = useState([]);
  const [permiso, setPermiso] = useState(false);

  function onChange(e) {
    setTodo(e.target.value);
  }

  function handleClickTodo(e) {
    e.preventDefault();
    if (permiso === true) {
      setMostrarTodo(mostrarTodo.concat(todo));
    }
  }

  function handleClickEliminarTodo() {
    setMostrarTodo([]);
  }

  function handleClickEliminarTodoItem(indice) {
    if (permiso === true) {
      setMostrarTodo(
        mostrarTodo.filter((_elemento, index) => indice !== index)
      );
    }
  }

  function handleClickPermiso() {
    //setPermiso(!permiso)
    if (permiso === false) {
      setPermiso(true);
    } else {
      setPermiso(false);
    }
  }

  const handleClickOrdenarItem = () => {
    //copiamos el array 'mostrarTodo'
    let arreglo = [...mostrarTodo];
    // le seteamos el nuevo array "arreglo" y lo ordenamos con el metodo .sort()
    setMostrarTodo(arreglo.sort());
  };
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Container>
          <div className={classes.cardTitle}>
            <Card className={classes.title}>
              <h1>TO DO LIST</h1>
            </Card>
          </div>

          <CustomInput onChange={onChange}/>

          <Buttons
            handleClickPermiso={handleClickPermiso}
            handleClickTodo={handleClickTodo}
            handleClickOrdenarItem={handleClickOrdenarItem}
            handleClickEliminarTodo={handleClickEliminarTodo}
          />
          <List
            lista={mostrarTodo}
            handleClickEliminarTodoItem={handleClickEliminarTodoItem}
          />
        </Container>
      </div>
    </div>
  );
}

export default App;
