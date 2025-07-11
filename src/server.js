import app from './app.js';
import dotenv from 'dotenv'

dotenv.config();
const PORT = process.env.NODE_APP_PORT || 3000


app.listen(PORT , ()=> {
    console.log(`app corriendo en ${PORT}`)
})
