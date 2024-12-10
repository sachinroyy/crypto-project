/* eslint-disable react/no-unescaped-entities */
// import React from "react";

// import Dropdowns from "../../components/header/Dropdowns";

const Form = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black">
      {/* <Dropdowns/> */}

      <div className="w-full bg-black p-8 shadow-lg">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-400 mb-4">
          Write Blogs and Articles for Us to Enhance Your Readability and Reach
        </h1>

        {/* Paragraph */}
        <p className="text-white mb-8">
          By writing blogs and articles for us, you will get the opportunity to
          showcase your writing skills to a broader audience, improve your
          online presence, and grow your network. Additionally, you'll enhance
          your credibility and readability, which can help you build a
          professional portfolio.
        </p>

        {/* Form Starts */}
        <form className="max-w-[32rem] m-auto ">
          {/* First and Last Name */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-white text-black border border-black rounded py-3 px-4 leading-tight focus:outline-none focus:border-[#fabc2c]"
                id="first-name"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-white text-black border border-black rounded py-3 px-4 leading-tight focus:outline-none focus:border-[#fabc2c]"
                id="last-name"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-6">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-white text-black border border-black rounded py-3 px-4 leading-tight focus:outline-none focus:border-[#fabc2c]"
              id="email"
              type="email"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="appearance-none block w-full bg-white text-black border border-black rounded py-3 px-4 leading-tight focus:outline-none focus:border-[#fabc2c]"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>

          {/* Area of Interest */}
          <div className="mb-6">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="area-of-interest"
            >
              Area that interests you
            </label>
            <input
              className="appearance-none block w-full bg-white text-black border border-black rounded py-3 px-4 leading-tight focus:outline-none focus:border-[#fabc2c]"
              id="area-of-interest"
              type="text"
              placeholder="Your Area of Interest"
            />
          </div>

          {/* Why do you want to write for us? */}
          <div className="mb-6">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="reason"
            >
              Why do you want to write for us?
            </label>
            <textarea
              className="appearance-none block w-full bg-white text-black border border-black rounded py-3 px-4 leading-tight focus:outline-none focus:border-[#fabc2c]"
              id="reason"
              rows="4"
              placeholder="Explain your reason"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              className="bg-[#fabc2c] hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
