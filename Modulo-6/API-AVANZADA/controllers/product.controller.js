const { pool } = require("../utils/dbConnection")
const format = require('pg-format');

const getProducts = async ({ limit = 2 , page = 0, order_by = "id_ASC"}) => {
    const [campo, orden] = order_by.split("_")
    
    let offset = page * limit;

    let formattedQuery = format("SELECT * FROM products ORDER BY %s %s LIMIT %s OFFSET %s", campo, orden, limit, offset )

    try {
        const result = await pool.query(formattedQuery)

        if(result.rowCount == 0){
            throw new Error("No hay productos en la lista ahora mismo.")
        }

        return result.rows

    } catch (error) {
        return error.message
    }
}

const getFilteredProducts = async({stock_min, price_max})=>{
    console.log(stock_min, price_max)

    let filtros = [];

    if(price_max) filtros.push(`price <= ${price_max}`)

    if(stock_min) filtros.push(`stock >= ${stock_min}`)
    


    let consulta = "SELECT * FROM products"

    console.log(filtros)

    if(filtros.length > 0){
        filtros = filtros.join(" AND ")
        consulta += ` WHERE ${filtros}`
    }

    const result = await pool.query(consulta)
    return result.rows
}

const getProductByID = async(id)=>{
    let consulta = "SELECT * FROM products WHERE id = $1"
    const result = await pool.query(consulta, [id])
    return result.rows[0]
}

const postProduct = async(title, price, description, stock, imageURL, category)=>{
    let consulta = "INSERT INTO products (title, price, description, stock, imageURL, category) VALUES ($1,$2,$3,$4,$5,$6)"
    let values = [title, price, description, stock, imageURL, category]
    try {
        await pool.query(consulta, values)
        return "Producto creado con éxito."
    } catch (error) {
        return error.message
    }

}


const prepararHATEOAS = async(listaRecursos, limit = 2, page = 0)=>{
    
    const result = await pool.query("SELECT * FROM products")

    const total = result.rowCount
    const paginaActual = Number(page)
    const limite = Number(limit)
    const hayPaginaSiguiente = (paginaActual + 1) * limite < total

    const results = listaRecursos.map((p) => { 
        return { title: p.title, url: `http://localhost:3000/products/${p.id}` }
    })

    return {
        total,
        next: hayPaginaSiguiente ? `http://localhost:3000/products/?limit=${limite}&page=${paginaActual + 1}` : null,
        previous: paginaActual > 0 ? `http://localhost:3000/products/?limit=${limite}&page=${paginaActual - 1}` : null,
        results
    }
}

module.exports = { getProducts, postProduct, getFilteredProducts, getProductByID, prepararHATEOAS }