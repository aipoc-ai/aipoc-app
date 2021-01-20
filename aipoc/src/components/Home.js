import React from 'react'
import "./style.css"
import logo from "../pics/logo.svg"

class Home extends React.Component {
    render() {
        return (
        <div>
            <div class="online">
                <img alt="logo" width="150px" src={logo}/>
                <h1 class="online_status"><i style={{color:"green"}} class="fas fa-dot-circle"></i>online</h1>
            </div>
            <div class="questions">
                <div class="box_text">
                    <h1 class="online_status">Recent questions?</h1>
                </div>
            </div>
            <div class="information_right">
                <div class="box_text">
                    <h1 class="online_status">CPU informations?</h1>
                </div>
            </div>
        </div>
        )
    }
}

export default Home;
