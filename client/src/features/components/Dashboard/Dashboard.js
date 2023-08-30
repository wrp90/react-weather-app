import { useDispatch } from "react-redux";
import { addCity, addSearchedCity } from "../../../app/searchSlice";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Forecast from "../Forecast/Forecast";
import Navbar from "../Navbar/Navbar";
import './Dashboard.css';

const Dashboard = () => {
    const [searchError, setSearchError] = useState('');

    const dispatch = useDispatch();
    
    const searchCity = async (city) => {
        const apiKey = process.env.REACT_APP_FINNHUB_API_KEY
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
        <div className="home-container .font">
            <Navbar />
            <SearchBar onHandleSubmit={searchCity}/>
            <Forecast searchError={searchError}/>
        </div>
    );
};

export default Dashboard;