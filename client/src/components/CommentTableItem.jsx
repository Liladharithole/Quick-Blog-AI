import React from "react";
import { assets } from "../assets/assets.js";

const CommentTableItem = ({ comment, fetchComment, index }) => {
  const { blog, createdAt, _id } = comment;
  const blogDate = new Date(createdAt);

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
