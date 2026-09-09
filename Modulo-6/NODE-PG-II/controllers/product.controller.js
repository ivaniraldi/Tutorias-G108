const { pool } = require("../utils/dbConnection")

const getProducts = async () => {
    let consulta = "SELECT * FROM products"
    try {
        const result = await pool.query(consulta)

        if(result.rowCount == 0){
            throw new Error("No hay productos en la lista ahora mismo.")
        }

        return result.rows

    } catch (error) {
        return error.message
    }
}

const postProduct = async(title, price, description, stock, imageURL)=>{
    let consulta = "INSERT INTO products (title, price, description, stock, imageURL) VALUES ($1,$2,$3,$4,$5)"
    let values = [title, price, description, stock, imageURL]
    try {
        await pool.query(consulta, values)
        return "Producto creado con éxito."
    } catch (error) {
        return error.message
    }

}

module.exports = { getProducts, postProduct }