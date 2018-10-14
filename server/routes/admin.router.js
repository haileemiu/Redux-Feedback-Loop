const express = require('express');
const pool = require('../modules/pool.js');

// Declare router variable to be used below
let router = express.Router();

// Get the feedback results from the sql db
router.get('/', (req, res) => {
    const query = `SELECT * FROM "feedback";`

    pool.query(query)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            res.sendStatus(500);
        })
}) // END feedback results

// Delete a feedback entry
router.delete('/:id', (req, res) => {
    const query = `DELETE FROM "feedback" WHERE "id"=$1;`

    pool.query(query, [req.params.id])
        .then(results => {
            res.sendStatus(201);
        })
        .catch(error => {
            res.sendStatus(500);
        })
}) // END delete 

module.exports = router;