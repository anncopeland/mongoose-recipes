const express = require('express');
const router = express.Router();

const commentCtrl = require('../controllers/comments');

// http://localhost:3000/recipes/12345/comments
router.post('/recipes/:id/comments', commentCtrl.addComment);

//http://localhost:3000/comments/12345
router.delete('/comments/:id', commentCtrl.deleteComment);

module.exports = router;