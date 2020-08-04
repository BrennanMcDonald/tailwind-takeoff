import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, Grid } from "semantic-ui-react";
import { addClass, removeClass } from "../redux/classSlice";

const format = (str) => {
  return {
    key: str,
    value: str,
    text: str,
  };
};

export default function (props) {
  const dispatch = useDispatch();
  const classes = useSelector((state) => state.classes.classes);

  const onChange = (e) => {
    if (e.target.textContent) {
      console.log("ADD: " + e.target.textContent);
      dispatch(
        addClass({
          class: e.target.textContent,
        })
      );
    } else {
      console.log("DELETE: " + e.target.parentElement.textContent);
      dispatch(
        removeClass({
          class: e.target.parentElement.textContent,
        })
      );
    }
  };
  return (
    <>
      <Grid>
        <Grid.Row>
          <Grid.Column width={6}>
            <label>{props.option.title}</label>
          </Grid.Column>
          <Grid.Column width={10}>
            <Dropdown
              placeholder={props.option.classes[0]}
              fluid
              multiple
              selection
              search
              value={classes.filter((el) =>
                props.option.classes
                  .map(format)
                  .map((el) => el.key)
                  .includes(el)
              )}
              onChange={onChange}
              options={props.option.classes.map(format)}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
