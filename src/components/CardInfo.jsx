const CardInfo = ({ item, className }) => {
  return (
    <div
      className={`w-full border border-gray-200 pb-5 md:hover:-translate-y-1 md:hover:shadow-lg shadow-lg md:shadow-none transition-all duration-300 ease-in-out ${className}`}
    >
      <img
        className="w-full h-52 md:h-60 bg-cover mb-5"
        src={item.image}
        alt={item.name}
      />
      <div className="px-5 grid gap-5">
        <h1 className="text-2xl font-bold">{item.name}</h1>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default CardInfo;
