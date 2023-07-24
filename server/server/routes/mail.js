const { Router } = require('express');

const router = require('express').Router();

const {getbill} = require("../controllers/userCtrl")


router.post('/cart/getbill/',getbill);


module.exports = router;