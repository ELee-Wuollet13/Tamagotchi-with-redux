import React from 'react';
import './App.css';
import TamagotchiList from './components/TamagotchiList';
import NewTamagotchi from './components/NewTamagotchi';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Error404 from './components/Error404';
// import Moment from 'moment';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTamagotchiList: []
    };
    console.log(this.state);
    this.handleNewTamagotchi = this.handleNewTamagotchi.bind(this);
  }

  handleNewTamagotchi(newTamagotchi) {
    let newTamagotchiList = this.state.masterTamagotchiList.slice();
    newTamagotchiList.push(newTamagotchi);
    this.setState({masterTamagotchiList: newTamagotchiList});
  }

  updateTamagotchiTime() {
    let newTamagotchiList = this.state.masterTamagotchiList.slice();
      newTamagotchiList.forEach((tamagotchi) => {
        if (tamagotchi.hunger < 10) {
          tamagotchi.hunger += 1;
          tamagotchi.sleepiness += 1;
          tamagotchi.boredom += 1
          }else {
            return tamagotchi.dead = true
          }
        }
      );
    this.setState({masterTamagotchiList: newTamagotchiList});
    console.log(this.state.masterTamagotchiList);
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

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TamagotchiList tamagotchiList={this.state.masterTamagotchiList} />} />
          <Route path='/new-tamagotchi' render={()=><NewTamagotchi onNewTamagotchi={this.handleNewTamagotchi} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
