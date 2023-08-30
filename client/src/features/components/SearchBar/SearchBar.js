import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onHandleSubmit }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onHandleSubmit(city);
    setCity("");
  };

  return (
    <div className="search font">
      <form onSubmit={(event) => handleSubmit(event)}>
        <label className="font">
          Search City:
          <input
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </label>
        <input className="font" type="submit" value="Search" />
      </form>
    </div>
  );
};

export default SearchBar;