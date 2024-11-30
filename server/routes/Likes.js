const express = require('express')
const router = express.Router()
const { Likes } = require('../models')
const { validateToken } = require('../middlewares/AuthMiddleware')
const { where } = require('sequelize')

router.post('/', validateToken, async (req,res) => {
    const {postId} = req.body
    const userId = req.user.id
    const found = await Likes.findOne({where: {postId: postId, userId: userId}})
    if(!found) {
        await Likes.create({postId: postId, userId: userId})
        res.json({liked: true})
    }
    else {
        await Likes.destroy({where: {postId: postId, userId: userId}})
        res.json({liked: false})
    }
})

module.exports = router