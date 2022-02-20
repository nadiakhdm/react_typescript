import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import Reducers from "./Reducers";
const middlewares = [thunk];
export default createStore(
  Reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export type stateType = ReturnType<typeof Reducers>;
