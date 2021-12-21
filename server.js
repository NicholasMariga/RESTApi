require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));

app.use(express.json())

//routes
const subscribesRouter = require('./routes/subscribers')
app.use('/subscribers', subscribesRouter);


app.listen(3000, ()=>{
    console.log('server has started');
})