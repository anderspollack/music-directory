const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('A List of Artists'); 
});

router.get('/seagulls', (req, res) => {
    res.send('A Flock of seagulls'); 
});

module.exports = router;
