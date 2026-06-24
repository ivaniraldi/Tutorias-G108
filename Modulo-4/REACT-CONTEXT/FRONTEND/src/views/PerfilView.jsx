import React, { useContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { GlobalContext } from "../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";

export default function PerfilView() {
  const navigate = useNavigate()

  const { user, setUser } = useContext(GlobalContext)
  const [userProfile, setUserProfile] = useState(null)

  useEffect(()=>{
    const getUserData = async()=>{
      if(!user){
        alert("Debes iniciar sesión")
        navigate("/login")
        return
      }

      const res = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user.token}`
        }
      })

      let data = await res.json()

      if(data.error){
        alert(data.error)
        localStorage.removeItem("user")
        setUser(null)
        navigate("/login")
        return
      }
      console.log("NUESTRO FETCH A /api/auth/me me está devolviendo: ", data)
      setUserProfile(data)
    }


    getUserData()

  },[])

  return (
    <>
      <NavBar />
      <div className="container mt-2">
        {userProfile ? (
          <>
            <h2>Mi perfil</h2>
            <h3>Información del usuario con el ID: {userProfile.id}</h3>
            <p>Email: {userProfile.email}</p>
          </>
        ) : (
          <p>Cargando usuario...</p>
        )}
      </div>
    </>
  );
}
