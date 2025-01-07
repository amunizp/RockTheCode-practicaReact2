import { useEffect, useState } from 'react'
import './Character.css'
import ImageTurn from '../ImageTurn/ImageTurn'

const Character = () => {
  const [character, setCharacter] = useState([])
  useEffect(() => {
    const getCharacter = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character`)
      const characterJson = await response.json()
      return characterJson.results
    }
    getCharacter().then((res) => {
      setCharacter(res)
    })
  }, [])

  return (
    <div className='character'>
      <h1>Character Component</h1>

      {character.map((c) => (
        <div key={c.id}>
          <h2>{c.name}</h2>
          <ImageTurn src={c.image} alt={c.name} />

          <p>{c.status}</p>
        </div>
      ))}
    </div>
  )
}

export default Character
