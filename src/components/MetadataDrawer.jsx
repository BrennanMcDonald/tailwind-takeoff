import React, { useState } from "react";
import PropTypes from "prop-types";
import MetadataOption from "./MetadataOption";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, Grid } from "semantic-ui-react";
import Space from "./Space";
import { setMediaQuery, setPseudoClass } from "../redux/classSlice";

const format = (str) => {
  return {
    key: str,
    value: str,
    text: str,
  };
};

const MetadataDrawer = (props) => {
  const dispatch = useDispatch();
  const { pseudoClass, mediaQuery } = useSelector((state) => state.classes);
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    if (
      e.target.parentElement.parentElement.dataset["option"] === "media-query"
    ) {
      dispatch(
        setMediaQuery({
          mediaQuery: e.target.textContent,
        })
      );
    } else if (
      e.target.parentElement.parentElement.dataset["option"] === "pseudo-class"
    ) {
      dispatch(
        setPseudoClass({
          pseudoClass: e.target.textContent,
        })
      );
    }
  };

  return (
    <div
      style={{
        width: "450px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRight: "solid 1px #d3d3d3",
        padding: "10px",
      }}
    >
      <div></div>
      <input
        placeholder="Search..."
        style={{
          width: "100%",
          borderRadius: "0px",
          border: "solid 1px #e3e3e3",
          padding: "10px 5px",
        }}
        value={search}
        onChange={(el) => setSearch(el.target.value)}
      />
      <Space height={10} />
      <Grid columns={2}>
        <Grid.Column>
          <Dropdown
            placeholder="Media Queries"
            data-option="media-query"
            selection
            fluid
            value={mediaQuery}
            onChange={onChange}
            options={["", "xs", "sm", "md", "lg"].map(format)}
          />
        </Grid.Column>
        <Grid.Column>
          <Dropdown
            placeholder="Pseudo-classes"
            data-option="pseudo-class"
            selection
            fluid
            value={pseudoClass}
            onChange={onChange}
            options={["", "hover", "active", "focus"].map(format)}
          />
        </Grid.Column>
      </Grid>
      <Space height={10} />
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
              el.classes.filter((el) => el.includes(search.toLowerCase()))
                .length > 0
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
