import { createContext, useContext, useState, useReducer, useEffect } from 'react'
import React from 'react'
import axios from 'axios'

const OdontologoStates = createContext()

const odontologoReducer =(state, action) =>{
    switch(action.type){
        case 'Get_Odo':
            return action.payload
        default:
            throw new Error()    
    }
}

const localFavs = JSON.parse(localStorage.getItem('favs'))
const initialFavState = localFavs ? localFavs : []
const initialOdontologoState = []

const Context = ({children}) => {
    const[odontologoState, odontologoDispatch] = useReducer(odontologoReducer, initialOdontologoState)
    const [odontologo, setOdontologo] = useState([])
    
    const [favs, setFavs] =useState(initialFavState)
    const url = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() =>{
        axios(url)
        .then(res => odontologoDispatch({type: 'Get_Odo', payload: res.data.results}))
        .catch(err => console.log(err))

    }, [])

    useEffect(() =>{
        localStorage.setItem('favs', JSON.stringify(favs))
    }, [favs])
    

    return (
    <OdontologoStates.Provider value={{odontologo,odontologoState, favs, setFavs}}>
        {children}
    </OdontologoStates.Provider>
    )
}

export default Context

export const useOdontologoStates = () => useContext(OdontologoStates)
