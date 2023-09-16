import React from 'react'
import { useOdontologoStates } from '../Contex/Context'
import Card from '../Components/Card'

const Favs = () => {

    const {favs} = useOdontologoStates()

  return (
    <div>
      {favs.map(fav => <Card odon={fav} key={fav.id}/>)}
    </div>
  )
}

export default Favs
