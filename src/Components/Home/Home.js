import React from "react";
import Banner from "./Banner/Banner";
import classes from "./Home.module.css";
import Card from "./Card/Card";

function Home() {
  return (
    <div>
      <Banner />
      <div className={[classes.home__section,classes.margin_top_40].join(" ")}>
            <Card
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            </div>
            <div className={classes.home__section}>
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="3 Bedroom in Santa Monica"
                description="Superhost with a stunning view of the beachside in Santa Monica"
                price="$170/night"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse in Hollywood"
                description="Enjoy the amazing sights of Hollywood with this stunning penthouse"
                price="$450/night"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="$90/night"
            />
            </div>
    </div>
  );
}

export default Home;
