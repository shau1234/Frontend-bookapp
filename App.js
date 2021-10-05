/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import "./App.css";
import Register from "./components/register";
import Nav from "./components/nav";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import UserLogin from "./components/userlogin";

function App() {
  return (
    // JSX syntax
    <div className="App">
      <Nav />
      
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/userlogin" component={UserLogin} />
        </Switch>
    </div>
  );
  
}
export default App;
