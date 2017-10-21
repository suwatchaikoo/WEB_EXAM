import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';

import Calculator from './Components/Calculator';

import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import routes from './routing-config'
import { NoMatch,Home2 } from './Components';

class App extends Component {


  render() {
     
    return (
        <BrowserRouter>
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <ul>
                        <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                        <li><NavLink to="/Home2" activeClassName="active">Home2</NavLink></li>
                        {/* <li><NavLink to="/Blocking" activeClassName="active">Blocking</NavLink></li>
                        <li><NavLink to="/Miss" activeClassName="active">Miss</NavLink></li>
                        <li><NavLink to="/QueryParams" activeClassName="active">Query params</NavLink></li>
                        <li><NavLink to="/Recursive" activeClassName="active">Recursive</NavLink></li>
                        <li><NavLink to="/Protected" activeClassName="active">Protected</NavLink></li>
                        <li><NavLink to="/Homework" activeClassName="active">Homework</NavLink></li>
                        <li><NavLink to="/Counter" activeClassName="active">Counter</NavLink></li>
                        <li><NavLink to="/CountHomework" activeClassName="active">CountHomework</NavLink></li> */}
                    </ul>
                </div>
                <div className="App-intro">
                    <Switch>
                        {/* {
                            <div>
                                <Route path="/" component={Home} exact={true} />
                                <Route path="/BasicRouting" component={BasicRouting} />
                                <Route path="/Blocking" component={Blocking} />
                                <Route path="/Miss" component={Miss} />
                                <Route path="/QueryParams" component={QueryParams} />
                                <Route path="/Recursive" component={Recursive} />
                                <Route path="/login" component={Login} />
                                <Route path="/Homework" component={Homework} />
                                <Route path="/Counter" component={CounterPage} />
                                <Route path="/Showhomework" component={Showhomework} />
                                <Route path="/Counthomework" component={Counthomework} />
                                <Route path="/Protected" component={
                                    () => (fakeAuth.isAuthenticated ?
                                        (<ProtectedPage />) :
                                        (<Redirect to={{pathname: "/login", state: {from: "/Protected"}}}/> ))} />
                            </div>
                        } */}
                        {routes.map((route,index) => (<Route key={index} path={route.path} component={route.component} exact={route.exact} />))}
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
  }

}


export default App;
