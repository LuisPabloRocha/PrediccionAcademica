const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/prediccion-academica'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/prediccion-academica/' }),
);

app.listen(process.env.PORT || 8080);