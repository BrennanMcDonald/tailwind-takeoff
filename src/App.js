import React, { useState } from "react";
import { useSelector } from "react-redux";
import metadata from "./metadata.json";
import MetadataDrawer from "./components/MetadataDrawer";
import "semantic-ui-css/semantic.min.css";
import { Container, TextArea } from "semantic-ui-react";
import root from "react-shadow";
import css from "./tailwind.txt";

function App() {
  const classes = useSelector((state) => state.classes.classes);
  const [innerHTML, setInnerHTML] = useState("");
  return (
    <div style={{ display: "flex" }}>
      <MetadataDrawer options={metadata} />
      <div>
        <Container style={{ height: "50vh" }}>
          <root.span>
            <div
              dangerouslySetInnerHTML={{ __html: innerHTML }}
              className={classes.map((el) => el.replace(".", "")).join(" ")}
            ></div>
            <style type="text/css">{css}</style>
          </root.span>
        </Container>
        <div style={{ height: "50vh" }}>
          <TextArea
            style={{ width: "100%", height: "100%" }}
            value={innerHTML}
            onChange={(el) => setInnerHTML(el.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
