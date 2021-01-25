import React from 'react'
import './taskstyle.css'

class Tasklist extends React.Component {
    render() {
        return (
            <div className="taskslist">
                <h1 className="list_name">Tasks list!</h1>
                <div className="list">
                    <h1 className="new_list" >1. Wake up</h1>
                    <h1 className="new_list" >2. Speak</h1>
                    <h1 className="new_list" >3. Give answer of the questions</h1>
                    <h1 className="new_list" >4. Take picture</h1>
                    <h1 className="new_list" >5. Movement</h1>
                    <h1 className="new_list" >6. Alarm</h1>
                    <h1 className="new_list" >7. Mail</h1>
                    <h1 className="new_list" >8. Face recognisation</h1>
                    <h1 className="new_list" >9. Face detection</h1>
                    <h1 className="new_list" >10. Create facebook post</h1>
                    <h1 className="new_list" >11. Colour detector</h1>
                    <h1 className="new_list" >12. wikipedia</h1>
                    <h1 className="new_list" >13. Colour detector</h1>
                    <h1 className="new_list" >14. Play music</h1>
                </div>
            </div>
        )
    }
}


export default Tasklist;