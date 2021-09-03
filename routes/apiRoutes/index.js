const router = require('express');
const noteRoutes = require('../apiRoutes/noteRoutes');

router.use(noteRoutes);

module.exports = router;