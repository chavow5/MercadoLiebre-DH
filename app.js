const express = require('express');
const app = express();

// llamar al servidor desde un puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
    const now = new Date(); // agrego una hora para saber el tiempo de actualizacion 
    console.log(`Actualizacion: ${now}`)
});


// para poner la app en publico y estatico
const path = require('path')
const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));

// para llamar al index.html uso app.get
// app.get('/', (req, res) =>{
//     res.sendFile(path.resolve(__dirname, 'clases\primer-proyecto\views\index.html'));
// });

// Rutas de Archivos
// principal index
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
    //me entro con join no con resolve
});

// login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});

// registro 
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

// formulario
app.post('/sumbit-form', (req, res) =>{
    res.redirect('./views/index.html');
}); // toma el proceso del formulario y vulve a la carpeta anterior 
