import { database } from "../../../mock";
import SlideCard from "../../../components/SlideCard";

const PopularDestination = () => {
  const datas = database.destination;
  return (
    <section className="max-w-7xl h-screen mx-auto px-3 lg:px-0">
      <div className="container">
        <div className="grid gap-2">
          <h1 className="text-4xl font-bold font-cinzel">
            Popular Destinations
          </h1>
          <p className="text-gray-600">Most visited destinations in Bali</p>
        </div>
        <div className="flex gap-3 mt-10">
          <SlideCard items={datas} />
        </div>
      </div>
    </section>
  );
};

export default PopularDestination;
