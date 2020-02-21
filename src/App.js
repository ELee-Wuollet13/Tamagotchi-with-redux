import React from 'react';
import './App.css';
import TamagotchiList from './components/TamagotchiList';
import NewTamagotchi from './components/NewTamagotchi';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Error404 from './components/Error404';
import Admin from './components/Admin';
// import Moment from 'moment';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTamagotchiList: []
    };
    this.handleNewTamagotchi = this.handleNewTamagotchi.bind(this);
    this.handleUpdateHunger = this.handleUpdateHunger.bind(this);
  }

  handleNewTamagotchi(newTamagotchi) {
    let newTamagotchiList = this.state.masterTamagotchiList.slice();
    newTamagotchiList.push(newTamagotchi);
    this.setState({masterTamagotchiList: newTamagotchiList});
  }

  updateTamagotchiTime() {
    let newTamagotchiList = this.state.masterTamagotchiList.slice();
      newTamagotchiList.forEach((tamagotchi) => {
        if (tamagotchi.hunger < 100) {
          tamagotchi.hunger += 1;
          tamagotchi.sleepiness += 1;
          tamagotchi.boredom += 1
          } else {
            return tamagotchi.dead = true
          }
        }
      );
    this.setState({masterTamagotchiList: newTamagotchiList});
  }

  componentDidMount() {
    this.timeElapsed = setInterval(() =>
      this.updateTamagotchiTime(),
    1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timeElapsed);
  }

  handleUpdateHunger(tamagotchiId) {
    let newTamagotchiList = this.state.masterTamagotchiList.slice();
    let newTamagotchi = this.state.masterTamagotchiList.filter(tamagotchi => tamagotchi.id === tamagotchiId)
    let newHunger = newTamagotchi[0].hunger - 3;
    newTamagotchi[0].hunger = newHunger;
    this.setState({masterTamagotchiList: newTamagotchiList});
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TamagotchiList tamagotchiList={this.state.masterTamagotchiList} onButtonClick={this.handleUpdateHunger} />} />
          <Route path='/new-tamagotchi' render={()=><NewTamagotchi onNewTamagotchi={this.handleNewTamagotchi} />} />
          <Route path='/admin' render={(props)=><Admin tamagotchiList={this.state.masterTamagotchiList} currentRouterPath={props.location.pathname} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
