import React from 'react';
import {NavBar} from '../components/NavBar';
import {Pin} from '../components/Pin';

export class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {pins: []};
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id){
    fetch(`http://localhost:3000/api/pin/${id}`, {method: 'delete'}).then( ()=>{
      let arrayCopy = this.state.pins.filter(row => row._id !== id);
      this.setState({pins: arrayCopy});
    }).catch((err) => {
      console.log(err);
    });
    
  }

  render(){
    return (
      <div className="wrapper">
        <NavBar/>
          <div className="wall">
             {this.state.pins.map(pin => <Pin handleClick={this.handleDelete} key={"pin_" + pin._id} src={pin.image_link} description={pin.description} id={pin._id}/>)}
          </div>
      </div>
    );
  }

  componentDidMount(){
    //const { match: { params } } = this.props;
    fetch("http://localhost:3000/api/pin").then((response)=>{
      return response.json();
    }).then(pins => {
      this.setState({pins});
    });
  }
};