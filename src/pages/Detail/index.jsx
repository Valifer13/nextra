import { database } from "../../mock";
import Header from "../../components/Header";
import PlaceCard from "../../components/PlaceCard";

const params = new URLSearchParams(window.location.search);
const name = params.get("name");
const id = params.get("id");

const Search = () => {
  const dataPlaces = database.places.filter(
    (places) => places.destination === name
  );
  const image = database.destination[Number(id)].images;
  const description = database.destination[Number(id)].description;
  return (
    <section className="h-full w-full before:w-full before:h-[70vh] before:content-[''] before:absolute before:bg-black before:opacity-30 before:top-0 before:left-0 before:z-[1]">
      <Header name={name} image={image} />
      <div className="container z-[2] max-w-8xl grid place-items-center mx-auto bg-slate-200">
        <div className="grid grid-flow-col justify-center">
          <div
            className="text-start bg-slate-200 p-10 text-lg grid gap-5 h-full md:border-r md:border-r-sky-200"
            id="description"
          >
            <h1 className="text-center font-bold text-2xl">Description</h1>
            <p>{description}</p>
            <h1 className="text-center font-bold text-2xl">
              Popular Places in {name}
            </h1>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3"
              id="destination-places"
            >
              {dataPlaces.map((data) => {
                return <PlaceCard item={data} />;
              })}
            </div>
          </div>
          <div className="px-5 py-10 md:block hidden sticky top-14 bg-slate-400 h-fit">
            <div className="grid gap-5">
              <h4 className="text-center text-2xl font-bold px-10">
                Another Content
              </h4>
              <ul className="px-5 list-decimal gap-3 grid">
                <li className="text-start underline ">
                  <a href="/detail?name=Ubud&id=0">Ubud</a>
                </li>
                <li className="text-start underline ">
                  <a href="/detail?name=Kuta&id=1">Kuta</a>
                </li>
                <li className="text-start underline ">
                  <a href="/detail?name=Seminyak&id=2">Seminyak</a>
                </li>
                <li className="text-start underline ">
                  <a href="/detail?name=Nusa Dua&id=3">Nusa Dua</a>
                </li>
                <li className="text-start underline ">
                  <a href="/detail?name=Jimbaran&id=4">Jimbaran</a>
                </li>
                <li className="text-start underline ">
                  <a href="/detail?name=Uluwatu&id=5">Uluwatu</a>
                </li>
                <li className="text-start underline ">
                  <a href="/detail?name=Canggu&id=6">Canggu</a>
                </li>
                <li className="text-start underline ">
                  <a href="/detail?name=Sanur&id=7">Sanur</a>
                </li>
                <li className="text-start underline ">
                  <a href="/detail?name=Lovina&id=8">Lovina</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
