const express = require('express');
const router = express.Router();
const mediaController = require('../controller/mediaController');


// GET
router.get('/', mediaController.getAllMedia);

// GET
router.get('/:id', mediaController.getMediaById);

// POST
router.post('/', mediaController.createMedia);

// PUT
router.put('/:id', mediaController.updateMedia);

// DELETE
router.delete('/:id', mediaController.deleteMedia);

module.exports = router;
