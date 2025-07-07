import React, { useEffect } from "react";
// import { blog_data } from "../../assets/assets";
import { useState } from "react";
import BlogTableItem from "../../components/admin/BlogTableItem";
import { useAppContext } from "../../context/AppContext";
import { toast } from "react-hot-toast";

const ListBlog = () => {
  const { axios } = useAppContext();
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get("/api/admin/blogs");
      if (data) {
        setBlogs(data.blogs);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50">
      <h1 className="text-2xl font-semibold">All Blogs</h1>
      <div className="relative h-4/5 mt-4 max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-gray-600 text-left uppercase">
            <tr>
              <th scope="col" className="px-2 py-4 xl:px-6">
                #
              </th>
              <th scope="col" className="px-2 py-4 xl:px-6">
                Title
              </th>
              {/* <th scope="col" className="px-2 py-4 xl:px-6">
                  Author
                </th> */}
              <th scope="col" className="px-2 py-4 xl:px-6 max-sm:hidden">
                Date
              </th>
              <th scope="col" className="px-2 py-4 xl:px-6 max-sm:hidden">
                Status
              </th>
              <th scope="col" className="px-2 py-4 xl:px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => {
              return (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  fetchBlog={fetchBlogs}
                  index={index + 1}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBlog;
