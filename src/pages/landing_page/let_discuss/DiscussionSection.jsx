import React from "react";

const DiscussionSection = () => {
  return (
    <section className="bg-[#3B9A70] text-black py-8 w-full h-full lg:h-[50vh] px-4 lg:px-12">
      <div className="w-full lg:w-[70%] py-6 px-10 flex flex-col items-center justify-center container mx-auto md:px-12 rounded-2xl shadow shadow-white">
        <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
          Let's Discuss Your Project
        </h2>
        <p className="text-center mb-8 lg:text-left">
          Ready to take your business to new heights with QueueNex Tech? Contact
          us today for a free consultation.
        </p>
        <form className="flex flex-col md:flex-row bg-white text-black">
          <input
            type="email"
            className="w-full px-4 py-2 mb-4 md:mb-0 md:mr-4 bg-transparent focus:outline-none"
            placeholder="Your Email"
          />
          <button
            type="submit"
            className="bg-[#ff9844] hover:bg-[#ff9844] text-black font-bold py-2 px-4"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default DiscussionSection;
