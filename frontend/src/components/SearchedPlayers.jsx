import PlayerSearched from "./PlayerSearched";

function SearchedPlayers({ players }) {

  return (
    <ul>
        {players.map((player) => 
          <PlayerSearched key={player.id} name={player.name}/>
        )}
    </ul>
  )
}

export default SearchedPlayers;
