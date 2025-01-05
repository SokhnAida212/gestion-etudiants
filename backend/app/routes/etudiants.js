const express = require('express');
const router = express.Router();
const pool = require('../database');

// Récupérer tous les étudiants
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM etudiants');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Ajouter un nouvel étudiant
router.post('/', async (req, res) => {
  const { nom, prenom, email, filiere } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO etudiants (nom, prenom, email, filiere) VALUES ($1, $2, $3, $4) RETURNING *',
      [nom, prenom, email, filiere]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Modifier les informations d’un étudiant
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nom, prenom, email, filiere } = req.body;
  try {
    const result = await pool.query(
      'UPDATE etudiants SET nom = $1, prenom = $2, email = $3, filiere = $4 WHERE id = $5 RETURNING *',
      [nom, prenom, email, filiere, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Étudiant non trouvé' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Supprimer un étudiant
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM etudiants WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Étudiant non trouvé' });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;