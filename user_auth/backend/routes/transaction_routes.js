const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/authMiddleware');
const Transaction = require('../models/transaction');

router.get('/', verifyToken, function(req, res){
    const userId = req.userId;

    Transaction.findAll({where: {user_id: userId}}).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

module.exports = router;