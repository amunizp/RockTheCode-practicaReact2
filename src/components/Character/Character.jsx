import { useEffect, useState } from 'react'
import './Character.css'

const Character = () => {
  const [character, setCharacter] = useState([])
  useEffect(() => {
    const getCharacter = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character`)
      const characterJson = await response.json()
      // console.log(characterJson.results)
      return characterJson.results
    }
    getCharacter().then((res) => {
      setCharacter(res.results)
    })
  }, [])

  // const [character, setCharacter] = useState([])
  // useEffect(() => {
  //   fetch(`https://rickandmortyapi.com/api/character`)
  //     .then((res) => res.json())
  //     .then((res) => setCharacter(res.results))
  // }, [])
  return (
    <div className='character'>
      <h1>Character Component</h1>

      {character.map((c) => (
        <div key={c.id}>
          <h2>{c.name}</h2>
          <img src={c.image} alt={c.name} />
          <p>{c.status}</p>
        </div>
      ))}
    </div>
  )
}

export default Character
