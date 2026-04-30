import React, { useState } from 'react'

export default function ToDoList() {

    const [tareas, setTareas] = useState(
        [
        {id: 1, nombre: "Pasear perro.", completada: false},
        {id: 2, nombre: "Hacer tarea", completada: true}
    ])


    const [tarea, setTarea] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()

        let nuevaTarea = { id: tareas.length+1 , nombre: tarea, completada: false }

        setTareas([...tareas, nuevaTarea])
    }

  return (
    <div className='container'>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
            <input type="text" value={tarea} onChange={(e)=> setTarea(e.target.value)} />
            <button type='submit'>Agregar Tarea</button>
        </form>
        <div >
            {tareas.map(
                (t, indice)=>
                <p key={indice}> {t.id} - {t.nombre} - {t.completada? "Completada" : "No completada"}</p>
                )}
        </div>
    </div>
  )
}
