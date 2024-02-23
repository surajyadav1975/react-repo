import styles from "./apptodo.module.css";
import { useState } from "react";

function AddTodo({ onnewclick }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handlechangename = (event) => {
    setTodoName(event.target.value);
  };
  const handlechangedate = (event) => {
    setDueDate(event.target.value);
  };
  const handleclick = () => {
    onnewclick(todoName,dueDate);
    setTodoName("");
    setDueDate("");
  };
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            className={styles.name1}
            value={todoName}
            onChange={handlechangename}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className={styles.date1}
            value={dueDate}
            onChange={handlechangedate}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className={`btn btn-success ${styles.sybutton}`}
            onClick={handleclick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
