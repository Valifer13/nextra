import goaGajahImage from "../../../assets/images/ubud/Goa Gajah.jpg";
import pantaiKuta from "../../../assets/images/kuta/pantai_kuta.jpg";
import pantaiSeminyak from "../../../assets/images/seminyak/pantai_seminyak.jpg";
import CardInfo from "../../../components/CardInfo";

const areas = [
  {
    name: "Ubud",
    image: goaGajahImage,
    description:
      "Ubud is the center of arts and culture in Bali with many art galleries, museums and traditional dance performances there.",
  },
  {
    name: "Kuta",
    image: pantaiKuta,
    description:
      "Kuta is known for its busy beaches and lively nightlife. It is the modern tourism hub of Bali, with many nightclubs, bars and shopping malls. Kuta is also a prime surfing destination.",
  },
  {
    name: "Seminyak",
    image: pantaiSeminyak,
    description:
      "Seminyak is known as a more exclusive city with many hills, luxurious restaurants, and elite beach clubs. Which is often visited by tourists to get a more luxurious and modern experience.",
  },
];

const Overview = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 h-full grid gap-5 bg-[#FAFAFC]">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="flex justify-center lg:w-2/4 text-black sm:justify-start text-4xl font-medium font-cinzel text-center lg:text-start">
          Unforgettable Travel Experience
        </div>

        <p className="mt-4 max-w-md text-start leading-relaxed text-gray-500 sm:text-start lg:mt-0 text-[16px] font-medium">
          Capture your happiness moments in various areas in Bali and make them
          unforgettable.
        </p>
      </div>
      <div className="grid md:grid-flow-col gap-5">
        {areas.map((item, index) => {
          //! Check the last child
          const isLastItem = index === areas.length - 1;
          const AdditionalClasses = isLastItem
            ? "md:last:col-[1_/_span_2] md:last:row-start-2 md:w-2/4 md:justify-self-center lg:last:col-span-1 lg:last:row-start-1 lg:w-full"
            : null;
          return (
            <CardInfo key={index} item={item} className={AdditionalClasses} />
          );
        })}
      </div>
      <div className="flex gap-4">
        <button className="bg-white text-black border border-black px-3 lg:py-1 py-2 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300">
          <span className="text-[24]">See More</span>
        </button>
        <button className="group flex cursor-pointer justify-center items-center gap-2 hover:gap-10 transition-all ease-in-out duration-300">
          <span>Sign Up</span>
          <div className="relative flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 group-hover:animate-ping absolute"
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
        </button>
      </div>
    </section>
  );
};

export default Overview;
