import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import './blogs.css';
import hero from '../../assets/hero2.jpg';
import img1 from '../../assets/image1.jpg';
import img4 from '../../assets/image2.jpg';
import img3 from '../../assets/image3.jpg';
import img2 from '../../assets/eth.jpeg';
import blogs from '../../assets/block.jpeg';
import stock from '../../assets/stock.jpeg';
import trading from '../../assets/trading.jpeg';

const Blogs = () => {
  const [recentBlogs] = useState([
    { id: 1, image: img1, title: "Bitcoin Basics", topic: "Cryptocurrency", description: "Learn the fundamentals of Bitcoin and its role in the digital economy." },
    { id: 2, image: img2, title: "Ethereum Explained", topic: "Blockchain", description: "Explore Ethereum and its use in decentralized applications." },
    { id: 3, image: img3, title: "Crypto Wallets", topic: "Wallets", description: "Understand how crypto wallets work and their importance in safeguarding digital assets." },
    { id: 4, image: img4, title: "The Future of Crypto", topic: "Innovation", description: "Discover what the future holds for cryptocurrencies in a digital-first world." },
  ]);

  const [myBlogs, setMyBlogs] = useState([
    { id: 1, image: blogs, title: "My First Crypto Blog", topic: "Personal", description: "Sharing my journey into the world of cryptocurrency." },
    { id: 2, image: stock, title: "Why Blockchain Matters", topic: "Technology", description: "Exploring the significance of blockchain in modern tech." },
    { id: 3, image: trading, title: "Tips for Crypto Trading", topic: "Finance", description: "Practical advice for navigating the volatile crypto market." },
  ]);

  const [editId, setEditId] = useState<number | null>(null);
  const [editFields, setEditFields] = useState({ title: "", topic: "", description: "", image: null as string | null });
  const [isAdding, setIsAdding] = useState(false);
  const [newBlog, setNewBlog] = useState({ title: "", topic: "", description: "", image: null as string | null });

  const handleAddBlog = () => {
    setIsAdding(true);
  };

  const handleEditBlog = (id: number) => {
    const blog = myBlogs.find((b) => b.id === id);
    if (blog) {
      setEditId(id);
      setEditFields({ title: blog.title, topic: blog.topic, description: blog.description, image: blog.image });
    }
  };

  const handleSaveBlog = () => {
    setMyBlogs((prevBlogs:any) =>
      prevBlogs.map((blog:any) =>
        blog.id === editId ? { ...blog, ...editFields } : blog
      )
    );
    setEditId(null);
    setEditFields({ title: "", topic: "", description: "", image: null });
    alert("Blog updated successfully!");
  };

  const handleDeleteBlog = (id: number) => {
    setMyBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
    alert("Blog deleted successfully!");
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as any;
    if (name === "image" && files && files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setEditFields((prev) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setEditFields((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as any;
    if (name === "image" && files && files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewBlog((prev) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setNewBlog((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddSubmit = () => {
    if (!newBlog.title || !newBlog.topic || !newBlog.description || !newBlog.image) {
      alert("Please fill out all fields to add a blog.");
      return;
    }

    const newBlogEntry = {
      id: myBlogs.length + 1,
      title: newBlog.title,
      topic: newBlog.topic,
      description: newBlog.description,
      image: newBlog.image,
    };

    setMyBlogs((prevBlogs:any) => [...prevBlogs, newBlogEntry]);
    setIsAdding(false);
    setNewBlog({ title: "", topic: "", description: "", image: null });
    alert("Blog added successfully!");
  };

  return (
    <div>
      <Header />
      <div className="blogs-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Welcome to Equiex Blogs</h1>
            <h3>Learn more about cryptocurrencies</h3>
            <p>
              Dive into the world of crypto with our informative and engaging blogs. Stay updated with the latest trends
              and learn from experts in the industry.Wanna get your crypto on? Our blogs are here to help you navigate the exciting and sometimes confusing world of digital assets. Whether you're a seasoned investor or a curious newcomer, you'll find something to pique your interest.
            </p>
            <button className="ge-started-btn">Get Started</button>
          </div>
          <div className="her-image">
            <img src={hero} alt="Crypto Blogs" />
          </div>
        </section>

        {/* Recent Blogs */}
        <section className="recent-blogs">
          <h2 className="rec">Recent Blogs</h2>
          <div className="blogs-grid">
            {recentBlogs.map((blog, index) => (
              <div key={index} className="blog-card">
                <img className="blog-image" src={blog.image || "https://via.placeholder.com/150"} alt={blog.title} />
                <h3>{blog.title}</h3>
                <p>Topic: {blog.topic}</p>
                <p>{blog.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* My Blogs */}
        <section className="my-blogs">
          <h2 className="cre">My Blogs</h2>
          <div className="blogs-grid">
            {myBlogs.map((blog) => (
              <div key={blog.id} className="blog-card">
                <img className="blog-image" src={blog.image || "https://via.placeholder.com/150"} alt={blog.title} />
                {editId === blog.id ? (
                  <div className="edit-fields">
                    <input
                      type="text"
                      name="title"
                      value={editFields.title}
                      onChange={handleEditChange}
                      placeholder="Title"
                    />
                    <input
                      type="text"
                      name="topic"
                      value={editFields.topic}
                      onChange={handleEditChange}
                      placeholder="Topic"
                    />
                    <textarea
                      name="description"
                      value={editFields.description}
                      onChange={handleEditChange}
                      placeholder="Short Description"
                    ></textarea>
                    <input
                      type="file"
                      name="image"
                      onChange={handleEditChange}
                    />
                    <button className="save-btn" onClick={handleSaveBlog}>
                      Save
                    </button>
                  </div>
                ) : (
                  <>
                    <h3>{blog.title}</h3>
                    <p>Topic: {blog.topic}</p>
                    <p>{blog.description}</p>
                    <div className="blog-actions">
                      <button className="edit-btn" onClick={() => handleEditBlog(blog.id)}>
                        Edit
                      </button>
                      <button className="delete-btn" onClick={() => handleDeleteBlog(blog.id)}>
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>
          <button className="write-btn" onClick={handleAddBlog}>
            Write a Blog
          </button>
          {isAdding && (
            <div className="add-blog-form">
              <h3>Create Blog</h3>
              <input
                type="text"
                name="title"
                value={newBlog.title}
                onChange={handleAddChange}
                placeholder="Blog Title"
              />
              <input
                type="text"
                name="topic"
                value={newBlog.topic}
                onChange={handleAddChange}
                placeholder="Blog Topic"
              />
              <textarea
                name="description"
                value={newBlog.description}
                onChange={handleAddChange}
                placeholder="Short Description"
              ></textarea>
              <input
                type="file"
                name="image"
                onChange={handleAddChange}
              />
              <button className="create-btn" onClick={handleAddSubmit}>
                Create
              </button>
            </div>
          )}
         
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
