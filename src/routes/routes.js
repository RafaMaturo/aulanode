const express = require('express');
const router = express.Router();

//exemplo e uma rota GET
router.get('/exemplo', (req, res) => {
    res.send('Rota de exemplo');
});

//exporte o roteador para que ele possa ser usado no index.js
module.exports = router;