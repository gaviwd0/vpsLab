import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    // 1. Asegúrate de que el nombre del archivo coincida con el de tu imagen.
    const imageName = 'irani.jpg'; // Cambia 'irani.jpg' por el nombre de tu archivo de imagen.
    const description = 'هذه فأرة موليتا تاريلّا، تتجول في المدينة من منزل إلى آخر، تسرقها وتصنع عشا في كل واحدة منها.';

    // 2. Construimos la URL de la imagen.
    // Gracias a la configuración en `app.js`, la carpeta 'image' es pública.
    // El navegador podrá acceder a la imagen en una URL como: http://localhost:3000/irani.jpg
    const imageUrl = `/${imageName}`;

    // 3. Creamos una respuesta HTML para mostrar la imagen y la descripción.
    const htmlResponse = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Imagen y Descripción</title>
            <style>
                body { 
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                    display: flex; 
                    align-items: center; 
                    justify-content: center; 
                    min-height: 100vh; 
                    margin: 0;
                    background-color: #f0f2f5;
                }
                .card {
                    background: white;
                    border-radius: 16px;
                    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
                    padding: 24px;
                    text-align: center;
                    max-width: 90%;
                }
                img { max-width: 100%; height: auto; border-radius: 8px; margin-top: 16px; }
                p { font-size: 1.25em; color: #333; margin: 0; }
            </style>
        </head>
        <body>
            <div class="card">
                <p>${description}</p>
                <img src="${imageUrl}" alt="${description}">
            </div>
        </body>
        </html>
    `;

    res.send(htmlResponse);
});

export default router