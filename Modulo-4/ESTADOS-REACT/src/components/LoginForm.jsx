import { useState } from "react"



function LoginForm (){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleChangeEmail = (evento)=>{
        setEmail(evento)

    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        
        if(password.length < 6){
            alert("La contraseña debe tener al menos 6 caracteres")
            return
        }
        console.log("Estoy enviando el form")
        alert("Sesión iniciada!")
        setEmail("")
        setPassword("")
    }

    return(
        <form className="loginForm" action="" onSubmit={(e)=>{ handleSubmit(e) }}>
            <h2>Iniciar sesión</h2>


            <label htmlFor="Email">Ingrese su correo electronico</label>
            <br />
            <input type="email" placeholder="ejemplo@email.com" value={email} onChange={(evento) =>{ handleChangeEmail(evento.target.value) }}/>
            <br />
            <label htmlFor="Contraseña">Ingrese su contraseña</label>
            <br />
            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="********"/>
            <br />
            <button type="submit">Iniciar sesión</button>
        </form>
    )
}

export default LoginForm