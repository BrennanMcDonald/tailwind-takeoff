import React, { useState } from "react";
import PropTypes from "prop-types";
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
      <input
        placeholder="Search..."
        style={{ 
          width: "100%", 
          borderRadius: "0px",
          border: "solid 1px #e3e3e3",
          padding: "10px 5px"
        }}
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
          .filter((el) => {
            return (
              el.title.toLowerCase().includes(search.toLowerCase()) ||
              el.classes.filter(el => el.includes(search.toLowerCase())).length > 0
            );
          })
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
