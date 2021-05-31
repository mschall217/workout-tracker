const router = require("express").Router();
const path = require("path");

router.get('/', (req, res) => {
    res.sendFile(path.join(_dirname, '../public/index.html'));
})

router.get('/excercise', (req, res) => {
    res.sendFile(path.join(_dirname, '../public/excercise.html'));
})

router.get('/stats', (req, res) => {
    res.sendFile(path.join(_dirname, '../public/stats.html'));
})

module.exports = router;