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
import Login from "./components/login";
import Users from "./components/users";
import Book from "./components/books";
import AddBook from "./components/addbook";
import UpdateBook from "./components/updatebook";
import Category from "./components/categories";
import AddCategory from "./components/addcategory";
import UpdateCategory from "./components/updatecategory";
import BookOrder from "./components/bookorders";
import AddBookOrder  from "./components/addbookorder";
import UpdateBookOrder from "./components/updatebookorder";
import OrderDetail from "./components/orderdetails";
import AddOrderDetail  from "./components/addorderdetail";
import UpdateOrderDetail from "./components/updateorderdetail";
import Logout from "./components/logout";
import AddUser from "./components/adduser";

function App() {
  return (
    // JSX syntax
    <div className="App">
      <Nav />
      
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/users" component={Users}/>
        <Route path="/books" component={Book} />
      <Route path="/addbook" component={AddBook} />
      <Route path="/update/:bookId" component={UpdateBook} />
      <Route path="/categories" component={Category} />
      <Route path="/addcategory" component={AddCategory} />
      <Route path="/update/:categoryId" component={UpdateCategory} />
      <Route path="/bookorders" component={BookOrder} />
      <Route path="/addbookorder" component={AddBookOrder} />
      <Route path="/update/:orderId" component={UpdateBookOrder} />
      <Route path="/orderdetails" component={OrderDetail} />
      <Route path="/addorderdetail" component={AddOrderDetail} />
      <Route path="/update/:quantity" component={UpdateOrderDetail} />
      <Route path="/logout" component={Logout} />
      <Route path="/adduser" component={AddUser} />
        </Switch>
    </div>
  );
  
}
export default App;
