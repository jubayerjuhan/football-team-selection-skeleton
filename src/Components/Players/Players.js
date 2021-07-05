import React from 'react';

const Players = (props) => {
    const player = props.player;
    const {first_name, last_name, team} = player;
    return (
        <div>
            <h1>{first_name} {last_name}</h1>
            <h3>{team}</h3>
            <button onClick = {()=> props.handleClick(player)}>Add Player</button>
        </div>
    );
};

export default Players;