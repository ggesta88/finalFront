import React from 'react'
import { Link } from 'react-router-dom'
import { useOdontologoStates } from '../Contex/Context'

const Card = ({odon}) => {

    const {favs, setFavs} = useOdontologoStates()
    const addFavs =() =>{
        setFavs([...favs, odon])
    }


  return (
    <div>
        <Link to={'/detail/' + odon.id}>
      <h3>{odon.name}</h3>
      </Link>
      <button onClick={() => setFavs([...favs, odon])}>⭐</button>      
    </div>
  )
}

export default Card
