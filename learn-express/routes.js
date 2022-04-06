const express = require("express")
const router = express.Router()
const postControllers = require('./controllers/postControllers')

// import our model
const Post = require("./models/Post")

// Get all posts
router.get("/posts", postControllers.post_get_all)

// create post
router.post("/posts", postControllers.post_create)

// getting individual post
router.get("/posts/:id", postControllers.post_get_one)

// updating post
router.patch("/posts/:id", postControllers.post_update)

// delete post
router.delete("/posts/:id", postControllers.post_delete)


module.exports = router