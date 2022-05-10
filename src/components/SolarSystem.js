import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

/* Fonte: live-lectures
https://github.com/tryber/sd-021-a-live-lectures/blob/lecture/10.2/course/src/App.js */

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((callback) => (
          <PlanetCard
            key={ callback.name }
            planetImage={ callback.image }
            planetName={ callback.name }
          />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
