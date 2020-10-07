import React from "react";
import "./About.css";
import CutePic from "../../assets/me.JPG";

// Collaspible info done with help from https://medium.com/@subalerts/implememting-a-simple-collapsible-component-in-react-js-67c796e64652
class Collapsible extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          open: false
      }
      this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel(e){
      this.setState({open: !this.state.open})
  }
  render() {
    return (<div>
      <div onClick={(e)=>this.togglePanel(e)} className='collapse-header'>
          <center>{this.props.title}</center></div>
      {this.state.open ? (
          <div className='collapse-content'>
              {this.props.children}
          </div>) : null}
    </div>);
  }
}


export default function AboutScreen() {
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src={CutePic} className="intro-picture" />
        </div>
        <div className="intro-item">
          <h1>I'm Alex!</h1>
          <h2>Prospective AM concentrator with interests in data analytics</h2>
          <p>Check out all these
          details and things I like to do for fun.</p>
        </div>
      </div>
      <div className="more-info-item">
      <Collapsible title="More information">
          <div> <p>Who am I?</p>
          <p>I'm a college student like the rest of you. Love to try new foods, play games, hang out, and spend time outdoors.
            My favorite snacks are goldfish and salami. I'm currently enrolled in CS50, Math22a, Spanish11 and FRSH 51H.
          </p>
      </div>
        </Collapsible>
      </div>
    </div>
  );
}
