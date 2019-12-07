import React from 'react';
import {Counter} from './Counter';

// eslint-disable-next-line require-jsdoc
export class App extends React.Component {
  state = {
    isHidden: true,
    counter: 0,
  };

  handleCounter = (count) => {
    this.setState({counter: count});
  };

  // eslint-disable-next-line require-jsdoc
  render() {
    const {isHidden, counter} = this.state;
    return (
      <div>
        {
          !isHidden &&
          <Counter
            init={counter} onSaveCounter={this.handleCounter}
          />
        }
        <br/>
        <button
          onClick={() => this.setState({isHidden: !isHidden})}>Show!
        </button>
      </div>
    );
  }
}
