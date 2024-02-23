import AppName from "./components/AppName";
import AddTodo from "./components/AppTodo";
import TodoItem from "./components/TodoItem";
import Container from "./components/Container";;
import "./App.css";
import { useState } from "react";

function App() {
  const todoItemsinitial = [
    {
      name: "Tea",
      dueDate: "2023-10-04",
    },
    {
      name: "Milk",
      dueDate: "2020-10-03",
    },
  ];

  let [todoItems,settodoItems]=useState(todoItemsinitial);

  const onhandleclick=(itemname,itemdate)=>{
    let newtodoitems=[...todoItems,{ name: itemname, dueDate: itemdate },];
    settodoItems(newtodoitems);
  }

  const deletekey=(duename)=>{
    let newtodoitems=todoItems.filter((item) => item.name != duename);
    settodoItems(newtodoitems);
  }

  return (
    <center className="position-absolute top-50 start-50 translate-middle">
    <Container>
    <center className="todo-container">
      <AppName />
      <AddTodo onnewclick={onhandleclick}/>
      <TodoItem todoItems={todoItems} handleclickdelete={deletekey}></TodoItem>
    </center>
    </Container>
    </center>
  );
}

export default App;