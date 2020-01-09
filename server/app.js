const express = require('express');
const app = express();

const artistsRoute = require('./routes/artists')

app.use('/artists', artistsRoute);

app.get('/', (req, res) => {
    res.send('Home'); 
});

app.listen(3000);
