const express = require('express');
const router = express.Router();

let projects = [];

// GET /api/projects
router.get('/', (req, res) => {
  res.json({ projects });
});

// PUT /api/projects
router.put('/', (req, res) => {
  const { name, thumbnail, genre, link } = req.body;

  if (!name || !thumbnail || !genre) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const project = {
    name,
    image: thumbnail,
    genre,
    link: link || '#'
  };

  projects.push(project);
  res.status(201).json({ message: 'Project added', project });
});

module.exports = router;
