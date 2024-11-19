import blogRouter from "./blog-router.js";  // Import your blog router

const initializeRoutes = (app) => {
  // Routes for handling blog-related operations based on your OpenAPI spec
  app.use("/blogs", blogRouter); // Route for handling general blog operations (GET, POST, etc.)
  
  // You can add other routes if needed (for example, querying by author)
  // app.use("/blogs/author", authorRouter);  // If you plan to have a separate router for author queries
};

export default initializeRoutes;
