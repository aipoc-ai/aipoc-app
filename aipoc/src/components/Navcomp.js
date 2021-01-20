import React from 'react'
import "./style.css"
import aipoc from "../pics/aipoc.jpg"

class Navcomp extends React.Component {
    render() {
        return (
            <div className="navbar">
                <a href="index.html" className="navlink"><li className="navbar_logo"><img alt="aipoc" width="140px" src= {aipoc}></img></li></a>
                <a href="index.html" className="navlink"><li className="navbar_child">Home</li></a>
                <a href="taskslist.html" className="navlink"><li className="navbar_child">Tasks list</li></a>
                <a href="about.html" className="navlink"><li className="navbar_child">About</li></a>
                <a href="d.html" className="navlink"><li className="navbar_child">Docs</li></a>
            </div>
        )
    }
}

export default Navcomp;
