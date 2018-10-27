import React from 'react';
import logo from '../logo.svg';

export class Home extends React.Component{
  render(){
    return (
      <div className="wrapper">
          <div className="navbar">
              <div className="user-info">
                  <div className="user-pic-thumbnail">
                      <img src="https://picsum.photos/200/?random?image=0" />
                  </div>
      
                  <div className="user-name">
                      <span>José Rogério B. Filho</span>
                  </div>
              </div>

              <div className="user-actions">
                  <span>LOG OUT</span>
              </div>
          </div>
  
          <div className="wall">
              <div className="pin">
                  <div className="pin-image">
                      <img src="https://picsum.photos/200/?random?image=1" />
                  </div>

                  <div className="pin-description">
                      <span>Lorem ipsum et dolorem</span>
                  </div>

                  <div className="pin-actions">
                      DELETE
                  </div>
              </div>

              <div className="pin">
                  <div className="pin-image">
                      <img src="https://picsum.photos/200/?random?image=2" />
                  </div>

                  <div className="pin-description">
                      <span>Lorem ipsum et dolorem</span>
                  </div>

                  <div className="pin-actions">
                      DELETE
                  </div>
              </div>

              <div className="pin">
                  <div className="pin-image">
                      <img src="https://picsum.photos/200/?random?image=3" />
                  </div>

                  <div className="pin-description">
                      <span>Lorem ipsum et dolorem</span>
                  </div>

                  <div className="pin-actions">
                      DELETE
                  </div>
              </div>

              <div className="pin">
                  <div className="pin-image">
                      <img src="https://picsum.photos/200/?random?image=4" />
                  </div>

                  <div className="pin-description">
                      <span>Lorem ipsum et dolorem</span>
                  </div>

                  <div className="pin-actions">
                      DELETE
                  </div>
              </div>
          </div>
      </div>
    );
  }
};