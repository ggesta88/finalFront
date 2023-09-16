import React from 'react'
import { useOdontologoStates } from '../Contex/Context'
import Card from '../Components/Card'

const Home = () => {

    const {odontologoState} = useOdontologoStates()  

return (
    <div>
        {odontologoState.map(odon => <Card odo={odon} key={odon.id} />)}
    </div>
)
}

export default Home


