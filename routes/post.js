const express = require("express");
const Post = require("../models/Post");
/// Cloudinary
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

const router = express.Router();

// add post
router.post("/add", upload.single("cover"), async (req, res) => {
  try {
    // Upload image to cloudinary
    // const result = await cloudinary.uploader.upload(req.file.path);
    const newPost = new Post({
      title: req.body.title,
      summary: req.body.summary,
      content: req.body.content,
      // cover: result.secure_url,
      // cloudinary_id: result.public_id,
    });
    await newPost.save();
    res.status(200).send({ msg: "Post Added Successfully ...", newPost });
  } catch (error) {
    res.status(400).send({ msg: "Can Not Add Post !!!", error });
  }
});

// get all posts

router.get("/all", async (req, res) => {
  try {
    const allPosts = await Post.find();
    res.status(200).send({ msg: "This is the list of all posts...", allPosts });
  } catch (error) {
    res.status(400).send({ msg: "Can Not get all posts !!!", error });
  }
});

// get one post

router.get("/:id", async (req, res) => {
  try {
    const onePost = await Post.findOne({ _id: req.params.id });
    res.status(200).send({ msg: "this is the post...", onePost });
  } catch (error) {
    res
      .status(400)
      .send({ msg: "Can Not get the post with this id !!!", error });
  }
});

// delete post
router.delete("/:_id", async (req, res) => {
  try {
    const {_id} = req.params;
    const result = await Post.findOneAndDelete({_id});
    res.status(200).send({ msg: "Post Deleted..." });
  } catch (error) {
    res
      .status(400)
      .send({ msg: "Can Not delete the post with this id !!!", error });
  }
});

// edit post

router.put("/:_id", async (req, res) => {
  try {
    const {_id} = req.params;
    const result = await Post.findByIdAndUpdate({_id}, { $set: { ...req.body }})
    res.status(200).send({ msg: "Post updated..." });
  } catch (error) {
    res
      .status(400)
      .send({ msg: "Can Not update the post with this id !!!", error });
  }
});

module.exports = router;
