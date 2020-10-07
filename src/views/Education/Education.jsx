import { render } from "@testing-library/react";
import React, { useState } from "react";
import "./Education.css";

function School(props) {
render()
  return (
      <div 
      onClick= {() => {
        props.setActiveDescription(props.description);
      }}
      className="education-background">
      <div className="education-info">
        <h1>{props.title}</h1>
      </div>
      </div>
  );

}

export default function EducationScreen() {

  const [activeDescription, setActiveDescription] = React.useState("Click for Description");

  return (
    <div className="screen-background">
      <div className="education-full-background">
      <School title="Columbia High School" description="Attended Columbia High School for four years graduating with x,y,z honors."
            setActiveDescription={setActiveDescription}>
      </School>
      <School title="Harvard" description="First year harvard student, Prospecitve Concentrator in Applied Mathematics." setActiveDescription={setActiveDescription}></School>
      <div className="moreinfo-background">
          <center><h1>Additional Information</h1></center>
          <h3>{activeDescription}</h3>
      </div>
      </div>
    </div>
  );
}