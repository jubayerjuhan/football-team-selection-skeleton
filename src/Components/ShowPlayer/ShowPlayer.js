import React from 'react';
import Players from '../Players/Players.js';

const ShowPlayer = (props) => {
    const players = props.players

    return (
        <div style={{"width": "65%"}}>
            {players.map((player) => <Players key = {player.identifier} player = {player} handleClick = {props.handleClick}></Players>)}
        </div>
    );

    
};

export default ShowPlayer;