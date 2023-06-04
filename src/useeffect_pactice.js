import { useState, useEffect } from "react";

// const Hello = () => {
//   useEffect(() => {
//     console.log("im here");
//   }, []);
//   return <h1>Hello</h1>;
// };

function UseEffectPractice() {
    const [count, setCount] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClickHandler = () => setCount((prev) => prev + 1);
    const onChangeHandler = (event) => setKeyword(event.target.value);
    console.log("i run every time");
    useEffect(() => {
      console.log("Call the API");
    }, []);
    useEffect(() => {
      if (keyword !== "" && keyword.length > 5) {
        console.log("Search for", keyword);
      }
    }, [keyword]);
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
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    return (
      <div>
        {showing ? <Hello /> : null}
        <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      </div>
    );
  }

  export default UseEffectPractice;