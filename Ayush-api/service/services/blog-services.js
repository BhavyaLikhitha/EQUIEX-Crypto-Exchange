import Blog from "./../models/blogs.js"; // Assuming you have a Blog model

export const save = (newBlog) => {
  const blog = new Blog(newBlog);
  return blog.save();
};
