import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext()

const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    useEffect(() =>{
        const getProducts = async ( ) =>{
            let res = await fetch("http://localhost:5000/api/pizzas") 
            let data = await res.json()
            setProducts(data)
        }
        getProducts()
        console.log("ÉXITO!!! ESTAMOS OBTENIENDO LOS PRODUCTOS DESDE EL CONTEXTO")


    },[])


    return (
        <ProductContext.Provider  value={{products}}>
          { children }  
        </ProductContext.Provider>
    )
}

export default ProductProvider