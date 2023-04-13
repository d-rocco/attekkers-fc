import { React, useState } from 'react'
import './tailwind.css'
import SearchedPlayers from './components/SearchedPlayers';

function App() {
  const [searchedPlayers, setSearchedPlayers] = useState([]);

  const players = [
    {
      name: "Messi",
      id: 1
    },
    {
      name: "Ronaldo",
      id: 2
    },
    {
      name: "Neymar",
      id: 3
    },
    {
      name: "Maradona",
      id: 4
    },
    {
      name: "Zidane",
      id: 5
    },
    {
      name: "De Bruyne",
      id: 6
    }
  ];

  function handlePlayerSearch(e) {
    if (e.target.value.length >= 3) {
      const tmp = players
        .filter(player => player.name.toLowerCase().includes(e.target.value.toLowerCase()));
      setSearchedPlayers(tmp);
    }
    else {
      setSearchedPlayers([]);
    }
  }

  return (
    <div>
      <input type="text" name="player-search" placeholder="Player Search..."
        className="border-2" onChange={handlePlayerSearch}
      />
      <SearchedPlayers players={searchedPlayers} /> 
    </div>
  )
}

export default App
