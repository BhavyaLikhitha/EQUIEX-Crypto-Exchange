
import React from "react";
import { Blog } from "../types/types"; // Adjust path as needed

interface BlogListProps {
  blogs: Blog[];
  setBlogs: React.Dispatch<React.SetStateAction<Blog[]>>; // Make sure it's typed correctly
}

const BlogList: React.FC<BlogListProps> = ({ blogs, setBlogs }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          {/* Add any logic to update or delete blogs using setBlogs */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
