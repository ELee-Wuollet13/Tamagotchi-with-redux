import React from 'react';
import PropTypes from 'prop-types';
import Tamagotchi from './Tamagotchi'
import { v4 } from 'uuid';

function TamagotchiList(props) {
  console.log('props in TamagotchiList: ' + props);
  return (
    <div>
      {props.tamagotchiList.map((tamagotchi) =>
          <Tamagotchi name = {tamagotchi.name}
            hunger={tamagotchi.hunger}
            sleepiness={tamagotchi.sleepiness}
            boredom={tamagotchi.boredom}
            dead={tamagotchi.dead}
            key={tamagotchi.id}/>
      )}
    </div>
  );
}


TamagotchiList.propTypes = {
  tamagotchiList: PropTypes.array
};

export default TamagotchiList;
