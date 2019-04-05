const express = require('express');
const router = express.Router();

router.route('/').get(function(req, res){
    res.redirect('/emaillist/list');
});

module.exports = router;