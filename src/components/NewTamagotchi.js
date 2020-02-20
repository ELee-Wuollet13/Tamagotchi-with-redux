import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewTamagotchi(props) {
  let _name = null;

  function handleNewTamagotchi(event) {
    event.preventDefault();
    props.onNewTamagotchi({name: _name.value, hunger: 0, sleepiness: 0, boredom: 0, dead: false, id: v4()});
    _name.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewTamagotchi}>
        <input
          type='text'
          id='name'
          placeholder='Tamagotchi name'
          ref={(input) => {_name = input}}/>
        <button type='submit'>Create Tamagotchi</button>
      </form>
    </div>
  );
}

NewTamagotchi.propTypes = {
  onNewTamagotchi: PropTypes.func
};

export default NewTamagotchi;
