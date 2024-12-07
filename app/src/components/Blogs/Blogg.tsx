

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./HomePage";
import AddBlog from "./AddBlog";
import EditBlog from "./EditBlogPage";
import BlogPost from "./BlogPost";
import { Blog } from "./types";

const Blogg: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([
    {
      id: 1,
      title: "My First Blog",
      content: "This is my first blog content.",
      author: "John Doe",
      image: "path/to/image1.jpg", // Example image path
    },
    {
      id: 2,
      title: "Exploring React",
      content: "Let's dive deep into React today!",
      author: "Jane Smith",
      image: "path/to/image2.jpg", // Example image path
    },
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home blogs={blogs} setBlogs={setBlogs} />} />
        <Route path="/add-blog" element={<AddBlog setBlogs={setBlogs} />} />
        <Route path="/edit-blog/:id" element={<EditBlog blogs={blogs} setBlogs={setBlogs} />} />
        <Route path="/blog/:id" element={<BlogPost blogs={blogs} />} />
      </Routes>
    </Router>
  );
};

export default Blogg;