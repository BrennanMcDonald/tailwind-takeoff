import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import metadata from "./metadata.json";
import MetadataDrawer from "./components/MetadataDrawer";
import "semantic-ui-css/semantic.min.css";
import { TextArea } from "semantic-ui-react";
import root from "react-shadow";
import css from "./tailwind.txt";

function App() {
  const classes = useSelector((state) => state.classes.classes);
  const [innerHTML, setInnerHTML] = useState("");
  const element = useRef();
  return (
    <div style={{ display: "flex" }}>
      <div style={{ height: "100vh" }}>
        <MetadataDrawer options={metadata} />
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1 }}>
          <root.span>
            <div
              ref={element}
              dangerouslySetInnerHTML={{ __html: innerHTML }}
              className={classes.map((el) => el.replace(".", "")).join(" ")}
            ></div>
            <style type="text/css">{css}</style>
          </root.span>
        </div>
        <div style={{ flex: 1, display: "flex" }}>
          <TextArea
            autocapitalize="off"
            spellcheck="off"
            autocorrect="off"
            wrap="off"
            tabindex="0"
            placeholder="Content"
            style={{
              outline: "currentcolor none medium",
              flex: 1,
              border: 0,
              borderTop: "grey solid 1px",
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
