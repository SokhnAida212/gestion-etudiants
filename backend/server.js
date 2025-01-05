const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const etudiantRoutes = require('./app/routes/etudiants'); // Importation du fichier des routes

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/etudiants', etudiantRoutes); // Cela associe la route /api/etudiants au fichier etudiants.js

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
