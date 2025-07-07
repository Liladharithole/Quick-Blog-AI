import React from "react";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import { toast } from "react-hot-toast";
const BlogTableItem = ({ blog, fetchBlog, index }) => {
  const { title, createdAt } = blog;
  const blogDate = new Date(createdAt);

  const { axios } = useAppContext();

  const deleteBlog = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (!confirm) return;
    try {
      const { data } = await axios.post(`/api/blog/delete/${blog._id}`);
      if (data.success) {
        toast.success(data.message);
        await fetchBlog();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const publishBlog = async () => {
    // const confirm = window.confirm("Are you sure you want to publish this blog?");
    if(!confirm) return;
    try{
      const {data} = await axios.post(`/api/blog/publish/${blog._id}`)
      if(data.success){
        toast.success(data.message);
        await fetchBlog();
      }
      else{
        toast.error(data.message);
      }
    }
    catch(error){
      toast.error(error.message);
    }
  }

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
        <button onClick={publishBlog} className="border px-2 py-0.5 mt-1 rounded cursor-pointer hover:bg-primary/10 transition-all duration-300">
          {blog.isPublished ? "Unpublish" : "Publish"}
        </button>
        <img
          onClick={deleteBlog}
          src={assets.cross_icon}
          alt=""
          className="w-8 hover:scale-110 transition-all cursor-pointer"
        />
      </td>
    </tr>
  );
};

export default BlogTableItem;
