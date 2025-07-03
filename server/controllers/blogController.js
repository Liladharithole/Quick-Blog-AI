import imagekit from "../configs/imageKit.js";
import Blog from "../models/blog.model.js";

const addBlog = async (req, res) => {
  try {
    // Handle both direct fields and JSON string in blog field
    let blogData = req.body;
    if (req.body.blog && typeof req.body.blog === 'string') {
      try {
        blogData = JSON.parse(req.body.blog);
      } catch (e) {
        return res.status(400).json({
          success: false,
          message: 'Invalid blog data format',
          error: e.message
        });
      }
    }
    
    const { title, subtitle, description, category, isPublished } = blogData;
    const imageFile = req.file;
    
    // Check all required fields are present
    if (!title || !subtitle || !description || !category || !imageFile || !isPublished) {
      return res.status(400).json({ 
        message: "All fields are required",
        missing: {
          title: !title,
          subtitle: !subtitle,
          description: !description,
          category: !category,
          image: !imageFile,
          isPublished: !isPublished
        }
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
      data: blog 
    });
  } catch (error) {
    console.error('Error in addBlog:', error);
    
    // Handle specific error cases
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        success: false,
        message: 'Validation Error',
        error: error.message 
      });
    }
    
    res.status(500).json({ 
      success: false,
      message: error.message || 'Internal server error' 
    });
  }
};

export default addBlog;
