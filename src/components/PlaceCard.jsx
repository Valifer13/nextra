const PlaceCard = ({ item }) => {
  return (
    <div
      className={`w-full bg-white border border-gray-200 pb-5 md:hover:-translate-y-1 md:hover:shadow-lg shadow-lg md:shadow-none transition-all duration-300 ease-in-out`}
    >
      <img
        className="w-full h-52 md:h-60 bg-cover mb-5"
        src={item.place_image}
        alt={item.place_name}
      />
      <div className="px-5 grid gap-5">
        <h1 className="text-2xl font-bold">{item.place_name}</h1>
        <p>{item.place_description}</p>
      </div>
    </div>
  );
};

export default PlaceCard;
