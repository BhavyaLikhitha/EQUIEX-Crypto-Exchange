import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

const AddBlogForm = ({ onAddBlog }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      onAddBlog({ title, content });
      setTitle("");
      setContent("");
    }
  };

  return (
    <Box component="form" sx={{ mt: 4 }} onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Blog Content"
        multiline
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" type="submit">
        Add Blog
      </Button>
    </Box>
  );
};

export default AddBlogForm;
