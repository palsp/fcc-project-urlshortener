const express = require('express');
const router = express.Router()
const urlController = require('../controller/url')

router.post('/api/shorturl/new' , urlController.urlShortenner)

module.exports = router;