import React from 'react';

export class Pin extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    console.log("TO-DO Delete PIN");
  }
render(){
  return (
    <div className="pin">
      <div className="pin-image">
      <img src={this.props.src} />
      </div>

      <div className="pin-description">
      <span>{this.props.description}</span>
      </div>

      <div className="pin-actions">
      <button onClick={this.handleClick}>Delete</button>
      </div>
    </div>
  );
  }
};

