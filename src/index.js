import React from "react";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// let rerenderEntireTree = (store) => {
// debugger;
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App
        // state={state}
        // dispatch={store.dispatch.bind(store)}
        // addMessage={store.addMessage.bind(store)}
        // newPostTextChange={store.newPostTextChange.bind(store)}
        // messageTextChange={store.messageTextChange.bind(store)}
        store={store}
      />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
// };

// rerenderEntireTree(store);

// store.subscribe(() => {
//   rerenderEntireTree(store);
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
