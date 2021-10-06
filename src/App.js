import "./App.css";
import { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@mui/material";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  //state for todos
  const [todos, setTodos] = useState([]);

  //state for form input
  const [input, setInput] = useState("");

  // when app loads, we listen to the database and fetch new todos as they get added/ removed
  useEffect(() => {
    //this code fires when the app.js loads
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        console.log(snapshot.docs);
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  //adds new todo to setTodo state when button is clicked
  const addTodo = (event) => {
    //prevents refreshing of page which would refresh the state
    event.preventDefault();

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    //sets the input to an empty string
    setInput("");
  };

  return (
    <div className="App">
      <h1>Firebase Todo App</h1>

      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          ></Input>
        </FormControl>
        <Button
          disabled={!input}
          variant="contained"
          type="submit"
          color="primary"
          onClick={addTodo}
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
