import React, { useEffect, useState } from "react";
import "./todo.css";
import "./active.css";

function PTodo() {
  const [allTodos, setAllTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);
  const [pincompleteTaskCount, setpIncompleteTaskCount] = useState(0);

  const handleAdd = () => {
    if (newTodo == "") {
      alert("Add some text");
    } else {
      let newTodoitem = { Todo: newTodo, status: false, id: Date.now() };

      let updatedAllTodos = [...allTodos];
      updatedAllTodos.push(newTodoitem);
      setAllTodos(updatedAllTodos);
      localStorage.setItem("ptodoList", JSON.stringify(updatedAllTodos)); //store array as string not as object
      setNewTodo("");
      setpIncompleteTaskCount((prevCount) => prevCount + 1);
    }
  };

  const handleDelete = (id, isCompleted) => {
    //let deletedCompletedTodo = completedTodos.filter((item) => item.id !== id);
    //setCompletedTodos(deletedCompletedTodo);
    if (isCompleted) {
      let deletedCompletedTodo = completedTodos.filter(
        (item) => item.id !== id
      );
      setCompletedTodos(deletedCompletedTodo);
      localStorage.setItem(
        "pcompletedList",
        JSON.stringify(deletedCompletedTodo)
      );
    } else {
      let deletedAllTodos = allTodos.filter((item) => item.id !== id);
      setAllTodos(deletedAllTodos);
      localStorage.setItem("ptodoList", JSON.stringify(deletedAllTodos));
      setpIncompleteTaskCount((prevCount) => prevCount - 1);
    }
  };

  const hanldeComplete = (index) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getSeconds();
    let s = now.getSeconds();
    let completedOn =
      dd + "-" + mm + "-" + yyyy + "  at  " + h + ":" + m + ":" + s;

    let filteredItem = {
      ...allTodos[index],
      completedOn: completedOn,
    };

    let updatedCompletedArry = [...completedTodos];
    updatedCompletedArry.push(filteredItem);
    setCompletedTodos(updatedCompletedArry);
    localStorage.setItem(
      "pcompletedList",
      JSON.stringify(updatedCompletedArry)
    );
  };

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem("ptodoList")); //convert to array
    let savedCompletedTodo = JSON.parse(localStorage.getItem("pcompletedList"));
    if (savedTodo) {
      setAllTodos(savedTodo);
    }
    if (savedCompletedTodo) {
      setCompletedTodos(savedCompletedTodo);
    }
  }, []);
  return (
    <div>
      <div className="headbox">
        <h2>My ToDo-List</h2>
        <h3>Personal </h3>
        <h4>no.of Tasks: {pincompleteTaskCount}</h4>
      </div>

      <div className="Todo">
        <div className="input">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="inputadd"
            placeholder="Add your text"
          />
          <button className="Addbutton" onClick={handleAdd}>
            Add
          </button>
        </div>
        <h3>Today's Tasks</h3>
        {allTodos.map((item, index) => {
          return (
            <div className="Todolist" key={index}>
              <input
                type="checkbox"
                checked={item.status}
                onChange={() => {
                  const updatedAllTodos = [...allTodos];
                  updatedAllTodos[index] = {
                    ...updatedAllTodos[index],
                    status: !item.status,
                  };
                  setAllTodos(updatedAllTodos);
                  hanldeComplete(index);
                }}
              />
              <h3>{item.Todo}</h3>
              <img
                src="./icon-delete.png"
                alt="cancel"
                onClick={() => {
                  const id = item.id;
                  handleDelete(id);
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="Taskbox">
        <span></span>
        <div className="completedtask">
          <h3>Completed Tasks</h3>
          <div>
            {completedTodos.map((item, index) =>
              item.status === false ? (
                <div key={index} className="completedtasklist">
                  <h4>
                    {" "}
                    {item.Todo}
                    <br></br>
                    Completed on: {item.completedOn}
                  </h4>
                  <img
                    src="./icon-delete.png"
                    alt="cancel"
                    onClick={() => {
                      const id = item.id;
                      handleDelete(id, true);
                    }}
                  />
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PTodo;
