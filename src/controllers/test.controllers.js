import {
    modelGetPrueba,
    modelGetPruebas,
    modelCreatePrueba,
    modelUpdatePrueba,
    modelDeletePrueba
} from '../models/test.models.js'

export async function getPruebaById(req, res) {

    try {
        const { id } = req.params
        const prueba = await modelGetPrueba(id)
        res.json(prueba)
    }
    catch (error) {
        res.status(500).json({ message: 'error en el servidor al buscar una prueba por id',  Error:error.message })
    }
}


export async function getPruebas(req, res) {
    try {
        const pruebas = await modelGetPruebas()
        res.json(pruebas)
    }catch(error){
        res.status(500).json({message:'error en el servidor al buscar todas las pruebas',  Error:error.message} )
    }
}

export async function createPrueba(req, res) {

    try {
        const { nombre, apellido } = req.body
        const newPrueba = await modelCreatePrueba(nombre, apellido)
        res.status(201).json(newPrueba)
    }catch(error){
    res.status(500).json({message:'error en el servidor al crear una prueba' ,  Error:error.message})
    }   
    }

export async function updatePrueba(req, res) {
    try {
        const { id } = req.params
        const { nombre, apellido } = req.body
        const prueba = await modelUpdatePrueba(id, nombre, apellido)
        res.status(200).json(prueba)
        }catch(error){
            res.status(500).json({message:'error en el servidor al actualizar una prueba',  Error:error.message})
        }
}

export async function deletePrueba(req, res) {
    try {
        const { id } = req.params
        const prueba = await modelDeletePrueba(id)
        res.status(200).json(prueba)
    }catch(error){
        res.status(500).json({message:'error en el servidor al eliminar una prueba',  Error:error.message})
    }
}
