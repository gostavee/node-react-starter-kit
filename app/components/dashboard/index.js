/**
* The required modules
*/
import React from 'react';
/**
* The component class
*/
export default class Dashboard extends React.Component {
  /**
  * The constructor
  */
  constructor(props) {
    super(props);
    this.state = {
      text:"this is dashboard"
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
      <h1>{this.state.text}</h1>
    )
  }
}
