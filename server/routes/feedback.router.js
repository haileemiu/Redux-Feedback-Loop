const express = require('express');
const pool = require('../modules/pool.js');

let router = express.Router();

// Get the feedback results from the db
router.get('/', (req, res) => {
  console.log('in admin feedback router get');
  
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

module.exports = router;