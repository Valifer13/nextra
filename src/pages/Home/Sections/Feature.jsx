import checkBook from "../../../assets/icons/checkbook.svg";
import book from "../../../assets/icons/book.svg";
import editSquare from "../../../assets/icons/edit_square.svg";

const Features = [
  {
    name: "Book",
    title: "Book with ease and enjoy the travel",
    icon: checkBook,
    description:
      "Our easy-to-use booking platform makes it easy to find and book the best flights, hotels and activities for your trip.",
  },
  {
    name: "Learn More",
    title: "Expert Guides to Enhance Your Travel Experience",
    icon: book,
    description:
      "Our knowledgeable travel guides provide valuable insights and recommendations to help you make the most of your journey.",
  },
  {
    name: "Plan",
    title: "Book with ease and enjoy the travel",
    icon: editSquare,
    description:
      "Let us create a personalized itinerary based on your interests, ensuring that every moment of your trip is tailored to your needs.",
  },
];

const Feature = () => {
  return (
    <section
      className="h-full max-w-7xl mx-auto px-5 md:px-8 py-20 bg-[#FAFAFC] grid grid-flow-row md:grid-cols-2 gap-5"
      id="feature"
    >
      <div className="w-full flex flex-col gap-4">
        <h1 className="text-4xl font-bold">
          Discover Amazing Destination and Plan Your Dream Vacation
        </h1>
        <p className="text-gray-600">
          Our travel company provides the best service to make your travel
          experience unforgettable in Bali. From easy booking to travel guides
          and customized itineraries, we have everything you need to create a
          fun travel plan.
        </p>
      </div>
      {Features.map((item) => {
        return (
          <div
            key={item.name}
            className="bg-white rounded-lg p-6 w-full grid gap-4 md:hover:-translate-y-1 md:hover:shadow-lg shadow-lg md:shadow-sm transition-all duration-300 ease-in-out"
          >
            <div className="flex gap-3">
              <img
                className="text-black h-10 w-10"
                src={item.icon}
                alt={item.name}
              />
              <h2 className="text-1xl md:text-2xl font-bold">{item.title}</h2>
            </div>
            <p>{item.description}</p>
            <div className="group/arrow flex cursor-pointer gap-0 hover:gap-10 transition-all ease-in-out duration-300">
              <span>{item.name}</span>
              <div className="relative flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 group-hover/arrow:animate-ping absolute"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 relative"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Feature;
