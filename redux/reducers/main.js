// Here we can import multiple reducers and create a single combined reducer

import { combineReducers } from "redux";
import { cartReducer } from "./reducer";

const rootReducer = combineReducers({
  cartReducer,
});

export default rootReducer;
