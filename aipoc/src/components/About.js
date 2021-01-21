import React from 'react'
import './aboutstyle.css'
import names from '../pics/name.svg'

class About extends React.Component {
    render() {
        return (
            <div className="taskslist">
                <h1 className="online_status">An aipoc is ....</h1>
                <div className="list">
                    <img alt="names" width="600px" src={names}/>
                </div>
            </div>
        )
    }
}


export default About;