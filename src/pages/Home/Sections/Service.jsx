import journeyImage from "../../../assets/images/journey.jpg";
import labelImportant from "../../../assets/icons/label_important.svg";
import patientList from "../../../assets/icons/patient_list.svg";

const services = [
  {
    name: "Easy Booking",
    icon: labelImportant,
    description: "Easy and simple booking with just a few click.",
  },
  {
    name: "Personalized Plans",
    icon: patientList,
    description:
      "create a travel plan with your travel preferences and interests.",
  },
];

const Service = () => {
  return (
    <section
      className="h-full mx-auto max-w-7xl px-5 md:px-8 py-20 bg-white grid lg:grid-cols-2 gap-5"
      id="service"
    >
      <img
        className="w-full h=[550px] bg-cover md:mb-0 mb-5"
        src={journeyImage}
        alt="Journey"
      />
      <div className="grid md:gap-2 gap-6">
        <h1 className="text-3xl md:text-5xl font-bold">
          Discover the Bali island with Ease
        </h1>
        <p>
          Experience hassle-free travel planning with our personalized
          itineraries and round-the-clock customer support.
        </p>
        <div className="grid grid-flow-row md:grid-flow-col gap-5">
          {services.map((item) => {
            return (
              <div key={item.name}>
                <img
                  className="h-10 w-10"
                  src={item.icon}
                  alt="Ease Booking Icon"
                />
                <h2 className="text-2xl font-semibold mb-5">{item.name}</h2>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
        <div className="flex gap-4">
          <button className="bg-white text-black border border-black px-3 lg:py-1 py-2 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300">
            <span className="text-[24]">Learn More</span>
          </button>
          <button className="flex cursor-pointer justify-center items-center gap-2 hover:gap-10 transition-all ease-in-out duration-300">
              <span>Sign Up</span>
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
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
        </div>
      </div>
    </section>
  );
};

export default Service;
