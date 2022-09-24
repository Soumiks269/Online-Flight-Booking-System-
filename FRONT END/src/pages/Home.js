import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/home.jpg";
import Footer from "./Footer";
//import Navbar from "./Navbar";
import "../styles/Home.css";

function Home() {
  return (
    <div>
      {" "}
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h2>EASY FLY </h2>
          <br />
          <p> Have a Wonderful Journey with us.</p>
          <Link to="/login">
            <button> BOOK NOW </button>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
