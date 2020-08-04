import React, { useState } from "react";
import { Grid, Input } from "semantic-ui-react";
import MetadataOption from "./MetadataOption";

export default function (props) {
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
            return <MetadataOption option={el} />;
          })}
      </div>
    </div>
  );
}
