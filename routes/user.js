const express = require('express');
const router = express.Router();
const users = require('./data.json');

router.post('/login', async function (req, res, next) {
    try {
        let { username, password } = req.body;
        const result = [users[0][0], users[1][0]]
        if(users[0][0] == username && users[1][0] == password){
            res.send({ status: 1, data: result });
        }
    } catch (error) {
        res.send({ status: 0, error: error });
    }
});
module.exports = router;
