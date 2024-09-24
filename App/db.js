const mongoose = require('mongoose');

const db = 'mongodb://todo-database:27017/todoapp'

mongoose.connect(db, {useNewUrlParser: true})
    .then(()=> console.log('Connected to database '))
    .catch(err => console.log(`Error connecting to db ${err} `))
