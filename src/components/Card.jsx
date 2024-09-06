const Card = ({ items }) => {
  const image = items.images;
  return (
    <div className="h-96 w-full rounded-lg overflow-hidden flex-col flex justify-center place-items-end relative cursor-pointer">
      <img
        src={image}
        alt={items.name}
        className="object-cover object-center w-full h-full rounded-t-lg"
      />
      <h1 className="text-3xl text-white font-bold bg-[rgba(0,0,0,.5)]  w-full text-center py-5 transition-transform duration-200 ease-in-out rounded-b-lg">
        {items.name}
      </h1>
    </div>
  );
};

export default Card;
