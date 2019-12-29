import React from 'react';
import {Message} from './Message';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

describe('<Message>', () => {
  it('renders our Message', () => {
    const props = {
      author: 'Klim',
      content: 'AnyText',
      date: '2019-12-29 13:06',
    };
    const elem = renderer.create(<Message {...props} />).toJSON;
    expect(elem()).toMatchSnapshot();
  });

  it('message w/o name', () => {
    const props = {
      content: 'AnyText',
      date: '2019-12-29 13:24',
    };
    const elem = shallow(<Message {...props}/>);
    expect(elem.contains(<span
      className='user-name'>Anonymous</span>)).toBe(true);
  });
});
