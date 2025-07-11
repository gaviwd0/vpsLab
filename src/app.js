import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { marked } from 'marked'
// Import de routers
import pruebaRouter from './routes/test.routes.js'


//configuracion de app
const app = express()
app.use(express.json()) 
app.use(cookieParser())
app.use(cors())


// Documentación en la ruta raíz
const docMarkdown = `
# Documentación de la API - Pruebas

Esta es una guía rápida para usar la API de "Pruebas".

**URL Base:** \`https://vpslab-production.up.railway.app\`

---

## Endpoints de Pruebas

### 1. Obtener todas las pruebas

Recupera una lista de todos los registros de prueba.

-   **Método:** \`GET\`
-   **URL:** \`/test\`
-   **Ejemplo con \`curl\`:**
    \`\`\`bash
    curl -X GET https://vpslab-production.up.railway.app/test
    \`\`\`

---

### 2. Obtener una prueba por ID

Recupera un registro de prueba específico por su \`id\`.

-   **Método:** \`GET\`
-   **URL:** \`/test/:id\`
-   **Ejemplo con \`curl\`:**
    \`\`\`bash
    curl -X GET https://vpslab-production.up.railway.app/test/1
    \`\`\`

---

### 3. Crear una nueva prueba

Crea un nuevo registro de prueba.

-   **Método:** \`POST\`
-   **URL:** \`/test\`
-   **Cuerpo de la solicitud (Body - JSON):**
    \`\`\`json
    {
      "nombre": "Carlos",
      "apellido": "Santana"
    }
    \`\`\`
-   **Ejemplo con \`curl\`:**
    \`\`\`bash
    curl -X POST https://vpslab-production.up.railway.app/test \\
    -H "Content-Type: application/json" \\
    -d '{"nombre": "Carlos", "apellido": "Santana"}'
    \`\`\`

---

### 4. Actualizar una prueba existente

-   **Método:** \`PUT\`
-   **URL:** \`/test/:id\`
-   **Ejemplo con \`curl\`:**
    \`\`\`bash
    curl -X PUT https://vpslab-production.up.railway.app/test/3 \\
    -H "Content-Type: application/json" \\
    -d '{"nombre": "Carlos Alberto", "apellido": "Santana"}'
    \`\`\`

---

### 5. Eliminar una prueba

-   **Método:** \`DELETE\`
-   **URL:** \`/test/:id\`
-   **Ejemplo con \`curl\`:**
    \`\`\`bash
    curl -X DELETE https://vpslab-production.up.railway.app/test/3
    \`\`\`
`;

app.get('/', (req, res) => {
    const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Documentación de API</title>
        <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
            h1, h2, h3 { color: #2c3e50; }
            code, pre { background-color: #f4f4f4; border-radius: 4px; padding: 2px 6px; font-family: "Courier New", Courier, monospace; }
            pre { padding: 1em; overflow-x: auto; }
            a { color: #3498db; text-decoration: none; }
            a:hover { text-decoration: underline; }
        </style>
    </head>
    <body>
        ${marked.parse(docMarkdown)}
    </body>
    </html>
    `;
    res.send(html);
});

//rutas
app.use('/test', pruebaRouter)


export default app