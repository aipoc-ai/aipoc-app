import React from 'react'
import "./style.css"
import logo from "../pics/logo.svg"
import load from "../pics/load.gif"
import io from "socket.io-client";

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isloding:true,
            api_info:[{
              "id":1, 
              "status":false,
              "temp":"_",
              "con_speed":"_",
              "cpu":"_",
              "camera":false,
              "ir":false
          }],
            error:null,
            intervalID:null,
            questions:[],
            ques_error:null,
        }
    }
    componentDidMount(){
      const socket = io("http://127.0.0.1:5000");
      socket.on('connect', function() {
        console.log("Connected to WS server");
      
        console.log(socket.connected); 
      
      });
      socket.on('message', (data) => {
        console.log(data)
        this.setState({api_info:[data]});
      });
      socket.on('disconnect', ()=> {
        console.log("disconnected to WS server");
        let data = [{
          "id":1, 
          "status":false,
          "temp":"_",
          "con_speed":"_",
          "cpu":"_",
          "camera":false,
          "ir":false
        }]
        this.setState({api_info:data});
        
        console.log(socket.connected); 
      
      });
    }
    render() {
        const { isLoading, api_info, error } = this.state;
        return (
        <div>

            <h1>{error ? <p  className="error">{error.message}.try again!!</p> : null}</h1>

            {true ? (
              api_info.map(info => {
                const {id, status,temp,con_speed,cpu,camera,ir } = info;
                return (
                  <div key={id}>
                    
                    <div className="online">
                        <img alt="logo" width="150px" src={logo}/>
                        {status?<h1 className="online_status"><button class='oncircle'></button>online</h1>:<h1 className="online_status"><button class='offcircle'></button>offline</h1>}
                    </div>
                    <div className="questions">
                        <div className="box_text">
                            <h1 className="recent_questions">Recent questions?</h1>
                            <div className="ques_ans">
                              {this.state.ques_error ? <p  className="error">{this.state.error.message}.try again!!</p> : null}
                              {this.state.questions.map((ques)=>(
                                <h1 key={ques.id} className="ques_info">{ques.asked_ques}</h1>
                              ))}
                            </div>
                        </div>
                    </div>
                    <div className="information_right">
                        <div className="box_text">
                            <h1 className="recent_questions">CPU informations?</h1>
                            <div className="cpu_info">
                                <h1 className="cpu_info_head">Temperature:</h1>
                                <h1 className="cpu_info_right">{status?temp:"--"}&deg;F</h1>
                                <h1 className="cpu_info_head">Camera:</h1>
                                <h1 className="cpu_info_right">{status&&camera?"Detected":"Not detected"}</h1>
                                <h1 className="cpu_info_head">IR Sensor:</h1>
                                <h1 className="cpu_info_right">{status&&ir?"Detected":"Not detected"}</h1>
                                <h1 className="cpu_info_head">Connection Speed:</h1>
                                <h1 className="cpu_info_right">{status?con_speed:"--"} Kbps</h1>
                                <h1 className="cpu_info_head">CPU Usage:</h1>
                                <h1 className="cpu_info_right">{status?cpu:"--"}%</h1>
                            </div>

                        </div>
                    </div>
                  </div>
                );
              })
            ) : 
              <h3 className="loding"><img className="load" alt="loading..." src={load}/></h3>}
        </div>
        );
      }
}

export default Home;


