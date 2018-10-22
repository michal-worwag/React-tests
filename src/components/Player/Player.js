import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Player = props => (
  <li className="Player">
    <div className="Player__name">{props.name}</div>
    <div className="Player__score">{props.score}</div>
    <div className="Player__button" onClick={() => props.onPlayerScoreChange(1)} ><FontAwesomeIcon icon="plus" className="Icon" /></div>
    <div className="Player__button" onClick={() => props.onPlayerScoreChange(-1)} ><FontAwesomeIcon icon="minus" className="Icon" /></div>
    <div className="Player__button_Remove" onClick={() => props.onPlayerRemove()} ><FontAwesomeIcon icon="user-minus" className="Icon" /></div>
  </li>
);

export default Player;