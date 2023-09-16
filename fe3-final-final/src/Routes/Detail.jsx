import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {

    const[odon, setOdontologo] = useState({})
    const {id} = useParams()
    console.log(id)
    const url = 'https://jsonplaceholder.typicode.com/users/'+id

    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setOdontologo(data)
            
        })

    },[])

  return (
    <div>
      <h1>Nombre: {odon.name}</h1>
      <h3>Email: {odon.email}</h3>
      <h3>Telefono: {odon.phone}</h3>
      <h3>Sitio Web: {odon.website}</h3>
    </div>
  )
}

export default Detail
