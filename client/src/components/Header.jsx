import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mt-20 mb-8 flex flex-col items-center">
        <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5  mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary">
          <p>New: AI Feature Integrated</p>
          <img src={assets.star_icon} alt="star" className="w-2.5" />
        </div>
        <h1 className="text-3xl sm:text-6xl xl:text-7xl font-semibold sm:leading-16 text-gray-700">
          Your Own <span className="text-primary">Blogging</span> <br />
          Platform with AI.
        </h1>

        <p className="text-gray-500 my-6 sm:my-8 max-w-2xl m-auto max-sm:text-sm">
          Create your own blog with AI. Write less, get more. This is your
          space to think out loud, share what matters to you, and
          write without filters. Whether it's a blog post, story, poem,
          a single word or a thousand words - write anything you want.
        </p>

        <form className="flex justify-between max-w-lg max-sm:scale-75 max-auto border border-gray-300 bg-white rounded overflow-hidden">
            <input type="text" placeholder="Search For blogs" required className="w-full pl-4 outline-none" />
            <button type="submit" className="bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer">Search</button>
        </form>
      </div>
      <img
        src={assets.gradientBackground}
        alt="header"
        className="absolute -top-50 -z-1 opacity-50"
      />
    </div>
  );
};

export default Header;
