import React from "react";
import { useParams } from "react-router-dom";

const BlogDetail: React.FC = () => {
  const { id } = useParams();

  // Fetch blog data based on the id (could be via API)
  return (
    <div className="blog-detail">
      <h2>Blog Details for #{id}</h2>
      <p>Content of the blog will appear here...</p>
    </div>
  );
};

export default BlogDetail;
