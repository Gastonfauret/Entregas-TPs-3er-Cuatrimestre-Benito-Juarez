const API = 'http://localhost:3000/api'

export const getPlayers = () => fetch(`${API}/players`)