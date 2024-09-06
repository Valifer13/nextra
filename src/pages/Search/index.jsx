import { database } from "../../mock";
import PlaceCard from "../../components/PlaceCard";

const params = new URLSearchParams(window.location.search);
const destination = params.get("dest");
const category = params.get("cate");

const Search = () => {
  // Validation destination
  if (destination === "All") {
    var resultDestination = database.places;
  } else {
    var resultDestination = database.places.filter(
      (place) => place.destination === destination
    );
  }

  // Validation Category
  if (category === "All") {
    var resultCategory = resultDestination;
  } else {
    var resultCategory = resultDestination.filter((place) =>
      place.place_type.includes(category)
    );
  }
  console.log({
    destination: resultDestination,
    category: resultCategory,
  });
  return (
    <section className="h-full max-w-7xl mx-auto grid place-items-center pt-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">
          {resultCategory.length > 0
            ? `Search about ${
                destination === "All" && category === "All"
                  ? "All"
                  : `${destination}, ${category}`
              }`
            : "Sorry, There is no content yet."}
        </h1>
      </div>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resultCategory.map((items) => {
          return <PlaceCard item={items} />;
        })}
      </div>
    </section>
  );
};

export default Search;
