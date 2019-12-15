import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Profile extends Component {
  state = {
    profiles: {
      1: {
        name: 'Урок №1', description: 'Введение в JavaScript',
      },
      2: {
        name: 'Урок №2', description: 'Погружение в React',
      },
    },
  };

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
  };

  render() {
    const {id} = this.props.match.params;
    const {profiles} = this.state;
    if (id === undefined || id > +Object.keys(profiles).length) {
      return (
        <div>
          <h2>Профиль чата #{id}</h2>
          <h4>Надо создать</h4>
        </div>
      );
    }
    const {name, description} = this.state.profiles[id];
    return (
      <div>
        <h2>Профиль чата #{id}</h2>
        <h3>{name}</h3>
        <h4>{description}</h4>
      </div>
    );
  }
}
