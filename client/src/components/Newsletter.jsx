import React from "react";

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 my-32">
      <h1 className="text-3xl font-semibold">Never miss an Blog!</h1>
      <p className="md:text-lg text-gray-500/70 pb-8">
        Sign up to our newsletter to get the latest blogs and exclusive offers.
      </p>
      <form className="flex item-center justify-between max-w-2xl w-full md:h-13 h-12">
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="w-full pl-4 outline-1 outline-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="md:px-12 px-8 h-full text-white bg-primary/80 hover:bg-primary/60 transition-all duration-300 cursor-pointer rounded-md rounded-l-none"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
