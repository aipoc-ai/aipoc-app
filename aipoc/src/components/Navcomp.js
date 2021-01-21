import React from 'react'
import "./style.css"
import aipoc from "../pics/aipoc.jpg"
import {
    Link
  } from "react-router-dom";

class Navcomp extends React.Component {
    render() {
        return (
            <div className="navbar">
                <li className="navbar_logo"><Link className="navlink" to="/"><img alt="aipoc" width="140px" src= {aipoc}></img></Link></li>
                <li className="navbar_child"><Link className="navlink" to="/">Home</Link></li>
                <li className="navbar_child"><Link className="navlink" to="/tasklist">Tasks list</Link></li>
                <li className="navbar_child"><Link className="navlink" to="/about">About</Link></li>
                <a href="d.html" className="navlink"><li className="navbar_child">Docs</li></a>
            </div>
        )
    }
}

export default Navcomp;
