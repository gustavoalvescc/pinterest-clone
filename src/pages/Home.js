import React from 'react';
import {NavBar} from '../components/NavBar';
import {Pin} from '../components/Pin';

export class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {pins: []};
  }

  render(){
    return (
      <div className="wrapper">
        <NavBar/>
          <div className="wall">
             {this.state.pins.map(pin => <Pin key={"pin_" + pin._id} src={pin.image_link} description={pin.description}/>)}
             {this.state.pins.length}
          </div>
      </div>
    );
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/pin").then((response)=>{
      return response.json();
    }).then(pins => {
      this.setState({pins});
    });
  }
};