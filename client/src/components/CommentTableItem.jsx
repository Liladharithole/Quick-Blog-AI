import React from "react";
import { assets } from "../assets/assets.js";
import { useAppContext } from "../context/AppContext";
import { toast } from "react-hot-toast";

const CommentTableItem = ({ comment, fetchComment }) => {
  const { blog, createdAt, _id } = comment;
  const blogDate = new Date(createdAt);

  const { axios } = useAppContext();

  const approveComment = async () => {
    try {
      const { data } = await axios.post(`/api/admin/approve-comment`, {
        id: _id,
      });
      if (data) {
        toast.success(data.message);
        await fetchComment();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteCommnent = async () => {
    try {
      const confirm = window.confirm("Are you sure");
      if (!confirm) return;
      const { data } = await axios.post(`/api/admin/delete-comment`, {
        id: _id,
      });
      if (data) {
        toast.success(data.message);
        await fetchComment();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <tr>
      <td className="px-6 py-4">
        <div className="space-y-2">
          <div>
            <b className="font-medium text-gray-600">Blog:</b>{" "}
            {blog?.title || "N/A"}
          </div>
          <div>
            <b className="font-medium text-gray-600">Name:</b> {comment.name}
          </div>
          <div>
            <b className="font-medium text-gray-600">Comment:</b>{" "}
            {comment.content}
          </div>
        </div>
      </td>
      <td className="px-6 py-4 max-sm:hidden">
        <b className="font-medium text-gray-600">Date:</b>{" "}
        {blogDate.toLocaleDateString()}
      </td>
      <td className="px-6 py-4">
        <div className="inline-flex items-center gap-4">
          {!comment.isApproved ? (
            <img
              onClick={approveComment}
              src={assets.tick_icon}
              alt=""
              className="w-5 hover:scale-110 transition-all cursor-pointer"
            />
          ) : (
            <p className="text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1">
              Approved
            </p>
          )}
          <img
            onClick={deleteCommnent}
            src={assets.bin_icon}
            alt=""
            className="w-5 hover:scale-110 transition-all cursor-pointer"
          />
        </div>
      </td>
    </tr>
  );
};

export default CommentTableItem;
