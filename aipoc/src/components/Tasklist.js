import React from 'react'
import './taskstyle.css'

class Tasklist extends React.Component {
    render() {
        return (
            <div className="taskslist">
                <h1 className="online_status">Tasks list!</h1>
                <div className="list"></div>
            </div>
        )
    }
}


export default Tasklist;