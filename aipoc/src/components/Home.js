import React from 'react'
import "./style.css"
import logo from "../pics/logo.svg"

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isloding:true,
            api_info:[],
            error:null,
            intervalID:null
        }
    }
    getdata=()=>{
      this.setState({ error:null })
        fetch(`http://3.87.191.168/items/`)
    
        .then(response => response.json())
        
        .then(data =>
          this.setState({
            api_info: data
          })
        )
        
        .catch(error => this.setState({ error }));
        this.setState({intervalID : setInterval(this.getdata.bind(this), 10000)})
    }
    componentDidMount(){
        this.getdata()
    }
    componentWillUnmount(){
        clearInterval(this.state.intervalID)
    }
    render() {
        const { isLoading, api_info, error } = this.state;
        return (
        <div>

            <h1>{error ? <p  className="error">{error.message}.try again!!</p> : null}</h1>

            {!isLoading ? (
              api_info.map(info => {
                const {id, status,temp,con_speed,cpu,camera,ir } = info;
                return (
                  <div key={id}>
                    
                    <div class="online">
                        <img alt="logo" width="150px" src={logo}/>
                        <h1 class="online_status"><i style={{color:"green"}} class="fas fa-dot-circle"></i>{status?"online":"offline"}</h1>
                    </div>
                    <div class="questions">
                        <div class="box_text">
                            <h1 class="online_status">Recent questions?</h1>
                        </div>
                    </div>
                    <div class="information_right">
                        <div class="box_text">
                            <h1 class="online_status">CPU informations?</h1>
                            <div className="cpu_info">
                                <h1 className="cpu_info_head">Temperature:</h1>
                                <h1 className="cpu_info_right">{status?temp:"--"}</h1>
                                <h1 className="cpu_info_head">Camera:</h1>
                                <h1 className="cpu_info_right">{status&&camera?"detected":"Not detected"}</h1>
                                <h1 className="cpu_info_head">IR Sensor:</h1>
                                <h1 className="cpu_info_right">{status&&ir?"detected":"Not detected"}</h1>
                                <h1 className="cpu_info_head">Connection Speed:</h1>
                                <h1 className="cpu_info_right">{status?con_speed:"--"}</h1>
                                <h1 className="cpu_info_head">CPU Usage:</h1>
                                <h1 className="cpu_info_right">{status?cpu:"--"}</h1>
                            </div>

                        </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h3 className="loding">Loading...</h3>
            )}
        </div>
        );
      }
}

export default Home;


