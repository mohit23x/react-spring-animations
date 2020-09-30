import React from "react";
import { Route } from "react-router-dom";
import { entry } from "./entry";

export const routes = () => {
  return entry.map((e) => (
    <Route
      key={`${e.path}`}
      exact
      path={`/${e.path}`}
      component={e.component}
    />
  ));
};
