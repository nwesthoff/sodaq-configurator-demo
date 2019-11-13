import React, { Component } from "react";
import styled from "styled-components";
import image1 from "./images/1.png";
import image2 from "./images/2.png";
import image3 from "./images/3.png";
import image4 from "./images/4.png";
import { HuePicker } from "react-color";
import { observable, toJS } from "mobx";
import { observer } from "mobx-react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SaturationPicker from "./components/pickers/SaturationPicker";
import BrightnessPicker from "./components/pickers/BrightnessPicker";
import { CardContent, Card } from "@material-ui/core";

const StyledImageWrapper = styled.div`
  position: relative;
  width: 400px;
  max-width: 100%;
`;

const StyledImage = styled.img`
  position: absolute;
  height: auto;
  width: 100%;
  left: 0;
  top: 0;
`;

interface IColor {
  hue: number;
  saturation: number;
  brightness: number;
}

@observer
export default class App extends Component {
  @observable
  color1: IColor = {
    hue: 0,
    saturation: 1,
    brightness: 1
  };

  @observable
  color2: IColor = {
    hue: 0,
    saturation: 1,
    brightness: 1
  };

  @observable
  color3: IColor = {
    hue: 0,
    saturation: 1,
    brightness: 1
  };

  @observable
  color4: IColor = {
    hue: 0,
    saturation: 1,
    brightness: 1
  };

  handleChange1 = (color: Partial<IColor>) => {
    this.color1 = {
      hue: color.hue || this.color1.hue,
      saturation: color.saturation || this.color1.saturation,
      brightness: color.brightness || this.color1.brightness
    };
  };
  handleChange2 = (color: Partial<IColor>) => {
    this.color2 = {
      hue: color.hue || this.color2.hue,
      saturation: color.saturation || this.color2.saturation,
      brightness: color.brightness || this.color2.brightness
    };
  };
  handleChange3 = (color: Partial<IColor>) => {
    this.color3 = {
      hue: color.hue || this.color3.hue,
      saturation: color.saturation || this.color3.saturation,
      brightness: color.brightness || this.color3.brightness
    };
  };

  render() {
    return (
      <Grid container justify="center" alignItems="center" spacing={4}>
        <Grid item>
          <StyledImageWrapper>
            <StyledImage
              src={image1}
              style={{
                filter: `hue-rotate(${this.color1.hue}deg) saturate(${this.color1.saturation}) brightness(${this.color1.brightness})`,
                position: "relative"
              }}
            />
            <StyledImage
              src={image2}
              style={{
                filter: `hue-rotate(${this.color2.hue}deg) saturate(${this.color2.saturation}) brightness(${this.color2.brightness})`
              }}
            />
            <StyledImage
              src={image3}
              style={{
                filter: `hue-rotate(${this.color1.hue}deg) saturate(${this.color1.saturation}) brightness(${this.color1.brightness})`
              }}
            />
            <StyledImage
              src={image4}
              style={{
                filter: `hue-rotate(${this.color3.hue}deg) saturate(${this.color3.saturation}) brightness(${this.color3.brightness})`
              }}
            />
          </StyledImageWrapper>
        </Grid>
        <Grid item>
          <Card>
            <CardContent>
              <Grid container spacing={3} direction="column">
                <Grid item>
                  <Typography variant="overline">Front/Back Cover</Typography>
                  <HuePicker
                    color={{ h: this.color1.hue, s: 100, l: 100 }}
                    onChange={color => {
                      this.handleChange1({ hue: color.hsl.h });
                    }}
                  />
                  <SaturationPicker
                    hue={this.color1.hue}
                    changeHandler={value => {
                      this.handleChange1({ saturation: value / 50 });
                    }}
                  />
                  <BrightnessPicker
                    changeHandler={value => {
                      this.handleChange1({ brightness: value / 50 });
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="overline">Main Body</Typography>
                  <HuePicker
                    color={{ h: this.color2.hue, s: 100, l: 100 }}
                    onChange={color => {
                      this.handleChange2({ hue: color.hsl.h });
                    }}
                  />
                  <SaturationPicker
                    hue={this.color2.hue}
                    changeHandler={value => {
                      this.handleChange2({ saturation: value / 100 });
                    }}
                  />
                  <BrightnessPicker
                    changeHandler={value => {
                      this.handleChange2({ brightness: value / 50 });
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="overline">USB Cover</Typography>
                  <HuePicker
                    color={{ h: this.color3.hue, s: 100, l: 100 }}
                    onChange={color => {
                      this.handleChange3({ hue: color.hsl.h });
                    }}
                  />
                  <SaturationPicker
                    hue={this.color3.hue}
                    changeHandler={value => {
                      this.handleChange3({ saturation: value / 100 });
                    }}
                  />
                  <BrightnessPicker
                    changeHandler={value => {
                      this.handleChange3({ brightness: value / 50 });
                    }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}
