import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Blog } from '../types/types';

interface BlogPostProps {
  blogs: Blog[];
}

const BlogPost: React.FC<BlogPostProps> = ({ blogs }) => {
  const { id } = useParams<{ id: string }>(); // Retrieve the ID from the URL
  const blog = blogs.find(b => b.id === Number(id)); // Find the blog by ID

  if (!blog) {
    return <div>Blog not found</div>; // Handle case where blog is not found
  }

  return (
    <div className="blog-post-container">
      <h1>{blog.title}</h1>
      {blog.image && <img src={blog.image} alt={blog.title} className="blog-post-image" />}
      <p className="blog-post-author">By {blog.author}</p>
      <div className="blog-post-content">{blog.content}</div>
      <Link to="/" className="back-button">Back to Home</Link>
    </div>
  );
};

export default BlogPost;