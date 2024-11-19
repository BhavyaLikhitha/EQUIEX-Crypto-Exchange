import express from "express";
import * as blogController from "./../controllers/blog-controller.js"; // Import your blog controller

const router = express.Router();

// Route for creating a new blog post and getting all blog posts
router
  .route("/")
  .post(blogController.post)
  .get(blogController.getAll);

// Route for getting, updating, and deleting a specific blog by ID
router
  .route("/:blogId")
  .get(blogController.getById)
  .put(blogController.update)
  .delete(blogController.remove);

// Route for getting all blog posts by a specific author
router
  .route("/author/:userId")
  .get(blogController.getByAuthor);

export default router;
