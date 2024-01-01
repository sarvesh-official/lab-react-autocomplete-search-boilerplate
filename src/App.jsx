import { useState } from "react";
import Countries from "./components/Countries";
import Data from "../resources/countryData.json";
export default function App() {
  const [search, setSearch] = useState("");
  const testArr = Data.filter((e) => {
    return e.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div
      id="app"
      className="w-screen flex justify-center items-center flex-col"
    >
      <h1 className="my-6 text-4xl font-bold">Search Bar</h1>
      <div className="w-auto space-x-3 flex justify-center items-center">
        <input
          placeholder="Enter any Country!"
          type="text"
          name="search"
          className="search-box h-11 w-52 rounded-sm"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.code == "Escape") {
              setSearch("");
            }
          }}
        />
        <button className="bg-green-200 p-2 rounded-md text-xl">Search</button>
      </div>
      <div className="data">
        {search.length == 0
          ? ""
          : testArr.map((e) => {
              return <Countries name={e.name} key={e.code} />;
            })}
      </div>
    </div>
  );
}
