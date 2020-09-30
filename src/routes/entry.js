import React from "react";
import Home from "../component/Home";

const BasicDrag = React.lazy(() => import("../component/BasicDrag"));

export const entry = [
  {
    title: "Home Page",
    path: "", // home screen path will be -> "/"
    component: Home,
  },
  {
    title: "Basic Drag",
    path: "basic-drag",
    component: BasicDrag,
  },
];
