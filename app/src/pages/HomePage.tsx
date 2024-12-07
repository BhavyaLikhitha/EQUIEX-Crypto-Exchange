

import React, { useState } from "react";
import { Link } from "react-router-dom";
import blogimg from "../assets/hero2.jpg";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";
import img5 from "../assets/image5.jpg";
import img6 from "../assets/image6.jpg";
import { Blog } from "../types/types";

interface OtherBlog {
  id: number;
  title: string;
  content: string;
  author: string;
  image: string;
}

interface HomeProps {
  blogs: Blog[];
  setBlogs: React.Dispatch<React.SetStateAction<Blog[]>>;
}

const Home: React.FC<HomeProps> = ({ blogs, setBlogs }) => {
  const [otherBlogs] = useState<OtherBlog[]>([
    {
      id: 3,
      title: "Bitcoin",
      content:
        "Content from another user. This is an example of blog content that should be truncated to fit within the card layout.",
      author: "User A",
      image: img1,
    },
    {
      id: 4,
      title: "CryptoCurrency",
      content:
        "Another blog entry content example to test the truncated text display. This demonstrates the trading card style.",
      author: "User B",
      image: img2,
    },
    {
      id: 5,
      title: "Tech Trends 2024",
      content:
        "Discover the latest in tech, from AI advancements to the newest gadgets shaping our future.",
      author: "Tech Guru",
      image: img3,
    },
    {
      id: 6,
      title: "Healthy Living",
      content:
        "Tips and tricks for maintaining a healthy lifestyle in today's busy world.",
      author: "Wellness Expert",
      image: img4,
    },
    {
      id: 7,
      title: "Travel Diaries",
      content:
        "Join me on my journey around the world, exploring hidden gems and popular destinations.",
      author: "Traveler",
      image: img5,
    },
    {
      id: 8,
      title: "Financial Freedom",
      content:
        "Learn the secrets to managing your finances and achieving financial independence.",
      author: "Finance Pro",
      image: img6,
    },
  ]);

  const handleDelete = (id: number) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to the Blog Platform</h1>
          <p>
            Join a vibrant community of writers and readers where ideas come to life. Share
            your stories, read inspiring posts, and engage with like-minded individuals.
          </p>
          <Link to="/add-blog">
            <button className="add-blog-button">Add New Blog</button>
          </Link>
        </div>
        <img src={blogimg} alt="Hero Image" className="hero-image" />
      </section>

      
<section className="other-blogs">
  <h2>Recent Blogs</h2>
  <div className="blogs-list">
    {otherBlogs.map((blog) => (
      <Link to={`/blog/${blog.id}`} key={blog.id} className="blog-card-link">
      <div className="blog-card">
        {blog.image && <img src={blog.image} alt={blog.title} className="blog-image" />}
        <h3 className="blog-title">{blog.title}</h3>
        <p className="blog-content">{blog.content.substring(0, 100)}...</p>
      </div>
    </Link>
    ))}
  </div>
</section>
      <section className="other-blogs">
        <h2>My Blogs</h2>
        <div className="blogs-list">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              {blog.image && <img src={blog.image} alt={blog.title} className="blog-image" />}
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-content">{blog.content.substring(0, 100)}...</p>
              <p className="blog-author">Author: {blog.author}</p>
              <div className="blog-actions">
                <Link to={`/edit-blog/${blog.id}`}>
                  <button className="edit-button">Edit</button>
                </Link>
                <button className="delete-button" onClick={() => handleDelete(blog.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;