const express = require('express');
const path = require('path');

app.use(express.static(__dirname + '/dist/prediccion-academica'));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/prediccion-academica/index.html'));
});

app.listen(process.env.PORT || 8080);