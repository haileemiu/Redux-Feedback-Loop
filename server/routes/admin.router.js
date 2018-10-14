const express = require('express');
const pool = require('../modules/pool.js');

let router = express.Router();

// Get the feedback results from the db
router.get('/', (req, res) => {
  
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

// // Delete a survey
router.delete('/:id', (req, res) => {

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