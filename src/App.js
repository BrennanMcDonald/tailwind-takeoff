import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateHTML } from "./redux/documentSlice";
import MetadataDrawer from "./components/MetadataDrawer";
import "semantic-ui-css/semantic.min.css";
import { TextArea, Input } from "semantic-ui-react";
import metadata from "./metadata.json";
import ShadowDom from "./components/ShadowDom";

function App() {
  const dispatch = useDispatch();
  const classes = useSelector((state) => state.classes.classes);
  const documentHTML = useSelector((state) => state.document.html);
  const [innerHTML, setInnerHTML] = useState("Content");
  const [elementType, setElementType] = useState("div");
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
        <div style={{ flex: 1, padding: "10px" }}>
          <ShadowDom
            ref={element}
            elementType={elementType}
            classes={classes}
            content={innerHTML}
          />
        </div>
        <div style={{ flex: 1, display: "flex" }}>
          <div>
            <Input
              value={elementType}
              onChange={(e) => setElementType(e.target.value)}
            />
          </div>
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
