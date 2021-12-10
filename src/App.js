import Topbar from "./components/Topbar";
import logo from "./logo.svg";
import "./App.css";
import Register from "./components/login/Register"
import Input from "./components/login/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      
      <Switch>
        
        <Route path="/" exact component={Topbar} />
        <Route path="/login" exact component={Input} />
        <Route path="/Register" exact component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
