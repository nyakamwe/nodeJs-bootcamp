// import Post model
const Post = require("../models/Post")

const post_get_all = async (req, res) => {
	const posts = await Post.find()
	return res.json({data:posts, status:200, message:"Fetched successfully"})
}

const post_create = async (req, res) => {
	const post = new Post({
		title: req.body.title,
		content: req.body.content,
	})
	await post.save()
	return res.status(201).json({data:post, status:201, message:"Post Saved successfully"})
}

const post_get_one = async (req, res) => {
	try {
		const post = await Post.findOne({ _id: req.params.id })

		return res.status(200).json({data:post, message:"successfully fetched"});

	} catch {
		return res.status(404).json({error: "Post doesn't exist!"})
	}
}

const post_update = async (req, res) => {
	try {
		const post = await Post.findOne({ _id: req.params.id })

		if (req.body.title) {
			post.title = req.body.title
		}

		if (req.body.content) {
			post.content = req.body.content
		}

		await post.save()
		return res.status(200).json({data:post, message:"Post successfully updated!"});
		
	} catch {
		return res.status(404).json({error: "Post doesn't exist!"})
	}
}

const post_delete = async (req, res) => {
	try {
		await Post.deleteOne({ _id: req.params.id })

		return res.status(204).json({Message: "Post deleted successfully!"})
	} catch {
		return res.status(404).json({error: "Post doesn't exist!"})
	}
}


module.exports = {
	post_get_all,
	post_create,
	post_get_one,
	post_update,
	post_delete
}