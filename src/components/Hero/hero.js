import React from "react";
import "./hero.css";
import Card from "../UI/Card/card";
import Logo from "../Logo/logo";
import Navbar from "../Navbar/navbar";

const Hero = (props) => (
  <div>
    <Card>
        <div style={{paddding: '50px 0'}}>
            <Logo />
        </div>
        <Navbar />
    </Card>
  </div>
);
export default Hero;
