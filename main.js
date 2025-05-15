const cors = require('cors');
const express = require('express');
const app = express();
app.use(express.static('static'));
app.use('/data', express.static('data'));
app.use(cors()); // habilita CORS para todos los orígenes
app.use(express.json());
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
