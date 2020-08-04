import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input } from "semantic-ui-react";
import MetadataOption from "./MetadataOption";

const MetadataDrawer = (props) => {
  const [search, setSearch] = useState("");

  return (
    <div
      style={{
        width: "450px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Input
        style={{ width: "100%" }}
        value={search}
        onChange={(el) => setSearch(el.target.value)}
      />
      <div
        style={{
          overflowY: "scroll",
          padding: "20px",
          flex: 1,
        }}
      >
        {props.options
          .filter((el) => el.title.toLowerCase().includes(search.toLowerCase()))
          .map((el) => {
            return <MetadataOption key={el.title} option={el} />;
          })}
      </div>
    </div>
  );
};

MetadataDrawer.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      classes: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

export default MetadataDrawer;
