const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
// One router for the admin view
// One router for the feedback survey views
const adminRouter = require('./routes/admin.router');
const feedbackRouter = require('./routes/feedback.router');
app.use('/admin', adminRouter);
app.use('/feedback', feedbackRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});