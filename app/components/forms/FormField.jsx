"use client";
export default function FormField() {
  return (
    <>
      <form className="mt-12 space-y-10 max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <input
            type="text"
            placeholder="Your name"
            className="bg-transparent border-b border-gray-600 focus:border-white outline-none py-2"
          />
          <input
            type="email"
            placeholder="Your email"
            className="bg-transparent border-b border-gray-600 focus:border-white outline-none py-2"
          />
        </div>

        <textarea
          rows="3"
          placeholder="Your message"
          className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 resize-none"
        />

        <button
          type="submit"
          className="mt-6 px-8 py-3 rounded-full border border-gray-500 hover:border-white transition"
        >
          Send Message
        </button>
      </form>
    </>
  );
}
