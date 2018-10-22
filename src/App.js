import React, { Component } from 'react';
import './App.css';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faMinus, faUserMinus } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus, faMinus, faUserMinus);

class App extends Component {
 constructor() {
   super();

   this.state = {
     players: []
   }
 }

 onScoreUpdate = (playerIndex, scoreChange) => {
  this.setState({
    players: this.state.players.map((player, index) => {
      if (index === playerIndex) {
        return { ...player, score: player.score + scoreChange }; // object spread operator
      }
      return player;
    })
  })
}

onPlayerAdd = (playerName) => {
  if (playerName === ''){
    alert('Write player name');
  } else {
    const newPlayer = {
      name: playerName,
      score: 0,
    }
    this.setState({
      players: [...this.state.players, newPlayer]
    });
  }
}

onPlayerRemove = (playerIndex) => {
  this.setState({
    players: this.state.players.filter((__, index) => index !== playerIndex)
  });
}

 render() {
   return (
     <div className="App">
      <AddPlayer
        onPlayerAdd={this.onPlayerAdd}
      />
      <PlayersList
        players={this.state.players}
        onScoreUpdate={this.onScoreUpdate}
        onPlayerRemove={this.onPlayerRemove}
      />
     </div>
   );
 }
}

export default App;