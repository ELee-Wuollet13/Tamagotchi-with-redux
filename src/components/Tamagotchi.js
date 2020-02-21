import React from 'react';
import PropTypes from 'prop-types';

class Tamagotchi extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hunger: this.props.hunger,
      sleepiness: this.props.sleepiness,
      boredom: this.props.boredom,
      dead: this.props.dead
    };
  }

  render(props) {
    if (this.props.dead === true) {
      return(<p>Your tamagotchi has died</p>)
    } else {
      return (
        <div>
        <img src='' alt='a tamagotchi'></img>
        <h1>{this.props.name}</h1>
        <p>{this.props.hunger} | {this.props.sleepiness} | {this.props.boredom}</p>
        <button id='feed' type='button' onClick={()=>this.props.onButtonClick(this.props.id)}>feed </button> <button type='button'>put to bed </button><button type='button'>play </button>
        </div>
      );
    }
  }
}


Tamagotchi.propTypes = {
  name: PropTypes.string.isRequired,
  hunger: PropTypes.number.isRequired,
  sleepiness: PropTypes.number.isRequired,
  boredom: PropTypes.number.isRequired,
  dead: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func,
  id: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string
};

export default Tamagotchi;
