import { combineReducers } from "redux";

import LoginReducer from "./loginReducer";

const RootReducer = combineReducers({
  
  login: LoginReducer,
});

export default RootReducer;