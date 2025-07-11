import {
getPruebaById,
getPruebas,
createPrueba,
updatePrueba,
deletePrueba
} from '../controllers/test.controllers.js'

import { Router } from 'express'

const router = Router()

router.get('/',getPruebas)
router.get('/:id',getPruebaById)
router.post('/',createPrueba)
router.put('/:id',updatePrueba)
router.delete('/:id',deletePrueba)

export default router