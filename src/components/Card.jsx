const Card = ({ items }) => {
  const image = items.images;
  return (
    <div
      className="h-80 w-xfull rounded-lg bg-center bg-cover bg-no-repeat"
      style={{
        background: `url(${image})`,
      }}
    >
      <h1>{items.name}</h1>
    </div>
  );
};

export default Card;
