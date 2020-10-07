import React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Alexander Glynn</h1>
        <div className="info-bar">
          <p className="info-item">alexanderglynn@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <Link 
            className="info-link"
            to={{pathname: "https://instagram.com" }}
            target="_blank"
          >
            Instagram
          </Link>
          <Link 
            className="info-link"
            to={{pathname: "https://github.com" }}
            target="_blank"
          >
            Github
          </Link>
          <Link 
            className="info-link"
            to={{pathname: "http://spotify.com" }}
            target="_blank"
          >
            Spotify
          </Link>
        </div>
      </div>
      <div className="nav-background">
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/about" }}>
            About
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/education" }}>
            Education
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/experience" }}>
            Experience
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/projects" }}>
            Projects
          </Link>
        </div>
      </div>
    </>
  );
}
