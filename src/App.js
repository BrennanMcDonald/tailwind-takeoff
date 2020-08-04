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
      <div style={{ height: "100vh" }}>
        <MetadataDrawer options={metadata} />
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1 }}>
          <root.span>
            <div
              dangerouslySetInnerHTML={{ __html: innerHTML }}
              className={classes.map((el) => el.replace(".", "")).join(" ")}
            ></div>
            <style type="text/css">{css}</style>
          </root.span>
        </div>
        <div style={{ flex: 1 }}>
          <TextArea
            autocapitalize="off"
            spellcheck="off"
            autocorrect="off"
            wrap="off"
            tabindex="0"
            style={{
              outline: "currentcolor none medium",
            }}
            value={innerHTML}
            onChange={(el) => setInnerHTML(el.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
