import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateHTML } from "./redux/documentSlice";

import root from "react-shadow";

import MetadataDrawer from "./components/MetadataDrawer";

import "semantic-ui-css/semantic.min.css";
import { TextArea } from "semantic-ui-react";

import css from "./tailwind.txt";
import metadata from "./metadata.json";

function App() {
  const dispatch = useDispatch();
  const classes = useSelector((state) => state.classes.classes);
  const documentHTML = useSelector((state) => state.document.html);
  const [innerHTML, setInnerHTML] = useState("Content");
  const element = useRef();

  useEffect(() => {
    dispatch(updateHTML(element.current));
  });

  return (
    <div style={{ display: "flex" }}>
      <div style={{ height: "100vh" }}>
        <MetadataDrawer options={metadata} />
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1, padding:"10px" }}>
          <root.div style={{height:"100%"}}>
            <div
              ref={element}
              dangerouslySetInnerHTML={{ __html: innerHTML }}
              className={classes.map((el) => el.replace(".", "")).join(" ")}
            ></div>
            <style type="text/css">{css}</style>
          </root.div>
        </div>
        <div style={{ flex: 1, display: "flex" }}>
          <TextArea
            autocapitalize="off"
            spellcheck="off"
            autocorrect="off"
            wrap="off"
            tabindex="0"
            style={{
              outline: "currentcolor none medium",
              flex: 1,
              border: 0,
              borderTop: "grey solid 1px",
              borderRight: "grey solid 1px",
            }}
            value={innerHTML}
            onChange={(el) => setInnerHTML(el.target.value)}
          />
          <div
            style={{
              outline: "currentcolor none medium",
              flex: 1,
              border: 0,
              borderTop: "grey solid 1px",
            }}
          >
            Result:
            <br />
            {documentHTML}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
