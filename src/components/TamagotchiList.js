import React from 'react';
import PropTypes from 'prop-types';
import Tamagotchi from './Tamagotchi'
import { v4 } from 'uuid';

function TamagotchiList(props) {
  return (
    <div>
      {props.tamagotchiList.map((tamagotchi) =>
          <Tamagotchi name = {tamagotchi.name}
            hunger={tamagotchi.hunger}
            sleepiness={tamagotchi.sleepiness}
            boredom={tamagotchi.boredom}
            dead={tamagotchi.dead}
            currentRouterPath={props.currentRouterPath}
            onButtonClick={props.onButtonClick}
            id={tamagotchi.id}
            key={tamagotchi.id}/>
      )}
    </div>
  );
}


TamagotchiList.propTypes = {
  tamagotchiList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onButtonClick: PropTypes.func.isRequired
};

export default TamagotchiList;
