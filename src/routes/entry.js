import React from "react";
import Home from "../component/Home";
// const Home = React.lazy(() => import("../component/Home"));

export const entry = [
  {
    title: "Home Page",
    path: "", // home screen path will be -> "/"
    component: Home,
  },
];
