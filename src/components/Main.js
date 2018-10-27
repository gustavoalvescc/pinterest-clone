import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Login} from '../pages/Login';
import {Home} from '../pages/Home';

export class Main extends React.Component{
  render(){
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/:userId" component={Home} />
        </Switch>
      </main>
    );
  }
};