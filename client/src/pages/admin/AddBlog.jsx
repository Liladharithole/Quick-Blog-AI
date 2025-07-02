import React, { useEffect, useRef, useState } from "react";
import { assets, blogCategories } from "../../assets/assets";
import "quill/dist/quill.snow.css";
import Quill from "quill";

const AddBlog = () => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Startup");
  const [isPublished, setIsPublished] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);

  const generateContent = async () => {};

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
          <button
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
          className="mt-4 px-4 py-2 bg-primary text-white rounded cursor-pointer"
        >
          Add Blog
        </button>
      </div>
    </form>
  );
};

export default AddBlog;
