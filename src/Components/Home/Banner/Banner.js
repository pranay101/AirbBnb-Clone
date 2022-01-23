import React, { useState } from "react";
import classes from "./Banner.module.css";
import { Button } from "@mui/material";
import Search from "./Search/Search"
import {useNavigate} from "react-router-dom"

const Banner = () => {
  const navigate = useNavigate()
  const [showDatePicker, setshowDatePicker] = useState();
  const showDatePickerHandler = () => {
    setshowDatePicker((prevState) => !prevState);
  };

  return (
    <div className={classes.banner}>
      <div className={classes.banner__search}>
          {showDatePicker? <Search /> : null}
        <Button
          onClick={showDatePickerHandler}
          variant="outlined"
          className={classes.banner__searchButton}
        >
          {!showDatePicker? "Search Dates" : "Hide" }
          
        </Button>

      </div>
      <div className={classes.banner__info}>
        <h1>Get out and strech your imagination</h1>
        <h5>Plan a diffrent kind of gateway to uncover the gems near you</h5>
        <Button onClick={() => navigate("/search")} variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
};

export default Banner;
