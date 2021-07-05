import React from 'react';

const Addedplayers = (props) => {
    // console.log(props)
    const addedPlayers = props.addedPlayers;
    console.log(addedPlayers)
    return (
        <div>
            <h2>Players Added</h2>
            {addedPlayers.map((player) => 
                <div>
                    <ul>
                        <li>
                            <img src={player.photo} alt="" />
                            <p>{player.first_name}{player.last_name}</p>
                        </li>
                    
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Addedplayers;