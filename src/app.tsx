import React, { Component } from "react";
import styled from "styled-components";
import image1 from "./images/1.png";
import image2 from "./images/2.png";
import image3 from "./images/3.png";
import image4 from "./images/4.png";
import { HuePicker } from "react-color";
import { observable } from "mobx";
import { observer } from "mobx-react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const StyledImageWrapper = styled.div`
  position: relative;
  width: 500px;
  max-width: 100%;
`;

const StyledImage = styled.img`
  position: absolute;
  height: auto;
  width: 100%;
  left: 0;
  top: 0;
`;

@observer
export default class App extends Component {
  @observable
  hue1: number = 0;

  @observable
  hue2: number = 0;

  @observable
  hue3: number = 0;

  @observable
  hue4: number = 0;

  handleChange1(hue) {
    this.hue1 = hue;
  }
  handleChange2(hue) {
    this.hue2 = hue;
  }
  handleChange3(hue) {
    this.hue3 = hue;
  }
  handleChange4(hue) {
    this.hue4 = hue;
  }

  render() {
    return (
      <Grid container justify="center" alignItems="center" spacing={4}>
        <Grid item>
          <StyledImageWrapper>
            <StyledImage
              src={image1}
              style={{
                filter: `hue-rotate(${this.hue1}deg)`,
                position: "relative"
              }}
            />
            <StyledImage
              src={image2}
              style={{ filter: `hue-rotate(${this.hue2}deg)` }}
            />
            <StyledImage
              src={image3}
              style={{ filter: `hue-rotate(${this.hue3}deg)` }}
            />
            <StyledImage
              src={image4}
              style={{ filter: `hue-rotate(${this.hue4}deg)` }}
            />
          </StyledImageWrapper>
        </Grid>
        <Grid item>
          <Grid container spacing={3} direction="column">
            <Grid item>
              <Typography variant="body1">Back Cover</Typography>
              <HuePicker
                color={{ h: this.hue1, s: 100, l: 100 }}
                onChange={color => {
                  this.handleChange1(color.hsl.h);
                }}
              />
            </Grid>
            <Grid item>
              <Typography variant="body1">Main Body</Typography>
              <HuePicker
                color={{ h: this.hue2, s: 100, l: 100 }}
                onChange={color => {
                  this.handleChange2(color.hsl.h);
                }}
              />
            </Grid>
            <Grid item>
              <Typography variant="body1">Front Cover</Typography>
              <HuePicker
                color={{ h: this.hue3, s: 100, l: 100 }}
                onChange={color => {
                  this.handleChange3(color.hsl.h);
                }}
              />
            </Grid>
            <Grid item>
              <Typography variant="body1">USB Cover</Typography>
              <HuePicker
                color={{ h: this.hue4, s: 100, l: 100 }}
                onChange={color => {
                  this.handleChange4(color.hsl.h);
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
