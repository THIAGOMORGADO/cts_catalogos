const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
const morgan = require('morgan')


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));
app.use(cors());

mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser: true, 
      useUnifiedTopology: true 
    });

    requireDir('./models')
   

app.use('/', require('./routes'));

app.listen(3333)