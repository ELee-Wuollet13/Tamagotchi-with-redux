export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TAMAGOTCHI':
      const { name, hunger, boredom, sleepiness, dead, id } = action;
      let newState = Object.assign({}, state, {
        [id]: {
          name: name,
          hunger: hunger,
          boredom: boredom,
          sleepiness: sleepiness,
          dead: dead,
          id: id
        }
      });
      return newState;
    default:
      return state;
  }
}
