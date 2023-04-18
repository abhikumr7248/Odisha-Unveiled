import React from "react";
import { Link } from "react-router-dom";
import "./banner.css";
import Navbar from "./Navbar";
class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <Navbar />
        <div className="banner__content">
          <h2>Experiences on the go</h2><br></br>
          <h5>
          Sail against the wind, Conquer the hills, Pose with the smiling birds, or Hear the stories of the Stones; Odisha has a corner for all, especially You
          </h5><br>
          </br>
          <Link to="/result">
            <button>Explore NearBy</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Banner;
