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
//redux persistant state
const saveToLocalStore = state => {
  try {
    const serializeState = JSON.stringify(state);
    localStorage.setItem("state", serializeState);
  } catch (e) {
    console.log(e);
  }
};
const loadFromLocalStore = () => {
  try {
    const serializeState = localStorage.getItem("state");
    if (serializeState === null) return undefined;
    return JSON.parse(serializeState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
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
//redux persistant state
const persistedState = loadFromLocalStore();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(logger, thunk))
);
//redux persistant state
store.subscribe(() => saveToLocalStore(store.getState()));
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
