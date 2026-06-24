import { createContext, useEffect, useState } from "react";


// EL OBJETIVO DEL EJERCICIO ES CREAR UN ESTADO LLAMADO "tema" QUE CAMBIE DE "CLARO" A "OSCURO" Y VICEVERSA, ESTO ATRAVES DE UN CONTEXTO CONSUMIDO EN LA BARRA DE NAVEGACIÓN (DONDE CON UN BOTON CAMBIAMOS EL ESTADO)



export const GlobalContext = createContext()

const GlobalProvider = ({ children }) =>{

    const [user, setUser] = useState(null)

    const [tema, setTema] = useState("light")
    
    const apiKey = import.meta.env.VITE_ENV_API_KEY_OPENAI

    console.log(apiKey)


    useEffect(()=>{
        if(tema == "light"){
            document.body.style.backgroundColor = "white"
        }
        else{
            document.body.style.backgroundColor = "#1b1b1b"
        }
    },[tema])

    useEffect(()=>{
        if(localStorage.getItem("user")){
            setUser(localStorage.getItem("user"))
        }else{
            setUser(null)
        }
    },[])

    const logout = ()=>{
        setUser(null)
        localStorage.removeItem("user")
    }


    return(
        <GlobalContext.Provider value={{user, setUser, tema, setTema, logout }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider