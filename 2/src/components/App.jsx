import React, {Component} from 'react';
import {Messenger} from './Messenger';

export class App extends Component {
  // state = {
  //   isHidden: true,
  //   counter: 0,
  // };

  // handleCounter = (count) => {
  //   this.setState({counter: count});
  // };

  render() {
    // const {isHidden, counter} = this.state;
    return (
      <Messenger/>
    );
  }
}
