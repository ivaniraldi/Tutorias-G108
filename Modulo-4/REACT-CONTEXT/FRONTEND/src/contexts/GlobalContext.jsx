import { createContext, useEffect, useState } from "react";


// EL OBJETIVO DEL EJERCICIO ES CREAR UN ESTADO LLAMADO "tema" QUE CAMBIE DE "CLARO" A "OSCURO" Y VICEVERSA, ESTO ATRAVES DE UN CONTEXTO CONSUMIDO EN LA BARRA DE NAVEGACIÓN (DONDE CON UN BOTON CAMBIAMOS EL ESTADO)



export const GlobalContext = createContext()

const GlobalProvider = ({ children }) =>{

    const [user, setUser] = useState(null)

    const [tema, setTema] = useState("light")


    useEffect(()=>{
        if(tema == "light"){
            document.body.style.backgroundColor = "white"
        }
        else{
            document.body.style.backgroundColor = "#1b1b1b"
        }
    },[tema])


    return(
        <GlobalContext.Provider value={{user, setUser, tema, setTema }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider