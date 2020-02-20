import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div>
    <h1> Tamagotchi </h1>
    <Link to='/'>Home</Link> | <Link to='/new-tamagotchi'> Create Tamagotchi</Link>

    </div>
  )
}

export default Header
