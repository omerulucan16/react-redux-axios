# Getting Started with React Redux with Axios

npm install react-redux redux redux-thunk axios 
# install these npm's



import { Provider } from "react-redux";
import reducer from "./Reducers/index";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";

const store = createStore(reducer, applyMiddleware(thunk));

for App's first Page we should have to import these lib's
