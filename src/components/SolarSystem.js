import React from 'react';
import Title from './Title';

/* Fonte: live-lectures
https://github.com/tryber/sd-021-a-live-lectures/blob/lecture/10.2/course/src/App.js */

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
      </div>
    );
  }
}

export default SolarSystem;
