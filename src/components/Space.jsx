import React from "react";
import PropTypes from "prop-types";

const Space = (props) => {
  const { height, unit } = props;
  return <div style={{ height: `${height}${unit}` }} />;
};

Space.defaultProps = {
  unit: "px",
};

Space.propTypes = {
  height: PropTypes.number.isRequired,
  unit: PropTypes.string,
};

export default Space;
