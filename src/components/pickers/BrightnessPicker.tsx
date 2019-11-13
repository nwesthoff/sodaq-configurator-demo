import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { Slider } from "@material-ui/core";

const BrightnessSlider = withStyles({
  root: {
    color: "#777",
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus,&:hover,&$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider);

interface Props {
  changeHandler: Function;
}

export default class BrightnessPicker extends Component<Props> {
  render() {
    return (
      <BrightnessSlider
        defaultValue={50}
        min={0}
        max={100}
        onChange={(e, value) => {
          this.props.changeHandler(value);
        }}
        valueLabelDisplay="auto"
      />
    );
  }
}
