import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";

const BlogList = ({ blogs, onEditBlog, onDeleteBlog }) => {
  return (
    <Box sx={{ mt: 4 }}>
      {blogs.map((blog) => (
        <Card key={blog._id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h5">{blog.title}</Typography>
            <Typography variant="body1" color="textSecondary">
              {blog.content}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Button variant="outlined" color="primary" onClick={() => onEditBlog(blog._id, blog)}>
                Edit
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ ml: 2 }}
                onClick={() => onDeleteBlog(blog._id)}
              >
                Delete
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default BlogList;
