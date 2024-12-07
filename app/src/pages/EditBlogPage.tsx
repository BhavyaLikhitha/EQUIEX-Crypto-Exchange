import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Blog } from '../types/types';

interface EditBlogProps {
  blogs: Blog[];
  setBlogs: React.Dispatch<React.SetStateAction<Blog[]>>;
}

const EditBlog: React.FC<EditBlogProps> = ({ blogs, setBlogs }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    const blogToEdit = blogs.find(b => b.id === Number(id));
    if (blogToEdit) {
      setBlog(blogToEdit);
    }
  }, [blogs, id]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      if (blog) {
        setBlog({
          ...blog,
          image: URL.createObjectURL(e.target.files[0])
        });
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (blog) {
      setBlogs(prevBlogs => 
        prevBlogs.map(b => 
          b.id === blog.id 
            ? { 
                ...blog, 
                image: image ? URL.createObjectURL(image) : blog.image 
              } 
            : b
        )
      );
      navigate('/');
    }
  };

  if (!blog) return <div>Blog not found</div>;

  return (
    <div className="blog-form-container">
      <h2>Edit Blog</h2>
      <form className="blog-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            required 
            value={blog.title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea 
            id="content" 
            name="content" 
            required
            value={blog.content}
            onChange={(e) => setBlog({ ...blog, content: e.target.value })}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input 
            type="text" 
            id="author" 
            name="author" 
            required
            value={blog.author}
            onChange={(e) => setBlog({ ...blog, author: e.target.value })}
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
          {blog.image && (
            <div className="image-preview">
              <img 
                src={blog.image} 
                alt="Blog" 
                className="preview-image"
              />
            </div>
          )}
        </div>
        <div className="form-buttons">
          <button type="submit" className="submit-button">Save Changes</button>
          <button 
            type="button" 
            className="cancel-button" 
            onClick={() => navigate('/')}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBlog;