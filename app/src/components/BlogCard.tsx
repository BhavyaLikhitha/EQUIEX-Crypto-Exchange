import React from "react";
import { Link } from "react-router-dom";

interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
}

const BlogCard: React.FC<{ blog: Blog }> = ({ blog }) => {
  return (
    <div className="blog-card">
      <h3>{blog.title}</h3>
      <p>{blog.content.slice(0, 100)}...</p>
      <Link to={`/blog/${blog.id}`}>Read More</Link>
      <Link to={`/edit/${blog.id}`}>Edit</Link>
    </div>
  );
};

export default BlogCard;
