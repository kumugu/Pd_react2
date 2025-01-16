import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen bg-blue-200 flex flex-col items-center justify-center p-6"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg mb-6">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>
        <form className="flex flex-col items-center space-y-4 max-w-md w-full">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
