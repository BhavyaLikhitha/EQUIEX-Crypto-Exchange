import React, { useState, useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";
import BlogList from "./components/BlogList.jsx";
import AddBlogForm from "./components/AddBlogForm";
import { getBlogs, createBlog, updateBlog, deleteBlog } from "./api";

const App = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    const data = await getBlogs();
    setBlogs(data);
  };

  const handleAddBlog = async (newBlog) => {
    const addedBlog = await createBlog(newBlog);
    setBlogs([...blogs, addedBlog]);
  };

  const handleEditBlog = async (id, updatedBlog) => {
    const updated = await updateBlog(id, updatedBlog);
    setBlogs(blogs.map((blog) => (blog._id === id ? updated : blog)));
  };

  const handleDeleteBlog = async (id) => {
    await deleteBlog(id);
    setBlogs(blogs.filter((blog) => blog._id !== id));
  };

  return (
    <Container>
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="h2" color="primary">
          BlogSpace
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Create & Share Blogs
        </Typography>
      </Box>
      <AddBlogForm onAddBlog={handleAddBlog} />
      <BlogList blogs={blogs} onEditBlog={handleEditBlog} onDeleteBlog={handleDeleteBlog} />
    </Container>
  );
};

export default App;
