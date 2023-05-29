// 
import { BrowserRouter, Route, Switch } from "react-router-dom";

// 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// 
import Login from "./Components/Login";
import Home from "./Components/Home";

// 
import { MainContextProvider } from "./context";

function App() {
  return (
    <MainContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </MainContextProvider>
  );
}

export default App;
