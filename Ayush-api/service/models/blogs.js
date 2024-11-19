import mongoose from "mongoose";

// Define the Author schema as a subdocument (based on your Blog schema)
const AuthorSchema = new mongoose.Schema({
  userId: {
    required: true,
    type: String, // Changed to String to match OpenAPI spec
  },
  name: {
    required: true,
    type: String,
  },
});

// Define the Blog schema
const BlogSchema = new mongoose.Schema({
  _id: {
    required: true,
    type: String, // Override MongoDB's default ObjectId with String
    alias: "blogId", // Use blogId as an alias for _id
  },
  title: {
    required: true,
    type: String,
  },
  content: {
    required: true,
    type: String,
  },
  author: {
    type: AuthorSchema, // Embedding the AuthorSchema here
    required: true,
  },
  timestamp: {
    required: true,
    type: Date,
    default: Date.now, // Automatically set to the current date/time
  },
});

// Ensure blogId is used for querying instead of _id
BlogSchema.virtual("blogId")
  .get(function () {
    return this._id;
  })
  .set(function (value) {
    this._id = value;
  });

// Create the Blog model
const BlogModel = mongoose.model("Blog", BlogSchema);

export default BlogModel;
