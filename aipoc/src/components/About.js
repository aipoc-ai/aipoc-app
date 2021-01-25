import React from 'react'
import './aboutstyle.css'
import names from '../pics/name.svg'

class About extends React.Component {
    render() {
        return (
            <div className="taskslist">
                <h1 className="info">An <i>AIPOC</i>(An intelligent piece of code) is a ai robot that learn to perform their tasks from humans through machine learning and has capability to do many tasks.</h1>
                <h1 className="designed" >::Created and designed by::</h1>
                <div className="list">
                    <img alt="names" width="600px" src={names}/>
                </div>
            </div>
        )
    }
}


export default About;