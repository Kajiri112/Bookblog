import React from 'react';
import "./about.css";
import lisa from '../../assets/lisa.png';

const About = (props) => {
    return (
        <div className="about">
        <div>
          <div ><img className="lisa" src={lisa} /></div>
          <div className="kontakt">Kontakt:</div>
          <div className="kontakt">Lisa Gocke</div> 
          <div className="kontakt">Oberforstbacher Str. 438</div> 
          <div className="kontakt">52076 Aachen</div> 
          <div className="kontakt">E-Mail: lisa.gocke[at]outlook.de</div> 
        </div>
    </div>
    );
}
export default About;