

const express = require('express');
const fs = require('fs')
const path = require('path');
const user = require('./db.json')
const app = express();

const port = process.env.PORT || 1337
    


app.get('/',  (req, res) => { res.send(user)})

app.listen(port, () => { 
    console.log('listening on port 1337');
})