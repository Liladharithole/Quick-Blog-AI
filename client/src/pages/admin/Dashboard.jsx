import React, { useEffect, useState } from "react";
import { assets, dashboard_data } from "../../assets/assets";
import BlogTableItem from "../../components/admin/BlogTableItem"

const Dashboard = () => {
  const [dashBoardData, setDashBoardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });

  const fetchDashboardData = async () => {
    setDashBoardData(dashboard_data);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="flex-1 p-4 md:p-10 bg-blue-50/50">
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all duration-300">
          <img src={assets.dashboard_icon_1} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashBoardData.blogs}
            </p>
            <p className="text-gray-500 font-light">Blogs</p>
          </div>
        </div>
        {/* comments */}
        <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all duration-300">
          <img src={assets.dashboard_icon_2} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashBoardData.comments}
            </p>
            <p className="text-gray-500 font-light">Comments</p>
          </div>
        </div>
        {/* drafts */}
        <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all duration-300">
          <img src={assets.dashboard_icon_3} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashBoardData.drafts}
            </p>
            <p className="text-gray-500 font-light">Drafts</p>
          </div>
        </div>
      </div>
      {/* recent blogs */}
      <div>
        <div className="flex items-center gap-3 m-4 mt-6 text-gray-600">
          <img src={assets.dashboard_icon_4} alt="" />
          <p className="text-xl font-semibold">Recent Blogs</p>
        </div>
        <div className="relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
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
              {dashBoardData.recentBlogs.map((blog, index) => {
                return (
                  <BlogTableItem
                    key={blog._id}
                    blog={blog}
                    fetchBlog={fetchDashboardData}
                    index={index + 1}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
