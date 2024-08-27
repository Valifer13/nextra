const Stats = () => {
  return (
    <section className="grid place-content-center md:place-content-start relative max-w-7xl mx-auto px-5 md:px-8 py-20 h-screen md:h-[50vh] bg-stat-pattern bg-no-repeat bg-fixed bg-cover md:bg-bottom bg-right-bottom before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-30 before:z-[1]">
      <div className="text-white font-poppins relative z-[2] grid gap-5">
        <h1 className="text-3xl md:text-4xl font-bold md:text-start text-center">
          Connected with Us!
        </h1>
        <p>
          Sign up for our newsletter to receive exclusive travel offers and
          personalized itineraris.
        </p>
        <div className="flex gap-5 justify-center md:justify-start">
          <button className="flex gap-2 bg-black text-white px-3 py-2 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300">
            <span className="text-[24]">Read More</span>
          </button>
          <button className="flex gap-2 text-white bg-none border border-white px-3 py-2 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300">
            <span className="text-[24]">Sign Up</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stats;
