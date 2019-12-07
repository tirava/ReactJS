import React from 'react';
import Prop from 'prop-types';

// eslint-disable-next-line require-jsdoc
export class Counter extends React.Component {
  static propTypes = {
    init: Prop.number.isRequired,
    onSaveCounter: Prop.func.isRequired,
  };

  handleButtonClick = (event) => {
    const op = +event.target.dataset.op;
    this.props.onSaveCounter(this.props.init + op);
  };

  // eslint-disable-next-line require-jsdoc
  componentDidMount() {
    console.log('Mounted');
    this.timer = setInterval(() => console.log('Hello counter'), 2000);
  }

  // eslint-disable-next-line require-jsdoc
  componentDidUpdate() {
    console.log('Updated');
  }

  // eslint-disable-next-line require-jsdoc
  componentWillUnmount() {
    console.log('Will UnMount');
    clearInterval(this.timer);
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <div>
        <button data-op='-1' onClick={this.handleButtonClick}>-1</button>
        <span> {this.props.init} </span>
        <button data-op='+1' onClick={this.handleButtonClick}>+1</button>
      </div>
    );
  }
}
