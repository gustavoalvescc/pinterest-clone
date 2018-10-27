import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Login} from '../pages/Login';
import {Home} from '../pages/Home';
import {Profile} from '../pages/Profile';

export class Main extends React.Component{
  render(){
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </main>
    );
  }
};