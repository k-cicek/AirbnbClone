import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />
      <h1>Live anywhere</h1>
      <div className="home__section">
        
        <Card
          src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=480"
          title="Outdoor getaways"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480"
          title="Unique stays"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480"
          title="Entire homes"
        />
      </div>
      <h1>Discover things to do</h1>

      <div className="home__section">
      <Card
          src="https://a0.muscache.com/im/pictures/56dc3b0e-10dc-4410-bacd-fb6293b19264.jpg?im_w=480"
          title="Experiences"
          description="Find unforettable activities near you."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/0ce799cb-7553-4369-be9e-d0011e0ef636.jpg?im_w=480"
          title="Online Experiences"
          description="Live,interactive activitiesled by Hosts."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=480"
          title="Featured collection:Wanderlust"
          description="Travel from home with Online Experiences."
        />
      </div>
    </div>
  );
}

export default Home;
