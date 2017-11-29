/**
* The required modules
*/
import React from 'react';
/**
* The component class
*/
export default class Login extends React.Component {
  /**
  * The constructor
  */
  constructor(props) {
    super(props);
    this.state = {
      text:"this is login"
    };
  }
  /**
  * test me
  */
  testMe() {
    return this.state.text;
  }
  /**
  * The renderr
  */
  render() {
    return(
      <h1>This is the Login Page</h1>
    )
  }
}
