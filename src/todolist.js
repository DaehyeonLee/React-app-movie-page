import { useState } from "react";


function ToDoList(){
const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChangeHandler = (event) => {
    setToDo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]);
    console.log(toDos);
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChangeHandler}
          value={toDo}
          type="text"
          placeholder="Write your to do"
        ></input>
        <button>Add To Do</button>
      </form>
      <hr />
      {toDos.map((item, index)=><li key={index}>{item}</li>)}
    </div>
  );
}

export default ToDoList;