import React from "react";

const Home = React.lazy(() => import("../component/Home"));
const BasicDrag = React.lazy(() => import("../component/BasicDrag"));
const DragAndBack = React.lazy(() => import("../component/DragAndBack"));

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
  {
    title: "Drag and Back",
    path: "basic-and-back",
    component: DragAndBack,
  },
];
