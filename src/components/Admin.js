import React from 'react';
import PropTypes from 'prop-types';
import TamagotchiList from './TamagotchiList';

function Admin(props){
  return (
    <div>
      <h2>Admin</h2>
      <TamagotchiList tamagotchiList={props.tamagotchiList} currentRouterPath={props.currentRouterPath} />
    </div>
  );
}

Admin.propTypes = {
  tamagotchiList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
};

export default Admin;
