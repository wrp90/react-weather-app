import { useState } from "react";

const SearchBar = ({ onHandleSubmit }) => {
    const [city, setCity] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        onHandleSubmit(city);
        setCity('');
    };

    return (
        <div className="search">
            <form onSubmit={(event) => handleSubmit(event)}>
                <label>
                    Search City:
                    <input type="text" value={city} onChange={(event) => setCity(event.target.value)} />
                </label>
                <input type="submit" value="Search"></input>
            </form>
        </div>
    );
};

export default SearchBar;