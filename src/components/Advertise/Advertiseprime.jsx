
import React from "react";
import bg1 from "../../assets/CareerPagebg.png";
import bg2 from "../../assets/jdImg2.png";
import bg3 from "../../assets/jdImg1.png";

const Advertiseprime = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#5E65DC] pt-[100px]">
      {/* Background Images */}
      <img
        src={bg1}
        alt="Top Right Background"
        className="absolute top-0 right-0 w-40 md:w-60 lg:w-72 opacity-50 mr-[320px]"
      />
      <img
        src={bg1}
        alt="Bottom Left Background"
        className="absolute bottom-0 left-0 w-40 md:w-60 lg:w-72 opacity-50 ml-[320px]"
      />
      <img
        src={bg3}
        alt="Top Left Background"
        className="absolute top-0 left-0 w-40 md:w-60 lg:w-72 opacity-50 ml-[320px]"
      />
      <img
        src={bg2}
        alt="Bottom Right Background"
        className="absolute bottom-0 right-0 w-40 md:w-60 lg:w-72 opacity-50 mr-[320px]"
      />

      {/* Form Section */}
      <div>
        <h1 className="relative text-3xl font-bold text-center mb-4 text-white">
          Interested in advertising <br />
          <strong>with The Crypto Venture?</strong>
        </h1>

        {/* Form Container */}
        <div className="bg-black bg-opacity-10 p-12 rounded-lg max-w-2xl w-full text-white relative z-10">
          <form className="space-y-6">
            <div className="flex gap-6">
              <div className="w-1/2">
                <label className="block text-sm mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg outline-none"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Smith Forza"
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-2">Work Email</label>
              <input
                type="email"
                placeholder="example@company.com"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Management Level</label>
              <select
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg outline-none"
              >
                <option value="VP-level">VP-level</option>
                <option value="Manager">Manager</option>
                <option value="Director">Director</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-2">Country</label>
              <input
                type="text"
                placeholder="Country"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Company Name</label>
              <input
                type="text"
                placeholder="Your company name"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">How did you hear about us?</label>
              <input
                type="text"
                placeholder="Google drive link."
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Wanna leave us a message?</label>
              <textarea
                placeholder="Your message here..."
                rows="6"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Advertiseprime;
