import { useState } from "react";
import "../Todo list app/todo.css"

const Todo = () => {
    const [value, setValue] = useState("");
    const [task, setTask] = useState([]);
   
    let handleSubmit = (e) => {
      e.preventDefault();
      setTask([...task,value]);
      setValue("");
    };
    let deleHandler = (i) => {
      let copyTask = [...task]
      copyTask.splice(i,1)
      setTask(copyTask)
    };
    let deleteAllHandler = ()=>{
      setTask([])
    }
    let renderTask = <h4>No Task Available</h4>;
  
    if (task.length > 0) {
      renderTask = task.map((t, i) => {
        return (
          <li>
            <div>
              <h5>{t}</h5>
            </div>
            <button
              onClick={() => {
                deleHandler(i);
              }}
            >
              Delete
            </button>
          </li>
        );
      });
    }
  
    return (
      <>
        <div className="app">
          <h1 id="add">Todo List App</h1>
          <br />
          <form>
            <input
              type="text"
              placeholder="Input Task Here"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <br />
            <button onClick={handleSubmit}>Add</button>
          </form>
          <hr />
          <div>
            <ul>{renderTask}</ul>
          </div>
          <button onClick={deleteAllHandler}>Delete All</button>
        </div>
      </>
    );
  };

  export default Todo