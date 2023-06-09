import Detail from "./Routes/Detail";
import Home from "./Routes/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route></Route>
      </Switch>
    </Router>
  );
}

export default App;
