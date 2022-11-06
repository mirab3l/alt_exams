import React from "react";
import Nav from './Nav'
import { Link } from "react-router-dom";
import "./Styling/Home.css";

const Home = () => {
  
  return (
    <div className="home">
        <Nav />
        <div>
      <h1 className="homepage">Welcome to my github repos</h1>
      <p className="homepage">Click the button below to generate the repos</p>
      <button className="btn" ><Link to="repos" className="anchor">Generate repos</Link></button> 
     
        </div>
    </div>
  );
};
export default Home;
