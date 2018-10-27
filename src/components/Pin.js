import React from 'react';

export class Pin extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    let id = this.props.id;
    this.props.handleClick(id);
  }
render(){
  const props = this.props;
  return (
    <div className="pin">
      <div className="pin-image">
      <img alt="Selected" src={props.src} />
      </div>

      <div className="pin-description">
      <span>{props.description}</span>
      </div>

      <div className="pin-actions">
      <button onClick={this.handleClick}>Delete</button>
      </div>
    </div>
  );
  }
};

