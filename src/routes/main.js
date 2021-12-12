let express = require('express');
let router = express.Router();
let { index, admin } = require('../controllers/mainController');
let adminMiddleware = require('../middlewares/adminUsers');

router.get('/', index);
router.get('/admin', adminMiddleware, admin);

module.exports = router;