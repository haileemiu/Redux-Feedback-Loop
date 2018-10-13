const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
const feedbackRouter = require('./routes/feedback.router.js')
app.use('/feedback', feedbackRouter);
app.use('/page1', feedbackRouter);
app.use('/page2', feedbackRouter);
app.use('/page3', feedbackRouter);
app.use('/page4', feedbackRouter);
app.use('/page5', feedbackRouter);




/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});