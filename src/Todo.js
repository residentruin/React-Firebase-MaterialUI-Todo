import React from "react";
import { ListItemText, List, ListItem } from "@mui/material";
import db from "./firebase";
import DeleteIcon from "@material-ui/icons/Delete";
import "./App.css";

function Todo(props) {
  return (
    <>
      <List>
        <div className="list-item">
          <ListItem alignItems="center" style={{ width: "50vw" }}>
            <ListItemText
              primary={props.todo.todo}
              secondary="dummy due date"
            />
            <DeleteIcon
              onClick={(event) =>
                db.collection("todos").doc(props.todo.id).delete()
              }
            />
          </ListItem>
        </div>
      </List>
    </>
  );
}

export default Todo;
