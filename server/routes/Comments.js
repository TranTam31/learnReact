const express = require('express')
const router = express.Router()
const { Comments } = require('../models')
const { Model, where } = require('sequelize')
const { validateToken } = require('../middlewares/AuthMiddleware')

router.get('/:postId', async (req, res) => {
  const postId = req.params.postId
  const comments = await Comments.findAll({ where: { PostId: postId } })
  res.json(comments)
})

router.post("/", validateToken, async (req, res) => {
  const comment = req.body;
  const username = req.user.username // ồ đoạn này hay nha
  comment.username = username
  await Comments.create(comment);
  res.json(comment);
});

router.delete('/:commentId', validateToken, async (req, res) => {
  const commentId = req.params.commentId
  await Comments.destroy({ where: { id: commentId } })
  res.json('Deleted success')
})
module.exports = router