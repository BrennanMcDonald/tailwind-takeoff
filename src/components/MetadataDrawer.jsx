import React, { useState } from "react";
import { Grid, Input } from "semantic-ui-react";
import MetadataOption from "./MetadataOption";

export default function (props) {
  const [search, setSearch] = useState("");

  return (
    <div
      style={{
        width: "450px",
        height: "100vh",
        overflowX: "scroll",
      }}
    >
      <div style={{ position: "absolute", top: "0px", width: "100%" }}>
        <div style={{ position: "fixed", width: "450px" }}>
          <Input
            style={{ width: "100%" }}
            value={search}
            onChange={(el) => setSearch(el.target.value)}
          />
        </div>
      </div>
      <Grid style={{ padding: "20px", marginTop: "35px" }}>
        {props.options
          .filter((el) => el.title.toLowerCase().includes(search.toLowerCase()))
          .map((el) => {
            return <MetadataOption option={el} />;
          })}
      </Grid>
    </div>
  );
}
