import logo from "./logo.svg";
import "./App.css";
import Navigation from "./partials/Navigation/Navigation";
import Header from "./partials/Header/Header";
import Profile from "./partials/Profile/Profile";
import MessagesContainer from "./partials/Messages/MessagesContainer";
import Settings from "./partials/Settings/Settings";
import Music from "./partials/Music/Music";
import News from "./partials/News/News";
import { Redirect, Route } from "react-router-dom";

function App(props) {
  // debugger;
  return (
    <div className="main-wrapper">
      <Header />
      <Navigation state={props.store.getState().navbar} />
      <div className="content">
        <Route
          path="/messages"
          render={() => (
            <MessagesContainer
              // state={props.store.getState().messages}
              // dispatch={props.store.dispatch}
              // store={props.store}
            />
          )}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile
              // state={props.state.profile}
              // dispatch={props.dispatch}
              store={props.store}
            />
          )}
        />

        <Route path="/settings" component={Settings} />
        <Route path="/music" component={Music} />
        <Route path="/news" component={News} />
      </div>
    </div>
  );
}

export default App;
