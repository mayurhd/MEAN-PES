const PORT = 3000;
const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/api');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());  // this should be just after the express app declaration
app.use(express.static(path.join(__dirname, '../' ,'ngApp/dist')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api',api);

app.get('/', function(req,res){
	res.send("Started");
	app.use(express.static(path.join(__dirname, '../' ,'ngApp/dist/index.html')));
});

app.listen(PORT, function(){
	console.log("server is running on port:"+PORT);
});