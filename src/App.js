import React, { useEffect, useState } from "react";

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
        width: "80%",
        fontSize: "18px",
        marginTop: '100px',
      },
      [theme.breakpoints.up('md')]: {
        width: '50%',
        marginTop: "150px"
      }
    },
  }));

  const [todo, setTodo] = useState('');
  const [mostrarTodo, setMostrarTodo] = useState([]);
  const [permiso, setPermiso] = useState(false);


  function onChange(e) {
    setTodo(e.target.value);
  }

  function handleClickTodo(e) {
    if (e) e.preventDefault();
    if (permiso === true) {
      setMostrarTodo(mostrarTodo.concat(todo))
      localStorage.setItem('TodoItems', JSON.stringify(mostrarTodo.concat(todo)))
    }
  }



  useEffect(() => {
    const handleEnterKey = (e) => {
      if (e.code === 'Enter') {
        handleClickTodo()
      }
    };

    document.addEventListener('keydown', handleEnterKey);

    return () => {
      // Eliminamos el event listener al desmontar el componente
      document.removeEventListener('keydown', handleEnterKey);
    }
  }, []);


  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("TodoItems"))
    if (storedItems) setMostrarTodo(mostrarTodo.concat(storedItems))
  }, []);


  function handleClickEliminarTodo() {
    setMostrarTodo([]);
    localStorage.removeItem('TodoItems')
  }

  function handleClickEliminarTodoItem(indice) {
    if (permiso === true) {
      setMostrarTodo(
        mostrarTodo.filter((_elemento, index) => indice !== index)
      );
    }
  }

  function handleClickPermiso() {
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
    <div className={classes.root}>
      <Container>
        <div data-cy='title' className={classes.cardTitle}>
          <Card className={classes.title}>
            <h1>TO DO LIST</h1>
          </Card>
        </div>

        <CustomInput onChange={onChange} />

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

  );
}

export default App;
