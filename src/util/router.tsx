import { Home } from "../pages/Home/home";
import React from "react";

export const RouterInfo : {path: string, element: React.JSX.Element, label: string}[] = [
  {
    path: "/",
    element: <Home />,
    label: "home",
  },
];
