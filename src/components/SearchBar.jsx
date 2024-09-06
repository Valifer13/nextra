import SelectMenu from "./SelectMenu";
import database from "../assets/database.json";
import searchIcon from "../assets/icons/search.svg";
import { useState } from "react";

const SearchBar = () => {
  const destinationItems = database.destination;
  const categoryItems = database.category;
  const [destinationSelected, setDestinationSelected] = useState(
    destinationItems[0]
  );
  const [categorySelected, setCategorySelected] = useState(categoryItems[0]);
  // console.log({ database: database });
  return (
    // ? Strange problem
    // ? When you try the responsive feature on this page, you will see the different on the mobile responsive on laptop and mobile responsive on phone.
    // ? I don't know if this because each browser rendering css in the different way or what. Maybe this what their call by unexpected behavior.
    // TODO: In this case, I fix the mobile responsive on phone instead
    <div className="w-full flex justify-center absolute bottom-[-14rem] md:bottom-[-3.5rem] z-[2]">
      <div className="w-[90%] md:w-auto p-5 justify-center items-center md:items-end flex rounded-md border border-1 bg-white shadow-lg">
        <div className="w-fit justify-center items-center md:items-end flex flex-col md:flex-row gap-10">
          <SelectMenu
            items={destinationItems}
            title={"Destination"}
            selected={destinationSelected}
            setSelected={setDestinationSelected}
          />
          <SelectMenu
            items={categoryItems}
            title={"Category"}
            selected={categorySelected}
            setSelected={setCategorySelected}
          />
          <div
            className="bg-[#1a1a1d] py-1 px-3 flex w-full md:w-fit h-max gap-3 rounded-md cursor-pointer hover:bg-[#575561] transition-colors duration-200 ease-in-out"
            onClick={() => {
              console.log("Destination Selected: " + destinationSelected.name);
              console.log("Category Selected: " + categorySelected.name);
              window.location.href = `search?dest=${destinationSelected.name}&cate=${categorySelected.name}`;
            }}
          >
            <img src={searchIcon} alt="Search Icon" width={20} height={20} />
            <h1 className="text-white text-1xl content-center">Search</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
