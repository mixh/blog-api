const { ObjectId } = require("mongodb");
const Blog = require("../model/blog.model");

async function createBlog(blogData) {
  try {
    await Blog.create({
      title: blogData.title,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      post: blogData.post,
    });

    return { msg: "Blog entered in DB", BlogTitle: blogData.title };
  } catch (error) {
    console.log(error);
    throw new Error("Could not insert blog in db");
  }
}

async function getAllPosts() {
  const allBlogs = await Blog.find({});
  return allBlogs;
}

async function updateBlog(blogId, updatedData) {
  try {
    const updatedBlog = {
      $set: updatedData,
    };
    const updateInfo = await Blog.updateOne(
      { _id: new ObjectId(blogId) },
      updatedBlog
    );
    if (!updateInfo.acknowledged || updateInfo.modifiedCount === 0) {
      return null;
    }

    const blog = await Blog.findOne({
      _id: new ObjectId(blogId),
    });
    return blog;
  } catch (error) {
    console.log(error);
  }
}

async function deleteBlog(blogId) {
  try {
    const deleteInfo = await Blog.deleteOne({
      _id: new ObjectId(blogId),
    });
    return deleteInfo.deletedCount > 0;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllPosts,
  updateBlog,
  deleteBlog,
  createBlog,
};
