const CardInfo = ({ item, className }) => {
  return (
    <div
      key={item.name}
      className={`w-full border border-gray-200 pb-5 shadow-lg ${className}`}
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
