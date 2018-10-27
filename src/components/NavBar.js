import React from 'react';

export class NavBar extends React.Component{
  render(){
    return (
        <nav className="navbar">
            <div className="user-info">
                <div className="user-pic-thumbnail">
                    <img alt="Random" src="https://picsum.photos/200/?random?image=0" />
                </div>
    
                <div className="user-name">
                    <span>José Rogério B. Filho</span>
                </div>
            </div>

            <div className="user-actions">
                <span>LOG OUT</span>
            </div>
        </nav>
        );
      }
    };