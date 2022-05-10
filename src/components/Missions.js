import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((missao, index) => (
          <MissionCard
            key={ index }
            name={ missao.name }
            year={ missao.year }
            destination={ missao.destination }
          />
        ))}
      </div>
    );
  }
}

export default Missions;
