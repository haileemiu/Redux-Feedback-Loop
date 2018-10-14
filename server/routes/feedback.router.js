const express = require('express');
const pool = require('../modules/pool.js');

let router = express.Router();

// Post feedback data to sql db
router.post('/', (req, res) => {
  const query = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);`;

  pool.query(query, [ req.body.feeling, req.body.understanding, req.body.support, req.body.comments ])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      res.sendStatus(500);
    })
}) // END post feedback

module.exports = router;