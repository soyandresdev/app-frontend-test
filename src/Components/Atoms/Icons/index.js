import React from "react";
import PropTypes from "prop-types";

import Home from "./IconComponets/Home";
import User from "./IconComponets/User";
import AddUser from "./IconComponets/AddUser";
import Graph from "./IconComponets/Graph";
import Logout from "./IconComponets/Logout";
import Setting from "./IconComponets/Setting";
import Notification from "./IconComponets/Notification";

export default function Icons({ type, ...resProps }) {
  return (
    <>
      {{
        home: <Home {...resProps} />,
        user: <User {...resProps} />,
        addUser: <AddUser {...resProps} />,
        graph: <Graph {...resProps} />,
        logout: <Logout {...resProps} />,
        setting: <Setting {...resProps} />,
        notification: <Notification {...resProps} />
      }[`${type}`] || <div />}
    </>
  );
}

Icons.propTypes = {
  type: PropTypes.oneOf([
    "home",
    "user",
    "addUser",
    "graph",
    "logout",
    "setting",
    "notification"
  ]).isRequired
};
