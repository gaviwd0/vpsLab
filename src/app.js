import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
// Import de routers
import pruebaRouter from './routes/test.routes.js'


//configuracion de app
const app = express()
app.use(express.json()) 
app.use(cookieParser())
app.use(cors())



//rutas
app.use('/test', pruebaRouter)


export default app