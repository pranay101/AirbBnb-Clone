import React from "react";
import classes from "./Banner.module.css";
import { Button } from "@mui/material";

const Banner = () => {
  return (
    <div className={classes.banner}>
      <div className={classes.banner__search}>
        <Button
        variant="outlined" 
        className={classes.banner__searchButton}>Search Dates</Button>
      </div>
      <div className={classes.banner__info}>
        <h1>Get out and strech your imagination</h1>
        <h5>Plan a diffrent kind of gateway to uncover the gems near you</h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
};

export default Banner;
