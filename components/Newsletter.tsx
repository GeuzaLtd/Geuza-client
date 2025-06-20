"use client";

export default function Newsletter() {
  return (
    <section className="w-full flex items-center justify-center p-20">
      <div className="w-full flex flex-col items-center text-center space-y-6 px-4 py-20 bg-[#009900] rounded-[10px]">
        {/* Big white bold text */}
        <h2 className="text-3xl md:text-6xl font-bold text-white">
          Subscribe to Our Newsletter
        </h2>
        {/* Small light paragraph */}
        <p className="text-white text-base font-light max-w-xl mb-10">
          Stay informed on new products, impact stories, and sustainability
          news. Join our mailing list for exclusive updates and early product
          launches.
        </p>
        {/* Input + Button */}
        <form className="w-full flex items-center justify-center">
          <div className="flex w-full max-w-md bg-white rounded-full overflow-hidden shadow-sm p-2">
            <input
              type="email"
              placeholder="Enter your work email"
              className="flex-1 px-6 py-3 text-sm bg-transparent outline-none border-none placeholder:text-[#bababa]"
            />
            <button
              type="submit"
              className="bg-[#FF7900] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#e66a00] transition-colors text-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
