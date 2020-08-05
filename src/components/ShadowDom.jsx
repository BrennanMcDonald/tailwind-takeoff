import React from 'react';
import PropTypes from 'prop-types';
import css from "../tailwind.txt";
import root from "react-shadow";

const ShadowDom = (props) => {
  const { elementType, ref, classes, content } = props;
  return (
    <root.div style={{ height: "100%" }}>
      {
        React.createElement(
          elementType || 'div',
          {
            ref: ref,
            className: classes.map((el) => el.replace(".", "")).join(" ")
          },
          content
        )
      }
      <style type="text/css">{css}</style>
    </root.div>
  );
};

ShadowDom.propTypes = {
  elementType: PropTypes.string.isRequired,
  ref: PropTypes.object,
  classes: PropTypes.arrayOf(PropTypes.string).isRequired,
  content: PropTypes.string,
};

ShadowDom.defaultProps = {
  content: ""
};

export default ShadowDom;