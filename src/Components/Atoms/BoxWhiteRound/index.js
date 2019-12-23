import React from "react";
import PropTypes from "prop-types";

import { BoxWhiteRound as BoxWhiteRoundStyles } from "./stylesBoxWhiteRound.js";

export default function BoxWhiteRound({ children }) {
  return <BoxWhiteRoundStyles>{children}</BoxWhiteRoundStyles>;
}

BoxWhiteRound.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]).isRequired
};
