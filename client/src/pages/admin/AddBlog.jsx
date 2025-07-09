import React, { useEffect, useRef, useState } from "react";
import { assets, blogCategories } from "../../assets/assets";
import "quill/dist/quill.snow.css";
import Quill from "quill";
import { useAppContext } from "../../context/AppContext";
import { toast } from "react-hot-toast";
import { parse } from "marked";

const AddBlog = () => {
  const { axios, token } = useAppContext();
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [category, setCategory] = useState("Startup");
  const [isPublished, setIsPublished] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setIsAdding(true);
      const blog = {
        title,
        subtitle,
        description: quillRef.current.root.innerHTML,
        category,
        isPublished,
      };
      const formData = new FormData();
      formData.append("blog", JSON.stringify(blog));
      formData.append("image", image);

      // Ensure the token is in the headers
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/blog/add", formData, config);
      data.success ? toast.success(data.message) : toast.error(data.message);

      // Reset form
      setTitle("");
      setSubtitle("");
      setCategory("Startup");
      setIsPublished(false);
      setImage(false);
      quillRef.current.root.innerHTML = "";
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to submit blog");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);

  const generateContent = async () => {
    if (!title)
      return toast.error("Title is required");
    try {
      setLoading(true);
      const { data } = await axios.post("/api/blog/generate-content", {
        prompt: title,
      });
      data.success ? toast.success(data.message) : toast.error(data.message);
      quillRef.current.root.innerHTML = parse(data.data);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to generate content"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll"
    >
      <div className="bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 rounded">
        <p>Upload Thumbnail</p>
        <label htmlFor="image">
          <img
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt=""
            className="mt-2 h-16 rounded cursor-pointer"
          />
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            className="hidden"
            required
          />
        </label>
        <p className="mt-4">Blog Title</p>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-lg mt-2 p-2 border text-gray-500 border-gray-300 outline-none rounded focus:ring-1 focus:ring-primary"
        />

        <p className="mt-4">Blog Subtitle</p>
        <input
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-lg mt-2 p-2 border text-gray-500 border-gray-300 outline-none rounded focus:ring-1 focus:ring-primary"
        />
        <p className="mt-4">Blog Description</p>
        <div className="relative max-w-lg h-74 pb-16 sm:pb-10 pt-2">
          <div ref={editorRef}></div>
          {loading && (
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Generating content...
            </p>
          )}
          <button
            disabled={loading}
            type="button"
            onClick={generateContent}
            className="absolute bottom-1 right-2 ml-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer"
          >
            Generate with AI
          </button>
        </div>

        <p className="mt-4">Blog Category</p>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full max-w-lg mt-2 p-2 border text-gray-500 border-gray-300 outline-none rounded focus:ring-1 focus:ring-primary"
        >
          <option value="">Select Category</option>
          {blogCategories.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        <div className="flex gap-2 mt-4">
          <p>Published</p>
          <input
            type="checkbox"
            checked={isPublished}
            onChange={(e) => setIsPublished(e.target.checked)}
            className="scale-150 cursor-pointer"
          />
        </div>
        <button
          type="submit"
          disabled={isAdding}
          className="mt-4 px-4 py-2 bg-primary text-white rounded cursor-pointer"
        >
          {isAdding ? "Adding..." : "Add Blog"}
        </button>
      </div>
    </form>
  );
};

export default AddBlog;
