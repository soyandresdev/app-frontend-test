import React from "react";
import Home from "./IconComponets/Home";
import User from "./IconComponets/User";
import AddUser from "./IconComponets/AddUser";
import Graph from "./IconComponets/Graph";

export default function Icons({ type }) {
  return (
    <>
      {{
        home: <Home />,
        user: <User />,
        addUser: <AddUser />,
        graph: <Graph />
      }[`${type}`] || <div />}
    </>
  );
}
