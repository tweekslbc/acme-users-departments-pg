const express = require('express');
const path = require('path');
const db = require('./db');
const app = express();

const dataLayerUsers = db('./users.json');
const dataLayerDepartments = db('./departments.json');

app.use(express.json());

app.get('/', (req, res, next)=> {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/users', async(req, res, next)=> {
  try {
    res.send(await dataLayerUsers.findAllUsers());
  }
  catch(ex){
    next(ex);
  }
});

app.get('/api/departments', async(req, res, next)=> {
  try {
    res.send(await dataLayerDepartments.findAllDepartments());
  }
  catch(ex){
    next(ex);
  }
} );

app.listen(3000, ()=> console.log('listening on port 3000'));
