const express = require('express');
const pool = require('../modules/pool.js');

let router = express.Router();

// Get the feedback results from the db
router.get('/admin', (req, res) => {
  
  const query = `SELECT * FROM "feedback";`

  pool.query(query)
    .then(result => {
      console.log('SUCCESS: result:', result)
      console.log('SUCCESS: result.rows:', result.rows)
      res.send(result.rows);
    })
    .catch(error => {
      console.log('ERROR:', error);
      res.sendStatus(500);
    })
}) // END feedback results

// Post feedback data to db
router.post('/feedback', (req, res) => {

  console.log('req.body:', req.body)
  const query = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);`;

  pool.query(query, [ req.body.feeling, req.body.understanding, req.body.support, req.body.comments ])
    .then(result => {
      console.log('result:', result);
      res.sendStatus(201);
    })
    .catch(error => {
      console.log('ERROR in POST /owners router:', error);
      res.sendStatus(500);
    })
}) // END post feedback

// // Delete a survey
router.delete('/admin/:id', (req, res) => {

  const query = `DELETE FROM "feedback" WHERE "id"=$1;`

  pool.query(query, [req.params.id])
  .then(results => {
    res.sendStatus(201);
  })
  .catch(error => {
    console.log('ERROR:', error);
  })
}) // END delete 


module.exports = router;