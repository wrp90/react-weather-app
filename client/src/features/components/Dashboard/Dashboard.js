import { useDispatch } from "react-redux";
import { addCity, addSearchedCity } from "../../../app/searchSlice";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Forecast from "../Forecast/Forecast";
import Navbar from "../Navbar/Navbar";
import './Dashboard.css';

const Home = () => {
    const [searchError, setSearchError] = useState('');

    const dispatch = useDispatch();
    
    const searchCity = async (city) => {
        const apiKey = "2f415681a836c432c94396aad5207867";
        const userResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`
        );
        const response = await userResponse.json();
        if (response.cod === '404') {
            setSearchError(response.cod);
        } else {
            if (searchError) {
                setSearchError('')
            }
            dispatch(addCity(response));
            dispatch(addSearchedCity(response));
        }
    };

    return (
        <div className="home-container">
            <Navbar />
            <SearchBar onHandleSubmit={searchCity}/>
            <Forecast searchError={searchError}/>
        </div>
    );
};

export default Home;