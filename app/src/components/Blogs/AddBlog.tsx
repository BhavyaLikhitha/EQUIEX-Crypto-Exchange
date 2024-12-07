
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Blog } from './types';

interface AddBlogProps {
  setBlogs: React.Dispatch<React.SetStateAction<Blog[]>>;
}

const AddBlog: React.FC<AddBlogProps> = ({ setBlogs }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newBlog: Blog = {
      id: Date.now(),
      title,
      content,
      author,
      image: image ? URL.createObjectURL(image) : undefined,
    };
    setBlogs(prevBlogs => [...prevBlogs, newBlog]);
    navigate('/');
  };

  return (
    <div className="blog-form-container">
      <h2>Add New Blog</h2>
      <form className="blog-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            required 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea 
            id="content" 
            name="content" 
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input 
            type="text" 
            id="author" 
            name="author" 
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input 
            type="file" 
            id="image" 
            name="image" 
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div className="form-buttons">
          <button type="submit" className="submit-button">Add Blog</button>
          <button type="button" className="cancel-button" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;