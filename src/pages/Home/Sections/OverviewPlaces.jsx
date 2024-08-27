import gwkStatue from "../../../assets/images/GWK.jpg";
import diamondbeach from "../../../assets/images/Pantai Diamond.jpg";
import puraTanahLot from "../../../assets/images/Pura Tanah Lot.jpg";
import CardInfo from "../../../components/CardInfo";

const places = [
  {
    name: "Garuda Wisnu Kencana",
    image: gwkStatue,
    description: "Cultural park with a giant statue of Lord Vishnu.",
  },
  {
    name: "Diamond Beach",
    image: diamondbeach,
    description:
      "Known for its clean white sand, clear turquoise sea water, and towering coral rock formations that look like diamonds.",
  },
  {
    name: "Tanah Lot Temple",
    image: puraTanahLot,
    description: "Temple on a rock that is an icon of Bali.",
  },
];

const OverviewPlaces = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 h-full grid py-20 gap-5">
      <h1 className="text-4xl font-medium font-cinzel text-center">
        The Most Beautiful Places
      </h1>
      <p className="text-1xl font-poppins text-start md:text-center">
        We will help you by providing various information that we have provided.
        namely, about the most beautiful places that you might want to visit in
        Bali.
      </p>
      <div className="grid lg:grid-flow-col lg:grid-cols-3 md:grid-cols-2 gap-5">
        {places.map((item, index) => {
          //! Check the last child
          const isLastItem = index === places.length - 1;
          const AdditionalClasses = isLastItem
            ? "md:last:col-[1_/_span_2] md:last:row-start-2 md:w-2/4 md:justify-self-center lg:last:col-span-1 lg:last:row-start-1 lg:w-full"
            : null;
          return <CardInfo item={item} className={AdditionalClasses} />;
        })}
      </div>
    </section>
  );
};

export default OverviewPlaces;
