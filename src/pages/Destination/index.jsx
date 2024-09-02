import HeroDestination from "./Sections/HeroDestination";
import Introduction from "./Sections/Introduction";
import SearchBar from "../../components/SearchBar";
import PopularDestination from "./Sections/PopularDestination";

function Destination() {
  return (
    <div className="font-poppins">
      <HeroDestination />
      <SearchBar />
      <Introduction />
      <PopularDestination />
    </div>
  );
}

export default Destination;
