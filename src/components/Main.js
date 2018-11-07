import React from 'react';
import { Switch, Route, Redirect, matchPath } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {Login} from '../pages/Login';
import {Home} from '../pages/Home';

export class Main extends React.Component{

  render(){
    const _isLoggedIn = () => {
      const history = createBrowserHistory();
       const match = matchPath(history.location.pathname,  {path: '/timeline/:login'});
  
          const privateRoute = match === null;
  
      return (privateRoute && localStorage.getItem('auth-token')) === null;
    };
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" render={() => 
            (_isLoggedIn() ? 
            (<Redirect to="/?msg=Você precisa estar logado." />)
             : (<Home />))}/>
          <Route path="/:userId" component={Home} />
        </Switch>
      </main>
    );
  }
};