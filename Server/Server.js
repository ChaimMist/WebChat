const express = require('express');
const path = require('path');
// const mdb = require('mongodb').MongoClient;
const app = express();

app.use(express.static('../build'));


app.get('/api/get-contacts', function (req, res) {
    let contacts = [
        {name: "John Doe", phone: "123456789"},
        {name: "Chaim Mistriel", phone: "0538815816"}
    ]
    res.json(contacts);
})

app.get('/', function (req, res) {
    //send back index.html file
    console.log("sending index.html")
    res.sendFile(path.resolve('../build/index.html'));
})

app.get('/chat', function (req, res) {
    //send back index.html file
    console.log("sending index.html")
    res.sendFile(path.resolve('../build/index.html'));
});

app.get('/home', function (req, res) {
    //send back index.html file'
    console.log("sending index.html")
    res.sendFile(path.resolve('../build/index.html'));
});


app.listen(3000, function () {
    console.log('Server running at http://localhost:3000');
});


