import React from "react";

import { Link, Redirect } from "react-router-dom";

import { Row, Col, Image } from "react-bootstrap";

// Import individual thumbnails

import luke from "./images/Truitt.jpg";
import peyton from "./images/Peyton.png";
// compose dictionary of headshots for people that have headshots
const headshots = {
  "luke": luke,
  "peyton": peyton
};

function Person(props) {
  console.log(headshots[props.img]);

  return (
    <Col style={{ padding: "2rem", alignContent: "center", textAlign:"center", justifyContent: "center", width:"100%"}}>
      <div className="person-image" style={{width:"100%",  alignContent:"center",justifyContent: "center"}}onClick={() => window.location.href = 'mailto:twolectronics@gmail.com'}>
        <img
          alt={props.img}
          src={headshots[props.img]}
          style={{
            height: "180px",
            width: "180px",
            objectFit: "cover",
            borderRadius: "100%"
          }}
        />
      </div>
      <div style={{textAlign:"center"}}>
        <div style={{ paddingTop:"10px", width:"100%", fontSize: "1.5rem", textAlign:"center"}}>{props.name} </div>
      </div>
      <div style={{textAlign:"center"}}>
        <div style={{ paddingTop:"5px", width:"100%", fontSize: "1rem", textAlign:"center", color:"#999999"}}>{props.title}</div>
      </div>
    </Col>
  );
}
export default Person;
