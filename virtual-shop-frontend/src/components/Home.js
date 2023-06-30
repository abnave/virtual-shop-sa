import React from "react";
import ItemCard from "./ItemCard";
import { useState, useEffect } from "react";
import { getAllItems, filterData } from "../utils/helper";


const Home = () => {
  const [allItemsList, setallItemsList] = useState([]);
  const [filteredItemsList, setfilteredItemsList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    getAllItems(setallItemsList, setfilteredItemsList);
  }, []);

  return (
    <div>
      <div className="p-5 my-2 bg-orange-200">
        <input
          className="p-2 m-2"
          type="text"
          placeholder="Search restaurant"
          onChange={(event) => {
            const inputValue = event.target.value;
            setSearchInput(inputValue);
          }}
        />
        <button
          className="p-2 m-2 bg-gray-500 text-white rounded-lg"
          onClick={() => {
            const filteredItems = filterData(
              "search",
              searchInput,
              allItemsList
            );
            setfilteredItemsList(filteredItems);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredItemsList.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
