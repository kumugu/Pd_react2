import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen bg-[#1e1e1e] text-[#d4d4d4] flex flex-col items-center justify-center p-6"
    >
      <div className="text-center">
        {/* 제목 */}
        <h2 className="text-4xl font-mono text-[#569CD6] mb-4">
          // Let's Connect
        </h2>
        {/* 설명 */}
        <p className="text-lg text-[#6A9955] mb-6">
          {/* 주석 스타일로 설명 추가 */}
          {/* Feel free to reach out for collaborations or a friendly hello! */}
          Reach out for collaboration or just to say hello!
        </p>
        {/* 폼 */}
        <form className="flex flex-col items-center space-y-4 max-w-md w-full">
          {/* 이름 입력 */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-[#4c4c4c] bg-[#2e2e2e] rounded focus:outline-none focus:ring-2 focus:ring-[#569CD6]"
          />
          {/* 이메일 입력 */}
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-[#4c4c4c] bg-[#2e2e2e] rounded focus:outline-none focus:ring-2 focus:ring-[#569CD6]"
          />
          {/* 메시지 입력 */}
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border border-[#4c4c4c] bg-[#2e2e2e] rounded h-32 focus:outline-none focus:ring-2 focus:ring-[#569CD6]"
          ></textarea>
          {/* 버튼 */}
          <button
            type="submit"
            className="bg-[#569CD6] text-[#1e1e1e] p-3 rounded hover:bg-[#4178a9] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
