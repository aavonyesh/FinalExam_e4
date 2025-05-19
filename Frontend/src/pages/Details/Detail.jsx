import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
    const [item, setitem] = useState([])
    const {id} = useParams()
    const URL = "http://localhost:3000"
    async function getItem(){
        const res = await axios.get(`${URL}/${id}`)
        console.log('====================================');
        console.log(res.data);
        console.log('====================================');
        setitem(res.data)
    }
    useEffect(() => {
      getItem()
    }, [])
    
  return (
    <div>sdf
        <h3>{item.name}</h3>
        <img src={item.image} width={"200px"} />
        <p>${item.price}</p>
    </div>
  )
}

export default Detail