const express = require('express');
const Comment = require('../models/comment');
const router = express.Router();

// Add a comment to an image
router.post('/:imageId/comments', async (req, res) => {
  const { content } = req.body;
  const comment = await Comment.create({
    content,
    userId: req.user.id,
    imageId: req.params.imageId,
  });
  res.status(201).json(comment);
});

// Fetch comments for an image
router.get('/:imageId/comments', async (req, res) => {
  const comments = await Comment.findAll({ where: { imageId: req.params.imageId } });
  res.json(comments);
});

module.exports = router;
