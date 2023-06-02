// import { useState, useEffect } from "react";
import { useState, useEffect } from "react";

// const Hello = () => {
//   useEffect(() => {
//     console.log("im here");
//   }, []);
//   return <h1>Hello</h1>;
// };

function App() {
  // const [count, setCount] = useState(0);
  // const [keyword, setKeyword] = useState("");
  // const onClickHandler = () => setCount((prev) => prev + 1);
  // const onChangeHandler = (event) => setKeyword(event.target.value);
  // console.log("i run every time");
  // useEffect(() => {
  //   console.log("Call the API");
  // }, []);
  // useEffect(() => {
  //   if (keyword !== "" && keyword.length > 5) {
  //     console.log("Search for", keyword);
  //   }
  // }, [keyword]);
  // return (
  //   <div>
  //     <input
  //       type="text"
  //       value={keyword}
  //       onChange={onChangeHandler}
  //       placeholder="Search Here"
  //     />
  //     <h1>{count}</h1>
  //     <button onClick={onClickHandler}>Click</button>
  //   </div>
  // );

  // const [showing, setShowing] = useState(false);
  // const onClick = () => setShowing((prev) => !prev);
  // return (
  //   <div>
  //     {showing ? <Hello /> : null}
  //     <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
  //   </div>
  // );
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
      {/* {toDos.map()} */}
    </div>
  );
}

export default App;
