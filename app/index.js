/**
* The Styles and resources
*/
import 'resources';
/**
* React Modules
*/
import React from 'react';
import {render} from 'react-dom';
/**
* Router Modules
*/
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
/**
* All Components
*/
import Dashboard from 'components/dashboard';
import Login from 'components/login';
/**
* The App class
*/
class App extends React.Component {
  /**
  * The constructor
  */
  constructor(props) {
    super(props);
    this.state = {};
  }
  /**
  * The renderer
  */
  render() {
    return (
      <BrowserRouter>
        <section className="content">
          <NavLink to="/" activeStyle={{color:"red"}}>Login</NavLink>
          <NavLink to="/dashboard" activeStyle={{color:"red"}}>dashboard</NavLink>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </section>
      </BrowserRouter>
    );
  }
}
/**
* Render the app
*/
render( <App/>, document.getElementById('root'));
