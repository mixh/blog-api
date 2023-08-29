const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const router = express.Router();
const { verify } = require("jsonwebtoken");

const {
  createBlog,
  getAllPosts,
  updateBlog,
  deleteBlog,
} = require("../data/blogs");

const KEY = process.env.KEY;

router.get("/", async (req, res) => {
  try {
    const blogs = await getAllPosts();
    res.json(blogs);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Unable to retrieve blog data: " + error.message });
  }
});

/// middleware function for authentication tokens.

function checkAuth(req, res, next) {
  try {
    if (req.method === "OPTIONS") {
      throw new Error("Not authorised : Preflight request");
    }

    const authToken = req.headers.authorization;
    console.log(authToken);
    if (!authToken) {
      throw new Error("Not Authorised, Header Missing");
    }

    const tokenParts = authToken.split(" ");

    if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
      throw new Error("Not authorized, Invalid token");
    }

    console.log(tokenParts);

    const token = tokenParts[1];

    const validateToken = verify(token, KEY);
    req.token = validateToken;

    next();
  } catch (error) {
    console.log("token auth failed", error);
    return next(error);
  }
}

router.use(checkAuth);

router.post("/", async (req, res) => {
  try {
    const newBlog = await createBlog(req.body);
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ error: "Unable to post blog: " + error.message });
  }
});

router.delete("/:blogId", async (req, res) => {
  try {
    const deletedBlog = await deleteBlog(req.params.blogId);
    if (deletedBlog) {
      res.json({ message: "Blog deleted successfully" });
    } else {
      res.json({ message: "Cannot delete the blog" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Unable to delete the blog: " + error.message });
  }
});

router.put("/:blogId", async (req, res) => {
  try {
    const updatedBlog = await updateBlog(req.params.blogId, req.body);
    if (updatedBlog) {
      res.json({ message: "Successfully updated the blog" });
    } else {
      res.json({ message: "Cannot update the blog" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Unable to update the blog: " + error.message });
  }
});

module.exports = router;
