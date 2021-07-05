import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import playerData from '../src/Data/data.json'
import ShowPlayer from "./Components/ShowPlayer/ShowPlayer";
import Addedplayers from "./Components/AddedPlayers/Addedplayers";

function App() {
  const [data, setData] = useState([])
  const [players, setPlayers] = useState([])


  useEffect(() => {
    setData(playerData)
  }, [])

  const handleClick = (player) =>{
    console.log('this is clicked', player)
    const playerList = [...players, player]
    setPlayers(playerList)
  }

  console.log(players)


  return (
    <div className="App">
      <ShowPlayer className = 'flex1' players = {data} handleClick = {handleClick}></ShowPlayer>
      <Addedplayers className="flex2" addedPlayers = {players}></Addedplayers>
    </div>
  );
}

export default App;
