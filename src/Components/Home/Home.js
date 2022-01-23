import React from 'react';
import Banner from './Banner/Banner';
import classes from "./Home.module.css"

function Home() {
  return <div>
      <Banner />
      <div className={classes.home__section}>

      </div>
  </div>;
}

export default Home;
