import { useEffect, useState } from 'react'
import '../src/styles/App.css'
import { getPlayers } from './api/getPlayers';
import Card from './Card'

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getPlayers()
    .then(res => res.json())
    .then(data => setPlayers(data))
  }, [])

  return (
    <>
      {
        players.map(player => <Card player={player} key={player.id}/>)
      }
    </>
  )
}

export default App
