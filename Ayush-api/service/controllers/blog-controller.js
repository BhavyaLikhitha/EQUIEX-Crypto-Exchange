import Blog from "../models/blogs.js"; // Import Blog model

// Controller to get all blogs
export const getAll = async (req, res) => {
  try {
    const blogs = await Blog.find(); // Fetch all blogs
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to create a new blog
export const post = async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to get a blog by ID
export const getById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.blogId);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to update a blog by ID
export const update = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.blogId, req.body, {
      new: true,
    });
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to delete a blog by ID
export const remove = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.blogId);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to get blogs by a specific author
export const getByAuthor = async (req, res) => {
  try {
    const blogs = await Blog.find({ "author.userId": req.params.userId });
    if (!blogs.length) return res.status(404).json({ message: "No blogs found" });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
