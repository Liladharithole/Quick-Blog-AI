import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blog_data, comments_data } from "../assets/assets";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import Moment from "moment";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Blog = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  //fetch blog data
  const fetchBlogData = async () => {
    const data = blog_data.find((item) => item._id === id);
    setData(data);
  };
  //fetch comments
  const fetchComments = async () => {
    setComments(comments_data);
  };
  //add comment
  const addComment = async (e) => {
    e.preventDefault();
  };
  //useEffect
  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, []);

  return data ? (
    <div className="relative">
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-50 -z-1 opacity-50"
      />
      <Navbar />

      {/* blog header */}
      <div className="text-center mt-20 text-gray-600">
        <p className="text-primary py-4 font-medium">
          Published on {Moment(data.createdAt).format("DD-MMMM-YYYY")}
        </p>
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800 mb-4">
          {data.title}
        </h1>
        <h2
          className="text-lg sm:text-2xl font-medium max-w-2xl mx-auto text-gray-600 mb-4"
          dangerouslySetInnerHTML={{ __html: data.subTitle }}
        ></h2>
        <p className="inline-block py-1 px-5  rounded-full mb-6 border text-sm border-primary/40 bg-primary/5 font-medium text-medium mx-5">
          {data.author}
        </p>
      </div>
      {/* blog content */}
      <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
        <img src={data.image} alt="" className="rounded-3xl mb-5" />
        <div
          dangerouslySetInnerHTML={{ __html: data.description }}
          className="rich-text max-w-3xl mx-auto"
        ></div>
        {/* comments */}
        <div className="mt-14 mb-10 max-w-3xl mx-auto">
          <p className="text-lg font-medium mb-4">
            Comments ({comments.length})
          </p>
          <div className="flex flex-col gap-4">
            {comments.map((item, index) => (
              <div
                key={index}
                className="relative bg-primary/2 border border-primary/5 max-w-xl p-4 rounded text-gray-600"
              >
                <div className="flex items-center gap-2 mb-2">
                  <img src={assets.user_icon} alt="" className="w-6" />
                  <p className="font-medium">{item.name}</p>
                </div>
                <p className="text-sm max-w-md ml-8">{item.content}</p>
                <p className="absolute right-4 bottom-3 flex items-center gap-2 text-xs">
                  {Moment(item.createdAt).fromNow()}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* comments form */}
        {/* <div className="mt-14 mb-10 max-w-3xl mx-auto">
          <p className="text-lg font-medium mb-4">Leave a Comment</p>
          <form action="">
            <div className="flex flex-col gap-4">
              <input type="text" placeholder="Name" className="border border-gray-300 rounded p-2" />
              <input type="email" placeholder="Email" className="border border-gray-300 rounded p-2" />
              <textarea placeholder="Comment" className="border border-gray-300 rounded p-2"></textarea>
              <button type="submit" className="bg-primary text-white py-2 rounded">Post Comment</button>
            </div>
          </form>
        </div> */}
        <div className="max-w-3xl mx-auto">
          <p className="font-sem mb-4">Add Your Comment</p>
          <form
            onSubmit={addComment}
            className="flex flex-col items-start gap-4 max-w-lg"
          >
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Name"
              required
              className="border border-gray-300 rounded p-2"
            />
            <textarea
              onChange={(e) => setContent(e.target.value)}
              value={content}
              placeholder="Comment"
              className="w-full p-2 border border-gray-300 rounded outline-none h-48"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-primary text-white p-2 px-8 hover:scale-102 transition-all duration-300 cursor-pointer"
            >
              Post Comment
            </button>
          </form>
        </div>
        {/* shred button */}
        <div className="my-24 max-w-3xl mx-auto">
          <p className="font-semibold my-4">
            Share ThisArticle on Social Media
          </p>
          <div className="flex">
            <img src={assets.facebook_icon} alt="facebook" width={50} />
            <img src={assets.twitter_icon} alt="twitter" width={50} />
            <img src={assets.googleplus_icon} alt="googleplus" width={50} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <Loader />
  );
};

export default Blog;
