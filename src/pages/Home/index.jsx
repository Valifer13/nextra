import heroImage from "../../assets/images/hero.jpg";

function Home() {
  return (
    <section className="sm:bg-none bg-no-repeat bg-cover bg-center bg-hero-pattern mx-auto max-w-7xl h-screen md:px-8 grid place-content-center px-5 before:content-[''] sm:before:hidden before:absolute before:top-0 before:left-0 before:w-full before:h-screen before:bg-black before:opacity-30 before:z-[1]">
      <div className="container grid lg:grid-flow-col items-center relative z-[2] text-white w-full">
        <div className="container w-full">
          <h1 className="md:text-7xl text-5xl font-semibold font-poppins sm:text-start text-center mb-3 md:mb-2 text-white sm:text-black">
            Welcome to Bali
          </h1>
          <p className="font-medium text-gray-100 sm:text-gray-600 mb-10 md:mb-8 text-center md:text-start md:text-2xl">
            Explore the island of Bali and discover the beauty of the island
            dubbed "The Island of Gods" by the world.
          </p>
          <div className="flex gap-5 justify-center md:justify-start">
            <button className="flex gap-2 bg-black text-white px-3 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>

              <span className="text-[24]">Read More</span>
            </button>
            <button className="flex gap-2 text-black bg-white border border-black px-3 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>

              <span className="text-[24]">Sign Up</span>
            </button>
          </div>
        </div>
        <div className="container w-2/4 md:block hidden md:row-start-1">
          <svg
            className="lg:w-[35rem] lg:h-[35rem] h-[48rem] w-[48rem]"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#192452"
              d="M68.3,-26C75.1,-1.2,58,27.6,36.9,40.6C15.7,53.5,-9.5,50.7,-29.6,37C-49.7,23.3,-64.6,-1.3,-58.8,-24.7C-53,-48,-26.5,-70.2,2.1,-70.9C30.7,-71.6,61.5,-50.8,68.3,-26Z"
              transform="translate(100 100)"
            />

            <image
              href={heroImage}
              x="15"
              y="0"
              width="180"
              height="180"
              clip-path="url(#clip)"
            />

            <defs>
              <clipPath id="clip">
                <path
                  d="M68.3,-26C75.1,-1.2,58,27.6,36.9,40.6C15.7,53.5,-9.5,50.7,-29.6,37C-49.7,23.3,-64.6,-1.3,-58.8,-24.7C-53,-48,-26.5,-70.2,2.1,-70.9C30.7,-71.6,61.5,-50.8,68.3,-26Z"
                  transform="translate(100 100)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Home;
