import React, { useState } from 'react'

export default function ColorForm() {
    const [color, setColor ] = useState("white")

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(color)
        const title = document.querySelector("#title")
        title.style.color = color
    }

  return (  
    <div>
        <h2 id='title' style={{color: "white"}} >Cambio de color con estados</h2>
        <form onSubmit={(e) =>{ handleSubmit(e) }} >
            <input type="color" value={color} onChange={(e)=>{setColor(e.target.value)}}/>
            <button type='submit'>Cambiar color del titulo</button>
        </form>
    </div>
  )
}
