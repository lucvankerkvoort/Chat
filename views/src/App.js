import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import "./App.css";
import "./bootstrap.min.css";

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Route exact path="/" render={(props) => <Chat {...props} />} />
      </HashRouter>
    </div>
  );
};

export default App;
