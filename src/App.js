import React from "react";
import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <React.Suspense fallback={<h1>loading...</h1>}>
          {routes()}
        </React.Suspense>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
