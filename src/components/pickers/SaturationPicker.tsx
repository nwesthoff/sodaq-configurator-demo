import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { Slider } from "@material-ui/core";
import { hslToRgb } from "@material-ui/core/styles";

const SaturationSlider = withStyles({
  root: {
    color: props => hslToRgb(`hsl(${props.hue.toFixed()},100,50)`),
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
  hue: number;
  changeHandler: Function;
}

export default class SaturationPicker extends Component<Props> {
  render() {
    return (
      <SaturationSlider
        defaultValue={100}
        min={0}
        max={100}
        onChange={(e, value) => {
          this.props.changeHandler(value);
        }}
        hue={this.props.hue}
        valueLabelDisplay="auto"
      />
    );
  }
}
