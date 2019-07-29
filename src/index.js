import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import getDataReducer from "./store/reducers/getData";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./containers/App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
const rootReducer = combineReducers({
  apiDataResponse: getDataReducer
});
const logger = store => {
  return next => {
    return action => {
      console.log("[middleware] Dispatching", action);
      const result = next(action);
      console.log("[middleware] next state", store.getState());
      return result;
    };
  };
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
