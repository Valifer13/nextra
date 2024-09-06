const Header = ({ name, image }) => {
  return (
    <section
      className="h-[70vh] w-full grid place-items-center z-[2]"
      id="detail-header"
    >
      <img
        src={image}
        alt={name}
        className="object-cover object-center w-full h-full"
      />
      <h1 className="absolute text-white text-5xl font-bold text-center z-[5]">
        Explore {name}
      </h1>
    </section>
  );
};

export default Header;
