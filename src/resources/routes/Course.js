const express = require('express');
const router = express.Router();
const courseController = require('../../app/controllers/CourseController');

router.post('/store', courseController.store);
router.get('/creat', courseController.creat);
router.get('/:id/edit', courseController.update)
router.get('/:slug', courseController.detail);

module.exports = router;