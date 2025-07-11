import db from '../config/db.js'

// Buscar todas las pruebas
export async function modelGetPruebas(){
    const [rows] =  await db.query('SELECT * FROM prueba')
    return rows
}
// Buscar una prueba por su id
export async function modelGetPrueba(id){
    const [rows] =  await db.query('SELECT * FROM prueba WHERE idprueba = ?', [id])
    return rows[0]
}

// Crear una prueba
export async function modelCreatePrueba(nombre,apellido){
    const [result] = await db.query('INSERT INTO prueba (nombre,apellido) VALUES (?,?)', [nombre,apellido])
    return modelGetPrueba(result.insertId)
}

// Actualizar una prueba
export async function modelUpdatePrueba(id,nombre,apellido){
    const [result] = await db.query('UPDATE prueba SET nombre = ?, apellido = ? WHERE idprueba = ?', [nombre,apellido,id])
    if (result.affectedRows === 0) return null
    return modelGetPrueba(id)
}

// Eliminar una prueba
export async function modelDeletePrueba(id){
    const [result] = await db.query('DELETE FROM prueba WHERE idprueba = ?', [id])
    return result.affectedRows
}