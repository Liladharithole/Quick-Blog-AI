import React from "react";
import { assets } from "../../assets/assets";
const BlogTableItem = ({ blog, fetchBlog, index }) => {
  const { title, createdAt } = blog;
  const blogDate = new Date(createdAt);
  return (
    <tr className="border-y border-gray-300">
      <th className="px-2 py-4 ">{index}</th>
      <td className="px-2 py-4 ">{title}</td>
      <td className="px-2 py-4 max-sm:hidden">
        {" "}
        {blogDate.toLocaleDateString()}
      </td>
      <td className="px-2 py-4 max-sm:hidden">
        <p
          className={`${
            blog.isPublished ? "text-green-600" : "text-orange-600"
          }`}
        >
          {blog.isPublished ? "Published" : "Draft"}
        </p>
      </td>
      <td className="px-2 py-4 flex text-xs gap-3">
        <button className="border px-2 py-0.5 mt-1 rounded cursor-pointer hover:bg-primary/10 transition-all duration-300">
          {blog.isPublished ? "Unpublish" : "Publish"}
        </button>
        <img
          src={assets.cross_icon}
          alt=""
          className="w-8 hover:scale-110 transition-all cursor-pointer"
        />
      </td>
    </tr>
  );
};

export default BlogTableItem;
