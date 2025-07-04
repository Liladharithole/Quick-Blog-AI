import imagekit from "../configs/imageKit.js";
import Blog from "../models/blog.model.js";
import Comment from "../models/Comment.js";

// Add blog
export const addBlog = async (req, res) => {
  try {
    // Handle both direct fields and JSON string in blog field
    let blogData = req.body;
    if (req.body.blog && typeof req.body.blog === "string") {
      try {
        blogData = JSON.parse(req.body.blog);
      } catch (e) {
        return res.status(400).json({
          success: false,
          message: "Invalid blog data format",
          error: e.message,
        });
      }
    }

    const { title, subtitle, description, category, isPublished } = blogData;
    const imageFile = req.file;

    // Check all required fields are present
    if (
      !title ||
      !subtitle ||
      !description ||
      !category ||
      !imageFile ||
      !isPublished
    ) {
      return res.status(400).json({
        message: "All fields are required",
        missing: {
          title: !title,
          subtitle: !subtitle,
          description: !description,
          category: !category,
          image: !imageFile,
          isPublished: !isPublished,
        },
      });
    }

    // Upload image to imagekit directly from memory
    const response = await imagekit.upload({
      file: imageFile.buffer, // Using buffer from memory
      fileName: `blog-${Date.now()}-${imageFile.originalname}`,
      tags: ["blogs"],
      folder: "/blogs",
    });

    // Generate optimized image URL
    const optimizedImage = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: "auto" },
        { format: "webp" },
        { width: "1280" },
      ],
    });

    // Create blog
    const blog = await Blog.create({
      title: title.trim(),
      subtitle: subtitle.trim(),
      description: description.trim(),
      category: category.trim(),
      image: optimizedImage,
      isPublished: isPublished,
    });

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: blog,
    });
  } catch (error) {
    console.error("Error in addBlog:", error);

    // Handle specific error cases
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: "Validation Error",
        error: error.message,
      });
    }

    res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

// Get all blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true });
    res.status(200).json({
      success: true,
      message: "Blogs fetched successfully",
      data: blogs,
    });
  } catch (error) {
    console.error("Error in getAllBlogs:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

// Get single blog
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.blogId);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Blog fetched successfully",
      data: blog,
    });
  } catch (error) {
    console.error("Error in getSingleBlog:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

// Delete blog
export const deleteBlogById = async (req, res) => {
  try {
    const { blogId } = req.params;
    await Blog.findByIdAndDelete(blogId);

    // delete comments associated with the blog
    await Comment.deleteMany({ blog: blogId });

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

// publish blog
export const publishBlogById = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await Blog.findByIdAndUpdate(blogId);
    blog.isPublished = !blog.isPublished;
    await blog.save();
    res.status(200).json({
      success: true,
      message: "Blog Updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

// add comment
export const addComment = async (req, res) => {
  try {
    const { blog, name, content } = req.body;
    await Comment.create({ blog, name, content });
    res.status(200).json({
      success: true,
      message: "Comment added for review",
    });
  } catch (error) {
    console.error("Error in addComment:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

// get all comments
export const getBlogComments = async (req, res) => {
  try {
    const { blogId } = req.body;
    const comments = await Comment.find({
      blog: blogId,
      isApproved: true,
    }).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      message: "Comments fetched successfully",
      data: comments,
    });
  } catch (error) {
    console.error("Error in get Comments:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

export default addBlog;
