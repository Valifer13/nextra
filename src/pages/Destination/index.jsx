import HeroDestination from "./Sections/HeroDestination";
import Introduction from "./Sections/Introduction";
import SearchBar from "../../components/SearchBar";
import PopularDestination from "./Sections/PopularDestination";
import Stats from "../Home/Sections/Stats";

function Destination() {
  return (
    <div className="font-poppins">
      <HeroDestination />
      <SearchBar />
      <Introduction />
      <PopularDestination />
      <Stats />
    </div>
  );
}

export default Destination;
